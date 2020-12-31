import React from "react";
import {
    Drawer as MUIDrawer,
    ListItem,
    List,
    ListItemText,
    ListItemIcon,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { withRouter } from "react-router-dom";

//#region StyleMaterialUI
const useStyles = makeStyles({
    drawer: {
        width: "15%",
    },
});
//#endregion

const Drawer = (props) => {
    const history = props.history;
    const classes = useStyles();
    const itemsList = [
        { text: "Home", icon: <HomeIcon />, onClick: () => history.push("/") },
        {
            text: "Sign In",
            icon: <PermIdentityIcon />,
            onClick: () => history.push("/signin"),
        },
        {
            text: "Sign Up",
            icon: <PersonAddIcon />,
            onClick: () => history.push("/signup"),
        },
    ];
    return (
        <MUIDrawer variant="permanent" className={classes.drawer}>
            <List>
                {itemsList.map((item, index) => {
                    return (
                        <ListItem button key={item} onClick={item.onClick}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    );
                })}
            </List>
        </MUIDrawer>
    );
};

export default withRouter(Drawer);
