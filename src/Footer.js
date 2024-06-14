import "./App.css";
import React from "react";

function Footer({ width, isFull }) {
  let widthClass = "";
  if (isFull === true) {widthClass = width === "content" ? "footer-width-full" : "" }
  else {widthClass = width === "content" ? "footer-width-content" : "" };

  return (
<div className="footer-wrapper footer-border">
      <div className={`footer ${widthClass}`}>
        <div className="slot horizontal"></div>
        <div className="slot horizontal-full"></div>
        <div className="slot horizontal"></div>
      </div>
  
</div>  );
}

export default Footer;
