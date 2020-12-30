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
//#region StyleMaterialUI
const useStyles = makeStyles({
    drawer: {
        width: "15%",
    },
});
//#endregion

const Drawer = () => {
    const classes = useStyles();
    const itemsList = [
        { text: "Home", icon: <HomeIcon /> },
        { text: "Sign In", icon: <PermIdentityIcon /> },
        { text: "Sign Up", icon: <PersonAddIcon /> },
    ];
    return (
        <MUIDrawer variant="permanent" className={classes.drawer}>
            <List>
                {itemsList.map((item, index) => {
                    return (
                        <ListItem button key={item}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    );
                })}
            </List>
        </MUIDrawer>
    );
};

export default Drawer;
