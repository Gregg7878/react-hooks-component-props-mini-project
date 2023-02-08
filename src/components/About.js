import React from "react";

function About(){
    return(
    <aside>
    <img
      src={props.image || "https://via.placeholder.com/215"}
      alt="blog logo"
    />
    <p>{props.aboutText}</p>
  </aside>
    );
}
export default About;