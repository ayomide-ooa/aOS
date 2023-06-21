import React from "react";
import './MenuFooter.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as FtIc from '@fortawesome/free-solid-svg-icons'


function MenuFooter() {
    return (
        <div className="Menu-Footer">
            <div className="footer-content">
                <div className="icn">
                <span title="Ayomide - PC">
                <FontAwesomeIcon icon={FtIc.faUserCircle} />
                </span>
                <span style={{paddingLeft:"0"}}>Ayomide</span>
                </div>

                <div className="icn">
                <span title="Sleep">
                <FontAwesomeIcon icon={FtIc.faMoon} flip="horizontal"/>
                </span>
                <span title="Restart">
                <FontAwesomeIcon icon={FtIc.faUndo} />
                </span>
                <span title="Shutdown">
                <FontAwesomeIcon icon={FtIc.faPowerOff} />
                </span>
                </div>
            </div>
        </div>
    );
}

export default MenuFooter;