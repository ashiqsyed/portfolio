"use client"
import {motion} from 'motion/react'
import './globals.css'
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter()
  return (
      <div className=" w-full min-h-screen sm:h-screen flex items-center justify-center"> 
        
        <div className="text-gray-100 sm:w-1/2 w-3/4 h-1/2 flex flex-col items-center  justify-center">
            <TextEffect className="text-2xl mb-4 mt-6 sm:mt-0 w-full text-center " per="line" preset="fade-in-blur" speedReveal={0.6} >
              Hello, I&apos;m
            </TextEffect>
            <TextEffect className="text-6xl mt-4 mb-4 h-48 flex items-center justify-center text-center w-full sm:h-32 text-shadow-[7px_7px_7px_rgba(59,130,246,10)]" per="char" speedSegment={0.25} preset="slide" delay={1}>
              Ashiq Syed
            </TextEffect>
            <TextEffect className="text-3xl text-center my-4" per="line" speedSegment={0.75} delay={2} preset="fade-in-blur">
              Recent computer science graduate from the University of Georgia
            </TextEffect>
            <div className="w-full flex items-center justify-around text-xl flex-row  text-center h-1/4">
              <motion.button className="sm:w-1/3 h-1/4 border border-blue-500 rounded-full text-blue-500 sm:p-6 p-3 cursor-pointer flex items-center justify-center text-center" onClick={() => router.push("/projects")} whileHover={{scale: 1.25, borderColor: "rgb(96,165,250)"}} whileTap={{ backgroundColor: "rgb(96,165,250)", color: "rgb(243,244,246)"}}>
                My projects
              </motion.button>
              <motion.button className="sm:w-1/3 h-1/4 border border-blue-500 rounded-full text-blue-500 sm:p-6 p-3 cursor-pointer flex items-center justify-center text-center" onClick={() => router.push("/contact-me")} whileHover={{scale: 1.25, borderColor: "rgb(96,165,250)"}} whileTap={{ backgroundColor: "rgb(96,165,250)", color: "rgb(243,244,246)"}}>
                Contact Me
              </motion.button>
            </div>          
      </div>
      </div>
      
    
  );
}
