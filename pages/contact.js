import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - NEXYE | Fast & Reliable Shipping</title>
        <meta name="description" content="Get in touch with NEXYE for any inquiries or support." />
      </Head>
      <Header />
      <main style={{ padding: '40px 20px', minHeight: 'calc(100vh - 160px)' }}>
        <h1>Contact Us</h1>
        <p>This is the Contact Us page content.</p>
      </main>
      <Footer />
    </>
  );
}