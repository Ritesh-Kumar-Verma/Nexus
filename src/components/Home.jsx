import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import ChatBox from './ChatBox';
import Header from './Header';
import ActiveFriends from "./ActiveFriends"
import { authAPI, friendsAPI } from '../api/service';
import { toast } from 'react-toastify';
import Welcome from './Welcome';
const Home = () => {
  const [activeChat,setActiveChat] = useState({})
  const [currentUser , setCurrentUser] = useState("")
  const [messages, setMessages] = useState([]);
  
  const [user,setUser] = useState({
    avtar : "https://api.dicebear.com/7.x/bottts/svg?seed=Ben",
    username : "Ben",
    status:"ONLINE",
    muted : true,
    deafened : true
  })

  useEffect(()=>{

    handleGetProfile()

  },[])

  const handleGetProfile=async()=>{
    try{
const res =await authAPI.getProfile()
// console.log("res=",res)
setCurrentUser(()=>res.data)
    }catch(error){

      console.log(error)
    }
  }

const getFriendsRequest = async ()=>{

  try{

    const res = await friendsAPI.getRequest()
  }catch(error){
    console.log(error)
  }

  

}

//to add api request to run on homepage load
useEffect(()=>{

  

},[])

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
    <div className='h-screen w-full flex  '>

      <Sidebar user={user} setUser={setUser} serverList={serverList} activeChat={activeChat} setActiveChat={setActiveChat}/>
      
      <div className={`flex flex-col  w-full ${activeChat?"":"max-sm:hidden"} `}>

      <Header currentUser={currentUser} activeChat={activeChat} setActiveChat={setActiveChat} setMessages={setMessages}/>
      <Welcome activeChat={activeChat} currentUser={currentUser} />
      <ChatBox currentUser={currentUser}  activeChat={activeChat} messages={messages} setMessages={setMessages} />  
      </div>
      {/* <ActiveFriends activeChat={activeChat} /> */}
      


      
      </div>
  )
}

export default Home