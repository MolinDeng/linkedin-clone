import React, { useState } from "react";
import "./Login.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();
  const [validEmail, setValidEmail] = useState(false);
  const [validPW, setValidPW] = useState(false);

  const loginToApp = (e) => {
    // client-side validation
    if (validEmail && validPW) e.preventDefault();
    else return;
    signInWithEmailAndPassword(auth, email, password)
      // .then((userCred) => {
      //   dispatch(
      //     login({
      //       email: userCred.user.email,
      //       uid: userCred.user.uid,
      //       displayName: userCred.user.displayName,
      //       photoURL: userCred.user.photoURL,
      //     })
      //   );
      // })
      .catch((err) => {
        alert(err);
      });
  };

  const register = () => {
    if (!name) return alert("Please enter a full name");

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCred) => {
        updateProfile(userCred.user, {
          displayName: name,
          photoURL: profilePic,
        }).then(() => {
          dispatch(
            login({
              email: userCred.user.email,
              uid: userCred.user.uid,
              displayName: name,
              photoURL: profilePic,
            })
          );
        });
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="login">
      <img
        src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/linkedin-1024.png"
        alt=""
      />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if registering)"
          type="text"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile pic URL (optional)"
          type="text"
        />
        <input
          className="login_email_input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          required={true}
          onInput={(e) => {
            setValidEmail(e.target.validity.valid);
          }}
        />
        <input
          className="login_pw_input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          required={true}
          minLength="6"
          onInput={(e) => {
            setValidPW(e.target.validity.valid);
          }}
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>{" "}
      </p>
    </div>
  );
}

export default Login;
