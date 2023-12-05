import React from "react";
import { Outlet } from "react-router-dom";
import Main_Header from "../Main_Header/Main_Header";

const Home = () => {
  return (
    <div>
      <Main_Header></Main_Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
