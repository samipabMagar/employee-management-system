import React, { useState } from 'react'


const Header = () => {


  const logOutUser = () => {
    localStorage.setItem('loggedInUser','')
    window.location.reload()
  }

  return (
    <div className='flex
    items-center justify-between'>
        <h1 className='font-semibold'>
            hello <br /> <span className='text-3xl '>username</span>
        </h1>
        <button onClick={logOutUser} className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded'>log out</button>
    </div>
  )
}

export default Header