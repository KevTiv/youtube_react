import React from 'react';
import './App.css';
import SideBar from './topPanel/SideBar.js'
import YoutubeBar from './topPanel/YoutubeBar.js'
import FilterBar from './topPanel/FilterBar.js'

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="topBar">
        <YoutubeBar />
        <FilterBar />
      </div>
    </div>
  );
}

export default App;
