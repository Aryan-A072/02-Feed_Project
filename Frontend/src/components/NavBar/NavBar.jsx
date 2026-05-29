import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {

  const nav = useNavigate()
  return (
    <>
        <div className='fixed w-full flex items-center justify-between lg:px-20 py-5'>
            <h1 className='lg:text-2xl text-xl font-bold ml-1'>Cloud Project-1</h1>
            <div>
                <button 
                onClick={() => nav("/create-post") }
                className='bg-white/10 active:scale-95 font-bold rounded px-2 py-1 mr-2'>Create Post</button>
                <button 
                onClick={() => nav("/posts") }
                className='bg-white/10 active:scale-95 font-bold rounded px-2 py-1 mr-2'>View Post</button>
            </div>
        </div>
    </>
  )
}

export default NavBar