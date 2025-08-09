import React from 'react'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='flex overflow-x-auto items-center justify-start gap-5 flex-nowrap h-[55%] py-5 w-full  mt-10'>
        <div className='p-5 h-full flex-shrink-0 w-[300px] bg-red-400 rounded-xl'>
            <div className='flex items-center justify-between'>
                <h3 className='px-3 bg-red-600 rounded py-1-sm text'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>
                Make a youtube video
            </h2>
            <p className='mt-2 text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo provident aliquid veniam! Dolor, ratione natus!
            </p>
        </div>
        <div className='p-5 h-full flex-shrink-0 w-[300px] bg-red-400 rounded-xl'>
            <div className='flex items-center justify-between'>
                <h3 className='px-3 bg-red-600 rounded py-1-sm text'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>
                Make a youtube video
            </h2>
            <p className='mt-2 text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo provident aliquid veniam! Dolor, ratione natus!
            </p>
        </div>
        <div className='p-5 h-full flex-shrink-0 w-[300px] bg-red-400 rounded-xl'>
            <div className='flex items-center justify-between'>
                <h3 className='px-3 bg-red-600 rounded py-1-sm text'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>
                Make a youtube video
            </h2>
            <p className='mt-2 text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo provident aliquid veniam! Dolor, ratione natus!
            </p>
        </div>
        <div className='p-5 h-full flex-shrink-0 w-[300px] bg-red-400 rounded-xl'>
            <div className='flex items-center justify-between'>
                <h3 className='px-3 bg-red-600 rounded py-1-sm text'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>
                Make a youtube video
            </h2>
            <p className='mt-2 text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo provident aliquid veniam! Dolor, ratione natus!
            </p>
        </div>
        
        
    </div>
  )
}

export default TaskList