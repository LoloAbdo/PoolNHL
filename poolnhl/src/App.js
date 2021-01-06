import "./App.css";
import Drawer from "./component/Drawer";
import Home from "./component/Home";
import Patin from "./Patin.png";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

//#region StyleMaterialUI
const useStyles = makeStyles({
    container: {
        display: "flex",
    },
    imgHome: {
        position: "absolute",
        backgroundImage: Patin,
    },
});
//#endregion

function App() {
    const classes = useStyles();
    return (
        <Router>
            <div className="App">
                <div className={classes.container}>
                    <img src={Patin} className={classes.imgHome} />
                    <Drawer />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
