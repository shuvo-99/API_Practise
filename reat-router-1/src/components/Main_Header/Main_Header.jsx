import React from "react";
import { Link } from "react-router-dom";
import "./Main_Header.css";

const Main_Header = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/info">Info</Link>
      <Link to="/app">App</Link>
      <Link to="/friends">Friends</Link>
    </nav>
  );
};

export default Main_Header;
