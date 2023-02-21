import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/style';
import { CrudContext } from '../context/ServerContext';
import { makeStyles, Fab, Paper, Stepper, Step, StepLabel, Icon, IconButton, CircularProgress } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        margin: 12
    },
    center: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    lines: {
        display: 'flex',
        justifyContent: 'space-around'
    }
}))

const DefaultAddElement = ({addLine}) =>{
    return( 
        <IconButton color="secondary" onClick={()=>addLine()}>
            <Icon fontSize="large">playlist_add</Icon>
        </IconButton>
    )
}
const DefaultValidateElement = ({data,onValidate}) =>{
    return(
        <Fab size="large" variant="contained" color="secondary" onClick={()=>onValidate(data)} >
            Valider <Icon>save</Icon>
        </Fab>
    )
}

export default function AddLines(prop){
    const { schema, data, alreadyPassed, uniques, AddElement, LineElement, ProgressElement, ValidateElement, onChange, onValidate } = props
    const classes = useStyles()
    const [state,setState] = useState([])
    useEffect(()=>{
        onChange(state)
    },[JSON.stringify(state)])
    const addLine = () =>{
        setState(state.concat({}))
    }

    const removeLine = i =>{
        let st = [...state]
        delete st[i] //à cause du bug dans material ui Autocomplete
        setState(st)
    }

    return( <div className={classes.root}>
        <AddElement id="idAddElement" addLine={addLine} />
        <div id="bodyAddLine" className={classes.center}>
            <div id="lines">
            { state.map((jsn,i)=>{
                return( <div id={`line${i}`}>
                    <LineElement data={jsn} />
                    <IconButton color="error" onClick={()=>removeLine(i)}>
                        <Icon fontSize="large"> delete </Icon>
                    </IconButton>
                </div>)
             })
            }
            </div>
            <div id="progressAddLine">
                <ProgressElement state={state} data={alreadyPassed} />
            </div>
        </div>
        { <ValidateElement data={state} onValidate={onValidate} /> }
     </div>
    )
}
AddLines.propTypes = {
    /**
     * schema du read from server
     */
    schema: PropTypes.shape(),
    /**
     * Les données depis lesquelles on pourra créer des lignes
     */
    data: PropTypes.arrayOf(PropTypes.shape()),
    /**
     * les lignes déjà passé (arrivés au serveur en général)
     */
    alreadyPassed: PropTypes.arrayOf(PropTypes.shape()),
    /**
     * Le groupe de keys qui ne doivent pas se répeter 
     */
    uniques: PropTypes.array,
    /**
     * Element JSX représentant le bouton d'ajout d'une nouvelle ligne
     */
    AddElement: PropTypes.elementType,
    /**
     * Element JSX représentant une ligne
     */
    LineElement: PropTypes.elementType.isRequired,
    /**
     * Element JSX représentant la progression de l'ajout de lignes
     */
    ProgressElement: PropTypes.elementType,
    /**
     * Element JSX représentant la partie validation ou confirmation (en général avec une fonction d'insert au serveur)
     */
    ValidateElement: PropTypes.elementType,
    /**
     * Event qui se déclenche quand une ligne est ajoutée ou supprimée (state comme param d'entrée)
     */
    onChange: PropTypes.func,
    /**
     * Event déclencher lors de la validation (state comme paramètre)
     */
    onValidate: PropTypes.func
}
AddLines.defaultProps = {
    data: [],
    alreadyPassed: [],
    uniques: [],
    AddElement: DefaultAddElement,
    ValidateElement: DefaultValidateElement,
}
