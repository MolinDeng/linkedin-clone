import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./Login";

function App() {
  // We can read data from the store
  const account = useSelector(selectUser);
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
