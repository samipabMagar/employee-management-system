import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        console.log("hello Guys")
        setEmail('')
        setPassword('')
    }
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
        <div className='p-10 border-2 rounded border-emerald-600'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }} className='flex flex-col items-center justify-center gap-5' >
                <input value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }} className='px-5 py-4 text-xl bg-white border-2 rounded-full outline-none border-emerald-600' type="email" placeholder='Enter you email' />
                <input value={password} onChange={(e)=> {
                    setPassword(e.target.value)
                }} className='px-5 py-4 mt-5 text-xl bg-white border-2 rounded-full outline-none border-emerald-600' type="password" placeholder='Password' />
    <button className='px-5 py-2 mt-5 text-xl border-2 rounded-full outline-none border-emerald-600 bg-emerald-600'>Log in</button>
            </form>

        </div>
    </div>
  )
}

export default Login