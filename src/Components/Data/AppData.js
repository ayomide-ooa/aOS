import { faComputer } from '@fortawesome/free-solid-svg-icons'; 
import aos_logo from '../../assets/img/aos_logo.png';
import './Data.scss';

export const AppData = {
about_os : {
    title: "About aOS",
    logo: aos_logo,
    content: <><h2>About aOS</h2>
    <p>aOS is a web-base operating system developed by <abbr title="Okunola Opeyemi Ayomde">OOA</abbr>, this web app is strictly built in React and SASS.</p>
    <table>
        <caption>About this Os</caption>
        <tr>
        <td>Edition</td>
        <td>aOS Beta </td>
        </tr>
        <tr>
        <td>Version</td>  
        <td>1.0</td>  
        </tr>
        <tr>
        <td>Launched on</td>  
        <td>Very soon</td>  
        </tr>
        <tr>
        <td>OS build</td> 
        <td>202306</td> 
        </tr>
        <tr>
        <td>Product ID</td>  
        </tr>
        <tr>
        <td>System type</td>
        </tr>
    </table>
    </>
},
about_developer : {
    title: "About Developer",
    logo: faComputer,
    content: <><h2>About Developer</h2>
    <p></p></>
}
}