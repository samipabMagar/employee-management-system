import React from 'react'

const Header = () => {
  return (
    <div className='flex
    items-center justify-between'>
        <h1 className='font-semibold'>
            hello <br /> <span className='text-3xl '>Samipab</span>
        </h1>
        <button className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded'>log out</button>
    </div>
  )
}

export default Header