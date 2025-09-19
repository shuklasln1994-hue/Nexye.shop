import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - NEXYE | Fast & Reliable Shipping</title>
        <meta name="description" content="Learn more about NEXYE and our mission to provide fast and reliable shipping services." />
      </Head>
      <Header />
      <main style={{ padding: '40px 20px', minHeight: 'calc(100vh - 160px)' }}>
        <h1>About Us</h1>
        <p>This is the About Us page content.</p>
      </main>
      <Footer />
    </>
  );
}