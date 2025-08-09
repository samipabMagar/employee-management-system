import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler = (e) => {
    
        console.log("hello Guys")
        setEmail('')
        setPassword('')
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 p-10 rounded border-emerald-600'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }} className='flex gap-5 flex-col items-center justify-center' >
                <input value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }} className='border-2 border-emerald-600 outline-none py-4 px-5 text-xl bg-white rounded-full' type="email" placeholder='Enter you email' />
                <input value={password} onChange={(e)=> {
                    setPassword(e.target.value)
                }} className='border-2 mt-5 border-emerald-600 outline-none py-4 px-5 text-xl bg-white rounded-full' type="password" placeholder='Password' />
    <button className='border-2 border-emerald-600 outline-none py-2 px-5 text-xl rounded-full mt-5 bg-emerald-600'>Log in</button>
            </form>

        </div>
    </div>
  )
}

export default Login