import React from 'react';
import './App.css';
import SideBar from './sidePanel/SideBar.js'
import YoutubeBar from './topPanel/YoutubeBar.js'
import FilterBar from './topPanel/FilterBar.js'
import MainPanel from './mainPanel/MainPanel.js'

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="mainBody">
      <div className="topBar">
        <YoutubeBar />
        <FilterBar />
      </div>
      <MainPanel />
      </div>
      
    </div>
  );
}

export default App;
