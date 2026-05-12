import React, { useState } from 'react'
import Sidebar from './Sidebar'
import ChatBox from './ChatBox';
import Header from './Header';
import ActiveFriends from "./ActiveFriends"
const Home = () => {
  const [activeChat,setActiveChat] = useState()

  const [user,setUser] = useState({
    avtar : "https://api.dicebear.com/7.x/bottts/svg?seed=Ben",
    username : "Ben",
    status:"ONLINE",
    muted : true,
    deafened : true
  })

  const friendsList = [
  {
    avtar: "https://api.dicebear.com/7.x/bottts/svg?seed=Ben",
    username: "Ben"
  },
  {
    avtar: "https://api.dicebear.com/7.x/bottts/svg?seed=Gwen",
    username: "Gwen"
  },
  {
    avtar: "https://api.dicebear.com/7.x/bottts/svg?seed=Max",
    username: "Max"
  },
  {
    avtar: "https://api.dicebear.com/7.x/bottts/svg?seed=Doraemon",
    username: "Doraemon"
  }
];
const serverList = [
  {
    name: "Gaming Collective",
    description: "50+ Online, General chat active",
    icon: "https://api.dicebear.com/7.x/initials/svg?seed=GC&backgroundColor=5865F2"
  },
  {
    name: "Coders Unite",
    description: "30+ Online, New project discussions",
    icon: "https://api.dicebear.com/7.x/initials/svg?seed=CU&backgroundColor=3BA55C"
  },
  {
    name: "Music Makers",
    description: "20+ Online, Jam sessions on voice",
    icon: "https://api.dicebear.com/7.x/initials/svg?seed=MM&backgroundColor=FAA61A"
  },
  {
    name: "Artists' Alley",
    description: "40+ Online, Community art prompts",
    icon: "https://api.dicebear.com/7.x/initials/svg?seed=AA&backgroundColor=ED4245"
  }
];


  return (
    <div className='h-screen  flex '>

      <Sidebar user={user} setUser={setUser} friendsList={friendsList} serverList={serverList} activeChat={activeChat} setActiveChat={setActiveChat}/>
      <div className='flex flex-col  w-full '>

      <Header activeChat={activeChat}/>
      {activeChat? <ChatBox activeChat={activeChat} /> :  <div className='text-3xl flex justify-center text-gray-500 pt-3'>Start a Conversation...</div>}
      </div>
      <ActiveFriends/>


      
      </div>
  )
}

export default Home