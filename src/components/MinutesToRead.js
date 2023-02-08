import React from "react";

function getTimeReadDisplay(minutes) {
    let emojis = ""
    if (minutes < 30) {
      const cups = Math.ceil(minutes / 5);
      for (let i = 0; i < cups; i++) {
        emojis += "☕️";
      }
      return `${emojis} ${minutes} min read`;
    } else {
      const boxes = Math.ceil(minutes / 10);
      for (let i = 0; i < boxes; i++) {
        emojis += "🍱";
      }
      return `${emojis} ${minutes} min read`;
    }
  }

  export default getTimeReadDisplay;
  