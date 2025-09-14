import React from 'react';
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();

  const quickLinks = [
    { name: 'Track Package', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Coverage Areas', href: '#' },
    { name: 'Support Center', href: '#' },
  ];

  return (
    <footer style={{
      background: '#2c3e50',
      color: 'white',
      padding: '60px 20px 20px 20px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {/* Company Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ fontSize: '2rem', marginRight: '10px' }}>📦</div>
              <div>
                <h3 style={{
                  margin: '0',
                  fontSize: '1.5rem',
                  fontWeight: '800'
                }}>
                  NEXYE
                </h3>
                <p style={{
                  margin: '0',
                  fontSize: '0.7rem',
                  opacity: '0.8',
                  letterSpacing: '1px'
                }}>
                  COURIER SERVICES
                </p>
              </div>
            </div>
            <p style={{
              lineHeight: '1.6',
              opacity: '0.9',
              margin: '0'
            }}>
              India's most trusted courier service provider with nationwide coverage and exceptional customer service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '1.2rem',
              fontWeight: '600',
              margin: '0 0 20px 0'
            }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
              {quickLinks.map((link, index) => (
                <li key={index} style={{ marginBottom: '10px' }}>
                  <a href={link.href} style={{
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'white'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.8)'}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div style={{ textAlign: 'center', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '40px' }}>
          <p style={{ margin: '0', fontSize: '0.9rem', opacity: '0.7' }}>
            &copy; {new Date().getFullYear()} NEXYE Courier Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;