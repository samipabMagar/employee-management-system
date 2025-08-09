import React from 'react'

const CreateTask = () => {
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
        <form className="flex flex-wrap items-start justify-between w-full ">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input className="w-4/5 px-2 py-1 text-sm bg-transparent  rounded outline-none border-[1px] border-gray-400 mb-4 " type="text" placeholder="Make a UI design" />
            </div>
            <div>
              <h3>Date</h3>
              <input  className="w-4/5 px-2 py-1 text-sm bg-transparent  rounded outline-none border-[1px] border-gray-400 mb-4 " type="date" />
            </div>
            <div>
              <h3>Assign to</h3>
              <input  className="w-4/5 px-2 py-1 text-sm bg-transparent  rounded outline-none border-[1px] border-gray-400 mb-4 " type="text" placeholder="employee name" />
            </div>
            <div>
              <h3>Category</h3>
              <input  className="w-4/5 px-2 py-1 text-sm bg-transparent  rounded outline-none border-[1px] border-gray-400 mb-4 " type="text" placeholder="design, dev, etc" />
            </div>
          </div>

          <div className="w-1/2">
            <h3>Description</h3>
            <textarea  className="w-full h-44 px-4 py-2 text-sm bg-transparent  rounded outline-none border-[1px] border-gray-400  " name="" id=""></textarea>
          <button className="w-full px-5 py-3 mt-4 text-sm rounded bg-emerald-600">Create task</button>
          </div>

        </form>
      </div>
  )
}

export default CreateTask