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
    AppBar,
    Toolbar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import MenuIcon from "@material-ui/icons/Menu";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { withRouter } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
//#endregion

//#region StyleMaterialUI
const drawerWidth = 200;
const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: "none",
    },
}));

//#endregion

const Drawer = (props) => {
    const history = props.history;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const itemsList = [
        { text: "Home", icon: <HomeIcon />, onClick: () => history.push("/") },
        // {
        //     text: "Sign In",
        //     icon: <PermIdentityIcon />,
        //     onClick: () => history.push("/signin"),
        // },
        // {
        //     text: "Sign Up",
        //     icon: <PersonAddIcon />,
        //     onClick: () => history.push("/signup"),
        // },
    ];
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div>
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
                className={classes.drawer}
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
