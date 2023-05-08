import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import WorkIcon from "@mui/icons-material/Work";
import SmsIcon from "@mui/icons-material/Sms";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Header() {
  return (
    <div className="header">
      {/* Header left */}
      <div className="header__left">
        <img
          src="https://cdn1.iconfinder.com/data/icons/social-networks-15/512/LinkedIn_social_network_logo-1024.png"
          alt=""
        />

        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      {/* Header right */}
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title={"Home"} />
        <HeaderOption Icon={SupervisorAccountIcon} title={"My Network"} />
        <HeaderOption Icon={WorkIcon} title={"Jobs"} />
        <HeaderOption Icon={SmsIcon} title={"Messaging"} />
        <HeaderOption Icon={NotificationsIcon} title={"Notifications"} />
        <HeaderOption
          avatar="https://media.licdn.com/dms/image/D4D03AQHFVJnvv1sRZA/profile-displayphoto-shrink_800_800/0/1678786237924?e=1689206400&v=beta&t=ESLF5qceMkheV1kJAaGJK5J5LuHHDAAouzJEvC8usPw"
          title={"me"}
        />
      </div>
    </div>
  );
}

export default Header;
