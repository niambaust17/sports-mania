import React from 'react';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './League.css';

const League = (props) =>
{
    const { league } = props;
    const { strBadge, strCountry, strLeague } = league;
    const history = useHistory();

    return (
        <div className="col">
            <div className="card h-100">
                <div className="card-body text-center">
                    <img src={strBadge} className="card-img-top" alt="..." />
                </div>
                <div className="card-footer text-center">
                    <h6 className="card-title">{strLeague}</h6>
                    <p className="card-title">Country: {strCountry}</p>
                    <button onClick={() => history.push(`/league/${ strLeague }`)} className="btn btn-outline-success btn-sm">Explore <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
            </div>
        </div>
    );
};

export default League;