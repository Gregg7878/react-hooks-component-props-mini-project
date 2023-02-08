import React from "react";
import App from "./App";
import blogData from "../data/blog";

function Header(props){
    return(
    <div>
    <header>
    <h1>{props.blogName}</h1>
  </header>
  </div>
    );
}
export default Header;