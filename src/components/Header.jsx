import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
const Header = ({currentUser,activeChat,setActiveChat}) => {
  const handleBack=()=>{
    setActiveChat(prev=>{})
  }
  return (
    <div className={`${activeChat?.id ? "" :"max-sm:hidden"}  flex  h-16 w-full border-b border-[#42464D] gap-2 items-center`}>
        
        {activeChat?.id && <FontAwesomeIcon icon={faAngleLeft} className={`  ml-2 text-2xl py-2 px-1 rounded-lg hover:bg-gray-600 hover:cursor-pointer`} style={{color: "#D1D5DB"}}
         onClick={handleBack}
        />}



        <div className='text-xl text-white '>{activeChat.id ? activeChat.username : ""}</div>


        <div className='bg-blue-400 border-2 text-white'>{currentUser.username}</div>
        
        


        </div>
  )
}

export default Header