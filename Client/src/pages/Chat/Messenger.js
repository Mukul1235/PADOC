import React, { useContext, useEffect, useRef, useState } from "react";
import Layout from "../Layout";
import Messagebox from "./Messagebox";
import Conversation from "./Conversation";
import "./messenger.css";
import Chatonline from "./Chatonline";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { io } from "socket.io-client";
const Messenger = () => {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);    // used to take message from backend
  const [NewMessages, setNewMessages] = useState("");  // used to take new message and then storing it into backend
  const [arrivalMessages, setArrivalMessages] = useState(null); 
  const ScrollRef = useRef();
  const socket = useRef();
  const { user } = useContext(AuthContext);
  // console.log(user);

  useEffect(() => {
    socket.current = io("ws://localhost:6001");
    socket.current.on("getMessage", data => {
      setArrivalMessages({
        sender:data.senderId,
          text:data.text,
        createdAt:Date.now(),
    })
    })
  }, [])
  
  useEffect(() => {
    arrivalMessages && currentChat?.members.includes(arrivalMessages.sender) &&
      setMessages((prev)=>[...messages,arrivalMessages])
  },[arrivalMessages,currentChat])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: NewMessages,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(member => member !== user._id);
    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text:NewMessages,
    });
    try {
      const res = await axios.post("/patient/messages", message);
      setMessages([...messages, res.data]);
      setNewMessages("");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", users => {
      console.log(users);
    })
  }, [user]);
  

  useEffect(() => {
    const getConversation = async () => {
      try {
        const res = await axios.get("/patient/chat/" + user._id);
        setConversations(res.data);
      } catch (err) {
        console.log("error");
      }
    };
    getConversation();
  }, [user._id]);


  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("/patient/messages/" + currentChat._id);
        setMessages(res.data);
      } catch (e) {
        console.log("error");
      }
    };
    getMessages();
  }, [currentChat]);



  useEffect(() => {
    ScrollRef.current?.scrollIntoView({behavior:"smooth"});
  },[messages])

  return (
    <>
      <Layout />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for Doctor" className="chatMenuInput" />
            {conversations.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversation conversaton1={c} currentUser={user} />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((m) => (
                    <div ref={ScrollRef}>
                      <Messagebox message={m} own={m.sender === user._id} />
                    </div>
                  ))}
                  {messages.text}
                </div>
                <div className="chatboxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    onChange={(e) => setNewMessages(e.target.value)}
                    value={NewMessages}
                  />
                  
                  <button className="chatSubmitButton" onClick={handleSubmit}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <>
                <span className="noConversationText">
                  Open a conversation to start a chat{" "}
                </span>
              </>
            )}
          </div>
        </div>
        <div className="chatOnline">
          <div className="ChatOnlineWrapper">
            <Chatonline />
            <Chatonline />
            <Chatonline />
            <Chatonline />
          </div>
        </div>
      </div>
    </>
  );
};

export default Messenger;
