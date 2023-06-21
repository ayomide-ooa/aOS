import React from "react";
import './Menu.scss';
import Img from '../../assets/img/desktop-bg.png';
import MenuIcon from "./MenuIcon/MenuIcon";
import MenuFooter from "./MenuFooter/MenuFooter";


function Menu() {
    return (
        <div className="Menu">
            <input type="input" placeholder="Search" className="menu-search" />
            
            <div className="apps-grid">
                <MenuIcon />
            </div>
                <MenuFooter />
            <img src={Img} height="100" width="100" alt={Img.name}/>
        </div>
    );
}

export default Menu;