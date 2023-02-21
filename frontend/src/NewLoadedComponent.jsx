import React, { Suspense, lazy, useEffect, useReducer, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";
import { CrudContext } from './context/ServerContext';
import { ContextSessions } from './context/SessionContext';
import { filt, groupBy, orderBy, limit } from './reducers/Functions';
import ErrorBoundary from '../ErrorBoundary';
import { useTheme, Badge, Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const fctToType = {
    avg: (type)=> type.includes('date') ? 'date' : (type === 'time' ? 'time' : 'float'),
    sum: (type)=>type,
    median: (type)=>type,
    max: (type)=>type,
    min: (type)=>type,
    count: ()=>'int',
    date: ()=>'date',
    time: ()=>'time'
}

function reducer(state, action) {
    switch (action.type) {
        case 'load':
        var idComp = state.idComp || action.server.componentCreation(`${action.id}_${action.component}`)
        let data = {}
        action.reads.forEach(read=>{
            action.server.getSchema('select',read.rule,idComp)
            if(read.loadOnMount){
                action.server.read(read,idComp,false,(dt)=>{ data[read.key] = dt})
            }
        })
            return {...state, idComp}

        case 'component':
            return {...state,MyComponent:action.component}
        
        case 'params':
            /** paramType can be cols, where, orderBy, limit, groupBy, grouping */
            let source = action.scope === 'server' ? 'serverParams' : 'clientParams'
            let schemas = {...state.schemas}
            schemas[action.key] = {...action.schema}
            if(action.params.cols){
                schemas[action.key]['columns'] = action.params.cols.reduce((acc,cur)=>{
                    let col = cur.col.split(',')[0]
                    let type = cur.op ? fctToType[cur.op](action.schema['columns'][col]['type']) : action.schema['columns'][col]['type']
                    return {...acc,[cur.alias || cur.col || cur]:{label:cur.alias || cur.col || cur, type}}
                },{})
            }
            /*if(action.scope==='server'){
                action.server.read(action.read,idComp,false,(dt)=>{ data[action.read.key] = dt})
            }*/
            return {...state, [source]:{...state[source],[action.paramType]:action.params}, schemas}

        case 'data':
            return {...state, loadedData:{...state.loadedData, [action.key]:action.data} }

        default:
            return state
    }
}

export function LoadedComponent(props){
    const { id, component, reads, compProps, propsToRender, searchKeys, displayedParams, orderIndex } = props
    const location = useLocation();
    const server = useContext(CrudContext)
    const session = useContext(ContextSessions)
    const theme = useTheme()
    const [state, dispatch] = useReducer(reducer, {
        idComp: null,
        MyComponent:null,
        schemas:[],
        loadedData:[],
        serverParams:[],
        clientParams:[]
    })

    useEffect(()=>{
        dispatch({type:'load',server})
        let locationParams = location ? location.search.match(/filtre=(\[(.+)\])/) : null;
        JSON.parse(locationParams) && dispatch({type:'params',scope:'server',server,params:JSON.parse(locationParams)})
    },[])

    useEffect(()=>{
        dispatch({type:'component',component:lazy(() => import(`${component}`))})
    },[component])

    useEffect(()=>{

    },[JSON.stringify(state.serverParams)])
    /** Function to apply whenever the params are modified from the component */
    const onParamsChange = (type,key,scope,params)=>{
        let read = reads.find(r=>r.key===key)
        let schema = server.schemas.select[read['rule']]
        if(schema){
            dispatch({type:'params',key,scope,schema,server,paramType:type,params})        
        }
        else{ console.log("Pas de schéma chargé !") }
        if(scope==='server'){
            server.read(read, state.idComp, false, (dt)=>{dispatch({type:'data',key:read.key,data:dt})})
        }
    }
    /** Function to apply to get the data to pass it in the component after clientParams processing */
    function applyClientParams(data,params,schema){
        const rslt = data
        if(params.cols){
            rslt = groupBy(rslt,params.cols,params.groupBy || [],schema)
        }
        if(params.where){
            rslt = filt(rslt,params.where,schema,params.inverse || false)
        }
        if(params.orderBy){

        }
        if(params.limit){
            rslt = limit(rslt,params.limit)
        }
        if(params.grouping){

        }
        return rslt 
    }

    const render = React.useCallback(
        (x) => {
          return (
            <Suspense
              className="Suspense"
              fallback={
                <h5>
                  {`Composant ${component.split("/").slice(-1)[0]} en cours de chargement...`}
                </h5>
              }
            >
              {state.MyComponent && (
                <state.MyComponent
                  key={state.idComp}
                  data={applyClientParams(state.loadedData,state.clientParams)}
                  schema={state.schemas || {}}
                  onParamsChange={onParamsChange}
                  {...compProps}
                />
              )}
            </Suspense>
          );
        },
        [component,JSON.stringify(state.loadedData),JSON.stringify(state.schemas),JSON.stringify(propsToRender)]
    )
    
    return( <>
        {displayedParams && (
            <div>
                {Object.keys(displayedParams).map(param=>{
                    if(param==='where'){
                        return(<Accordion>
                            <AccordionSummary
                                id={`Where${id}`}
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Badge badgeContent={state.clientParams.where && state.clientParams.where.length} color="error">
                                    <Typography variant="h5" color=""> Filtres </Typography> 
                                </Badge>
                            </AccordionSummary>
                            <AccordionDetails>

                            </AccordionDetails>
                        </Accordion>)
                    }
                    else if(param==='orderBy'){
                        return(<Accordion>
                            <AccordionSummary
                                id={`OrderBy${id}`}
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Badge badgeContent={state.clientParams.orderBy && state.clientParams.orderBy.length} color="error">
                                    <Typography variant="h5" color=""> Ordre </Typography> 
                                </Badge>
                            </AccordionSummary>
                            <AccordionDetails>

                            </AccordionDetails>
                        </Accordion>)
                    }
                    else if(param==='groupBy'){
                        return(<Accordion>
                            <AccordionSummary
                                id={`groupBy${id}`}
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Badge badgeContent={state.clientParams.groupBy && state.clientParams.groupBy.length} color="error">
                                    <Typography variant="h5" color=""> Regrouper par </Typography> 
                                </Badge>
                            </AccordionSummary>
                            <AccordionDetails>

                            </AccordionDetails>
                        </Accordion>)
                    }
                })}
            </div>
        )}
    </>)
}
const parms = PropTypes.shape({
    /** Columns to read ({col:...,op:...,alias:...}) */
    cols: PropTypes.arrayOf(PropTypes.shape({
        /** Column from rule */
        col: PropTypes.string.isRequired,
        /** Operation to apply to column */
        op: PropTypes.oneOf('sum','avg','count','min','max','date','time'),
        /** Alias of the column */
        alias: PropTypes.string,
    })),
    /** Limit the number of records to get from the query */
    limit: PropTypes.arrayOf(PropTypes.number),
    /** Where clause server side or filter client side */
    where: PropTypes.arrayOf(PropTypes.shape({
        /** Rule's column to query  */
        col: PropTypes.string.isRequired,
        /** Operator of the where clause */
        operator: PropTypes.oneOf('<','>','<=','>=','=','<>','in','like').isRequired,
        /** Value to filter */
        value: PropTypes.oneOfType(PropTypes.string,PropTypes.number,PropTypes.bool,PropTypes.array,PropTypes.instanceOf(Date)).isRequired
    })),
    /** Order to give to data records */
    orderBy: PropTypes.arrayOf(PropTypes.shape({
        /** Column to use to order */
        col: PropTypes.string.isRequired,
        /** Order's direction */
        order: PropTypes.oneOf('desc','asc')
    })),
    /** The groupBy settings clause */
    groupBy: PropTypes.arrayOf(PropTypes.string),
})
const children = PropTypes.arrayOf(PropTypes.shape({
    /** Key name of the child */
    key: PropTypes.string.isRequired,
    /** Column of the actual primary */
    parentCol: PropTypes.string.isRequired,
    /** Column of the child rule to rely to the parent one */
    childCol: PropTypes.string.isRequired,
    /** Child rule */
    rule: PropTypes.string.isRequired,
    /** Params de la child's rule */
    params: parms,
    children: children || PropTypes.arrayOf(PropTypes.shape())
}))

LoadedComponent.propTypes = {
    /** id of the parent component */
    id: PropTypes.string,
    /** The component type to be loaded */
    component: PropTypes.string,
    /** Props of the component */
    compProps: PropTypes.shape(),
    /** Props, from componentProps, to force the component's re-rendering */
    propsToRender: PropTypes.arrayOf(PropTypes.any),
    /** Keys to apply a global search */
    searchKeys: PropTypes.arrayOf(PropTypes.string),
    /** Array of numbers to apply an order to data */
    orderIndex: PropTypes.arrayOf(PropTypes.number),
    /** Param's interfaces to display */
    displayedParams: PropTypes.shape({
        /** Columns to display and apply functions on */
        cols: PropTypes.arrayOf(PropTypes.string),
        /** Display filters from selected keys */
        where: PropTypes.arrayOf(PropTypes.string),
        /** Display orders from selected keys */
        orderBy: PropTypes.arrayOf(PropTypes.string),
        /** Display pagination */
        limit: PropTypes.bool,
        /** Display broupBy inteface */
        groupBy: PropTypes.bool,
        /** Display key's grouping from selected keys */
        grouping: PropTypes.bool
    }),
    /** Settings to start the data reading */
    reads: PropTypes.arrayOf(PropTypes.shape({
        /** Unique key of each read */
        key: PropTypes.string,
        /** Rule to call from server */
        rule: PropTypes.string,
        /** Params to apply to read */
        params: parms,
        /** Group the data by keys in JSON format */
        children: children,
        /** Do data need to be loaded at startup */
        loadOnMount: PropTypes.bool,
        /** Can reading wait ? */
        canWait: PropTypes.bool
    }))
}

LoadedComponent.defaultProps = {

}
