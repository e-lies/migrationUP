import React, { useState, useContext, useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Tooltip, Badge, Icon, IconButton, Button, Snackbar, FormControlLabel, Switch, Input, InputLabel, FormHelperText, FormControl } from '@material-ui/core';
import Alerts from '../components/Alerts';
import { CrudContext } from '../context/ServerContext';
import { ContextForms } from '../context/Forms'
import LoadedComponent from '../components/LoadedComponent';
import Lists from '../components/Lists';

var idComp;
export default function Reports(){
    const server = useContext(CrudContext)
    const forms = useContext(ContextForms)
    const theme = useTheme()
    const [reports,setReports]  = useState([])
    const [openSnackCopy,setOpenSnackCopy] = useState(false)
    const [copyParams,setCopyParams] = useState({open:false,reports:[],title:""})
    const [filter,setFilter] = useState({})

    useEffect(()=>{
        idComp = server.componentCreation("Reports")
        server.getSchema("select","reportCategory")
        server.getSchema("select","Reports")
        server.read(
            [{
                rule:'reportCategory',
                children: [{
                    key:'reports',
                    parentCol:'id',
                    childCol:'idCategory',
                    rule:'Reports'
                }]
            }],
            idComp,
            true,
            (data)=>setReports(data)
        )
    },[])
    const copyURL = () =>{
        const { reports, title } = copyParams
        //const title = window.prompt("Comment souhaitez-vous nommer ce(s) rapport(s) public(s) ? \n Laisser vide si vous ne voulez pas de titre")
        let hash = reports.map(report=>report.hash).join('_');
        navigator.clipboard.writeText(`${window.location.origin}/siraj_public/#/reports/${title.length ? title : " "}/${hash}`)
        setOpenSnackCopy(true)
        setCopyParams({...copyParams,open:false,title:''})
    }
    const deleteReport = arr=>{
        let conf = window.confirm("Souhaitez-vous vraiment supprimer ce(s) rapport(s) ?")
        if(conf){
            server.write(
                [{rule:'Report',type:'delete',where:[{label:'id',operator:'in',value:arr.map(a=>a.id)}]}],
                (rep,st)=>{
                    if(st < 400){
                        alert(`${arr.length} élements supprimés `);
                        window.location.reload();
                    }
                    else { alert("Une erreur s'est produite au moment de la suppression") }
                }
            )
        }
    }

    const deleteCategory = (id,name)=>{
        let conf = window.confirm(`Souhaitez-vous vraiment supprimer la catégorie ${name} ? \n Tous les rapports liés seront supprimés !`)
        if(conf){
            server.write(
                [{rule:'reportCategory',type:'delete',where:[{label:'id',operator:'=',value:id}]}],
                (rep,st)=>{
                    if(st < 400){
                        alert(`Catégorie ${name} bien supprimée `);
                        window.location.reload();
                    }
                    else { alert("Une erreur s'est produite au moment de la suppression") }
                }
            )
        }
    }

    const handlePublic = (event,id) =>{
        let checked = event.target.checked
        server.write(
            [{type:'update',rule:'publicReport',data:{public:checked ? 1 : 0},where:[{label:'id',operator:'=',value:id}]}],
            (rep,st)=>{
                if(st<400){
                    alert(`Autorisation ${checked ? 'activée' : 'désactivée'}`)
                    //window.location.reload()
                    server.read(
                        [{
                            rule:'reportCategory',
                            children: [{
                                key:'reports',
                                parentCol:'id',
                                childCol:'idCategory',
                                rule:'Reports'
                            }]
                        }],
                        idComp,
                        true,
                        (data)=>setReports(data)
                    )
                }
            },
            idComp
        )
    }

    const cloneReport = (report)=>{
        console.log("report = ",report)
        forms.addForm('insert','Reports',{
            defaultData:[{...report,paramState:JSON.stringify({...report.params,filters:filter})}],
            hidden:['component','rule','params','paramState','props'],
            callback: (rep,st)=>{
				if(st < 400){
					alert("Clonage du rapport réussi")
                    server.read(
                        [{
                            rule:'reportCategory',
                            children: [{
                                key:'reports',
                                parentCol:'id',
                                childCol:'idCategory',
                                rule:'Reports'
                            }]
                        }],
                        idComp,
                        true,
                        (data)=>setReports(data)
                    )
					forms.removeForm("insert","Reports")
				}
				else{ alert("Une erreur s'est produite lors de la création du rapport !") }
			}
        })
    }

    return(<>
        <Lists
            id="Reports"
            schema={server.schemas.select['reportCategory'] || null}
            data={reports}
            idKey="id"
            title="Catégories"
            avatar="Icon"
            itemStyle={{backgroundColor:theme.palette.background.default}}
            primary={jsn=>{
                return(<Badge style={{padding:8}} badgeContent={jsn.reports.data.length} color="error"> {jsn['Name']} </Badge>)
            }}
            action={category=>{
                return(
                    <IconButton
                        style={{fontSize:'1.25em',marginLeft:8}}
                        onClick={()=>deleteCategory(category.id,category.Name)}
                    >
                        <Icon color="error" size="medium">delete</Icon>
                    </IconButton>
                )
            }}
            collapse={category=>{
                return(<div style={{margin:12}}>
                    <Lists
                        id={`rep${category.Name}`}
                        schema={server.schemas.select['Reports'] || null}
                        data={category['reports']['data']}
                        idKey="id"
                        //title="Catégories"
                        itemStyle={{backgroundColor:theme.palette.secondary.main,color:theme.palette.secondary.contrastText}}
                        primary="name"
                        secondary={jsn=>JSON.parse(jsn.props)['type']} //{jsn=>jsn['component'].split('/')[jsn['component'].split('/').length-1]}
                        checkedFunctions={[
                            {icon:'delete',color:'error',fct:deleteReport},
                            {icon:'file_copy',color:'primary',fct:(reports)=>setCopyParams({...copyParams,open:true,reports})}
                        ]}
                        action={report=>{
                            return( <div /*style={{float:'right',display:'flex',maxWidth:'50%'}}*/>
                                <FormControlLabel
                                    control={
                                    <Switch
                                        checked={report.public===1}
                                        onChange={e=>handlePublic(e,report.id)}
                                        name="checkedB"
                                        color="primary"
                                    />
                                    }
                                    label="Publique"
                                />
                                <IconButton
                                    style={{fontSize:'1.25em',marginLeft:8}}
                                    onClick={()=>deleteReport([report])}
                                >
                                    <Icon color="error" size="medium">delete</Icon>
                                </IconButton>
                                <Tooltip title="Copier l'url">
                                <IconButton
                                    style={{fontSize:'1.25em',marginLeft:8}}
                                    onClick={()=>{ setCopyParams({...copyParams, open:true, reports:[report]}); }}
                                    disabled={report.public !== 1}
                                >
                                    <Icon color="default" size="medium">file_copy</Icon>
                                </IconButton>
                                </Tooltip>
                                </div>)
                        }}
                        collapse={report=>{
                            let compProps = JSON.parse(report.props)
                            return(<div>
                            <LoadedComponent
                                    id={`report${category.id}${report.id}`}
                                    component={report.component}
                                    rule={report.rule}
                                    params={JSON.parse(report.params)}
                                    extra={
                                        <IconButton
                                            style={{fontSize:'1.25em',marginLeft:8}}
                                            onClick={()=>cloneReport(report) }
                                        >
                                            <Icon color="primary" size="medium">save</Icon>
                                        </IconButton>
                                    }
                                    onFilterUpdate={f=>setFilter(f)}
                                    filterKeys={report.paramState ? JSON.parse(report.paramState)['filters'].map(f=>f.label) : null}
                                    filterProps={{confirmation:true}}
                                    defaultFilter={JSON.parse(report.paramState) && JSON.parse(report.paramState || '{filters:[]}')['filters']}
                                    otherProps={{...compProps,exports:true}}
                                />
                            </div>)
                        }}
                    />
                    <Alerts
                        id="reportitle"
                        type="confirm"
                        width="lg"
                        open={copyParams.open}
                        draggable={true}
                        headerFooterFormat={{
                            title:'Nommer le groupe de rapports',
                            icon:'file_copy',
                            footer:[
                                <Button
                                    size='medium'
                                    style={{backgroundColor:theme.palette.primary.main,color:theme.palette.error.contrastText}}
                                    onClick={()=> copyURL()}
                                >
                                    <Icon>done</Icon> Confirmer
                                </Button>,
                                <Button
                                    size='medium'
                                    style={{backgroundColor:theme.palette.error.main,color:theme.palette.error.contrastText}}
                                    onClick={()=> { setCopyParams({...copyParams,open:false,title:''}) }}
                                >
                                    <Icon>cancel</Icon> Annuler
                                </Button>     
                            ]
                        }}
                        handleClose={()=>setCopyParams({...copyParams,open:false})}
                    >   
                    <FormControl style={{width:300, padding:12, display:'flex'}}>
                        <InputLabel htmlFor="publicTitle">Nom du groupe de rapport(s) public(s)</InputLabel>
                        <Input
                            id="publicTitle" 
                            type="text"
                            fullWidth
                            autoFocus
                            onChange={e=> setCopyParams({...copyParams,title:e.target.value})} 
                            value={copyParams.title}
                        />
                        <FormHelperText id="component-helper-text">Laissez vide si vous ne voulez pas titre</FormHelperText>
                    </FormControl>
                    </Alerts>
                    <Snackbar
                        anchorOrigin={{ vertical:'bottom', horizontal:'center' }}
                        autoHideDuration={4000}
                        open={openSnackCopy}
                        onClose={()=>setOpenSnackCopy(false)}
                        message="URL en copie"
                        key="snackCopy"
                    />
                    {/*<iframe src="http://localhost:8080/siraj_public/#/reports/1c685a880027a60d49b1d7a0394ff89a" frameborder="0"></iframe>*/}
                </div>)
            }}
        />
    </>)
}
