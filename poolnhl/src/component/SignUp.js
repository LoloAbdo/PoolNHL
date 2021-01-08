import {
    Container,
    TextField,
    createMuiTheme,
    makeStyles,
    ThemeProvider,
    Button,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    txtUsername: {
        marginTop: theme.spacing(-7),
        width: "75%",
    },
    txtEmail: {
        marginTop: theme.spacing(2),
        width: "75%",
    },
    txtPassword: {
        marginTop: theme.spacing(2),
        width: "75%",
    },
    btnRegister: {
        marginTop: theme.spacing(2),
        width: "75%",
        marginBottom: theme.spacing(-6),
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

const SignUp = () => {
    const classes = useStyles();
    return (
        <Container className={classes.contCenter}>
            <ThemeProvider theme={theme}>
                <form>
                    <TextField
                        className={classes.txtUsername}
                        variant="outlined"
                        label="Username"
                    />
                    <TextField
                        className={classes.txtEmail}
                        variant="outlined"
                        label="Email address"
                    />
                    <TextField
                        className={classes.txtPassword}
                        variant="outlined"
                        label="Password"
                    />
                    <TextField
                        className={classes.txtPassword}
                        variant="outlined"
                        label="Confirm Password"
                    />
                </form>
                <Button variant="contained" className={classes.btnRegister}>
                    Register
                </Button>
            </ThemeProvider>
        </Container>
    );
};

export default SignUp;
