import {Handler} from "@netlify/functions";
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
        html: `<table>
    <tr>
        <td><strong>Fecha:</strong></td>
        <td>${messageData.date}</td>
        <td><strong>Sueldo Mensual Deseado:</strong></td>
        <td>${messageData.salary}</td>
    </tr>
    <tr>
        <td><br /><h4>DATOS PERSONALES</h4></td>
    </tr>
    <tr>
        <td><strong>Nombre completo:</strong></td>
        <td>${messageData.name}</td>
        <td><strong>Edad:</strong></td>
        <td>${messageData.age}</td>
    </tr>
    <tr>
        <td><strong>Teléfono a 10 dígitos:</strong></td>
        <td>${messageData.phone}</td>
        <td><strong>Sexo:</strong></td>
        <td>${messageData.sex}</td>
    </tr>
    <tr>
        <td><strong>Fecha de nacimiento:</strong></td>
        <td>${messageData.birthdate}</td>
        <td><strong>Nacionalidad:</strong></td>
        <td>${messageData.nationality}</td>
    </tr>
    <tr>
        <td><strong>Domicilio:</strong></td>
        <td>${messageData.street}</td>
        <td><strong>Colonia:</strong></td>
        <td>${messageData.neighborhood}</td>
    </tr>
    <tr>
        <td><strong>Codigo Postal:</strong></td>
        <td>${messageData.postal_code}</td>
        <td><strong>Correo:</strong></td>
        <td>${messageData.mail}</td>
    </tr>
    <tr>
        <td><strong>Estado Civil:</strong></td>
        <td>${messageData.marital_status}</td>
        <td><strong>Vive con:</strong></td>
        <td>${messageData.live_with}</td>
    </tr>
    <tr>
        <td><strong>Personas que dependen de usted:</strong></td>
        <td>${messageData.dependients}</td>
    </tr>
    <tr>
        <td><br /><h4>DOCUMENTACION</h4></td>
    </tr>
    <tr>
        <td><strong>CURP:</strong></td>
        <td>${messageData.curp}</td>
        <td><strong>Afore:</strong></td>
        <td>${messageData.afore}</td>
    </tr>
    <tr>
        <td><strong>RFC:</strong></td>
        <td>${messageData.rfc}</td>
        <td><strong>Número de Seguridad Social:</strong></td>
        <td>${messageData.nss}</td>
    </tr>
    <tr>
        <td><strong>Cartilla Militar No.:</strong></td>
        <td>${messageData.cartilla}</td>
        <td><strong>Pasaporte:</strong></td>
        <td>${messageData.passport}</td>
    </tr>
    <tr>
        <td><strong>Tiene licencia de manejo:</strong></td>
        <td>${messageData.licencia_manejo}</td>
        <td><strong>Tipo de licencia estatal:</strong></td>
        <td>${messageData.licencia_estatal}</td>
        <td><strong>Tipo de licencia federal:</strong></td>
        <td>${messageData.licencia_federal}</td>
    </tr>
    <tr>
        <td><strong>En caso de ser extranjero, coloque los documentos que le permitan trabajar en el pais:</strong></td>
        <td>${messageData.documentos_extrangero}</td>
    </tr>
    <tr>
        <td><br /><h4>ESTADO DE SALUD Y HABITOS PERSONALES</h4></td>
    </tr>
    <tr>
        <td><strong>¿Cómo considera su estado de salud actual?:</strong></td>
        <td>${messageData.estado_salud}</td>
        <td><strong>¿Práctica usted algún deporte?:</strong></td>
        <td>${messageData.deportes}</td>
    </tr>
    <tr>
        <td><strong>¿Pertenece a algún club deportivo o social?:</strong></td>
        <td>${messageData.club}</td>
        <td><strong>¿Cuál es su pasatiempo favorito?:</strong></td>
        <td>${messageData.pasatiempo}</td>
    </tr>
    <tr>
        <td><strong>¿Cuál es su meta en la vida?:</strong></td>
        <td>${messageData.meta}</td>
    </tr>
    <tr>
        <td><br /><h4>DATOS FAMILIARES</h4></td>
    </tr>
    <tr>
        <td><br /><h5>Madre</h5></td>
    </tr>
    <tr>
        <td><strong>Nombre:</strong></td>
        <td>${messageData.madre_nombre}</td>
        <td><strong>¿Vive?:</strong></td>
        <td>${messageData.madre_vive}</td>
        <td><strong>Domicilio:</strong></td>
        <td>${messageData.madre_domicilio}</td>
        <td><strong>Ocupación:</strong></td>
        <td>${messageData.madre_ocupacion}</td>
    </tr>
    <tr>
        <td><br /><h5>Padre</h5></td>
    </tr>
    <tr>
        <td><strong>Nombre:</strong></td>
        <td>${messageData.padre_nombre}</td>
        <td><strong>¿Vive?:</strong></td>
        <td>${messageData.padre_vive}</td>
        <td><strong>Domicilio:</strong></td>
        <td>${messageData.padre_domicilio}</td>
        <td><strong>Ocupación:</strong></td>
        <td>${messageData.padre_ocupacion}</td>
    </tr>
    <tr>
        <td><br /><h5>Esposa (o)</h5></td>
    </tr>
    <tr>
        <td><strong>Nombre:</strong></td>
        <td>${messageData.esposa_nombre}</td>
        <td><strong>¿Vive?:</strong></td>
        <td>${messageData.esposa_vive}</td>
        <td><strong>Domicilio:</strong></td>
        <td>${messageData.esposa_domicilio}</td>
        <td><strong>Ocupación:</strong></td>
        <td>${messageData.esposa_ocupacion}</td>
    </tr>
    <tr>
        <td><strong>Nombre y edades de los hijos:</strong></td>
        <td>${messageData.hijos_datos}</td>
    </tr>
    <tr>
        <td><br /><h4>ESCOLARIDAD</h4></td>
    </tr>
    <tr>
        <td><br /><h5>Pimaria</h5></td>
    </tr>
    <tr>
        <td><strong>Nombre:</strong></td>
        <td>${messageData.primaria_nombre}</td>
        <td><strong>Domicilio:</strong></td>
        <td>${messageData.primaria_domicilio}</td>
    </tr>
    <tr>
        <td><strong>Del año:</strong></td>
        <td>${messageData.primaria_de_ano}</td>
        <td><strong>Al año:</strong></td>
        <td>${messageData.primaria_al_ano}</td>
        <td><strong>Titulo Obtenido:</strong></td>
        <td>${messageData.titulo_primaria}</td>
    </tr>
    <tr>
        <td><br /><h5>Secundaria</h5></td>
    </tr>
    <tr>
        <td><strong>Nombre:</strong></td>
        <td>${messageData.secundaria_nombre}</td>
        <td><strong>Domicilio:</strong></td>
        <td>${messageData.secundaria_domicilio}</td>
    </tr>
    <tr>
        <td><strong>Del año:</strong></td>
        <td>${messageData.secundaria_de_ano}</td>
        <td><strong>Al año:</strong></td>
        <td>${messageData.secundaria_al_ano}</td>
        <td><strong>Titulo Obtenido:</strong></td>
        <td>${messageData.titulo_secundaria}</td>
    </tr>
    <tr>
        <td><br /><h5>Bachillerato</h5></td>
    </tr>
    <tr>
        <td><strong>Nombre:</strong></td>
        <td>${messageData.bachillerato_nombre}</td>
        <td><strong>Domicilio:</strong></td>
        <td>${messageData.bachillerato_domicilio}</td>
    </tr>
    <tr>
        <td><strong>Del año:</strong></td>
        <td>${messageData.bachillerato_de_ano}</td>
        <td><strong>Al año:</strong></td>
        <td>${messageData.bachillerato_al_ano}</td>
        <td><strong>Titulo Obtenido:</strong></td>
        <td>${messageData.titulo_bachillerato}</td>
    </tr>
    <tr>
        <td><br /><h5>Universidad</h5></td>
    </tr>
    <tr>
        <td><strong>Nombre:</strong></td>
        <td>${messageData.universidad_nombre}</td>
        <td><strong>Domicilio:</strong></td>
        <td>${messageData.universidad_domicilio}</td>
    </tr>
    <tr>
        <td><strong>Del año:</strong></td>
        <td>${messageData.universidad_de_ano}</td>
        <td><strong>Al año:</strong></td>
        <td>${messageData.universidad_al_ano}</td>
        <td><strong>Titulo Obtenido:</strong></td>
        <td>${messageData.titulo_universidad}</td>
    </tr>
    <tr>
        <td><br /><h5>Estudios que estas efectuando en la actualidad</h5></td>
    </tr>
    <tr>
        <td><strong>Escuela:</strong></td>
        <td>${messageData.estudio_actual_nombre}</td>
        <td><strong>Horario:</strong></td>
        <td>${messageData.estudio_actual_horario}</td>
    </tr>
    <tr>
        <td><strong>Curso o carrera:</strong></td>
        <td>${messageData.estudio_actual_cruso}</td>
        <td><strong>Grado:</strong></td>
        <td>${messageData.estudio_actual_grado}</td>
    </tr>
    <tr>
        <td><br /><h4>CONOCIMIENTOS GENERALES</h4></td>
    </tr>
    <tr>
        <td><strong>Que idiomas habla:</strong></td>
        <td>${messageData.idiomas}</td>
        <td><strong>Funciones de oficina que domina:</strong></td>
        <td>${messageData.funciones_oficina}</td>
    </tr>
    <tr>
        <td><strong>Maquina de oficina o taller que sepa manejar:</strong></td>
        <td>${messageData.maquinas}</td>
        <td><strong>Software que conoce:</strong></td>
        <td>${messageData.software}</td>
    </tr>
    <tr>
        <td><strong>Otros trabajos o funcines que domine:</strong></td>
        <td>${messageData.otras_funciones}</td>
    </tr>
    <tr>
        <td><br /><h4>EMPLEO ACTUAL Y ANTERIORES</h4></td>
    </tr>
    <tr>
        <td><br /><h5>Empleo actual o anterior</h5></td>
    </tr>
    <tr>
        <td><strong>Tiempo que presto sus servicios:</strong></td>
        <td>De:</td>
        <td>${messageData.empleo_actual_de}</td>
        <td>A:</td>
        <td>${messageData.empleo_actual_a}</td>
    </tr>
    <tr>
        <td><strong>Nombre de la compañia:</strong></td>
        <td>${messageData.empleo_actual_nombre}</td>
        <td><strong>Dirección:</strong></td>
        <td>${messageData.empleo_actual_direccion}</td>
        <td><strong>Teléfono:</strong></td>
        <td>${messageData.empleo_actual_tel}</td>
    </tr>
    <tr>
        <td><strong>Puesto desempeñado:</strong></td>
        <td>${messageData.empleo_actual_puesto}</td>
        <td><strong>Sueldo mensual inicial:</strong></td>
        <td>${messageData.empleo_actual_sueldo_inicial}</td>
        <td><strong>Sueldo mensual final:</strong></td>
        <td>${messageData.empleo_actual_sueldo_final}</td>
    </tr>
    <tr>
        <td><strong>Motivo separación:</strong></td>
        <td>${messageData.empleo_actual_separacion}</td>
    </tr>
    <tr>
        <td><strong>Nombre de su jefe directo:</strong></td>
        <td>${messageData.empleo_actual_jefe_directo}</td>
        <td><strong>Puesto de su jefe directo:</strong></td>
        <td>${messageData.empleo_actual_jefe_directo_puesto}</td>
        <td><strong>¿Podemos solicitar informes de usted?:</strong></td>
        <td>${messageData.empleo_actual_informes}</td>
    </tr>
    <tr>
        <td><br /><h5>Empleo anterior</h5></td>
    </tr>
    <tr>
        <td><strong>Tiempo que presto sus servicios:</strong></td>
        <td>De:</td>
        <td>${messageData.empleo_anterior1_de}</td>
        <td>A:</td>
        <td>${messageData.empleo_anterior1_a}</td>
    </tr>
    <tr>
        <td><strong>Nombre de la compañia:</strong></td>
        <td>${messageData.empleo_anterior1_nombre}</td>
        <td><strong>Dirección:</strong></td>
        <td>${messageData.empleo_anterior1_direccion}</td>
        <td><strong>Teléfono:</strong></td>
        <td>${messageData.empleo_anterior1_tel}</td>
    </tr>
    <tr>
        <td><strong>Puesto desempeñado:</strong></td>
        <td>${messageData.empleo_anterior1_puesto}</td>
        <td><strong>Sueldo mensual inicial:</strong></td>
        <td>${messageData.empleo_anterior1_sueldo_inicial}</td>
        <td><strong>Sueldo mensual final:</strong></td>
        <td>${messageData.empleo_anterior1_sueldo_final}</td>
    </tr>
    <tr>
        <td><strong>Motivo separación:</strong></td>
        <td>${messageData.empleo_anterior1_separacion}</td>
    </tr>
    <tr>
        <td><strong>Nombre de su jefe directo:</strong></td>
        <td>${messageData.empleo_anterior1_jefe_directo}</td>
        <td><strong>Puesto de su jefe directo:</strong></td>
        <td>${messageData.empleo_anterior1_jefe_directo_puesto}</td>
        <td><strong>¿Podemos solicitar informes de usted?:</strong></td>
        <td>${messageData.empleo_anterior1_informes}</td>
    </tr>
    <tr>
        <td><br /><h5>Empleo anterior</h5></td>
    </tr>
    <tr>
        <td><strong>Tiempo que presto sus servicios:</strong></td>
        <td>De:</td>
        <td>${messageData.empleo_anterior2_de}</td>
        <td>A:</td>
        <td>${messageData.empleo_anterior2_a}</td>
    </tr>
    <tr>
        <td><strong>Nombre de la compañia:</strong></td>
        <td>${messageData.empleo_anterior2_nombre}</td>
        <td><strong>Dirección:</strong></td>
        <td>${messageData.empleo_anterior2_direccion}</td>
        <td><strong>Teléfono:</strong></td>
        <td>${messageData.empleo_anterior2_tel}</td>
    </tr>
    <tr>
        <td><strong>Puesto desempeñado:</strong></td>
        <td>${messageData.empleo_anterior2_puesto}</td>
        <td><strong>Sueldo mensual inicial:</strong></td>
        <td>${messageData.empleo_anterior2_sueldo_inicial}</td>
        <td><strong>Sueldo mensual final:</strong></td>
        <td>${messageData.empleo_anterior2_sueldo_final}</td>
    </tr>
    <tr>
        <td><strong>Motivo separación:</strong></td>
        <td>${messageData.empleo_anterior2_separacion}</td>
    </tr>
    <tr>
        <td><strong>Nombre de su jefe directo:</strong></td>
        <td>${messageData.empleo_anterior2_jefe_directo}</td>
        <td><strong>Puesto de su jefe directo:</strong></td>
        <td>${messageData.empleo_anterior2_jefe_directo_puesto}</td>
        <td><strong>¿Podemos solicitar informes de usted?:</strong></td>
        <td>${messageData.empleo_anterior2_informes}</td>
    </tr>
    <tr>
        <td><br /><h5>Empleo anterior</h5></td>
    </tr>
    <tr>
        <td><strong>Tiempo que presto sus servicios:</strong></td>
        <td>De:</td>
        <td>${messageData.empleo_anterior3_de}</td>
        <td>A:</td>
        <td>${messageData.empleo_anterior3_a}</td>
    </tr>
    <tr>
        <td><strong>Nombre de la compañia:</strong></td>
        <td>${messageData.empleo_anterior3_nombre}</td>
        <td><strong>Dirección:</strong></td>
        <td>${messageData.empleo_anterior3_direccion}</td>
        <td><strong>Teléfono:</strong></td>
        <td>${messageData.empleo_anterior3_tel}</td>
    </tr>
    <tr>
        <td><strong>Puesto desempeñado:</strong></td>
        <td>${messageData.empleo_anterior3_puesto}</td>
        <td><strong>Sueldo mensual inicial:</strong></td>
        <td>${messageData.empleo_anterior3_sueldo_inicial}</td>
        <td><strong>Sueldo mensual final:</strong></td>
        <td>${messageData.empleo_anterior3_sueldo_final}</td>
    </tr>
    <tr>
        <td><strong>Motivo separación:</strong></td>
        <td>${messageData.empleo_anterior3_separacion}</td>
    </tr>
    <tr>
        <td><strong>Nombre de su jefe directo:</strong></td>
        <td>${messageData.empleo_anterior3_jefe_directo}</td>
        <td><strong>Puesto de su jefe directo:</strong></td>
        <td>${messageData.empleo_anterior3_jefe_directo_puesto}</td>
        <td><strong>¿Podemos solicitar informes de usted?:</strong></td>
        <td>${messageData.empleo_anterior3_informes}</td>
    </tr>
    <tr>
        <td><br /><h4>REFERENCIAS PERSONALES</h4></td>
    </tr>
    <tr>
        <td><strong>Nombre:</strong></td>
        <td>${messageData.referencia1_nombre}</td>
        <td><strong>Domicilio:</strong></td>
        <td>${messageData.referencia1_domicilio}</td>
        <td><strong>Teléfono:</strong></td>
        <td>${messageData.referencia1_tel}</td>
        <td><strong>Tiempo de conocerlo:</strong></td>
        <td>${messageData.referencia1_tiempo}</td>
    </tr>
    <tr>
        <td><strong>Nombre:</strong></td>
        <td>${messageData.referencia2_nombre}</td>
        <td><strong>Domicilio:</strong></td>
        <td>${messageData.referencia2_domicilio}</td>
        <td><strong>Teléfono:</strong></td>
        <td>${messageData.referencia2_tel}</td>
        <td><strong>Tiempo de conocerlo:</strong></td>
        <td>${messageData.referencia2_tiempo}</td>
    </tr>
    <tr>
        <td><strong>Nombre:</strong></td>
        <td>${messageData.referencia3_nombre}</td>
        <td><strong>Domicilio:</strong></td>
        <td>${messageData.referencia3_domicilio}</td>
        <td><strong>Teléfono:</strong></td>
        <td>${messageData.referencia3_tel}</td>
        <td><strong>Tiempo de conocerlo:</strong></td>
        <td>${messageData.referencia3_tiempo}</td>
    </tr>
    <tr>
        <td><br /><h4>DATOS ECONOMICOS</h4></td>
    </tr>
    <tr>
        <td><strong>¿Tiene usted otros ingresos?:</strong></td>
        <td>${messageData.otros_ingresos}</td>
        <td><strong>Importe mensual:</strong></td>
        <td>${messageData.otros_ingresos_monto}</td>
        <td><strong>¿Su cónyuge trabaja?:</strong></td>
        <td>${messageData.conyuge_trabaja}</td>
        <td><strong>Percepción mensual:</strong></td>
        <td>${messageData.conyuge_trabaja_monto}</td>
    </tr>
    <tr>
        <td><strong>¿Vive en casa propia?:</strong></td>
        <td>${messageData.casa_propia}</td>
        <td><strong>Valor aproximado:</strong></td>
        <td>${messageData.casa_propia_valor}</td>
        <td><strong>¿Paga renta?:</strong></td>
        <td>${messageData.renta}</td>
        <td><strong>Renta mensual:</strong></td>
        <td>${messageData.renta_monto}</td>
    </tr>
    <tr>
        <td><strong>¿Tiene automovil propio?:</strong></td>
        <td>${messageData.automovil}</td>
        <td><strong>Marca:</strong></td>
        <td>${messageData.automovil_marca}</td>
        <td><strong>Modelo:</strong></td>
        <td>${messageData.automovil_modelo}</td>
    </tr>
    <tr>
        <td><strong>¿Tiene deudas?:</strong></td>
        <td>${messageData.deudas}</td>
        <td><strong>¿Con quién?:</strong></td>
        <td>${messageData.deudas_quien}</td>
        <td><strong>Importe:</strong></td>
        <td>${messageData.deudas_importe}</td>
    </tr>
    <tr>
        <td><strong>¿Cuánto abona mensualmente?:</strong></td>
        <td>${messageData.deudas_abono}</td>
        <td><strong>¿A cuánto ascienden sus gastos mensuales?:</strong></td>
        <td>${messageData.gastos_mensuales}</td>
    </tr>
    <tr>
        <td><br /><h4>DATOS GENERALES</h4></td>
    </tr>
    <tr>
        <td><strong>¿Cómo supo de este empleo?:</strong></td>
        <td>${messageData.entero_empleo}</td>
        <td><strong>¿Tiene parientes trabajando en esta empresa?:</strong></td>
        <td>${messageData.parientes_en_empresa}</td>
    </tr>
    <tr>
        <td><strong>¿Ha sido afianzado?:</strong></td>
        <td>${messageData.afianzado}</td>
        <td><strong>¿Ha estado afiliado a algun sindicato?:</strong></td>
        <td>${messageData.sindicato}</td>
        <td><strong>¿Tiene seguro de vida?:</strong></td>
        <td>${messageData.seguro_vida}</td>
        <td><strong>¿Puede viajar?:</strong></td>
        <td>${messageData.viajar}</td>
    </tr>
    <tr>
        <td><strong>¿Esta dispuesto a cambiar su lugar de residencia?:</strong></td>
        <td>${messageData.cambiar_residencia}</td>
        <td><strong>Fecha en que puede presentarse a trabajar:</strong></td>
        <td>${messageData.presentarse_trabajar}</td>
    </tr>
    <tr>
        <td><strong>La información proporcionada en esta solicitud de empleo será utilizada con fines de participar en el proceso de selección para la vacante solicitada en la presente, acepto que toda la información que proporcione es verdadera.:</strong></td>
        <td>${messageData.deveritas}</td>
    </tr>
</table>`
    });

    console.log("Message sent: %s", info.messageId);

    return {
        statusCode: HTTP_STATUS_OK
    };
};

export {handler};