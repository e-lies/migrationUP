// TODO Document this component well
// TODO Add notifications to the top bar
import React, { useState, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  Typography,
  IconButton,
  Drawer,
  Avatar,
  AppBar,
  Toolbar,
  CircularProgress,
} from "@material-ui/core";
import { Switch } from "react-router-dom";
import TreeViews from "./TreeViews";
import { readIndex } from "../reducers/Functions";
import OutlinedIcon from "./OutlinedIcon";
import Profile from "../Profile";
import { useSize } from "../reducers/Hooks";
import { path } from "../context/Params";
// Ce component crée un menu de navigation avec une navbar hiérarchique sur la gauche et le level actuel sur le haut
// Un array en entrée donnera l'architecture du routage de l'application et déterminera les droit d'affichage et d'accès à chaque item
// ExpItem est un component qui représente les items expandable, ils ont des extensions children
// FinalItem représente les items finaux qui contienne la redirection vers un link et un component

const labelReducer = (node, schema) => (
  <Typography variant="body1">{node.label || node.id}</Typography>
);

export default function MenuAppBar(props) {
  const { arr, spacing, session, rts } = props;
  const theme = useTheme();
  const [open, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "tempOpen":
          state = { ...state, temp: true };
          break;
        case "tempClose":
          state = { ...state, temp: false };
          break;
        case "permOpen":
          state = { ...state, perm: true };
          break;
        case "permClose":
          state = { ...state, temp: false, perm: false };
          break;
        default:
          return false;
      }
      return {
        ...state,
        open: state.perm ? true : state.temp ? true : false,
      };
    },
    { temp: false, perm: false, open: false }
  );
  const [userNav, setUserNav] = useState(false);
  const [drawerWidth, setDrawerWidth] = useState(0);
  const { width, isMobile } = useSize();
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    appBar: {
      transition: theme.transitions.create(
        ["width", "margin", "marginTop", "opacity"],
        {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }
      ),
      overflow: "hidden",
      width: "100%",
      boxShadow: "0px 8px 10px rgba(0, 0, 0, 0.04)",
    },
    headerText: {
      marginLeft: 10,
     // width: open.open ? "auto" : isMobile ? width - 202 : width - 354,
    },
    menuButton: {
      marginRight: 36,
      flexGrow: 0,
    },
    pageDescription: {
      color: theme.palette.primary.contrastText,
      overflow: "hidden",
      whiteSpace: "nowrap",
    },
    pageTitle: {
      overflow: "hidden",
      color: theme.palette.background.paper
    },
    navPlaceholder: theme.mixins.toolbar,
    hide: {
      width: 0,
    },
    drawer: {
      flexShrink: 0,
      whiteSpace: "nowrap",
      marginTop: theme.spacing(7),
      maxWidth: "calc(100vw - 64px)",
    },
    drawerOpen: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
    },
    drawerContainer: { width: drawerWidth, padding: "2px 0px" },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: open.open ? "flex-end" : "center",
      padding: 0,
    },
    menuIconButton: { 
      padding: 0,
      margin: "8px 16px 8px 12px",
      color: theme.palette.error.main,
      backgroundColor: theme.palette.error.contrastText,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    menuIcon: {
      padding: theme.spacing(0.75),
      margin: 0,
      fontSize: '1.25em',
      fontWeight: 'bold'
    },
    treeView: {
      color: theme.palette.text.secondary,
      "&:focus > $content": {
        backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
        color: "var(--tree-view-color)",
      },
    },
    content: {
      flexGrow: 1,
      color: theme.palette.text.secondary,
      fontWeight: theme.typography.fontWeightMedium,
      marginLeft: open.perm ? drawerWidth : isMobile ? 0 : 77,
      transition: theme.transitions.create("margin-left", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: !isMobile
        ? `calc(100% - ${drawerWidth + theme.spacing(4)}px )`
        : `calc(100vw - ${theme.spacing(4)}px)`,
    },
    selected: {
      color: theme.palette.primary.main,
      borderTopRightRadius: open.open ? theme.spacing(2) : "100%",
      borderBottomRightRadius: open.open ? theme.spacing(2) : "100%",
      borderRadius: open.open ? 0 : "100%",
      paddingRight: theme.spacing(1),
      fontWeight: theme.typography.fontWeightMedium + 4,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    drawerPaper: {
      // width: 240,
      backgroundColor: theme.palette.primary.light,
    },
    bread: {
      display: "flex",
      flexWrap: "no-wrap",
      color: theme.palette.primary.contrastText,
    },
    avatar: {
      alignSelf: "center",
      marginBottom: 20,
      cursor: "pointer",
      width: theme.spacing(7),
      height: theme.spacing(7),
      margin: "auto",
      backgroundColor: "#c4c4c4",
    },
    tabs: {
      display: "flex",
      flexGrow: 1,
      justifyContent: "space-around",
      maxHeight: 70,
      backgroundColor: theme.palette.primary.main,
    },
    tab: {
      display: "flex",
      flexDirection: "column",
      color: theme.palette.primary.contrastText,
      fontWeight: "bold",
    },
    actual: {
      display: "flex",
      fontSize: 20,
      flexDirection: "column",
      color: theme.palette.secondary.light,
      fontWeight: "bold",
    },
    pageTitleIcon: {
      display: isMobile ? "none" : "initial",
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[1],
      borderRadius: 6,
      padding: theme.spacing(1),
    },
    treeViewRoot: {
      height: isMobile ? "calc(100vh - 84px)" : "calc(100vh - 148px)",
      overflowY: "scroll",
    },
    treeItemRoot: {},
    treeItemExpanded: {},
    treeItemSelected: {},
    treeItemGroup: {
      marginLeft: 0,
      padding: 0,
    },
    treeItemContent: {
      borderRadius: "0 16px 16px 0",
      "&:hover": {
        backgroundColor: open.open ? theme.palette.action.hover : "#0000",
      },
    },
    treeItemIconContainer: {
      display: open.open ? "" : "none",
    },
    treeItemLabel: {
      "&:hover": {
        backgroundColor: "#0000",
      },
      width: "fit-content",
      padding: theme.spacing(0, open.open ? 0 : 2),
    },
    treeItemIcon: {
      padding: theme.spacing(0.75),
    },

    "@media (min-width: 600px)": { drawer: { marginTop: theme.spacing(8) } },
  }));
  const [index, setIndex] = useState([0]);
  const [tabs, setTabs] = useState({ children: [0] }); // l'objet actuellement sélectionné ou son parent s'il n'a pas de children
  const history = useHistory();
  const classes = useStyles();
  let location = useLocation();
  const menu = (
    <IconButton
      color="inherit"
      //className={classes.menuIconButton}
      style={{margin: "8px 16px 8px 12px",padding:0}}
      onClick={() => dispatch({ type: open.perm ? "permClose" : "permOpen" })}
      fontSize="large"
    >
      <OutlinedIcon color="inherit" className={classes.menuIcon}>
        menu
      </OutlinedIcon>
    </IconButton>
  );
  function calcDrawerWidth() {
    return isMobile && !open.open
      ? 0
      : open.open
      ? 235 +
        20 *
          (index.length +
            (!readIndex(arr, index)
              ? 0
              : readIndex(arr, index).children
              ? 1
              : 0)) +
        5
      : theme.spacing(9) + 5;
  }
  useEffect(() => {
    setDrawerWidth(calcDrawerWidth());
  }, [open.open, index, isMobile]);

  useEffect(() => {
    if (location.pathname.split("/").length > 1 && arr.length > 0) {
      let loc = location.pathname
        .split("/")
        .slice(2, location.pathname.split("/").length);
      if (loc.slice(-1)[0] === "") loc = loc.slice(0, -1);
      let r = [...arr];
      let indx = loc.reduce((acc, cur) => {
        console.log(cur);
        acc = acc.concat(r.findIndex((j) => j.id === cur));
        console.log(r);
        r = r[r.findIndex((j) => j.id === cur)].children || [];
        return acc;
      }, []);
      setIndex(indx);
    }
  }, [location.pathname, arr]);
  useEffect(() => {
    if (index.length < 1) {
      setIndex([0]);
    } else {
      const ri =
        arr.length > 0 && index.length > 0
          ? readIndex(arr, index)
          : { children: [] };
      setTabs(
        ri.children ? ri : readIndex(arr, index.slice(0, index.length - 1))
      );
    }
  }, [arr, index]);

  const styleReducer = (node, isSelected) => ({
    fontWeight: "inherit",
    flexGrow: 1,
  });

  const onClickReducer = (node) => {
    if (!node.children) {
      setIndex([...node.index]);
      const ind = [];
      const url = node.index
        .reduce((acc, cur) => {
          ind.push(cur);
          return acc.concat(readIndex(arr, ind).id);
        }, [])
        .join("/");
      history.push(`${path}/${url}`);
      onClose()
    } else {
      setIndex(
        node.index === index
          ? node.index.slice(0, node.index.length - 1)
          : node.index
      );
    }
  };
  const onClose = () => {
    dispatch({ type: "permClose" });
  };
  const indx = [];
  const trueTab = readIndex(arr, index);
  let mouseInDrawer = false;
  //const widthCoef = (tab.width * tabs.children.length) / menuTabs.width;
  return (
    <div className={classes.root}>
      <AppBar
        color="primary"
        id="AppBar"
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          {menu}
          <div
            id="navigation"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: isMobile ? "space-between" : "center",
                alignItems: "center",
              }}
            >
              {
                <OutlinedIcon
                  className={classes.pageTitleIcon}
                  fontSize="large"
                  style={{
                    color: theme.palette.third,
                  }}
                >
                  {trueTab && trueTab.icon}
                </OutlinedIcon>
              }
              {
                <div className={classes.headerText}>
                  <Typography variant={isMobile ? "h5" : "h4"} className={classes.pageTitle}>
                    {trueTab && trueTab.label || trueTab.id}
                  </Typography>
                  {width > -1 && (<Typography className={classes.pageDescription}>
                    {trueTab && !isMobile && trueTab.description}
                  </Typography>)}
                </div>
              }
            </div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              { !session.connected && <OutlinedIcon size="medium" color="error"> wifi_off </OutlinedIcon> }
              <IconButton
                //color="inherit"
                key="Logout"
                size="medium"
                onClick={(e) => {
                  session.logout();
                }}
                className={classes.menuIconButton}
              >
                <OutlinedIcon className={classes.menuIcon}>
                  power_settings_new
                </OutlinedIcon>
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        onMouseEnter={() => {
          mouseInDrawer = true;
          !isMobile &&
            setTimeout(
              () =>
                !isMobile && mouseInDrawer && dispatch({ type: "tempOpen" }),
              500
            );
        }}
        onMouseLeave={() => {
          mouseInDrawer = false;
          !isMobile && dispatch({ type: "tempClose" });
        }}
        variant={isMobile ? "temporary" : "permanent"}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open.open,
          [classes.drawerClose]: !open.open,
        })}
        classes={{
          paper: clsx(classes.drawer, {
            [classes.drawerOpen]: open.open,
            [classes.drawerClose]: !open.open,
          }),
        }}
        id="NavMenuDrawer"
        //variant="persistent"
        anchor="left"
        open={open.open}
        onClose={onClose}
      >
        <div
          id="drawer"
          className={clsx(
            classes.drawerContainer,
            open.open ? classes.drawerOpen : classes.drawerClose
          )}
        >
          <Avatar
            className={classes.avatar}
            onClick={() => setUserNav(true)}
            style={{}}
          >
            {session.session.userName &&
              session.session.userName.split(" ").reduce((acc, cur) => {
                return acc + cur[0];
              }, "")}
          </Avatar>
          <TreeViews
            selected={index}
            id="TVMenu"
            data={arr}
            labelReducer={labelReducer}
            styleReducer={styleReducer}
            onClickReducer={onClickReducer}
            expanded={index.reduce(
              (acc, cur) => acc.concat(acc.slice(-1).join("") + cur),
              []
            )}
            defaultExpanded={["0"]}
            open={open.open}
            classes={{
              treeViewRoot: classes.treeViewRoot,
              root: classes.treeItemRoot,
              expanded: classes.Expanded,
              selected: classes.Selected,
              group: classes.treeItemGroup,
              content: classes.treeItemContent,
              iconContainer: classes.treeItemIconContainer,
              label: classes.treeItemLabel,
              icon: classes.treeItemIcon,
            }}
          />
        </div>
      </Drawer>
      <div className={classes.content}>
        <div className={classes.navPlaceholder} id="nav-placeholder"></div>
        <React.Suspense
          fallback={<CircularProgress size={70} color="primary" />}
        >
          <Switch>{Object.values(rts)}</Switch>
        </React.Suspense>
      </div>
      <Profile open={userNav} onClose={() => setUserNav(false)} />
    </div>
  );
}
MenuAppBar.propTypes = {
  arr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      icon: PropTypes.string,
      description: PropTypes.string,
      cond: PropTypes.func,
      children: PropTypes.array,
    })
  ),
};
MenuAppBar.defaultProps = {
  arr: [{}],
};