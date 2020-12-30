import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Divider, ListItemIcon, ListItemText } from "@material-ui/core";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
class NavBarLeft extends Component {
    state = {};
    render() {
        return (
            <div>
                <Drawer variant="persistent" anchor="Left"></Drawer>
            </div>
        );
    }
}

export default NavBarLeft;
