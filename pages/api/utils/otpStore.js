import fs from 'fs';
import path from 'path';

const OTP_FILE_PATH = path.resolve(process.cwd(), 'otp_store.json');

function readOtpStore() {
  try {
    const data = fs.readFileSync(OTP_FILE_PATH, 'utf8');
    return new Map(JSON.parse(data));
  } catch (error) {
    if (error.code === 'ENOENT') {
      return new Map();
    }
    console.error('Error reading OTP store:', error);
    return new Map();
  }
}

function writeOtpStore(otpStore) {
  try {
    fs.writeFileSync(OTP_FILE_PATH, JSON.stringify(Array.from(otpStore.entries())), 'utf8');
  } catch (error) {
    console.error('Error writing OTP store:', error);
  }
}

export function storeOtp(email, otp) {
  const otpStore = readOtpStore();
  const expiry = Date.now() + 5 * 60 * 1000; // OTP valid for 5 minutes
  otpStore.set(email, { otp, expiry });
  writeOtpStore(otpStore);
  console.log(`Stored OTP for ${email}: ${otp} (expires at ${new Date(expiry).toLocaleTimeString()})`);
  console.log('Current otpStore after storing:', Array.from(otpStore.entries())); // New debug log
}

export function verifyOtp(email, otp) {
  const otpStore = readOtpStore();
  const stored = otpStore.get(email);
  console.log('Attempting to verify OTP.'); // New debug log
  console.log('Email:', email, 'Provided OTP:', otp); // New debug log
  console.log('Stored OTP data:', stored); // New debug log
  if (!stored) {
    console.log('No OTP found for this email.'); // New debug log
    return false; // No OTP found for this email
  }

  if (Date.now() > stored.expiry) {
    otpStore.delete(email); // OTP expired, remove it
    writeOtpStore(otpStore);
    console.log('OTP expired.'); // New debug log
    return false;
  }

  if (stored.otp === otp) {
    otpStore.delete(email); // OTP successfully verified, remove it
    writeOtpStore(otpStore);
    console.log('OTP successfully matched and verified.'); // New debug log
    return true;
  }

  console.log('OTP mismatch.'); // New debug log
  return false; // OTP mismatch
}