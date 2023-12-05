import React from "react";
import { Link } from "react-router-dom";

const Info_Header = () => {
  return (
    <div>
      <Link to="/info">Info</Link>
      <Link to="/info/about">About</Link>
      <Link to="/info/contact">Contact</Link>
    </div>
  );
};

export default Info_Header;
