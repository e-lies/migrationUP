import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Divider, Icon, IconButton, InputBase } from '@material-ui/core';
//import Barcode from './Barcode/BarcodeNew';
import OCR from './OCR';
import { path } from '../context/Params';

const repeatSound = new Audio(path+'/Sons/repeat.mp3');
const unexpectedSound = new Audio(path+'/Sons/nonexistent.mp3');
const passageSound = new Audio(path+'/Sons/passage.mp3');

const useStyles = makeStyles(theme => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: theme.palette.grey[100],
      //width: 400,
      maxHeight: 75
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
    title: {
        margin: 12,
        color: theme.palette.info.main
    }
}));

const defaultInputComp = ({passed, inputCode, onChange, onValidate})=>{
    const onEnterCode = e =>{
        if(e.which === 13) { 
            onValidate(inputCode)
            e.target.select()
        }
    }
    return(<InputBase
        autoFocus
        style={{flex:1}}
        placeholder="Scanner les codes"
        inputProps={{
            'aria-label': 'Scanner les code-barres',
            onChange:(e)=>{onChange(e.target.value)},
            value: inputCode,
            onKeyUp: onEnterCode
        }}
    />)
}
const DefaultExtensionComp = props =>{
    return(<span> {JSON.stringify(props)} </span>)
}

export default function Passage(props){
    const { id,
        data,
        passed,
        readers,
        InputComp,
        AlertComp,
        ExtensionComp,
        idKey,
        onPassed,
        onUnexpected,
        onRepeatCode,
        separChar } = props;
    const classes = useStyles()
    const [opened,setOpened] = useState(null)
    const [inputCode,setInputCode] = useState('')

    const passing = (code) =>{
        if(passed.some(ap=>{ let ik = idKey.reduce((a,c)=>a.concat((ap[c] || "").toString().split(separChar) || null),[]) 
            return ik.includes(code) })
        ){  
            onRepeatCode(code,repeatSound)
        }
        else{
            let row = data.filter(d=>{
                let ik = idKey.reduce((a,c)=>a.concat((d[c] || "").toString().split(separChar) || null),[])
                return ik.includes(code)
            })
            if(row.length < 1){
                console.log("Non existant")
                unexpectedSound.play()
                onUnexpected(code,unexpectedSound)
            }
            else{
                onPassed(row,passageSound)
            }
        }
    }
    return(
        <div id={id}>
            {/*<Barcode
                videoId="passageVideo"
                realTimeBoxDetecting
                open={["once","ImageStream", "live"].includes(opened)}
                onClose={()=>setOpened(null)}
                className={classes.iconButton}
                mode={opened}
                multiple
                onScan={code=>passing(code)}
            >
                <AlertComp />
            </Barcode>
            <OCR
                open={opened === 'ocr'}
                onClose={()=>setOpened(null)}
                onValidate={code=>setInputCode(code)}
            />*/}
            <Paper component="form" className={classes.root}>
                { readers.barcode && (<IconButton
                    className={classes.iconButton} 
                    onClick={e=>setOpened(readers.barcode.mode || "live")} 
                    aria-label="codes"
                 >
                    <Icon>
                        {readers.barcode.mode === 'live' || !readers.barcode.mode  ? 'code' : (readers.barcode === 'live' ? 'video_switch' : 'photo_camera')}
                    </Icon>
                 </IconButton>
                )}
                { readers.qr && <IconButton className={classes.iconButton} onClick={e=>setOpened('qr')} aria-label="qr">
                    <Icon> crop_free </Icon>
                </IconButton>}
                { readers.ocr && <IconButton className={classes.iconButton} onClick={e=>setOpened('ocr')} aria-label="ocr">
                    <Icon> font_download </Icon>
                </IconButton>}
                <Divider key="divider1" className={classes.divider} orientation="vertical" />
                <InputComp
                    {...passed} {...inputCode}
                    onChange={c=>setInputCode(c)}
                    onValidate={()=>passing(inputCode)}
                />
                <Divider key="divider2" className={classes.divider} orientation="vertical" />
                <ExtensionComp
                    {...passed} {...inputCode}
                />
            </Paper>
        </div>
    )
}
Passage.propTypes = {
    /**
     * id de Passage
     */
    id: PropTypes.string,
    /**
     * Données d'entrées
     */
    data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    /**
     * Array représentant les clés possibles à entrer dans le textfield de code unique (le premier servira de clé de référence)
     */
    idKey: PropTypes.arrayOf(PropTypes.string).isRequired,
    /**
     * Caractère de séparation en cas de codes multiples
     */
    separChar: PropTypes.string,
    /**
     * Bouttons pour activer la lecture de code-barres, QR, et par OCR
     */
    readers: PropTypes.shape({
        barcode: PropTypes.bool,
        qr: PropTypes.bool,
        ocr: PropTypes.bool
    }),
    /**
     * Le composant qui servira d'input pour entrer le code unique (et s'il le faut, d''autres données) 
     */
    InputComp: PropTypes.elementType,
    /** Composant à mettre sur l'Alert du barcode scanner */
    AlertComp: PropTypes.elementType,
    /**
     * Composant qu'on peut ajouter à droite de la partie InputComp (passed, code en paramètres)
     */
    ExtensionComp: PropTypes.elementType,
    /**
     * Callback à éxecuter à l'ajout d'un nouvel élement (la ligne sélectionnée en entrée)
     */
    onPassed: PropTypes.func,
    /**
     * Callback à éxécuter quand un code n'est pas trouvé
     */
    onUnexpected: PropTypes.func,
    /**
     * Callback en cas de répetition ou de code pré-existant
     */
    onRepeatCode: PropTypes.func,
};
Passage.defaultProps = {
    id: "idPassage",
    data: [],
    readers: {barcode: false, qr: false, ocr: false},
    InputComp: defaultInputComp,
    separChar: ',',
    //displayReducer: <ClientTab....
    onPassed: (rows,sound)=>{ console.log(rows); sound.play() },
    onUnexpected: (code,sound)=>{ console.log("unexpected = ",code); sound.play() },
    onRepeatCode: (code,sound)=>{ console.log(code+" déjà passé"); sound.play() },
    ExtensionComp: DefaultExtensionComp
}
