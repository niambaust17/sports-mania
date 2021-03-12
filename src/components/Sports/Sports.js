import React from 'react';
import './Sports.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';

const Sports = (props) =>
{
    const { sport } = props;
    const { strSport, strSportThumb } = sport;
    const history = useHistory();
    return (
        <div className="col">
            <div className="card">
                <div className="card-body text-center">
                    <img src={strSportThumb} className="card-img-top" alt="" />
                </div>
                <div className="card-footer text-center">
                    <h5 className="card-title">{strSport}</h5>
                    <button onClick={() => history.push(`/sport/${ strSport }`)} className="btn btn-outline-success btn-sm">Explore <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
            </div>
        </div>
    );
};

export default Sports;