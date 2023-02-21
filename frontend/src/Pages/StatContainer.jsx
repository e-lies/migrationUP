import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from "react-router";
import { useTheme } from '@material-ui/core/styles';
import { useSize } from '../reducers/Hooks';
import { ContextSessions } from '../context/SessionContext';
import { Typography, Tabs, Tab, AppBar, Toolbar, Drawer, IconButton, Icon, Tooltip } from '@material-ui/core'

export default function StatContainer(props){
    const [tab,setTab] = useState(0)
    const [opened,setOpened] = useState(false)
    const history = useHistory()
    const session = useContext(ContextSessions)
    const location = useLocation()
    const { width } = useSize()
    const pages = ["ArticleEnStock","Arrivees","PreAchat","RetourClient","RetourFournisseur","Ventes","LignesCommande","Commandes","Virtuelles","Visites"]
    const theme = useTheme()
    useEffect(()=>{
        session.getSession(false)
    },[])
    useEffect(()=>{
        session.getSession(false)
        pages.forEach((p,i)=>{
         if(location['pathname'].includes(p)) { console.log("page = ",i); setTab(i) }})
    },[JSON.stringify(location)])
    return(
        <div id="menuStats" style={{width:'100%'}}>
            <AppBar style={{height:32}} position="fixed" color="default">
                <div style={{width:'100%',display:'flex',justifyContent:'space-between',padding:4}}>
                    <IconButton style={{width:36,padding:0}} onClick={()=>setOpened(true)}>
                        <Icon size="medium" color="primary">menu</Icon>
                    </IconButton>
                    <div>
                    {session.session && session.session.autorisations && session.session.autorisations.includes(307) && (<Tooltip title="Rapports">
                    <IconButton style={{width:36,padding:0}} onClick={()=>history.push("/siraj/statistiques/Reports")}>
                        <Icon size="medium" color="primary">list</Icon>
                    </IconButton>
                    </Tooltip>)}
                    <IconButton style={{width:36,padding:0}} onClick={()=>session.logout()}>
                        <Icon size="medium" color="error">power_settings_new</Icon>
                    </IconButton>
                    </div>
                </div>
            <Drawer anchor="left" open={opened} onClose={()=>setOpened(false)} >
                <Tab component={Link} to="/siraj/statistiques/ArticleEnStock" value={0} label={width > 360 && "Articles en stock"} icon={<Icon>category</Icon>} /*style={{width:100,color:tab===0 ? theme.palette.primary.main : theme.palette.secondary.main}}*/ />
                <Tab component={Link} to="/siraj/statistiques/Arrivees" value={1} label={width > 360 && "Arrivées"} icon={<Icon>business</Icon>} /*style={{width:100,color:tab===1 ? theme.palette.primary.main : theme.palette.secondary.main}}*/ />
                <Tab component={Link} to="/siraj/statistiques/PreAchat" value={2} label={width > 360 && "Pré-achats"} icon={<Icon>shop</Icon>} />
                {/*<Tab component={Link} to="/siraj/statistiques/mouvements" value={2} label={width > 360 && "Mouvements"} icon={<Icon>swap_horiz</Icon>} />*/}
                <Tab component={Link} to="/siraj/statistiques/RetourClient" value={3} label={width > 360 && "Retour Client"} icon={<Icon>reply_all</Icon>} /*style={{width:100,color:tab===2 ? theme.palette.primary.main : theme.palette.secondary.main}}*/ />
                <Tab component={Link} to="/siraj/statistiques/RetourFournisseur" value={4} label={width > 360 && "Retour Fournisseur"} icon={<Icon>remove_shopping_cart</Icon>} /*style={{color:tab===3 ? theme.palette.primary.main : theme.palette.secondary.main}}*/ />
                <Tab component={Link} to="/siraj/statistiques/Ventes" value={5} label={width > 360 && "Lignes vente"} icon={<Icon>money</Icon>} /*style={{width:100,color:tab===4 ? theme.palette.primary.main : theme.palette.secondary.main}}*/ />
                <Tab component={Link} to="/siraj/statistiques/LignesCommande" value={6} label={width > 360 && "Toute Commande"} icon={<Icon>shopping_cart</Icon>} /*style={{width:100,color:tab===5 ? theme.palette.primary.main : theme.palette.secondary.main}}*/ />
                <Tab component={Link} to="/siraj/statistiques/Commandes" value={7} label={width > 360 && "Ventes"} icon={<Icon>shopping_cart</Icon>} /*style={{width:100,color:tab===6 ? theme.palette.primary.main : theme.palette.secondary.main}}*/ />
                {session.session?.autorisations?.includes(304) && <Tab component={Link} to="/siraj/statistiques/Virtuelles" value={8} label={width > 360 && "Virtuelles"} icon={<Icon>cloud</Icon>} /*style={{width:100,color:tab===6 ? theme.palette.primary.main : theme.palette.secondary.main}}*/ /> }
                <Tab component={Link} to="/siraj/statistiques/Visites" value={9} label={width > 360 && "Visites"} icon={<Icon>people</Icon>} /*style={{width:100,color:tab===7 ? theme.palette.primary.main : theme.palette.secondary.main}}*/ />
            </Drawer>
            {/*<Toolbar style={{display:'flex',justifyContent:'space-around',backgroundColor:'#f5f5f5',position:'fixed',width:'100%'}}> */}
            {/*<Typography variant="h6">Statistiques</Typography>*/}
            <Tabs value={tab} variant="scrollable"
                 orientation="vertical"
                scrollButtons="on"
                indicatorColor="primary"
                textColor="primary"
                aria-label="scrollable force tabs example"
                //style={{display:'flex',padding:0,margin:0,justifyContent:'space-around',width:'90%'}} 
            >

            </Tabs>
            {/*</Toolbar>*/}
            </AppBar>
            <div style={{height:48}}> </div>
        </div>
    )
}