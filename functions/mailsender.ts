import { Handler } from "@netlify/functions";
import nodemailer from 'nodemailer';
import {HTTP_STATUS_OK} from "@netlify/functions/dist/lib/consts";

const handler: Handler = async (event, context) => {
    const messageData = JSON.parse(event.body!!);
    const user: string = "centroafree@outlook.com";
    const pass: string = "NENE050613:33";
    const host: string = "smtp.office365.com";
    const port: number = 587;

    console.log("Message data: %s", messageData);

    const transporter = nodemailer.createTransport({
        host: host,
        port: port,
        secure: false,
        auth: {
            user: user,
            pass: pass
        },
    })

    let info = await transporter.sendMail({
        from: user, // sender address
        to: "gorozco@crececonsultoria.com", // list of receivers
        replyTo: messageData.mail,
        subject: messageData.subject, // Subject line
        html: `<p>Nombre: ${messageData.name}</p>`
            + `<p>Telefono: ${messageData.phone}</p>`
            + `<p>Mensaje: ${messageData.message}</p>`
    });

    console.log("Message sent: %s", info.messageId);

    return {
        statusCode: HTTP_STATUS_OK
    };
};

export { handler };