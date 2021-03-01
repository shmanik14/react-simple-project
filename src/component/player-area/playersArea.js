import React, { useState, useEffect } from 'react';
import Player from '../players/players';
import Row from 'react-bootstrap/Row';
import Cart from '../player-cart/Cart';

const Players = () => {
  const [ players, setplayers ] = useState([]);
  useEffect(() => {
    fetch('./data/data.json')
      .then((res) => res.json())
      .then(data => setplayers(data))
  }, []);
  const [selected, setSelected] = useState([]);
    const handleAddPlayer = (player) =>{
        const newPlayer = [...selected, player];
        setSelected(newPlayer);
    }
    return (
        <div className="container">
            <Cart selected={selected}></Cart>
            <Row>
                {
                    players.map(player => <Player key={player.id} handleAddPlayer = {handleAddPlayer} player={player}></Player>)
                }
            </Row>
            
        </div>
    );
};

export default Players;