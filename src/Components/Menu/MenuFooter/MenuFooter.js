import React from "react";
import './MenuFooter.scss';
import { Icons } from "../../Data/Icons";


function MenuFooter() {
    return (
        <div className="Menu-Footer">
            <div className="footer-content">
                <ul className="icn">
                <li title="Ayomide - PC">
                <img src={Icons.user_o} alt="user_icon"/>
                </li>
                <li><b>Ayomide - PC</b></li>
                </ul>

                <ul className="icn">
                <li title="Logout">
                <img src={Icons.logout} alt="logout_icon"/>
                </li>
                <li title="Restart">
                <img src={Icons.restart} alt="restart_icon"/>
                </li>
                <li title="Shutdown">
                <img src={Icons.shutdown} alt="shutdown_icon"/>
                </li>
                </ul>
            </div>
        </div>
    );
}

export default MenuFooter;