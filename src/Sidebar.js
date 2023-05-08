import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      {/* top */}
      <div className="sidebar__top">
        <img
          src="https://www.gatech.edu/sites/default/files/styles/hero_16_9_large_992x558_/public/half-half/main-campus.jpg?h=b6101ac9&itok=3N_Z_TOq"
          alt=""
        />
        <Avatar className="sidebar_avatar" />
        <h2>Molin Deng</h2>
        <h4>zjumorning@gmail.com</h4>
      </div>
      {/* statics */}
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">1,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">1,448</p>
        </div>
      </div>
      {/* bottom */}
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("developers")}
      </div>
    </div>
  );
}

export default Sidebar;
