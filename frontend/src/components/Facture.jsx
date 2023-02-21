import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useReactToPrint } from 'react-to-print';
import { headerImage, footerImage } from '../context/Params';
import ClientTab from '../components/Tableaux/ClientTab';
import 
    { Table, TableHead, TableBody, TableFooter, TableRow, TableCell, Typography, Divider, Dialog, IconButton, Icon } 
from '@material-ui/core';

export const HeaderFooter = (props) =>{
    return(<div id="header_footer">
      <img id="headerImage" style={{width:'100%',maxHeight:100}} alt="En-tete" src={headerImage} />
        { props.children }
      <img id="footerImage" style={{width:'100%',maxHeight:100}} alt="Pied de page" src={footerImage} />
    </div>)
}

const labeling = (arr,columns,labelKey) =>{
    return arr.map(r=>{ let label = columns 
        return {...r, label: columns[labelKey].label}
    })
}

export default function Bill(props){
    const { title, data, schema, commons, Recap, cols } = props;
    const commonLine = data.length > 0 ? commons.map(c=>data[0][c]) : []
    const billRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => billRef.current,
    });
    const Tab = data.map(d=>{

    })
    return(
        <div>
            <IconButton onClick={handlePrint} color="primary">
                <Icon fontSize="large"> print </Icon>
            </IconButton>
            <div id="Facture" ref={billRef}>
                <HeaderFooter>
                    
                    ......................
                    <Recap {data} />
                </HeaderFooter>
            </div>
        </div>
    )
}

Facture.PropTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({})),
    commons: PropTypes.arrayOf(PropTypes.string),
    cols: PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string,
        fct: PropTypes.func,
    }),
    schema: PropTypes.shape({
        columns: PropTypes.shape({
            label: PropTypes.string,
        })
    }),
    recap: PropTypes.elementType,
}