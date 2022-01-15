import React from 'react';
import './Item.css';

const Item = (props) => {
  return (
    <div className="item" onClick={() => props.onClick(props)}>
      <div className="image">
        <img src={props.image} alt="thumbnail" />
      </div>
      <div className="text">
        <h3>{props.title}</h3>
        <span>{props.description}</span>
      </div>
    </div>
  );
}

export default Item;