import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    form: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",

    },
    result: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
        width: "400px",
        height: "50px",
        backgroundColor: "#e67e07"

    }
}));