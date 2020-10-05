import React from 'react';
import logo from './logo.svg';
import './App.css';

import Row from './Row'
import requests from './requests'

function App() {
  return (
    <div className="App">
      <Row title= "NETFLIX ORIGINALS" fetchUrl={}></Row>
      <Row title= "Trending Now" fetchUrl={}></Row>
    </div>
  );
}

export default App;
