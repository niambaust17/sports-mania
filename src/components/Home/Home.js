import React, { useEffect, useState } from 'react';
import Sports from '../Sports/Sports';

const Home = () =>
{
    const [sports, setSports] = useState([]);
    useEffect(() =>
    {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_sports.php')
            .then(res => res.json())
            .then(data => setSports(data.sports))
    }, [])

    return (
        <div className="container my-5">
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    sports.map(sport => <Sports key={sport.idSport} sport={sport}></Sports>)
                }
            </div>
        </div>
    );
};

export default Home;