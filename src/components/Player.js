import React from 'react';
import './Player.css';

const Player = ({ title, description, url }) => {
  if (url) {
    return (
      <div className="player">
        <video className="video" autoPlay controls key={url}>
          <source src={url} type="video/mp4" />
        </video>
        <div className="video-text">
          <h3>{title}</h3>
          <span>{description}</span>
        </div>
  
      </div>
    )  
  } else {
    return (
      <h1>Valitse video</h1>
    )
  }

}

export default Player;