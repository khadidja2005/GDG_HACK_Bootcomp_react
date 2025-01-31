import React from 'react'

function Login() {
  return (
    <div className='flex flex-col items-center gap-5 mt-20'>    
        <h1 className='text-3xl'>Login</h1>
        <form>
            <div className='flex flex-col gap-5'>
                <input type='text' placeholder='Username' className='p-2 border-2 border-gray-300 rounded-lg'/>
                <input type='password' placeholder='Password' className='p-2 border-2 border-gray-300 rounded-lg'/>
                <button className='bg-blue-800 text-white p-2 rounded-lg'>Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login