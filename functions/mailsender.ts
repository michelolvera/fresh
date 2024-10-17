import { Handler } from "@netlify/functions";
import {HTTP_STATUS_OK} from "@netlify/functions/dist/lib/consts";

const handler: Handler = async (event, context) => {
    const messageData = JSON.parse(event.body!!);

    console.log("Message data: %s", messageData);

    let html = `<p>Nombre: ${messageData.name}</p>`
            + `<p>Telefono: ${messageData.phone}</p>`
            + `<p>Mensaje: ${messageData.message}</p>`;

    return {
        statusCode: HTTP_STATUS_OK
    };
};

export { handler };