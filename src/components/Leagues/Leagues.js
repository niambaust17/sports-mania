import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import League from '../League/League';

const Leagues = () =>
{
    let { sportName } = useParams();
    const [leagues, setLeagues] = useState([]);
    useEffect(() =>
    {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?s=${ sportName }`)
            .then(res => res.json())
            .then(data => setLeagues(data.countrys))
    }, [sportName])

    return (
        <div className="container my-5">
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    leagues.map(league => <League key={league.idLeague} league={league}></League>)
                }
            </div>
        </div>
    );
};

export default Leagues;