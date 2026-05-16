import React from 'react'

const ActiveFriends = ({activeChat}) => {
  return (
    <div className={`  max-sm:w-7/10 text-xl text-white ${activeChat ? "max-sm:hidden":""}`}>ActiveFriends</div>
  )
}

export default ActiveFriends