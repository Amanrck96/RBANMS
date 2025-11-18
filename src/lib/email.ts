import nodemailer from "nodemailer";

// Uses Gmail SMTP with App Password credentials.
// Ensure env vars are set (never hardcode secrets):
// - GMAIL_USER: your Gmail address
// - GMAIL_APP_PASSWORD: your Gmail App Password

export function getTransporter() {
  const userRaw = process.env.GMAIL_USER;
  const passRaw = process.env.GMAIL_APP_PASSWORD;
  const user = userRaw?.trim();
  const pass = passRaw?.replace(/\s+/g, "").trim();

  if (!user || !pass) {
    throw new Error("Missing GMAIL_USER or GMAIL_APP_PASSWORD environment variables");
  }

  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });
}

export async function sendEnquiryEmails({
  name,
  email,
  phone,
  subject,
  message,
}: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}) {
  const transporter = getTransporter();

  // Verify transporter connectivity and credentials before attempting to send.
  try {
    await transporter.verify();
  } catch (verifyErr) {
    console.error("SMTP verify failed:", verifyErr);
    throw new Error("SMTP verification failed. Check network and credentials.");
  }

  const adminEmail = process.env.ADMIN_EMAIL || process.env.GMAIL_USER;
  if (!adminEmail) {
    throw new Error("Missing ADMIN_EMAIL or GMAIL_USER environment variable");
  }

  const detailsHtml = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2 style="margin-bottom: 8px;">New Enquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${message}</p>
    </div>
  `;

  // Send to admin
  await transporter.sendMail({
    from: `RBANM's FGC <${process.env.GMAIL_USER}>`,
    replyTo: email,
    to: adminEmail,
    subject: `New Enquiry: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n${phone ? `Phone: ${phone}\n` : ""}Subject: ${subject}\n\n${message}`,
    html: detailsHtml,
  });

  // Send confirmation to submitter
  await transporter.sendMail({
    from: `RBANM's FGC <${process.env.GMAIL_USER}>`,
    to: email,
    subject: `We received your enquiry: ${subject}`,
    text: `Hi ${name},\n\nThanks for reaching out. We have received your enquiry and will get back to you shortly.\n\nYour message:\n${message}\n\nRegards,\nRBANM's First Grade College`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <p>Hi ${name},</p>
        <p>Thanks for reaching out. We have received your enquiry and will get back to you shortly.</p>
        <p><strong>Your message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
        <p>Regards,<br/>RBANM's First Grade College</p>
      </div>
    `,
  });
}

