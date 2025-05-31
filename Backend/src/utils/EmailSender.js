import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ADMIN,
    pass: process.env.EMAIL_ADMIN_PASS,
  },
});

// Verify connection configuration once on startup
// transporter.verify((error, success) => {
//   if (error) {
//     console.error(" SMTP connection error:", error);
//   } else {
//     console.log("SMTP server is ready to send emails");
//   }
// });

/**
 * Send a welcome email to new users after registration.
 * @param {string} toEmail - Recipient's email address
 * @param {string} userName - Recipient's full name
 */
export const sendWelcomeEmail = async (toEmail, userName) => {
  try {
    const mailOptions = {
      from: `"LumioFlow Admin" <${process.env.EMAIL_ADMIN}>`,
      to: toEmail,
      subject: "Welcome to LumioFlow!",
      html: `
        <h2>Hello ${userName},</h2>
        <p>🎉 Welcome to LumioFlow!</p>
        <p>We're excited to have you on board. You will now receive updates via email.</p>
        <p>Regards,<br>Team LumioFlow</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    if (info.accepted && info.accepted.length > 0) {
      console.log(`Email successfully sent to: ${info.accepted.join(", ")}`);
    } else {
      console.warn(`Email not accepted by SMTP server for: ${toEmail}`);
    }
  } catch (error) {
    console.error(`Failed to send welcome email to ${toEmail}:`, error);
    throw error; // so the caller can handle it
  }
};
