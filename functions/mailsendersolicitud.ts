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
        to: "michel.olvera.p@outlook.com", // list of receivers
        replyTo: messageData.mail,
        subject: messageData.subject, // Subject line
        html: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">`
            + `<div class="column is-6">
                                <label>Fecha
                                    <input name="date" class="input is-medium" required type="date">
                                </label>
                            </div>`
            + `<div class="column is-6">
                                <label>Sueldo Mensual Deseado
                                    <input name="salary" class="input is-medium" required type="number" min="0" placeholder="Sueldo Mensual Deseado">
                                </label>
                            </div>`
            + `</div>`
    });

    console.log("Message sent: %s", info.messageId);

    return {
        statusCode: HTTP_STATUS_OK
    };
};

export { handler };