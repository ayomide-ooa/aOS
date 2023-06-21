import React from 'react';
import './Card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as ic from '@fortawesome/free-solid-svg-icons';

function Card({appTitle, appLogo, appContent}) {
    return (
        <>
        <div className="Card" draggable="true">
            <div className="card-header">
                <div className="left details">
                    <span> <img src={ appLogo } height="15vw"/> </span>
                    <span style={{fontSize:"1.2vw"}}>{appTitle}</span>
                </div>
                <div className="right details">
                <span><FontAwesomeIcon icon={ic.faWindowMinimize} /> </span>
                <span><FontAwesomeIcon icon={ic.faWindowRestore} /> </span>
                <span><FontAwesomeIcon icon={ic.faWindowClose} /> </span>
                </div>
            </div>
            <div className="card-content">
                <img src={ appLogo } className="app-logo" />
                { appContent }
            </div>
        </div>
        </>
    );
}

export default Card;