import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import './TeamInfo.css';

const TeamInfo = () =>
{
    let { id } = useParams();
    const [teamInfo, setTeamInfo] = useState([]);
    useEffect(() =>
    {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${ id }`)
            .then(res => res.json())
            .then(data => setTeamInfo(data.teams[0]))
    }, [id])

    if (!teamInfo)
    {
        return 'Loading...'
    }

    const { strTwitter, strTeamBadge, strYoutube, strFacebook, strTeam, intFormedYear, strGender, strSport, strCountry, strDescriptionEN } = teamInfo;

    return (
        <>
            <div className="container mt-5">
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={strTeamBadge} alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h3 class="card-title">{strTeam}</h3>
                                <h6 class="card-text">Team Formed: {intFormedYear}</h6>
                                <h6 class="card-text">Sports type: {strSport}</h6>
                                <h6 class="card-text">Gender: {strGender}</h6>
                                <h6 class="card-text">Country: {strCountry}</h6>
                                <p>{strDescriptionEN}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center py-3 icons">
                <a href={`https://${ strFacebook }`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} style={{ margin: '0 25px' }} /></a>
                <a href={`https://${ strTwitter }`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} style={{ color: '#00ACEE', margin: '0 25px' }} /></a>
                <a href={`https://${ strYoutube }`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} style={{ color: 'red', margin: '0 25px' }} /></a>
            </div>
        </>
    );
};

export default TeamInfo;