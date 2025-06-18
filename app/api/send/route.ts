"use server"

import {EmailTemplate} from "../../../components/EmailTemplate"
// import { EmailToTemplate } from "@/components/EmailToTemplate";
import {Resend} from 'resend'
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const email = process.env.MY_EMAIL
// test end point
export async function GET() {
    return NextResponse.json({
        msg: "Success (GET)"
    })
}

export async function POST(request: Request) {
    // console.log(request)
    const {fullName, senderEmail, message} = await request.json();
    console.log(fullName);
    console.log(senderEmail);
    console.log(message);
    console.log(process.env.RESEND_API_KEY)

    try {
        const {data, error} = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: [`${email}`],
            subject: `Message from ${fullName} (${senderEmail})`,
            react: await EmailTemplate({fullName, senderEmail, message}) 
        });
        
        console.log(data);
        if (error) {
            return NextResponse.json({
                    "msg": "Error sending email"
                }
            )
        }
        return NextResponse.json({
            "msg": "Successfully sent email"
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            "msg": "There was an error"
        })
    }    
}