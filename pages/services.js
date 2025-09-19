import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services - NEXYE | Fast & Reliable Shipping</title>
        <meta name="description" content="Explore the range of shipping and courier services offered by NEXYE." />
      </Head>
      <Header />
      <main style={{ padding: '40px 20px', minHeight: 'calc(100vh - 160px)' }}>
        <h1>Our Services</h1>
        <p>This is the Services page content.</p>
      </main>
      <Footer />
    </>
  );
}