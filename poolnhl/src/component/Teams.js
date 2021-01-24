import { responsiveFontSizes } from "@material-ui/core";
import React, { useState, useEffect } from "react";

//https://statsapi.web.nhl.com/api/v1/

const Teams = () => {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                "https://statsapi.web.nhl.com/api/v1/teams"
            );
            const data = await response.json();
            console.log("data:", data);
            const item = data.teams;
            console.log("item:", item);
            setTeam(item);
        }
        fetchData();
    }, [setTeam]);

    return (
        <div>
            {team.map((t) => (
                <div></div>
            ))}
        </div>
    );
};

export default Teams;
