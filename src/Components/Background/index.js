import React from 'react';
import './style.scss';
// import { Clock, RealDate } from '../../Functions/Clock';
import Card from '../Card';


function Background() {
    return (
        <main className="Background">
        {/* <div className="date-time-wrapper">
        <span className="time">{ Clock() }</span>
        <span className="date">{ RealDate() }</span>
        </div> */}
        <Card />
        </main>
    )
}

export default Background;