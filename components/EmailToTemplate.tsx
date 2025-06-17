import * as React from 'react';

interface EmailToProps {
    fullName: string;
}

export const EmailToTemplate: React.FC<Readonly<EmailToProps>> = ({
    fullName
}) => (
    <div>
        <h1>Hello {fullName}!</h1>
        <p>Thank you for reaching out to me. I will get back to you as soon as I can!</p>
        <p>Best,</p>
        <p>Ashiq Syed</p>
    </div>
)
