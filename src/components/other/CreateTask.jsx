import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [userData, setUserData] = useContext(AuthContext);

 

  
  const submitHandler = (e) => {
    
    e.preventDefault();
    console.log("task created");
    
    // console.log(taskTitle, taskDate, category)
    const newTask = {
      taskDate,
      category,
      taskTitle,
      taskDescription,
      active: false,
      failed: false,
      newTask: true,
      completed: false
    };
    const data =[...userData] ;
    // console.log(userData);
    data.forEach((elem) => {
      if (elem.firstName == assignTo) {
        elem.tasks.push(newTask);
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1
      }
    });

    setUserData(data)
    // console.log(userData)
localStorage.setItem('employees',JSON.stringify(data))
    setTaskTitle("");
    setTaskDate("");
    setCategory("");
    setTaskDescription("");
    setAssignTo("");
  };
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap items-start justify-between w-full "
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="w-4/5 px-2 py-1 text-sm bg-transparent  rounded outline-none border-[1px] border-gray-400 mb-4 "
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <h3>Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="w-4/5 px-2 py-1 text-sm bg-transparent  rounded outline-none border-[1px] border-gray-400 mb-4 "
              type="date"
            />
          </div>
          <div>
            <h3>Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="w-4/5 px-2 py-1 text-sm bg-transparent  rounded outline-none border-[1px] border-gray-400 mb-4 "
              type="text"
              placeholder="employee name"
            />
          </div>
          <div>
            <h3>Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-4/5 px-2 py-1 text-sm bg-transparent  rounded outline-none border-[1px] border-gray-400 mb-4 "
              type="text"
              placeholder="design, dev, etc"
            />
          </div>
        </div>

        <div className="w-1/2">
          <h3>Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
            className="w-full h-44 px-4 py-2 text-sm bg-transparent  rounded outline-none border-[1px] border-gray-400  "
            name=""
            id=""
          ></textarea>
          <button className="w-full px-5 py-3 mt-4 text-sm rounded bg-emerald-600">
            Create task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
