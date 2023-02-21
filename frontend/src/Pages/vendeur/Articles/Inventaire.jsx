import React, { useEffect, useState, useContext } from 'react';
import ClientTab from "../../../components/Tableaux/ClientTab";
import { CrudContext } from "../../../context/ServerContext";
import Passage from '../../../components/Passage';
import Progress from "../../../components/Progress";
import Alerts from '../../../components/Alerts';
import { nestData, sum } from "../../../reducers/Functions";
import { TextField, Typography, Accordion, AccordionDetails, AccordionSummary, Icon, IconButton, Badge } from "@material-ui/core";

var idComp;
export default function Inventaire(){
    const server = useContext(CrudContext)
    const [view,setView] = useState('unique')
    const [articles,setArticles] = useState([])
    const [aes,setAes] = useState([])
    const [passed,setPassed] = useState([])
    const [unexpected,setUnexpeced] = useState([])
    const [showUnexpected,setShowUnexpected] = useState(false)

    useEffect(()=>{
        idComp = server.componentCreation("Inventaire")
        server.getSchema("select","VMArticles",idComp)
        server.getSchema("select","VMAes",idComp)
        server.read([{rule:"VMArticles",params:{cols:[{col:'idArticle'},{col:'Article'},{col:'Categorie'},{col:'Qte'}]}}],idComp,false,dt=>setArticles(dt.map(d=>{ return {...d,passed:0} })))
        server.read(
            [{
                rule:'VMAes',
                params:{cols:[{col:'idArticle'},{col:'CB'},{col:'Rfid'},{col:'Qte'},{col:'Entree'}],where:[{label:'Categorie',operator:'<>',value:'Vrac'}]}
            }],
            idComp,
            false,
            dt=>setAes(dt)
        )
    },[])
    useEffect(()=>{
        let sums = passed.groupSum('idArticle','Qte')
        setArticles(articles.map(art=>{ return {...art,passed:sums[art.idArticle]} }))
    },[passed])
    const scan = rows =>{
        /*let group = [['idArticle','Categorie','Marque','Modele','Couleur']]
        let fct = nestData(...group)*/
        setPassed(rows)
    }
    const ExtensionComp = ()=>{
        return(<IconButton
                onClick={e=>setShowUnexpected(true)}
            > 
            <Badge color="error" showZero badgeContent={unexpected.length}>
                <Icon style={{fontSize:'1.3em'}} color="secondary"> help </Icon>
            </Badge>
        </IconButton>)
    }
    const rowSchema = server.schemas.select['VMArticles'] || {columns:{}} 
    rowSchema.columns = {idArticle:rowSchema.columns['idArticle'],Article:rowSchema.columns['Article'],Categorie:rowSchema.columns['Categorie'],
        passed: {type:'int',label:'Trouvée',icon:'find_in_page',length:1},Qte:rowSchema.columns['Qte']}
    return( <div style={{paddingTop:12,width:'100%'}}>
        <Passage
            id="passageInvent"
            data={aes.filter(a=>a.Categorie!=='Vrac')}
            passed={passed}
            idKey={['CB','Rfid']}
            readers={{barcode:true,ocr:true}}
            onPassed={(rows)=>scan(rows)}
            onUnexpected={(code,sound)=>{ /*sound.play();*/ setUnexpeced(unexpected.concat(code)) }}
            ExtensionComp={ExtensionComp}
        />
        <Accordion key="Uniques">
            <AccordionSummary id="uniquesSummary" expandIcon={<Icon>expand_more</Icon>}>
                <div style={{width:'100%',display:'flex',flexDirection:'column'}}>
                <Typography variant="h5"><Icon>devices</Icon> Articles uniques </Typography>
                <Progress
                    id="uniqueProgress"
                    type="line"
                    value={articles.filter(art=>art.Categorie!=='Vrac').sum('passed')}
                    total={articles.filter(art=>art.Categorie!=='Vrac').sum('Qte')}
                    thickness={10}
                    size={document.body.clientWidth > 600 ? 540 : 300}
                    color="primary"
                    //otherProps={{variant:'buffer',valueBuffer:articles.reduce((a,c)=>a+c['Qte'],0)}}
                />
                </div>
            </AccordionSummary>
            <AccordionDetails style={{display:'flex',flexDirection:'column'}}>
                
                <ClientTab
                    id="inventUnique"
                    title="Articles uniques passés"
                    schema={server.schemas.select['VMArticles']} //{{columns:{idArticle:{type:"int(10)"},Categorie:{type:"varchar"},Marque:{type:"varchar"},Modele:{type:"varchar"},Couleur:{type:"varchar"},children:{type:"varchar"}}}}
                    data={articles.filter(art=>art.Categorie!=='Vrac')}
                    hidden={['Categorie','idArticle','idMagasin','passed']}
                    filterKeys={[]}
                    paddings={6}
                    cellFunctions={
                        {Qte:(qt,row)=>{return(<Progress
                            id={`ratio${row['idArticle']}`}
                            type="circle" 
                            value={row['passed']}  //{passed.reduce((a,c)=>{return a + c['idArticle'] === row['idArticle'] ? c['Qte'] : 0},0)}
                            total={qt}
                            textFct={(value,total)=>`${value}/${total}`}
                        />)}}
                    }
                    collapses={[{
                        title:"Passés",
                        cond: row=>passed.filter(a=>a.idArticle===row.idArticle).length > 0,
                        fct:row=>{
                            return(
                                <ClientTab
                                    id={`aes${row['idArticle']}`}
                                    //title={`Liste des ${row['Article']}`}
                                    schema={server.schemas.select['VMAes'] && {columns:Object.keys(server.schemas.select['VMAes']['columns']).reduce((a,c)=>{ return ['idArticle','CB','Rfid','Qte','Entree'].includes(c) ? {...a,...{[c]:server.schemas.select['VMAes']['columns'][c]}} : a },{})}}
                                    hidden={['idArticle']}
                                    paddings={8}
                                    data={passed.filter(p=>p['idArticle']===row['idArticle'])}
                                />
                            )
                        }
                    }]}
                />
            </AccordionDetails>
        </Accordion>
        <Accordion key="Vracs">
            <AccordionSummary id="uniquesSummary" expandIcon={<Icon>expand_more</Icon>}>
                <div style={{width:'100%',display:'flex',flexDirection:'column'}}>
                <Typography variant="h5"><Icon>list_alt</Icon> Articles en vrac </Typography>
                <Progress
                    id="vracProgress"
                    type="line"
                    value={articles.filter(a=>a.Categorie==='Vrac').sum('passed')}
                    total={articles.filter(a=>a.Categorie==='Vrac').sum('Qte')}
                    thickness={10}
                    size={document.body.clientWidth > 600 ? 540 : 300}
                    color="primary"
                    //otherProps={{variant:'buffer',valueBuffer:articles.reduce((a,c)=>a+c['Qte'],0)}}
                />
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <ClientTab
                    id="iventVrac"
                    title="Articles en vrac comptés"
                    schema={server.schemas.select['VMArticles']}
                    data={articles.filter(art=>art.Categorie==='Vrac')}
                    hidden={['Categorie','idArticle','idMagasin']}
                    filterKeys={[]}
                    paddings={6}
                    cellFunctions={{
                        passed:(qt,row)=>{ return(
                            <TextField
                                id={`qteVrac${row['idArticle']}`}
                                size="small"
                                type="number"
                                label="Trouvée"
                                value={row['passed']}
                                onChange={e=>setArticles(articles.map(art=>{return art['idArticle']===row['idArticle'] ? {...art,passed:e.target.value} : art }))}
                                //helperText={`sur ${row['Qte']}`}
                            />
                        )},
                        Qte:(qt,row)=> { return( <Typography variant="subtitle2" color="initial">{`sur ${qt}`}</Typography> ) }
                    }}
                />
            </AccordionDetails>
        </Accordion>
        <Alerts 
			id="dialogUnexpected"
		  	type="avertissement"
			draggable={true}
			open={showUnexpected}
			handleClose={()=>setShowUnexpected(false)}
			onOk={()=>setShowUnexpected(false)}
			headerFooterFormat={{title:'Code-barres imprévus',icon:'help'}}
		  >
			<div style={{display:'flex',flexDirection:'column'}}>
                {unexpected.map(un=>{ return( <Typography variant="subtitle1"> { un } </Typography> ) })}
			</div>
		  </Alerts>
    </div>
    )
}