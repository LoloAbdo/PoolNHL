//#region Import
import React from "react";
import clsx from "clsx";
import {
    Drawer as MUIDrawer,
    ListItem,
    List,
    ListItemText,
    ListItemIcon,
    Divider,
    IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import MenuIcon from "@material-ui/icons/Menu";

import { withRouter } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
//#endregion

//#region StyleMaterialUI
const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        marginTop: theme.spacing(3),
    },
    menuButton: {
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(3),
    },
    hide: {
        display: "none",
    },
    papers: {
        background: "#f7f7f7",
        color: "black",
    },
}));

//#endregion

const Drawer = (props) => {
    const history = props.history;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const itemsList = [
        {
            text: "Home",
            icon: <HomeIcon />,
            onClick: () => history.push("/"),
        },
        {
            text: "Players",
            icon: <AccessibilityIcon />,
            onClick: () => history.push("/Players"),
        },
    ];
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.drawer}>
            <IconButton
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
            >
                <MenuIcon />
            </IconButton>
            <MUIDrawer
                variant="persistent"
                anchor="left"
                open={open}
                classes={{ paper: classes.papers }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
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
                <Divider />
            </MUIDrawer>
        </div>
    );
};

export default withRouter(Drawer);
