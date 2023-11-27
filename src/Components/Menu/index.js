import React from "react";
import './Menu.scss';
import MenuIcon from "./MenuIcon/MenuIcon";
import MenuFooter from "./MenuFooter/MenuFooter";
import { Icons } from "../Data/Icons"
import MenuWidget from "./MenuIcon/MenuWidget";


function Menu() {
    return (
        <div className="Menu" id="Menu" onClick={() => document.getElementById("Menu").style.zIndex += 1}>
            <div className="menu-search">
                <span>
                    <input type="input" placeholder="Search" />
                </span>
                <button className="search_icon">
                    <img src={Icons.search_o} alt="search_outline_icon" />
                </button>
            </div>

            <div className="apps-grid">
                <MenuIcon />
            </div>

            <div className="apps-grid">
                <MenuWidget />
            </div>
            <MenuFooter />
        </div>
    );
}

export default Menu;