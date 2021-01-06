import "./App.css";
import Drawer from "./component/Drawer";
import Home from "./component/Home";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

//#region StyleMaterialUI
const useStyles = makeStyles({
    container: {
        display: "flex",
    },
});
//#endregion

function App() {
    const classes = useStyles();
    return (
        <Router>
            <body>
                <div className={"App"}>
                    <div className={classes.test}>
                        <div className={classes.container}>
                            <Drawer />
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </body>
        </Router>
    );
}

export default App;
