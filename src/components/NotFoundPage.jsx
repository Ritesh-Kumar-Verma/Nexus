import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='h-screen flex justify-center items-center flex-col gap-2'>
        <h1 className='text-3xl'>Page Not Found!!!</h1>
        <Link to="/" ><button className='border-2 p-2 rounded-lg bg-[#A3E635]'>Home</button></Link>
        
    </div>
  )
}

export default NotFoundPage