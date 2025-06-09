"use client"

import { Card, CardContent,  } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function ContactMe() {
    const [fullName, setFullName] = useState<string>("");
    const [senderEmail, setSenderEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleFullNameChange = (e: any) => {
        setFullName(e.target.value);
    }
    
    const handleSenderEmailChange = (e: any) => {
        setSenderEmail(e.target.value);
    }

    const handleMessageChange = (e: any) => {
        setMessage(e.target.value);
    }

    type MessageData = {
        fullName: string,
        senderEmail: string,
        message: string
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();

        const formData: MessageData = {
            fullName,
            senderEmail,
            message
        }
        setFullName("");
        setSenderEmail("");
        setMessage("");
        console.log("Call /api/send/ (serverless api/function) that calls Resend api")
        console.log("Email: ");
        console.log(formData);


        
    }
    return (
        <div className="bg-gray-900 text-white h-screen w-full flex items-center justify-center">
            <Card className="h-1/2 w-1/3 p-8">
                <CardContent className="h-full w-full">
                    <div className="w-full h-2/12">
                        <h1 className="text-2xl">
                            <TypeAnimation 
                                sequence={[
                                    'Contact Me',
                                    1000, 
                                ]}
                                wrapper="span"
                                speed={50}
                                
                            />
            </h1>
                        <p className="text-sm">Please feel free to reach out and send me a message, or connect with me on <Link href="https://github.com/ashiqsyed">Linkedin</Link></p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="w-full h-10/12">
                        
                            <div className="mt-4 mb-2 w-full h-1/6">
                                <label htmlFor="fullName">Full Name</label>
                                <Input type="text" id="fullName" onChange={handleFullNameChange} value={fullName} />
                            </div>
                            <div className="mt-2 mb-2 w-full h-1/6">
                                <label htmlFor="email">Email</label>
                                <Input type="email" id="email" onChange={handleSenderEmailChange} value={senderEmail}/>
                            </div>
                            <div className="mt-2 mb-2 w-full h-1/2 ">
                                <label htmlFor="message" className="w-full h-1/12">Message</label>
                                <Textarea onChange={handleMessageChange} id="message" placeholder="Type your message here..." className="h-10/12" value={message}/>
                            </div>
                            <div className=" mt-2 mb-4 w-full h-1/6">
                                <Button className="bg-blue-500 hover:bg-blue-400">Send Message</Button>
                            </div>
                        
                        
                        
                        
                        
                     </form>
                </CardContent>
            </Card>
        </div>
    )
}