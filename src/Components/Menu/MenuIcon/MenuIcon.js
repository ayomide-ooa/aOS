import React from "react";
import { Icons } from "../../Data/Icons";


function MenuIcon() {
    return (
        <>
            <button className="apps-icon">
                <img src={Icons.internet} alt="Internet_icon" />
                <span>Internet Browser</span>
            </button>

            <button className="apps-icon">
                <img src={Icons.cal} alt="Calculator_icon" />
                <span>Calculator</span>
            </button>

            <button className="apps-icon">
            <img src={Icons.file} alt="Folder_icon" />
                <span>Folder</span>
            </button>

            <button className="apps-icon">
            <img src={Icons.calender } alt="Calender_icon" />
                <span>Calender</span>
            </button>

            <button className="apps-icon">
            <img src={Icons.camera } alt="Camera_icon" />
                <span>Camera</span>
            </button>

            <button className="apps-icon">
            <img src={Icons.gear } alt="Setting_icon" />
                <span>Setting</span>
            </button>

            <button className="apps-icon">
            <img src={Icons.mail } alt="Message_icon" />
                <span>Message</span>
            </button>
            
            <button className="apps-icon">
            <img src={Icons.users } alt="Contacts_icon" />
                <span>Contacts</span>
            </button>

            <button className="apps-icon">
                <img src={Icons.map } alt="Map_icon" />
                <span>Map</span>
            </button>

            <button className="apps-icon">
                <img src={Icons.call} alt="Phone_icon" />
                <span>Phone</span>
            </button>

            <button className="apps-icon">
                <img src={Icons.music} alt="Music_icon" />   
                <span>Music</span>
            </button>

            <button className="apps-icon">
                <img src={Icons.video} alt="Video_icon" />   
                <span>Video</span>
            </button>

            <button className="apps-icon">
                <img src={Icons.gallery} alt="Gallery_icon" />
                <span>Gallery</span>
            </button>

            <button className="apps-icon">
                <img src={Icons.note} alt="Note_Book_icon" />
                <span>Note Book</span>
            </button>
        </>
    );
}

export default MenuIcon;