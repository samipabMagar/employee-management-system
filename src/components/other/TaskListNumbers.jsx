import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className=' flex screen justify-between gap-5 mt-10  '>
        <div className='rounded-xl py-6 px-10 h-40 w-[45%] bg-red-400'>
    <h2 className='text-3xl font-semibold'>0</h2>
    <h3 className='text-xxl font-medium'>New task</h3>
        </div>
        <div className='rounded-xl py-6 px-10 h-40 w-[45%] bg-blue-400'>
    <h2 className='text-3xl font-semibold'>0</h2>
    <h3 className='text-xxl font-medium'>New task</h3>
        </div>
        <div className='rounded-xl py-6 px-10 h-40 w-[45%] bg-yellow-400'>
    <h2 className='text-3xl font-semibold'>0</h2>
    <h3 className='text-xxl font-medium'>New task</h3>
        </div>
        <div className='rounded-xl py-6 px-10 h-40 w-[45%] bg-green-400'>
    <h2 className='text-3xl font-semibold'>0</h2>
    <h3 className='text-xxl font-medium'>New task</h3>
        </div>

    </div>
  )
}

export default TaskListNumbers