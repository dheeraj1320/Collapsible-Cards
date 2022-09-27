import React, { useState } from "react";
import Tours from "./Tours";

const Tour = ({ id, info, image, price, name, removeTours }) => {
  const [readMore, setReadMore] = useState(false);

  let updatedInfo = info;
  let btnName = readMore ? "Show Less" : "Read More";

  if (!readMore) updatedInfo = `${info.substring(0, 200)}...`;

  return (
    <article className="single-tour">
      <img src={image} alt={name} />

      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {updatedInfo}
          <button onClick={() => setReadMore(!readMore)}>{btnName}</button>
        </p>
        <button className="delete-btn" onClick={() => removeTours(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
