import React from 'react'

const Header = ({activeChat}) => {
  return (
    <div className='flex h-16 w-full border-b border-[#42464D] justify-center items-center'>
        
        <div className='text-xl'>{activeChat? activeChat : "Friends"}</div>
        
        </div>
  )
}

export default Header