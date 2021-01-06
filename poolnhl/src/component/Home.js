import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    colorOn: {
        width: "200px",
        marginRight: theme.spacing(2),
        marginTop: "-300px",
        marginBottom: "-50px",
        backgroundColor: "#5e5959",
        color: "white",
    },
    colorOff: {
        width: "200px",
        marginRight: theme.spacing(2),
        marginTop: "-300px",
        marginBottom: "-50px",
        backgroundColor: "#ffffff",
        color: "black",
    },
    formContainer: {
        /* display: inline-block; */
        position: "relative",
        backgroundColor: "rgb(247, 247, 247)",
        border: "1px solid",
        padding: "12%",
        margin: "auto",
        marginTop: "7%",
        borderRadius: "6px",
        boxShadow:
            "0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)",
    },
}));

const Home = () => {
    const [loginPage, setLoginPage] = useState(true);
    const classes = useStyles();
    //const [variable, setter] = useState(type);
    return (
        <div className={classes.formContainer}>
            <div>
                <Button
                    className={loginPage ? classes.colorOn : classes.colorOff}
                    onClick={() => setLoginPage(true)}
                    variant={loginPage ? "contained" : "outlined"}
                    size="large"
                    color={loginPage ? classes.colorOn : classes.colorOff}
                >
                    Sign In
                </Button>
                <Button
                    className={!loginPage ? classes.colorOn : classes.colorOff}
                    onClick={() => setLoginPage(false)}
                    variant={!loginPage ? "contained" : "outlined"}
                    size="large"
                >
                    Sign Up
                </Button>
            </div>
            {loginPage ? <SignIn /> : <SignUp />}
            <Button>{loginPage ? "Log in" : "Register"}</Button>
        </div>
    );
};

export default Home;
