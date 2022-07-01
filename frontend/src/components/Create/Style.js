import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    header: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },

    container: {
        maxWidth: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "space-between",
        flexWrap: "wrap"

    },
    checkboxes: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "space-around",
        maxWidth: "100%",
        maxHeight: "500px",
        flexDirection: "column",
        flexWrap: "wrap",
    },

    InpBox: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "space-between",
        flexDirection: "row",
    },
    discription: {
        fontFamily: "arial",
        display: "flex",
        justifyContent: "center",

    },
    text: {
        marginRight: "20px",
        color: "#404040",
        padding: "4px",
        width: "100%"
    },
    content: {
        display: "flex",
        flexDirection: "column",
        //justifyContent: "space-around",
        //alignItems: "space-around",
    },
    load: {
        marginTop: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    }
}));