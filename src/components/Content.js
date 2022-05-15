import React from "react";
import TopBanner from "./TopBanner";
import Swipe from "./Swipe";
import Event from "./Event";
import Store from "./Store";
import Instagram from "./Instagram";
import BrMenu from "./BrMenu";

function Content() {
  return (
    <div style={{ marginTop: "6px" }}>
      <TopBanner />
      <Swipe />
      <Event />
      <BrMenu />
      <Store />
      <Instagram />
    </div>
  );
}

export default Content;
