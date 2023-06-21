import React from "react";
import "./Header.scss";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as Ic from '@fortawesome/free-solid-svg-icons';


function Header() {
            return(
            <header>
                <ul>
                    <li><FontAwesomeIcon icon={Ic.faBatteryFull} className="fill"/></li>
                    <li><FontAwesomeIcon icon={Ic.faWifiStrong} className="fill"/></li>
                    <li><FontAwesomeIcon icon={Ic.faVolumeHigh} className="fill"/></li>
                    <li><FontAwesomeIcon icon={Ic.faLanguage} className="fill"/></li>
                </ul>
            </header>
        );
    }

export default Header;