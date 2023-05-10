import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";

function HeaderOption({
  hasAvatar,
  avatar,
  Icon,
  title,
  onClick,
  avatarFallback,
}) {
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {hasAvatar && (
        <Avatar className="headerOption__icon" src={avatar}>
          {avatarFallback}
        </Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
