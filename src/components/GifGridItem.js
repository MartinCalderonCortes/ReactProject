import React from "react";

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="card animate__animated animate__fadeInRightBig">
      <img src={url} alt={title} />
      <p>{`${title}`} </p>
      {/* <li>{title} </li> */}
    </div>
  );
};
