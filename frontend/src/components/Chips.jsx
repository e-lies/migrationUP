import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Chip } from '@material-ui/core';

export default function Chips(props){
    const { id, data, onDelete, onClick, avatarFct, labelFct, variant, color, containerStyle } = props
    return(
        <div id={id} style={{display:'flex',flexWrap:'wrap',...containerStyle}}>
            { data.map(chip=>{
                return(<Chip
                    style={{margin:4}}
                    variant={variant}
                    avatar={chip=>avatarFct(chip)}
                    label={chip=>labelFct(chip)}
                    clickable={onClick && true}
                    onClick={chip=>onClick(chip)}
                    color={color}
                    onDelete={chip=>onDelete(chip)}
                    deleteIcon={onDelete ? <Icon>clear</Icon> : <></>}
                />)
            })}
        </div>
    )
}
Chips.propTypes = {
    /** id du composant */
    id: PropTypes.number.isRequired,
    /** Array de json à passer en data */
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    /** Fontion à éxecuter à la suppression d'un Chip */
    onDelete: PropTypes.func,
    /** Fonction à éxecuter au click */
    onClick: PropTypes.func,
    /** Fonction qui donne le render de la partie Avatar du Chip */
    avatarFct: PropTypes.func,
    /** Fonction qui donne le render de la partie label du Chip */
    labelFct: PropTypes.func,
    /** variant de l'apparence du Chip  */
    variant: PropTypes.oneOf('default','outlined'),
    /** Couleur du du Chip (primary, secondary) */
    color: PropTypes.oneOf('primary','secondary'),
    /** Style du container des Chips */
    containerStyle: PropTypes.shape({})
}
Chips.defaultProps = {
    data:[],
    onClick: chip => console.log("chip = ",chip),
    variant:'default',
    color:'default',
    containerStyle:{display:'flex',flexWrap:'wrap',borderRadius:8}
}


}