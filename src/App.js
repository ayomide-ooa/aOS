import React from 'react';
import './App.scss';
import Background from './Components/Background'
import Menu from './Components/Menu';
import { hide, rightClick } from './Functions/Click';
import Footer from './Components/Footer';
import Desktop from './Components/Desktop';

export default function App() {
  return (
    <div className="App" onClickCapture={() => hide(document.getElementById("contextMenu"))}
      onDoubleClick={() => hide(document.getElementById("Menu"))}
      onContextMenu={ rightClick }>

    <div id="contextMenu">
    <ul>
    <li><a href="refresh">Refresh</a></li>
    <li><a href="group by">Group by</a></li>
    <li><a href="view">View</a></li>
    <li><a href="new">New</a></li>
    <li><a href="setting">Setting</a></li>
    </ul>
    </div>

      <Menu />
      <Footer />
      <Desktop />
      <Background />
    </div>
  );
}