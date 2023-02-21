import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardActions, Typography, Tooltip, Icon, TextField, Button, InputAdornment, IconButton } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    card: {
        width:'100%', 
      	backgroundColor: theme.palette.background.default
    },
    avatar: {
        width:'52px',
        height: '52px'
    }
}));

export default function Login(props){
    const { email, password, msg, onParamsChange, onConfirm } = props;
    const classes = useStyles();
    const [visible, setVisible] = useState("password")
    const changeVisibility = () =>{
        setVisible(visible === "password" ? "text" : "password")
    }
	console.log("opc type = ", onParamsChange)
    return(
        <div /*className={classes.card}*/>
	      <div
			style={{opacity:0.7}}
	      	titleTypographyProps={{variant:'h5'}}
			avatar={ <Icon style={{fontSize:'1.75em'}}> airport_shuttle </Icon> }
	        action={
	        	<Tooltip title="Mise à zéro">
	          		<Icon style={{fontSize:'2em'}} color="error" onClick={() => onParamsChange(null, null)}> replay </Icon>
	          	</Tooltip>
	        }
			title={`Connexion`}
	        subheader="Administrateur"
	      />
	      <div style={{display:'flex',flexDirection:'column',height:'130px',justifyContent:'space-between',margin:'10px'}} >
			<TextField
				id="mail"
				autoFocus
				label="Mail"
				type="email"
				value={email}
				onChange={e=>onParamsChange(e.target.value, password)}
				InputProps={{
		          startAdornment: (
		            <InputAdornment position="end">
						<IconButton style={{padding:0}}>
		              <Icon style={{float:'right',marginRight:'25px',marginLeft:'5px'}}>
		               email </Icon></IconButton>
		            </InputAdornment>
		          ),
		        }}
			/>
			<TextField
				id='password'
				label='Mot de passe'
				type={visible}
				value={password}
				onChange={e=>onParamsChange(email, e.target.value)}
				onKeyPress={e=>{ e.keyCode === 13 && onConfirm() }}
				InputProps={{
		          startAdornment: (
		            <InputAdornment position="end">
						<IconButton style={{padding:0}} onClick={changeVisibility}>
		              <Icon style={{float:'right',marginRight:'25px',marginLeft:'5px'}}>
		               {visible === "password" ? "visibility" : "visibility_off"} </Icon></IconButton>
		            </InputAdornment>
		          ),
		        }}
			/>
	      </div>
	      <div style={{margin:4,display:'flex',flexDirection:'column-reverse',justifyContent:'space-between'}} >
			<Typography variant="h5" color="error"> {msg} </Typography>
			<Button
				variant="contained"
				disabled={!email || !password || email?.length < 1 || password.length < 1}
				color="primary" 
				onClick={ onConfirm } 
			>
				<Icon> send </Icon> Connexion
			</Button>
	      </div>
	    </div>
    )
}