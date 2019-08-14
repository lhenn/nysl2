import React from 'react';

const Game = ({game}) => {
  return (
    <div className="game-info">
      <div className="game-date-location">
        <div className="game-date">{game.date}</div>
        <div className="game-time">{game.time}</div>
        <div className="game-location">{game.location}</div>
      </div>
      <div className="game-match">
        <span className="home-team">{game.team}</span> vs. <span className="opponent-team">{game.opponent}</span> 
      </div>
    </div>
  )
}

export default Game;
