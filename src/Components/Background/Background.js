import React from 'react';
import './Background.scss';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'

function Background() {
    return (
        <main className="Background">
        <Header />
        <div className="date-time-wrapper">
        <span className="time">12:00</span>
        <span className="date">Sun ,June 11</span>
        </div>
        <Footer />

        </main>
    );
}

export default Background;