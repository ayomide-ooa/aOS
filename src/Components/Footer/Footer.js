import React from "react";
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faGear, faFolderTree, faI, faInbox, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
 
function Footer() {
    return (
    <div className="app-wrapper">
        <button className="apps-btn"><FontAwesomeIcon icon={faInbox} />   
        </button>       
        <button className="apps-btn"><FontAwesomeIcon icon={faInfoCircle} /> </button>       
        <button className="apps-btn"><FontAwesomeIcon icon={faBriefcase} /> </button>       
        <button className="apps-btn"><FontAwesomeIcon icon={faHome} /> </button>       
        <button className="apps-btn"><FontAwesomeIcon icon={faI} /> </button>       
        <button className="apps-btn"><FontAwesomeIcon icon={faFolderTree} /> </button>       
        <button className="apps-btn"><FontAwesomeIcon icon={faGear} /> </button>       
    </div>
    );
}

export default Footer;