import React, { Component } from "react";
import {
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    makeStyles,
    TextField,
    ThemeProvider,
    createMuiTheme,
} from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
    txtFieldEmail: {
        marginTop: "-50px",
        width: "75%",
    },
    txtFieldPassword: {
        marginTop: "6px",
        width: "75%",
        marginBottom: "25px",
        textAlign: "center",
    },
    buttonLogIn: {
        marginTop: "15px",
        width: "75%",
        height: "40px",
        marginBottom: "-150px",
    },
    chcBox: {
        marginLeft: "15px",
        textAlign: "center",
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#5E5959",
        },
    },
    typography: {
        fontFamily: "Raleway",
        fontSize: 17,
        fontWeight: 100,
    },
});

const SignIn = () => {
    const classes = useStyles();
    return (
        <Container>
            <form>
                <ThemeProvider theme={theme}>
                    <TextField
                        className={classes.txtFieldEmail}
                        variant="outlined"
                        label="Username"
                    />
                    <TextField
                        className={classes.txtFieldPassword}
                        variant="outlined"
                        label="Password"
                        type="password"
                    />
                    <FormControlLabel
                        className={classes.chcBox}
                        control={<Checkbox value="remeber" color="inherit" />}
                        label="Remember me"
                    />
                </ThemeProvider>
            </form>
            <Button className={classes.buttonLogIn} variant="contained">
                Log In
            </Button>
        </Container>
    );
};

export default SignIn;
