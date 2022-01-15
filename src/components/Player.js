import React from 'react';
import image from '../images/media-uutiset.jpg';
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
      <img className="placeholder-image" src={image} alt="Placeholder" />
    )
  }

}

export default Player;