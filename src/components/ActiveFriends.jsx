import React from 'react'

const ActiveFriends = ({activeChat}) => {
  return (
    <div className={`border border-white max-sm:w-7/10 text-xl text-white ${activeChat ? "max-sm:hidden":""}`}>ActiveFriends</div>
  )
}

export default ActiveFriends