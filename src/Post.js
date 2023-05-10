import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import InputOption from "./InputOption";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LoopIcon from "@mui/icons-material/Loop";
import SendIcon from "@mui/icons-material/Send";

const Post = forwardRef(({ name, desc, msg, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      {/* Header */}
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{desc}</p>
        </div>
      </div>

      {/* post body */}
      <div className="post__body">
        <p>{msg}</p>
      </div>

      {/* post buttons */}
      <div className="post__buttons">
        <InputOption Icon={ThumbUpOffAltIcon} title={"Like"} />
        <InputOption Icon={ChatBubbleOutlineIcon} title={"Comment"} />
        <InputOption Icon={LoopIcon} title={"Repost"} />
        <InputOption Icon={SendIcon} title={"Send"} />
      </div>
    </div>
  );
});

export default Post;
