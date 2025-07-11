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
        <div className=" text-gray-100 w-full flex items-center justify-center py-16">
            <Card className=" h-[576px] sm:w-1/4 p-8 m-4 sm:max-2xl:">
                <CardContent className="h-full w-full">
                    <div className="w-full h-2/12 flex flex-col gap-3">
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
                    
                    <form onSubmit={handleSubmit} className="w-full h-10/12 flex items-center justify-around  flex-col">
                        <div className="w-full flex flex-col gap-1">
                            <label htmlFor="fullname">Full Name</label>
                            <Input type="text" onChange={handleFullNameChange} id="fullname" placeholder="First Last"/>
                        </div>
                        <div className="w-full flex flex-col gap-1">
                            <label htmlFor="fullname">Email</label>
                            <Input type="text" onChange={handleSenderEmailChange} id="fullname" placeholder="youremail@email.com"/>
                        </div>
                        <div className="w-full flex flex-col gap-1">
                            <label htmlFor="fullname">Message</label>
                            <Input type="text" onChange={handleMessageChange} id="fullname" placeholder="Message"/>
                        </div>
                        <div className="w-full flex items-center justify-between  h-1/6">
                            <Button type="submit" className="sm:w-1/3 sm:max-2xl:w-1/2 h-1/2 text-white bg-blue-500 hover:bg-blue-400">Send Message!</Button>
                            <div className="flex w-1/4 h-full">
                                <Link href="https://www.linkedin.com/in/ashiqsyed/" target="_blank" className=" flex items-center justify-center w-full ">
                                    <FaLinkedin className="h-full w-3/4" />
                                </Link>
                                <Link href="https://github.com/ashiqsyed" target="_blank" className="flex items-center justify-center w-full">
                                    <FaGithub className="h-full w-3/4"/>
                                </Link>
                            </div>
                        </div>
                     </form>
                </CardContent>
            </Card>
        </div>
    )
}