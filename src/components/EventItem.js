import React from "react";

const EventItem = ({ thumbnail, alt1, category, alt2, etc, children }) => {
  return (
    <li>
      <img src={thumbnail} alt={alt1} className="thumbnail" />
      <img src={category} alt={alt2} className="category" />
      <p>{children}</p>
      <p className="etc">{etc}</p>
    </li>
  );
};

export default EventItem;
