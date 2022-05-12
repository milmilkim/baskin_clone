import React from "react";
import TopBanner from "./TopBanner";
import Swipe from "./Swipe";
import Store from "./Store";

function Content() {
  return (
    <div style={{ marginTop: "6px" }}>
      <TopBanner />
      <Swipe />
      <Store />
    </div>
  );
}

export default Content;
