import "./App.css";
import React from "react";

function TopNav({ width, isFull }) {
  let widthClass = "";
  if (isFull === true) {widthClass = width === "content" ? "top-nav-width-full" : "" }
  else {widthClass = width === "content" ? "top-nav-width-content" : "" };

  return (
    <div className="top-nav-wrapper top-nav-border">
      <div className={`top-nav ${widthClass}`}>
        <div className="slot horizontal"></div>
        <div className="slot horizontal-full"></div>
        <div className="slot horizontal"></div>
      </div>
    </div>
  );
}

export default TopNav;
