import React from "react";
import { Icons } from "../../Data/Icons";

const MenuWidget = () => {
    return (
        <div className="MenuWidget">
            <div className="apps-widget">
                <img src={Icons.internet} alt="Internet_icon" />
                <span>
                    <p>Internet Browser</p>
                    <p>Lorem Ipsum dolor sit ament, ying yang egg garden, kefbjfefxsnsjswkwkfkwd, default, Setting_icon</p>
                </span>
            </div>

            <div className="apps-widget">
                <img src={Icons.gear} alt="Setting_icon" />
                <span>
                    <p>Setting</p>
                    <p>Lorem Ipsum dolor sit ament, ying yang egg garden</p>
                </span>
            </div>

            <div className="apps-widget">
                <img src={Icons.user} alt="User_icon" />
                <span>
                    <p>User Info</p>
                    <p>Lorem Ipsum dolor sit ament, ying yang egg garden</p>
                </span>
            </div>

            <div className="apps-widget">
                <img src={Icons.map} alt="Map_icon" />
                <span>
                    <p>Map </p>
                    <p>Lorem Ipsum dolor sit ament, ying yang egg garden</p>
                </span>
            </div>
        </div>
    )
}

export default MenuWidget;