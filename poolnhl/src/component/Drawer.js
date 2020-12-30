import React from "react";
import {
    Drawer as MUIDrawer,
    ListItem,
    List,
    ListItemText,
    ListItemIcon,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
        { text: "Home" },
        { text: "Sign In" },
        { text: "Sign Up" },
    ];
    return (
        <MUIDrawer variant="permanent" className={classes.drawer}>
            <List>
                {itemsList.map((item, index) => {
                    return (
                        <ListItem button key={item}>
                            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                            <ListItemText primary={item.text} />
                        </ListItem>
                    );
                })}
            </List>
        </MUIDrawer>
    );
};

export default Drawer;
