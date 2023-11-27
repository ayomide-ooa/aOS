import React from "react";
import './NotificationBar.scss';
import { Clock } from '../../Functions/Clock';
import { Icons } from '../Data/Icons';

function NotificationBar() {
            return(
            <notification>
                <ul>
                <li title="Notification">
                        <img src={ Icons.notification } alt="icons" /></li>

                    {/* <span className="time"> */}
                    <li className="time">
                        <span className="time"> { Clock() } </span>
                    <span className="date">{
                        new Date().toLocaleDateString('en-US', {
                            day: "numeric",
                            month: "short",
                            year: "2-digit"
                          })}
                          </span>
                    </li>

                    <li title="Speaker">
                        <img src={ Icons.speaker } alt="icons" /></li>

                    <li title="Battery">
                        <img src={ Icons.battery_full } alt="icons" /></li>

                    <li title="Internet">
                        <img src={ Icons.wifi } alt="icons" /></li>

                    <li title="Weather">
                        <img src={ Icons.cloud } alt="icons" /></li>
                </ul>
            </notification>
        );
    }

export default NotificationBar;