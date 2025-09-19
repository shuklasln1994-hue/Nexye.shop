import { verifyOtp } from '../utils/otpStore';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({ message: 'Email and OTP are required.' });
    }

    // In a real application, you would retrieve the stored OTP for the given email
    // and compare it with the provided OTP. Also, check for expiration.
    // For now, we'll simulate a successful verification.
    const isOtpValid = verifyOtp(email, otp);

    if (isOtpValid) {
      res.status(200).json({ message: 'OTP verified successfully!' });
    } else {
      res.status(401).json({ message: 'Invalid or expired OTP.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}