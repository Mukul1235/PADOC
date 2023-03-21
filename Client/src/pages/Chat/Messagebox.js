import React from 'react'
import "./Messagebox.css"
import { format } from "timeago.js";

const Messagebox = ({ message, own }) => {
  return (
    <div className={own ? "Messagebox own" : "Messagebox"}>
      <div className="MessageTop">
        <img className="messageImg" src="main-pic.png" />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="MessageBottom">{format(message.createdAt)}</div>
    </div>
  );
};

export default Messagebox
