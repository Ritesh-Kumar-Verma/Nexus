import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef } from "react";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const ChatBox = ({ currentUser, activeChat }) => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const stompClientRef = useRef(null);

  useEffect(() => {
    // Prevent connecting if a user hasn't been selected yet
    if (!currentUser?.id || !activeChat?.id) return;
    // console.log("Current User:", currentUser, "Active Chat:", activeChat);

    const client = new Client({
      webSocketFactory: () => new SockJS('http://localhost:8080/ws'),
      connectHeaders : {

        Authorization : `Bearer ${localStorage.getItem('jwttoken')}`

      },

      debug:(str)=>console.log("STOMP DEBUG:",str),
      onConnect: () => {
        console.log('Connected to WebSocket');
        const mailbox = `/user/queue/messages`;
        // const mailbox = `/user/${currentUser.id}/queue/messages`;
        
        client.subscribe(mailbox, (message) => {
          
          const incomingMessage = JSON.parse(message.body);
          setMessages((prev) => [...prev, incomingMessage]);
        });
      },
      onStompError: (frame) => {
        console.error('Broker reported error: ' + frame.headers['message']);
      },
    });

    client.activate();
    stompClientRef.current = client;

    return () => {
      if (stompClientRef.current) {
        stompClientRef.current.deactivate();
      }
    };
  }, [currentUser?.id, activeChat?.id]);

  const sendMessage = () => {
    // console.log(messageInput)
    if (messageInput.trim() !== '' && stompClientRef.current?.connected) {
      const chatMessage = {
        senderId: currentUser.id,
        receiverId: activeChat.id,
        content: messageInput,
        timeStamp: new Date()
      };

      stompClientRef.current.publish({
        destination: '/app/chat',
        body: JSON.stringify(chatMessage)
      });

      setMessages((prev) => [...prev, chatMessage]);
      setMessageInput('');
    }
  };

  const formatTime = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`flex flex-col h-full p-2 gap-2 ${activeChat ? "" : "hidden"}`}>
      
      {/* 
        UI UPDATE: Changed to flex-1 and added overflow-y-auto 
        so older messages scroll up instead of breaking the layout 
      */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {messages.map((msg, index) => {
          // Check if this message was sent by us or the other person
          const isMe = msg.senderId === currentUser.id;
          
          // Map to your UI fields dynamically
          const displayName = isMe ? currentUser.username : activeChat.username;
          
          // Fallback to Dicebear avatars if the user doesn't have an icon saved in the DB
          const displayIcon = isMe 
            ? currentUser.icon || `https://api.dicebear.com/7.x/avataaars/svg?seed=${currentUser.username}` 
            : activeChat.icon || `https://api.dicebear.com/7.x/avataaars/svg?seed=${activeChat.username}`;

          return (
            // UI UPDATE: Changed h-16 to h-auto and items-center to items-start for multi-line messages
            <div key={index} className="flex h-auto items-start gap-3 mt-4 px-2">
              <img src={displayIcon} alt="avatar" className="h-10 rounded-full" />
              <div className="flex flex-col">
                <div className="text-[#DCDDDE] font-bold text-md">
                  {displayName}{" "}
                  <span className="text-[#8E9297] text-sm ml-1">{formatTime(msg.timeStamp)}</span>
                </div>
                <div className="text-[#DCDDDE] break-words">{msg.content}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center bg-[#383A40] rounded-xl px-2 py-1 mx-4 mb-4 mt-2">
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()} // UI UPDATE: Press Enter to send
          placeholder={`Message @${activeChat?.username || "User"}`}
          className="bg-transparent flex-1 focus:outline-none text-[#DBDEE1] p-3 placeholder:text-[#949BA4]"
        />

        <button 
          onClick={sendMessage}
          className="px-3 text-[#B5BAC1] hover:text-[#FFFFFF] transition-colors cursor-pointer"
        >
          <FontAwesomeIcon icon={faPaperPlane} className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default ChatBox;