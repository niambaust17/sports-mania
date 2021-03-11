import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Team from '../Team/Team';

const Teams = () =>
{
    let { leagueName } = useParams();
    const [teams, setTeams] = useState([]);
    useEffect(() =>
    {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=${ leagueName }`)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [leagueName])

    return (
        <div className="container my-5">
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    teams.map(team => <Team key={team.idTeam} team={team}></Team>)
                }
            </div>
        </div>
    );
};

export default Teams;