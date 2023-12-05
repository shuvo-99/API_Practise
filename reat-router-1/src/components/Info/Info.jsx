import React from "react";
import Info_Header from "../Info_Header/Info_Header";
import { Outlet } from "react-router-dom";
import Main_Header from "../Main_Header/Main_Header";

const Info = () => {
  return (
    <div>
      <Main_Header></Main_Header>
      <Info_Header></Info_Header>
      <h1>This is INFO PAGE</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Info;
