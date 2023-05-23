import React from 'react'
import {
    AiOutlineInstagram,
    AiOutlineYoutube
  } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="w-5/5 m-auto p-10 bg-white ">
    <div className="md:flex grid grid-cols-2 gap justify-between items-start my-10">
      <div className="space-y-5 py-5 border-b">
        <h1 className="text-3xl font-bold">Follow us for more!</h1>
        <div className="flex space-x-5">
          <AiOutlineInstagram size={"1.5rem"} />
          <AiOutlineYoutube size={"1.5rem"} />
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <h1>Info</h1>
        <a className="text-sm text-gray-400">About us</a>
        <a className="text-sm text-gray-400">The bestsellers</a>
        <a className="text-sm text-gray-400">Our team</a>
      </div>      
      <div className="flex flex-col space-y-3">
        <h1>Contact</h1>
        <a className="text-sm text-gray-400"> BookTok</a>
        <a className="text-sm text-gray-400">booktok@gmail.com</a>        
      </div>
    </div>
    <div className="border-t py-2">
      <p>
        {" "}
        &copy;2023 <span className="font-bold">BookTok</span> All Rights Reserved
      </p>
    </div>
  </footer>
  )
}

export default Footer
