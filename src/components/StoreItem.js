import React from "react";

const StoreItem = ({
  classname,
  titleimg,
  titlealt,
  contimg,
  contalt,
  url,
  articlename = "",
  children,
}) => {
  return (
    <article className={articlename}>
      <h3 className={classname}>
        <img src={titleimg} alt={titlealt} />
      </h3>
      {contimg && contalt && (
        <a href={url} target="_blank" rel="noreferrer">
          <img src={contimg} alt={contalt} />
        </a>
      )}
      {children}
    </article>
  );
};

export default StoreItem;
