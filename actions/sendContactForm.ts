"use server";
import { redirect } from "next/navigation";
import validator from "validator";

export async function sendContactForm(formData: FormData) {
  const email = validator.normalizeEmail(formData.get("email")!.toString());
  const message = validator.escape(formData.get("message")!.toString());

  /* Envoi de l'email avec nodemailer */

  redirect("/thankyou");
}
