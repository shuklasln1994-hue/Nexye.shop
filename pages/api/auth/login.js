import { verifyOtp } from '../utils/otpStore';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, mobile, email } = req.body;

    // In a real application, you would verify the user's credentials against a database
    // For this example, we'll simulate a successful login if OTP was verified.
    // The actual OTP verification happens in the client-side before calling this login API.

    // For now, we'll just check if name and mobile are provided.
    if (!name || !mobile || !email) {
      return res.status(400).json({ message: 'Name, mobile, and email are required.' });
    }

    // Simulate successful login
    return res.status(200).json({ message: 'Login successful', user: { name, mobile, email } });

  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}