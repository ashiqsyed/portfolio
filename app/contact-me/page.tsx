"use client"

import { Card, CardContent,  } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
const axios = require("axios");

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


    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (fullName == '' || senderEmail == '' || message == '') {
            alert("Fill out the whole form")
        } else {
            
            setFullName("");
            setSenderEmail("");
            setMessage("");
            axios.post("http://localhost:3000/api/send", JSON.stringify({fullName, senderEmail, message}))
            .then((res) => {
                console.log(res.data)
                alert("Message successfully sent!")
            })
            .catch((err) => {
                console.log(err);
                alert("There was an error sending the message");
            });
            
            
            // axios.post("/api/send", formData, {
            //     headers: {
            //         "Content-Type": "application/json"
            //     },                
            // }).then(res => {
            //     res.json()
            // }).then(data => {
            //     alert("Message sent!")
            //     console.log("Message sent", data);
            // }).catch(error => {
            //     alert("Error sending message")
            //     console.log("Error sending message", error);
            // })
            fetch("/api/send", )

        }
        


        
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