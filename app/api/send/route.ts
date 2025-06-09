"use server"

import {EmailTemplate} from "../../../components/EmailTemplate"
import {Resend} from 'resend'
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// test end point
export async function GET() {
    return NextResponse.json({
        msg: "Success (GET)"
    })
}

export async function POST(request: Request) {
    console.log(request)
    const {fullName, senderEmail, message} = await request.json();
    console.log(fullName);
    console.log(senderEmail);
    console.log(message);
    console.log(process.env.RESEND_API_KEY)

    try {
        const {data, error} = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['ashiqsyed31@gmail.com'],
            subject: `Message from ${fullName} (${senderEmail})`,
            react: EmailTemplate({fullName, senderEmail, message})            
        });

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
        return NextResponse.json({
            "msg": "There was an error"
        })
    }    
}