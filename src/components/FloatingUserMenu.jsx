import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { 
  faMicrophone, 
  faMicrophoneSlash, 
  faHeadphones, 
  faDeafness 
} from '@fortawesome/free-solid-svg-icons';

const FloatingUserMenu = ({user,setUser}) => {
    const handleMute=()=>{
        setUser(prev=>({
            ...prev,
            muted : !prev.muted
        }))
    }
    const handleDeafened=()=>{
        setUser(prev=>({
            ...prev,
            deafened : !prev.deafened
        }))
    }

    //to be created later
    const handleSettings = ()=>{
        //settings
    }
  return (
    <div className="absolute left-0 bottom-0 rounded-lg  flex  w-[92%] m-2 items-center justify-between bg-[#1c1d20] px-2 py-2 gap-2">
        <div className=' flex gap-2 items-center px-2 w-2/3 hover:bg-[#6B7280] rounded-lg'>
            <img src={user.avtar} className='h-10' alt="" />
            <div className='flex flex-col'>
                <div className='text-lg font-bold text-[#D1D5DB] ' > {user.username}</div>
                <div className='text-sm text-gray-600' >{user.status}</div>
            </div>
        </div>
        <div className='flex gap-2  '>

            <FontAwesomeIcon icon={user.muted ? faMicrophoneSlash : faMicrophone} className={` text-2xl py-2 px-1 rounded-lg hover:bg-gray-600  hover:cursor-pointer ${user.muted ? "bg-red-500" : ""} `} style={{color: "#D1D5DB"}} onClick={handleMute} />
            
            <FontAwesomeIcon icon={ user.deafened ?   faDeafness: faHeadphones  } className={`text-2xl py-2 px-1 rounded-lg hover:bg-gray-600 hover:cursor-pointer ${user.deafened ? "bg-red-500" : ""} `} style={{color: "#D1D5DB"}} onClick={handleDeafened} />
            
          <FontAwesomeIcon icon={faGear} className="text-2xl py-2 px-1 rounded-lg hover:bg-gray-600 hover:cursor-pointer " style={{color: "#D1D5DB"}} onClick={handleSettings} />
        </div>

        </div>
    
  )
}

export default FloatingUserMenu