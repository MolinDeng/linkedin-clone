import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
  // get data from Redux store
  const account = useSelector(selectUser);
  // console.log("1111111", account);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
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
        <Avatar className="sidebar__avatar" src={account.photoURL}>
          {account.displayName[0]}
        </Avatar>
        <h2>{account.displayName}</h2>
        <h4>{account.email}</h4>
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
        {recentItem("redux")}
        {recentItem("firebase")}
        {recentItem("softwareengineering")}
      </div>
    </div>
  );
}

export default Sidebar;
