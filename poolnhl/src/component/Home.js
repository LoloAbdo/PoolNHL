import React, { Component } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "./Home.css";
import { Button } from "@material-ui/core";

class Home extends Component {
    state = {
        loginPage: true,
    };

    render() {
        const toLoginPage = () => {
            this.setState({ loginPage: true });
        };
        const toRegisterPage = () => {
            this.setState({ loginPage: false });
        };
        return (                
            <div className="form-container">
                {this.state.loginPage ? <SignIn /> : <SignUp />}
                <Button onClick={toLoginPage}>Login</Button>
                <Button onClick={toRegisterPage}>Register</Button>
            </div>
        );
    }
}

export default Home;
