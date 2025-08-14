import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {
  // console.log({data})
  return (
    <div className='text-white p-10 text-2xl bg-[#1c1c1c] h-screen'>
      
        <Header data={data}/>
        <TaskListNumbers data={data}/>
        <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard