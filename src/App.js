import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  // We can read data from the store
  const account = useSelector(selectUser);
  const dispatch = useDispatch();

  // listen to authentication change
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user && user.displayName) {
        // user signed in
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
      } else {
        // user signed out
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* if user not exits, we render Login */}
      {!account ? (
        <Login />
      ) : (
        <div className="app__body">
          {/* Sidebar */}
          <Sidebar />
          {/* Feed */}
          <Feed />
          {/* Widgets */}
        </div>
      )}
    </div>
  );
}

export default App;
