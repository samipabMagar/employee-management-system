import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
 
    const [userData, setUserData] = useContext(AuthContext)
    // console.log(authData.employees)
  return (
    <div className='bg-[#1c1c1c] p-5 mt-5  rounded'>
        <div className='flex justify-between px-4 py-2 mb-5 bg-red-400 rounded'>
            <h2 className='text-lg font-medium w-1/5 '>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5 '>New Task</h3>
            <h5 className='text-lg font-medium w-1/5 '>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5 '>Completed</h5>
            <h5 className='text-lg font-medium w-1/5 '>Failed</h5>
        </div>
     <div className=' '>
          {userData.map((elem)=> {
            return  <div className='border-2 flex justify-between px-4 py-2 mb-5 border-emerald-500 rounded'>
            <h2 className='text-lg font-medium w-1/5 '>{elem.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskCounts.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-600'>{elem.taskCounts.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-white-600'>{elem.taskCounts.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
        </div>
        })}
        </div> 
       
        {/* <div className='flex justify-between px-4 py-2 mb-5 bg-green-400 rounded'>
            <h2>Samipab</h2>
            <h3>Make a UI Design</h3>
            <h5>Status</h5>
        </div>
        <div className='flex justify-between px-4 py-2 mb-5 bg-purple-400 rounded'>
            <h2>Samipab</h2>
            <h3>Make a UI Design</h3>
            <h5>Status</h5>
        </div>
        <div className='flex justify-between px-4 py-2 mb-5 bg-blue-400 rounded'>
            <h2>Samipab</h2>
            <h3>Make a UI Design</h3>
            <h5>Status</h5>
        </div>
        <div className='flex justify-between px-4 py-2 mb-5 bg-yellow-400 rounded'>
            <h2>Samipab</h2>
            <h3>Make a UI Design</h3>
            <h5>Status</h5>
        </div> */}
    </div>
  )
}

export default AllTask