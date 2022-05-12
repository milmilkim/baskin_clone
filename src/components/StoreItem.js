import React from "react";

const StoreItem = ({
  classname,
  titleimg,
  titlealt,
  contimg,
  contalt,
  articlename = "",
  children,
}) => {
  return (
    <article className={articlename}>
      <h3 className={classname}>
        <img src={titleimg} alt={titlealt} />
      </h3>
      {contimg && contalt && <img src={contimg} alt={contalt} />}
      {children}
    </article>
  );
};

export default StoreItem;
