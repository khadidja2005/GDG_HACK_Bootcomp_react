import React from 'react'

function Header() {
  return (
    <div className=' flex justify-between items-center p-5 bg-gray-800 text-white w-screen '>
        <div className=' justify-center items-center flex'>
            <ul className=' flex justify-between items-center w-full gap-20'>
                <li>
                    <p className=' text-3xl hover:bg-gray-700'>Home</p>
                </li>
                <li>
                    <p className=' text-3xl hover:bg-gray-700'>About us</p>
                </li>
                <li>
                    <p className=' text-3xl hover:bg-gray-700'>Contact us</p>
                </li>
                <li>
                    <p className=' text-3xl hover:bg-gray-700'>Our products</p>
                </li>    
            </ul>
        </div>
    </div>
  )
}

export default Header