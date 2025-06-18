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
        <nav className="h-16 w-full min-w-screen flex items-center justify-between text-gray-100 bg-gray-900/25 sticky top-0 left-0 z-10">
            <div className="flex items-center justify-center text-center  h-full w-1/4 text-3xl cursor-pointer " onClick={handleNameClick}>ashiq syed</div>
            <div className="sm:flex items-center justify-around text-center  h-full w-1/2 text-xl hidden ">
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
                    <div className="sm:hidden flex w-screen   items-center flex-col fixed top-0 right-0 bg-gray-900/85 " >
                        
                        <div className="w-full flex items-center justify-between h-16">
                            <div className="flex items-center justify-center text-center h-full w-1/4 text-3xl cursor-pointer" onClick={handleNameClick}>ashiq syed</div>
                            <div className="flex w-1/3 h-full items-center justify-center">
                                <IoClose className="w-1/2 h-1/2" onClick={() => setIsOpen(!isOpen)}/>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="w-full flex items-center justify-center py-3">
                                {page === 'about' ? <div onClick={handleAboutClick} className="text-blue-400">about</div> : <div onClick={handleAboutClick}>about</div>}                                
                            </div>
                            <div className="w-full flex items-center justify-center py-3">
                                {page === 'projects' ? <div onClick={handleProjectsClick} className="text-blue-400">projects</div> : <div onClick={handleProjectsClick}>projects</div>}                                                                                           
                            </div>
                            <div className="w-full flex items-center justify-center py-3"> 
                                {page === 'contact' ? <div onClick={handleContactClick} className="text-blue-400">contact</div> : <div onClick={handleContactClick}>contact</div>}                                                                                               
                            </div>
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