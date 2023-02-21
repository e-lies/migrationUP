import React, { useEffect, useState, useContext } from "react";
import { CrudContext } from '../../../context/ServerContext';
import { 
    Stepper,
    Step,
    StepLabel,
    StepContent,
    StepButton ,
    Typography,
    TextField
}   from '@material-ui/core';

export default function Virtuelle(){
    const server = useContext(CrudContext)
    const [step,setStep] = useState(0)
    const [fournisseur,setFournisseur] = useState({})
    const [articles,setArticles] = useState([])
    const [client,setClient] = useState({})

    useEffect(()=>{
      
    })

    const stepContent = (stp) => {
        switch (stp) {
            case 0:
                return(
                  
                )
            case 1:
                return(

                )
            case 2:
                return(
                    
                )
            default: return false
        }
    }

    return( <div style={{ width: "100%" }}>
      <Stepper alternativeLabel activeStep={state.step}>
        <Step key="Fournisseure">
          <StepLabel> Choix du fournisseur </StepLabel>
        </Step>
        <Step key="Articles">
          <StepLabel> Articles et finances </StepLabel>
        </Step>
        <Step key="Client">
          <StepLabel>Choix du client</StepLabel>
        </Step>
      </Stepper>
      <Paper style={{ padding: 12 }} elevation={3}>
        {stepContent(state.step)}
      </Paper>
    </div>)
}