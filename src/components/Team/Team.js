import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';

const Team = (props) =>
{
    const { team } = props;
    const { idTeam, strTeam, strTeamBadge, strStadiumLocation } = team;
    const history = useHistory();
    return (
        <div className="col">
            <div className="card h-100">
                <div className="card-body text-center">
                    <img src={strTeamBadge} className="card-img-top" alt="..." />
                </div>
                <div className="card-footer text-center">
                    <h6 className="card-title">{strTeam}</h6>
                    <p className="card-title">Stadium: {strStadiumLocation}</p>
                    <button onClick={() => history.push(`/team/${ idTeam }`)} className="btn btn-outline-success btn-sm">Explore <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
            </div>
        </div>
    );
};

export default Team;