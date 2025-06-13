"use client"

import Link from "next/link";
import {TypeAnimation} from 'react-type-animation';
import './globals.css'


export default function Home() {
  return (
    <div className="bg-gray-900 w-full min-h-screen flex items-center justify-center">
      <div className="text-gray-100 w-1/2 h-1/2 flex flex-col items-center">
          <div className="text-2xl mb-4">Hello, I'm</div>          
          <div className="text-6xl mt-4 mb-4 h-48 flex items-center justify-center text-center sm:h-32">
            <TypeAnimation 
              sequence={[
                'Ashiq Syed',
                1000, 

              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <div className="text-3xl text-center mt-4 mb-4">Recent computer science graduate from the University of Georgia</div>
          <div className=" w-3/4 flex items-center justify-around text-3xl mt-4 sm:flex-row flex-col text-center">
            <Link className=" m-4 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-blue-400 after:w-0 hover:after:w-full after:transition-all after:duration-150  text-blue-500 hover:text-blue-400" href="/projects">Check out my work</Link>
            <Link className="m-4 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-blue-400 after:w-0 hover:after:w-full after:transition-all after:duration-150 text-blue-500 hover:text-blue-400" href="contact-me">Contact me</Link>
          </div>          
      </div>
    </div>
  );
}
