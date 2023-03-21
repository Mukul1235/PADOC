import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import "./conversation.css";
const Conversation = ({ conversaton1, currentUser }) => {
  const [userName, setUser] = useState(null);
  
  if (currentUser.profile === "Patient") {
    useEffect(() => {
      const frientId = conversaton1.members.find((m) => m !== currentUser._id);

      const getUser = async () => {
        try {
          const res = await axios.get(
            "/users?userType=Patient&userId=" + frientId
          );
          console.log(res);
          setUser(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getUser()
    }, [currentUser, conversaton1]);
  }
  else if (currentUser.profile === "Doctor") {
    useEffect(() => {
      const frientId = conversaton1.members.find((m) => m !== currentUser._id);
      const getUser = async () => {
        try {
          const res = await axios.get(
            "/users?userType=Doctor&userId=" + frientId
          );

          setUser(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getUser();
    }, [currentUser, conversaton1]);
  }

  // console.log(user);
  
  return (
    <div className="conversation">
      <img className="conversationImg" src="./logo.png" alt="" />
      <span className="conversationName"> {userName?.name} </span>
    </div>
  );
};

export default Conversation
