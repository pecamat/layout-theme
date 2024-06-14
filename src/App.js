import React from "react";
import Content from "./Content";
import TopNav from "./TopNav";
import LeftNav from "./LeftNav";
import Footer from "./Footer";

import "./App.css";

const App = ({ width, topNavLayout, footerLayout }) => {
  const widthClass = width === "full" ? "width-full" : "width-hug";
  const leftNav = topNavLayout === "on-top" ? "in-content" : "";
  const isLayoutFull = width === "full" ? true : false;

  const topNav = (<TopNav width = 'full' isFull = {isLayoutFull}/>);
  const footer = (<Footer width = 'content' isFull = {isLayoutFull}/>);
  
  return (
    <div className={`app-container ${widthClass}`}>
      {topNavLayout === "on-top" ? topNav : ""}
      <div className="flex-horizontal">
        <LeftNav height = {leftNav} />
        <div className="content-container">
          {topNavLayout === "in-content" ? topNav : ""}
          <Content isFull = {isLayoutFull} />
          {footerLayout === "in-content" ? footer : ""}
        </div>
      </div>
      {footerLayout === "bottom" ? footer : ""}
    </div>
  );
};
export default App;
