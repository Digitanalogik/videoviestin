import React from "react";
import Item from "./Item";
import "./ItemSlider.css";

const ItemSlider = (props) => {
  if (props === undefined || props.items === undefined) {
    return <span>Ladataan...</span>;
  }

  const { items, setSelected } = props;

  if (items) {
    return (
      <div className="item-slider">
        {items.map(item => (
          <Item key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            url={item.url}
            onClick={setSelected}
          />
        ))}
      </div>
    );  
  }
}

export default ItemSlider;