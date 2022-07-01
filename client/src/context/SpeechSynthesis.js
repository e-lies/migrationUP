import React, { useState, useEffect, useContext } from 'react';
import { language, voice } from './Params';
import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

export const ContextSynthesis = React.createContext({});
export const useSpeechSynthesis = () => useContext(ContextSynthesis);
var utterThis = new SpeechSynthesisUtterance("");
if(language){
    utterThis.lang = language
}
if(voice){
    utterThis.lang = voice
}

const SpeechSynthesisContext = ({ children }) =>{    
    const [openSnack,setOpenSnack] = useState(false)
    const [severity,setSeverity] = useState('info')
    const setParam = (param,value)=>{ //params: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance
        utterThis[param] = value
        if(param === "text"){
            setOpenSnack(true)
            window.speechSynthesis.speak(utterThis)
        }
    }
    utterThis.onend = (event)=>{ setOpenSnack(false) }
    return(
        <ContextSynthesis.Provider
            value={{ setParam, setSeverity, synthesisObject: utterThis }}
        >
            { children }
            <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                open={openSnack}
                autoHideDuration={8000}
                onClose={() => setOpenSnack(false) }
            >
                <Alert
                    //onClose={() => setAlert({ ...alert, open: false })}
                    severity={severity}
                >
                    { utterThis.text }
                </Alert>
            </Snackbar>
        </ContextSynthesis.Provider>
    )
}

export default SpeechSynthesisContext