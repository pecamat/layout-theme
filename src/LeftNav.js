import "./App.css";
import React from "react";

function LeftNav({ height }) {
  const heightClass = height === "in-content" ? "in-content" : "";
  return (
    <div className={`left-nav ${heightClass}`}>
      <div className="slot vertical"></div>
      <div className="slot vertical-full"></div>
      <div className="slot vertical"></div>
    </div>
  );
}

export default LeftNav;
