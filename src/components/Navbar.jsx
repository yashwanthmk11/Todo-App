import React, { Component } from 'react'


const Navbar = () => {
  return (
    <div className='py-4 '>
    <nav className='flex justify-between bg-slate-400 text-shadow-white-500 '>
       <div className="logo text-3xl font-bold text-white p-4 cursor-pointer">
        <span>OwnTodoApp</span>
       </div>
        <ul className="flex gap-10 p-4 text-white font-bold">
            <li className=' transition-transform duration-300 hover:scale-105 cursor-pointer '>Home</li>
            <li className=' transition-transform duration-300 hover:scale-105 cursor-pointer'>Tasks</li>
            <li   className=' transition-transform duration-300 hover:scale-105 cursor-pointer'>Settings</li>
        </ul>
    </nav>
    </div> 
  )
}

export default Navbar
