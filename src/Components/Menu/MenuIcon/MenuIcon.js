import React from "react";
import './MenuIcon.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as mIc from '@fortawesome/free-solid-svg-icons';

function MenuIcon() {
    return (
        <>
        <button className="apps-icon">
                <FontAwesomeIcon icon={mIc.faCalculator} />
                <span>Calculator</span>
                </button>
                <button className="apps-icon">
                <FontAwesomeIcon icon={mIc.faFolder} />
                <span>Folder</span>
                </button>
                <button className="apps-icon">
                <FontAwesomeIcon icon={mIc.faCalendar} />
                <span>Calender</span>
                </button>
                <button className="apps-icon">
                <FontAwesomeIcon icon={mIc.faCamera} />
                <span>Camera</span>
                </button>
                <button className="apps-icon">
                <FontAwesomeIcon icon={mIc.faCog} />
                <span>Setting</span>
                </button>
                <button className="apps-icon">
                <FontAwesomeIcon icon={mIc.faEnvelope} />
                <span>Message</span>
                </button>
                <button className="apps-icon">
                <FontAwesomeIcon icon={mIc.faAddressBook} />
                <span>Contacts</span>
                </button>
                <button className="apps-icon">
                <FontAwesomeIcon icon={mIc.faMap} />
                <span>Map</span>
                </button>
                <button className="apps-icon">
                <FontAwesomeIcon icon={mIc.faPhone} />
                <span>Phone</span>
                </button>
                <button className="apps-icon">
                <FontAwesomeIcon icon={mIc.faVideo} />
                <span>Video</span>
                </button>
                <button className="apps-icon">
                <FontAwesomeIcon icon={mIc.faFileImage} />
                <span>Gallery</span>
                </button>
        </>
    );
}

export default MenuIcon;