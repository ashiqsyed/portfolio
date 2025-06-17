"use client"

import { Card, CardContent,  } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import axios, { AxiosResponse } from 'axios';



export default function ContactMe() {
    const [fullName, setFullName] = useState<string>("");
    const [senderEmail, setSenderEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFullName(e.target.value);
    }
    
    const handleSenderEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSenderEmail(e.target.value);
    }

    const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    }

    const handleSubmit = () => {
        
        if (fullName == '' || senderEmail == '' || message == '') {
            alert("Fill out the whole form")
        } else {
            
            setFullName("");
            setSenderEmail("");
            setMessage("");
            axios.post("https://portfolio-uvzt.vercel.app/api/send", JSON.stringify({fullName, senderEmail, message}))
            .then((res: AxiosResponse) => {
                console.log(res.data)
                alert("Message successfully sent!")
            })
            .catch((err: AxiosResponse) => {
                console.log(err);
                alert("There was an error sending the message");
            });
            
            
            

        }
    }
    return (
        <div className=" text-gray-100 h-screen min-h-screen w-full flex items-center justify-center p-4">
            <Card className="sm:h-1/2 sm:w-1/3 p-4 m-4 md:max-xl:w-3/4 ">
                <CardContent className="h-full w-full">
                    <div className="w-full h-2/12 ">
                        <h1 className="text-2xl text-shadow-[4px_4px_4px_rgba(59,130,246,10)]">
                            <TypeAnimation 
                                sequence={[
                                    'Contact Me',
                                    1000, 
                                ]}
                                wrapper="span"
                                speed={50}
                                
                            />
                        </h1>
                        <p className="text-sm text-gray-400">Feel free to send a message or connect with me on Linkedin!</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="w-full h-10/12 flex items-center justify-between  flex-col">
                        
                            <div className="my-2 w-full h-1/6">
                                <label htmlFor="fullName" className="text-gray-400">Full Name</label>
                                <Input type="text" id="fullName" onChange={handleFullNameChange} value={fullName} className="text-white" placeholder="Full Name" />
                            </div>
                            <div className="my-2 w-full h-1/6">
                                <label htmlFor="email" className="text-gray-400">Email</label>
                                <Input type="email" id="email" onChange={handleSenderEmailChange} value={senderEmail} className="text-white" placeholder="fullname@gmail.com"/>
                            </div>
                            <div className="my-2 w-full h-1/6 ">
                                <label htmlFor="message" className="w-full h-1/12 text-gray-400">Message</label>
                                
                                <Input type="text" onChange={handleMessageChange} id="message" placeholder="Type your message here..." className="" value={message} className="text-white"/>
                            </div>
                            <div className=" my-2 w-full h-1/6 flex items-center justify-between ">
                                <Button className="bg-blue-500 hover:bg-blue-400">Send Message</Button>
                                <div className="flex  h-full items-center justify-evenly sm:w-1/4 w-1/3">
                                    <Link href="https://www.linkedin.com/in/ashiq-syed-b88579239/" className="sm:w-1/2 h-full w-3/4 flex items-center justify-center hover:shadow-[3px_3px_3px_rgba(255,255,255,0.4)] transition-all duration-150 ease-in-out" target="_blank">
                                        <FaLinkedin className="h-full  w-full sm:w-3/4" />
                                    </Link>
                                    <Link href="https://github.com/ashiqsyed" className="sm:w-1/2 w-3/4 h-full flex items-center justify-center hover:shadow-[3px_3px_3px_rgba(255,255,255,0.4)] transition-all duration-150 ease-in-out" target="_blank">
                                        <FaGithub className=" h-full w-full sm:3/4"/>
                                    </Link>
                                </div>
                            </div>
                        
                        
                        
                        
                        
                     </form>
                </CardContent>
            </Card>
        </div>
    )
}