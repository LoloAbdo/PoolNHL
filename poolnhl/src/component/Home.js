import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import {
    Button,
    makeStyles,
    createMuiTheme,
    ThemeProvider,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    colorOn: {
        width: "255px",
        marginRight: theme.spacing(2),
        marginTop: "-250px",
        marginBottom: "-20px",
        backgroundColor: "#5e5959",
        color: "white",
    },
    colorOff: {
        width: "255px",
        marginRight: theme.spacing(2),
        marginTop: "-250px",
        marginBottom: "-20px",
        backgroundColor: "#ffffff",
        color: "black",
    },
    formContainerSignIn: {
        marginRight: "50px",
        marginBottom: "1px",
        position: "relative",
        backgroundColor: "rgb(247, 247, 247)",
        border: "1px solid",
        padding: "10%",
        marginTop: "4%",
        borderRadius: "6px",
        boxShadow:
            "0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)",
    },
    formContainerSignUp: {
        marginRight: "50px",
        marginBottom: "1px",
        position: "relative",
        backgroundColor: "rgb(247, 247, 247)",
        border: "1px solid",
        padding: "10%",
        marginTop: "4%",
        borderRadius: "6px",
        boxShadow:
            "0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)",
    },
}));

const theme = createMuiTheme({
    typography: {
        fontFamily: "Raleway",
        fontSize: 17,
        fontWeight: 100,
    },
});

const Home = () => {
    const [loginPage, setLoginPage] = useState(true);
    const classes = useStyles();
    //const [variable, setter] = useState(type);
    return (
        <ThemeProvider theme={theme}>
            <div
                className={
                    loginPage
                        ? classes.formContainerSignIn
                        : classes.formContainerSignUp
                }
            >
                <div>
                    <Button
                        className={
                            loginPage ? classes.colorOn : classes.colorOff
                        }
                        onClick={() => setLoginPage(true)}
                        variant={loginPage ? "contained" : "outlined"}
                        size="large"
                        color={loginPage ? classes.colorOn : classes.colorOff}
                    >
                        Sign In
                    </Button>
                    <Button
                        className={
                            !loginPage ? classes.colorOn : classes.colorOff
                        }
                        onClick={() => setLoginPage(false)}
                        variant={!loginPage ? "contained" : "outlined"}
                        size="large"
                    >
                        Sign Up
                    </Button>
                </div>
                {loginPage ? <SignIn /> : <SignUp />}
            </div>
        </ThemeProvider>
    );
};

export default Home;
