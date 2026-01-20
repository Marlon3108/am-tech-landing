'use server'

import { Resend } from 'resend';

// IMPORTANTE: Cuando despliegues en Vercel, deberás configurar esta variable de entorno
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const service = formData.get('service') as string;
  const message = formData.get('message') as string;

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Solo funciona para pruebas propias
      to: 'aymtech0408@gmail.com', // <--- ¡PON TU CORREO REAL AQUÍ!
      subject: `Nuevo Lead A&M: ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\nServicio: ${service}\nMensaje: ${message}`,
    });
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error };
  }
}