import { useRouter } from 'next/router'
import Link from 'next/link';

export default function Header() {
  const router = useRouter()

  return (
    <header style={{
      background: '#fff',
      padding: '20px',
      borderBottom: '1px solid #eaeaea',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        <Link href="/" style={{ textDecoration: 'none', color: '#333' }}>
          📦 NEXYE
        </Link>
      </div>
      <nav>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex' }}>
          <li style={{ marginRight: '20px' }}>
            <Link href="/about" style={{ textDecoration: 'none', color: '#0070f3' }}>
              About
            </Link>
          </li>
          <li style={{ marginRight: '20px' }}>
            <Link href="/contact" style={{ textDecoration: 'none', color: '#0070f3' }}>
              Contact
            </Link>
          </li>
          <li>
            <Link href="/services" style={{ textDecoration: 'none', color: '#0070f3' }}>
              Services
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}