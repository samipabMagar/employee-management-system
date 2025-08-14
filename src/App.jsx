import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState('')
  const [loggedInUserData, setLoggedInUserData] = useState(null) 

  const [userData, setUserData] = useContext(AuthContext)
  // localStorage.clear()

  useEffect(()=> {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser) {
      console.log("user logged in hai ")
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])

  const handleLogin = (email,password) => {
    if (email == 'admin@me.com' && password == '123'){
      console.log("this is admin")
      setUser('admin')
      localStorage.setItem("loggedInUser", JSON.stringify({role:"admin"}))
    }
    else if(userData) {
      const employee = userData.find((e) =>email == e.email && e.password == password)
      if (employee) {
        console.log("This is User")
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem("loggedInUser", JSON.stringify({role: "employee", data:employee}))
      }
    }
    else {
      alert("invalid credentials")
    }
     console.log(email,password)
  }

  // useEffect(() => {
  //   if(authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser) {
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // },[authData])

  
    useEffect(() => {
     setLocalStorage()
      
    },[])
    
    // localStorage.clear()
  return (
    <div>
        {!user ? <Login handleLogin={handleLogin}/> : ''} 
        {user == 'admin' ? <AdminDashboard/> :(user == 'employee' ? <EmployeeDashboard data={loggedInUserData}/>: null) }
    </div>
  )
}

export default App