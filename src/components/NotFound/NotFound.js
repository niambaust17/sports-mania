import React from 'react';
import img from '../../images/notfound.svg';
import './NotFound.css';

const NotFound = () =>
{
    return (
        <div className="container text-center not-found">
            <img src={img} alt="" />
        </div>
    );
};

export default NotFound;