import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import WorkIcon from "@mui/icons-material/Work";
import SmsIcon from "@mui/icons-material/Sms";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
function Header() {
  const dispatch = useDispatch();
  const logoutApp = () => {
    dispatch(logout);
    signOut(auth);
  };

  const account = useSelector(selectUser);

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
          hasAvatar={true}
          avatar={account?.photoURL}
          avatarFallback={account?.displayName[0]}
          title={"me"}
        />
        <HeaderOption
          Icon={ExitToAppIcon}
          title={"Logout"}
          onClick={logoutApp}
        />
      </div>
    </div>
  );
}

export default Header;
