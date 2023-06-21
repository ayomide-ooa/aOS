import React from 'react';
import './App.scss';
import Background from './Components/Background/Background'
import Menu from './Components/Menu/Menu';
import Card from './Components/Card/Card';
import { AppData } from './Components/Data/AppData';


function App() {
  return (
    <div className="App">
    <Card 
    appTitle={AppData.about_os.title} 
    appLogo={AppData.about_os.logo}
    appContent={AppData.about_os.content}/>
    <Menu/>
    <Background/>
    </div>
  );
}

export default App;
