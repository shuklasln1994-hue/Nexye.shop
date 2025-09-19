import nodemailer from 'nodemailer';
import { storeOtp } from '../utils/otpStore';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required.' });
    }

    // Generate a 4-digit OTP
    const otp = Math.floor(1000 + Math.random() * 9000).toString();

    // Store the OTP with an expiration time
    storeOtp(email, otp);

    console.log(`Generated OTP for ${email}: ${otp}`);

    // Configure Nodemailer to send email via privateemail.com
    // You would typically get these credentials from environment variables
    const transporter = nodemailer.createTransport({
      host: 'mail.privateemail.com',
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: 'care@nexye.shop', // User provided email
        pass: '@Adrika@2021', // User provided password
      },
    });

    try {
      await transporter.sendMail({
        from: 'care@nexye.shop', // Sender address
        to: email, // List of receivers
        subject: 'Your NEXYE OTP',
        html: `<p>Your One-Time Password (OTP) for NEXYE is: <strong>${otp}</strong></p><p>This OTP is valid for 5 minutes.</p>`,
      });
      res.status(200).json({ message: 'OTP sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send OTP.', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}