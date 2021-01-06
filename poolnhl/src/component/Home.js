import React, { useEffect, useState, useMemo } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "./Home.css";
import { Button } from "@material-ui/core";
const Home = () => {
    const [loginPage, setLoginPage] = useState(true);

    //const [variable, setter] = useState(type);
    return (
        <div className="form-container">
            {loginPage ? <SignIn /> : <SignUp />}
            <Button onClick={() => setLoginPage(true)}>Login</Button>
            <Button onClick={() => setLoginPage(false)}>Register</Button>
        </div>
    );
};

export default Home;
