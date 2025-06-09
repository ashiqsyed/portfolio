import * as React from 'react';

interface EmailProps {
    fullName: string;
    senderEmail: string;
    message: string
}

export const EmailTemplate: React.FC<Readonly<EmailProps>> = ({
    fullName, senderEmail, message
}) => (
    <div>
        <h1>Message from {fullName}</h1>
        <h3>Sender Email: </h3>
        <p>{senderEmail}</p>
        <h3>Message: </h3>
        <p>{message}</p>
    </div>
)