import './Footer.scss'
import { show, Show_Hide } from '../../Functions/Click'
import NotificationBar from '../NotificationBar'
import Card from '../Card';
import { Icons } from '../Data/Icons';

function Footer() {

    return (
        <div className="footer">
            <footer>
                <div className="app-wrapper logo">
                    <img src={Icons.full_logo} alt="logo_icon" />
                </div>
                <div className="app-wrapper">
                    <button className="apps-btn fa" title="Message">
                        <img src={ Icons.info } />
                    </button>
                    <button className="apps-btn fa" title="Info">
                        <img src={ Icons.user } />
                    </button>
                    <button className="apps-btn fa" title="Browser">
                        <img src={Icons.internet} />
                    </button>

                    <button className="apps-btn" title="aOS Home">
                        <img src={ Icons.apps } alt="aOS_logo"
                        onClick={() => Show_Hide(document.getElementById("Menu")) }
                        />
                    </button>

                    <button className="apps-btn fa" title="">
                        <img src={ Icons.search } />
                    </button>

                    <button className="apps-btn fa" title="File Manager">
                        {/* <img src={Icons.file} />  */}
                        <Card src={Icons.file} alt="Folder_icon" name={null} />
                        </button>

                    <button className="apps-btn fa" title="Setting">
                    <img src={Icons.gear} /> </button>
                </div>
                <div className="app-wrapper notification-wrapper">
                    <NotificationBar />
                </div>
            </footer>
        </div>
    );
}

export default Footer;