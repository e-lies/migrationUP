import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CrudContext } from "./context/ServerContext";
import { ContextSessions } from "./context/SessionContext";
import { path } from './context/Params'
import { TextField, InputAdornment, Button, Icon } from "@material-ui/core";
import Alerts from "./components/Alerts";

const useStyles = makeStyles(theme => ({
  psw: {color: theme.palette.error.contrastText,
		backgroundColor: theme.palette.error.main,
  },
  input: {
		margin: 20
  }
}))

const ResetPsw = props =>{
	const classes = useStyles()
	const server = useContext(CrudContext)
	const session = useContext(ContextSessions)
	const [visible,setVisible] = useState(false)
	const [actual,setActual] = useState("")
	const [first,setFirst] = useState("")
	const [second,setSecond] = useState("")
	const [alerts,setAlerts] = useState()
	
	const validate = () =>{
		if(first === second){
			/*fetch(path+"/Models/ResetPassword.php?actual="+actual+"&psw="+first)
			.then(prm =>{
				if(prm.status !== 200){
					return prm.text().then(rep=>{
						setAlerts({type:'avertissement',rep})
					})
				}
				else{
					return prm.text().then(rep=>{
						setAlerts({type:'info',rep})
					})
				}
			}).catch(rep=>{ alert("Une erreur s'est produite lors de la transmission au serveur !") })*/
			server.write([{type:'update',rule:`${session.session.role}Psw`,data:{Password:second},where:[{label:'Password',operator:'=',value:actual}]}],response,"resetPsw")
		}
		else{
			alert("La confirmation ne correspond pas à la première entrée !!")
		}
	}
	const response = (rep,st) =>{ alert(st)
		if(st < 300){
			rep[0]['count'] < 1 ? setAlerts({type:'avertissement',rep:"Erreur\n Vérifier le mot passe d'origine"}) : setAlerts({type:'info',rep:"Mise à jour mot de passe bien effectuée"})
		}
	}
	const end = () =>{
		setAlerts(null)
		props.clbk()
	}

	return(
		<div className="psw">
		 <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}} >
			<TextField key="actualPsw"
				className={classes.input}
				type={visible ? 'text' : 'password'}
				label="MDP actuel"
				value={actual}
				onChange={e=>setActual(e.target.value)}
				InputProps={{
		          startAdornment: (
		            <Button><InputAdornment position="end">
		              <Icon style={{float:'right',marginRight:'25px',marginLeft:'5px'}} onClick={e=>setVisible(!visible)}>
		               {visible ? "visibility" : "visibility_off"} </Icon>
		            </InputAdornment></Button>
		          ),
		        }}
			/>
			<TextField key="first"
				className={classes.input}
				type={visible ? 'text' : 'password'}
				label="Nouveau MDP"
				value={first}
				onChange={e=>setFirst(e.target.value)}
				InputProps={{
		          startAdornment: (
		            <Button><InputAdornment position="end">
		              <Icon style={{float:'right',marginRight:'25px',marginLeft:'5px'}} onClick={e=>setVisible(!visible)}>
		               {visible ? "visibility" : "visibility_off"} </Icon>
		            </InputAdornment></Button>
		          ),
		        }}
			/>
			<TextField key="second"
				className={classes.input}
				type={visible ? 'text' : 'password'}
				label="Confirmer le MDP"
				value={second}
				onChange={e=>setSecond(e.target.value)}
				InputProps={{
		          startAdornment: (
		            <Button><InputAdornment position="end">
		              <Icon style={{float:'right',marginRight:'25px',marginLeft:'5px'}} onClick={e=>setVisible(!visible)}>
		               {visible ? "visibility" : "visibility_off"} </Icon>
		            </InputAdornment></Button>
		          ),
		        }}
			/>
			<Button className={classes.psw} onClick={e=>validate()} >
				<Icon> reset </Icon> Valider
			</Button>
			</div>
			{ alerts &&
			(<Alerts id="failPsw"
				open={alerts}
				type={alerts.type}
				handleClose={e=>end()}
				onOk={e=>end()}
			>	
				<h5> {alerts.rep} </h5>
			</Alerts>)
			}
		</div>
	)
}
export default ResetPsw