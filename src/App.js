import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header/Header';
import Players from './component/player-area/playersArea';



function App() {

  return (    
    <div>
      <Header></Header>
      <Players></Players>
    </div>
  );
}

export default App;
