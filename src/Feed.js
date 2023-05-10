import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import { orange } from "@mui/material/colors";
import Post from "./Post";
import { colRef } from "./firebase";
import {
  onSnapshot,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  //   limit, // limit post
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Feed() {
  const account = useSelector(selectUser);

  const [inputState, setInput] = useState("");
  const [currPosts, setPosts] = useState([]);
  const q = query(colRef, orderBy("timestamp", "desc"));
  //create a real-time listener to firebase
  useEffect(() => {
    onSnapshot(
      q,
      (snapshot) => {
        setPosts(
          // snapshot.docs is array of document objects
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      },
      (err) => {
        alert(err.message);
      }
    );
  }, [q]);
  const submitPost = (e) => {
    e.preventDefault(); // prevent default behavior, which is refresh the webpage
    // addDoc will trigger onSnapshot, which updates currPosts state which updates the view
    addDoc(colRef, {
      name: account.displayName,
      desc: account.email,
      msg: inputState,
      photoUrl: account.photoURL,
      timestamp: serverTimestamp(),
    });
    setInput(""); // clear input value
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        {/* input */}
        <div className="feed__input">
          <CreateIcon />
          <form onSubmit={submitPost}>
            <input
              placeholder="Start a post"
              value={inputState}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            {/* <button type="submit">Send</button> */}
          </form>
        </div>
        {/* options */}
        <div className="feed__inputOptions">
          {/* Input option */}
          <InputOption Icon={ImageIcon} title={"Photo"} color={"#70B5F9"} />
          <InputOption Icon={YouTubeIcon} title={"Video"} color={"7FC15E"} />
          <InputOption Icon={EventNoteIcon} title={"Event"} color={"E7A33E"} />
          <InputOption
            Icon={CalendarViewDayIcon}
            title={"Write article"}
            color={orange[500]}
          />
        </div>
      </div>
      {/* posts */}
      {currPosts.map(({ id, data }) => (
        <Post
          key={id}
          name={data.name}
          desc={data.desc}
          msg={data.msg}
          photoUrl={data.photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;
