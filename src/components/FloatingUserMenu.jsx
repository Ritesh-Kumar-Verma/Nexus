import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { 
  faMicrophone, 
  faMicrophoneSlash, 
  faHeadphones, 
  faDeafness 
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const FloatingUserMenu = ({user,setUser}) => {
    const navigate=useNavigate()
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

    //to be created later , Temporarily adding logout feature to it but will have a seprate button later
    const handleSettings = ()=>{
        //settings
        localStorage.removeItem("jwttoken")
        navigate("/login")
        
    }
  return (
    <div className="absolute left-0 bottom-0 rounded-lg  flex  w-[92%] m-2 items-center justify-between bg-[#313338] px-2 py-2 gap-2
    max-sm:w-[calc(100%-1rem)] max-sm:mx-2
    ">
        <div className=' flex gap-2 items-center px-2 w-2/3 hover:bg-[#6B7280] rounded-lg'>
            <img src={user.avtar} className='h-10' alt="" />
            <div className='flex flex-col max-lg:hidden'>
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