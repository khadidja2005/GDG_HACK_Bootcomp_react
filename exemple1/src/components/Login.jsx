import React from 'react'
import "tailwindcss"
import google from "../assets/Google.svg"
import facebook from "../assets/Facebook.svg"
import github from "../assets/Github.svg"
import bg from "../assets/bg.svg"
function Login() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const handelsubit =  (e)=> {
   e.preventDefault()
   alert('Email: '+email + ' Password: '+password)
  }
  return (
    <div className=" flex justify-center items-center  my-20 w-full h-4/5 mx-60 bg-white rounded-2xl gap-2">
        <form className=' p-20 flex flex-col justify-between items-start gap-4 w-1/2' onSubmit={handelsubit}> 
         <h1 className=' text-3xl font-bold text-[#D885A3]'>Logo here</h1>
         <p className=' text-lg'>Welcome Back !!</p>
         <h1 className=' text-4xl font-bold'>Log In</h1>
         <div className=' w-full flex justify-between items-start flex-col gap-2 '>
          <p>Email</p>
          <input type='email' className=' w-full py-2  px-2 bg-[#0084b03a] rounded-md'  value={email} onChange={(e) =>setEmail(e.target.value) } placeholder='Email' />
         </div>
         <div className=' w-full flex justify-between items-start flex-col gap-2 '>
          <p>Password</p>
          <input type='password' className=' w-full  py-2  bg-[#0084b03a] rounded-md px-2'  value={password} onChange={(e) => setPassword(e.target.value)} placeholder=' password' />
         </div>
         <div className=' w-full flex justify-center items-center'>
          <div className=' flex-col w-2/3 flex justify-between items-center gap-8'>
            <button className=' py-2 px-6 bg-[#D885A3]  mt-4 text-white rounded-md'>Login</button>
            <div className=' w-full flex-col flex justify-between items-center gap-8'>
              <p className=' text-[#6096B4] text-lg'>Or Continue with</p>
              <div className=' w-full flex justify-between items-center gap-2'>
                <button className=' py-2 px-8 border-2 border-[#6096B4] text-white rounded-xl'>
                  <img src={google} alt='google' className='w-6 h-6'  />
                </button>
                <button className=' py-2 px-8 border-2 border-[#6096B4] text-white rounded-xl'>
                  <img src={github} alt='github' className='w-6 h-6' />
                </button>
                <button className=' py-2 px-8 border-2 border-[#6096B4] text-white rounded-xl'>  
                  <img src={facebook} alt='facebook' className='w-6 h-6' />
                </button>

              </div>
            </div>

         </div>
         </div>

        </form>
        <div className="w-1/2  relative h-full rounded-2xl overflow-hidden">
  <div className="h-full w-full bg-[#6097b467] absolute top-0 left-60 z-10 rounded-l-[50px]"></div>
  <img src={bg} alt="" className="absolute z-20 w-full h-full object-cover" />
</div>
      </div>
  )
}

export default Login