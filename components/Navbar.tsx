"use client"

import { useState } from "react";
import {useRouter} from "next/navigation";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
    const router = useRouter();
    const [page, setPage] = useState("/");
    const [isOpen, setIsOpen] = useState(false);
    const handleAboutClick = () => {
        setPage("about");
        router.push("/about-me");
        if (isOpen === true) {
            setIsOpen(false)
        }
    }
    const handleProjectsClick = () => {
        setPage("projects");
        router.push("/projects");
        if (isOpen === true) {
            setIsOpen(false)
        }
    }
    const handleContactClick = () => {
        setPage("contact");
        router.push("/contact-me")
        if (isOpen === true) {
            setIsOpen(false)
        }
    }
    const handleNameClick = () => {
        setPage("/");
        router.push("/");
        if (isOpen === true) {
            setIsOpen(false)
        }
    }
    return (
        <nav className="h-16 w-full min-w-screen flex items-center justify-between text-gray-100 bg-gray-900/5 sticky top-0 left-0 z-5">
            <div className="flex items-center justify-center text-center  h-full w-1/4 text-3xl cursor-pointer " onClick={handleNameClick}>ashiq syed</div>
            <div className="flex items-center justify-around text-center  h-full w-1/2 text-xl invisible sm:visible ">
                {page === 'about' ? 
                    <div className="h-full w-1/3 flex items-center justify-center cursor-pointer">
                        <div className="text-blue-400 cursor-pointer" onClick={handleAboutClick}>
                            about
                        </div>
                        
                    </div> 
                    : 
                    <div className="h-full w-1/3 flex items-center justify-center " >
                        <div className="hover:text-blue-400 transition duration-150 cursor-pointer" onClick={handleAboutClick}>
                            about
                        </div>
                    </div> }   
                {page === 'projects' ?
                     <div className="h-full  w-1/3 flex items-center justify-center  cursor-pointer">
                        <div className="text-blue-400 cursor-pointer" onClick={handleProjectsClick}>
                            projects    
                        </div>
                        
                     </div> 
                     : 
                     <div className="h-full  w-1/3 flex items-center justify-center cursor-pointer">
                        <div className="hover:text-blue-400 transition duration-150 cursor-pointer" onClick={handleProjectsClick}>
                            projects
                        </div>
                        
                     </div> }                   
                {page === 'contact' ?
                    <div className="h-full  w-1/3 flex items-center justify-center cursor-pointer">
                        <div className="text-blue-400 cursor-pointer" onClick={handleContactClick}>
                            contact
                        </div>
                        
                    </div> 
                    :
                    <div className="h-full w-1/3 flex items-center justify-center cursor-pointer" >
                        <div className="hover:text-blue-400 transition duration-150 cursos-pointer" onClick={handleContactClick}>
                            contact
                        </div>
                        
                    </div> }                   
            </div>
            
            {
                isOpen 
                ? 
                    <div className="sm:hidden flex w-1/3 h-full min-h-screen items-center flex-col fixed top-0 right-0 bg-gray-800/5 " >
                        <IoClose className="w-1/2 h-auto " onClick={() => setIsOpen(!isOpen)}/>
                        <div className="flex flex-col w-full h-screen  items-center justify-center">
                            {page === 'about' ? <div className="w-full h-1/12  flex items-center justify-center bg-gray-500" onClick={handleAboutClick}>about</div> : <div className="w-full h-1/12  flex items-center justify-center" onClick={handleAboutClick}>about</div>}
                            {page === 'projects' ? <div className="w-full h-1/12 bg-gray-500 flex items-center justify-center" onClick={handleProjectsClick}>projects</div> : <div className="w-full h-1/12  flex items-center justify-center" onClick={handleProjectsClick}>projects</div>}
                            {page === 'contact' ? <div className="w-full h-1/12  bg-gray-500 flex items-center justify-center" onClick={handleContactClick}>contact</div> : <div className="w-full h-1/12  flex items-center justify-center" onClick={handleContactClick}>contact</div>}
                        </div>
                    </div>
                :
                    <div className="sm:hidden flex w-1/3  h-full items-center justify-center ">
                        <LuMenu className="w-1/2 h-1/2" onClick={() => setIsOpen(!isOpen)}/>

                    </div>
            }            
        </nav>
    );
};

export default Navbar;