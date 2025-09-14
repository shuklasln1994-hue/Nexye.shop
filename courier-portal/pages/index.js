import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function HomePage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userAuth, setUserAuth] = useState(null)

  useEffect(() => {
    const authData = localStorage.getItem('userAuth')
    if (authData) {
      setIsAuthenticated(true)
      setUserAuth(JSON.parse(authData))
    }
  }, [])

  const handleGetStarted = () => {
    if (isAuthenticated) {
      router.push('/order-form')
    } else {
      router.push('/auth')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('userAuth')
    setIsAuthenticated(false)
    setUserAuth(null)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <Head>
        <title>NEXYE Courier - Fast & Reliable Shipping Across India</title>
        <meta name="description" content="Professional courier services with real-time tracking, competitive pricing, and nationwide delivery. Ship your packages safely and efficiently with NEXYE." />
        <meta name="keywords" content="courier service, package delivery, shipping, logistics, India courier, fast delivery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="📦" />
      </Head>
      
      <div style={{
        minHeight: '100vh',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        
        {/* Header/Navigation */}
        <Header />

        {/* Hero Section */}
        <section id="home" style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '100px 20px',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Animated Background Elements */}
          <div style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '100px',
            height: '100px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%',
            animation: 'float 6s ease-in-out infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '60%',
            right: '15%',
            width: '150px',
            height: '150px',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '50%',
            animation: 'float 8s ease-in-out infinite reverse'
          }}></div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: '2' }}>
            <h1 style={{
              fontSize: '4rem',
              fontWeight: '800',
              margin: '0 0 20px 0',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              lineHeight: '1.2'
            }}>
              Fast & Reliable<br/>Courier Services
            </h1>
            <p style={{
              fontSize: '1.3rem',
              margin: '0 0 40px 0',
              opacity: '0.95',
              lineHeight: '1.6',
              maxWidth: '600px',
              margin: '0 auto 40px auto'
            }}>
              Ship your packages across India with confidence. Real-time tracking, competitive pricing, and doorstep pickup & delivery services.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <button 
                onClick={handleGetStarted}
                style={{
                  background: 'rgba(255,255,255,0.9)',
                  color: '#333',
                  border: 'none',
                  padding: '18px 35px',
                  borderRadius: '30px',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                  transition: 'transform 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
              >
                🚀 Start Shipping Now
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  border: '2px solid rgba(255,255,255,0.5)',
                  padding: '16px 35px',
                  borderRadius: '30px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.2)'
                  e.target.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.1)'
                  e.target.style.transform = 'translateY(0)'
                }}
              >
                📦 Learn More
              </button>
            </div>
          </div>

          <style jsx>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-20px); }
            }
          `}</style>
        </section>

        {/* Features Section */}
        <section style={{
          padding: '80px 20px',
          background: '#f8f9fa'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#333',
                margin: '0 0 20px 0'
              }}>
                Why Choose NEXYE?
              </h2>
              <p style={{
                fontSize: '1.1rem',
                color: '#666',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                We provide comprehensive courier solutions with cutting-edge technology and exceptional customer service.
              </p>
            </div>

            <div style={{
              display: 'flex',
              overflowX: 'auto',
              gap: '40px',
              paddingBottom: '20px',
              scrollSnapType: 'x mandatory'
            }}>
              {[
                {
                  icon: '⚡',
                  title: 'Lightning Fast',
                  description: 'Express delivery within 24-48 hours across major cities'
                },
                {
                  icon: '🔒',
                  title: 'Secure & Safe',
                  description: 'Your packages are insured and handled with utmost care'
                },
                {
                  icon: '📍',
                  title: 'Real-time Tracking',
                  description: 'Track your shipments live with our advanced tracking system'
                },
                {
                  icon: '💰',
                  title: 'Competitive Pricing',
                  description: 'Best rates in the market with transparent pricing'
                },
                {
                  icon: '🏠',
                  title: 'Doorstep Service',
                  description: 'Convenient pickup and delivery right at your doorstep'
                },
                {
                  icon: '📞',
                  title: '24/7 Support',
                  description: 'Round-the-clock customer support for all your queries'
                }
              ].map((feature, index) => (
                <div key={index} style={{
                  background: 'white',
                  padding: '40px 30px',
                  borderRadius: '20px',
                  textAlign: 'center',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '20px'
                  }}>
                    {feature.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    color: '#333',
                    margin: '0 0 15px 0'
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    color: '#666',
                    lineHeight: '1.6',
                    margin: '0'
                  }}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" style={{
          padding: '80px 20px',
          background: 'white'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#333',
                margin: '0 0 20px 0'
              }}>
                Our Services
              </h2>
              <p style={{
                fontSize: '1.1rem',
                color: '#666',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Comprehensive logistics solutions for all your shipping needs
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px'
            }}>
              {[
                {
                  title: 'Standard Delivery',
                  subtitle: '2-4 Business Days',
                  price: 'Starting ₹270',
                  features: ['Nationwide coverage', 'SMS updates', 'Insurance included', 'Proof of delivery']
                },
                {
                  title: 'Express Delivery',
                  subtitle: '1-2 Business Days',
                  price: 'Starting ₹450',
                  features: ['Priority handling', 'Faster transit', 'Live tracking', 'Premium support']
                },
                {
                  title: 'Same Day Delivery',
                  subtitle: 'Within City Limits',
                  price: 'Starting ₹200',
                  features: ['Ultra-fast delivery', 'Real-time updates', 'Dedicated support', 'Emergency service']
                }
              ].map((service, index) => (
                <div key={index} style={{
                  background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
                  padding: '40px',
                  borderRadius: '20px',
                  border: '2px solid #dee2e6',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#667eea'
                  e.currentTarget.style.transform = 'translateY(-5px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#dee2e6'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
                >
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#333',
                    margin: '0 0 10px 0'
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    color: '#667eea',
                    fontWeight: '600',
                    margin: '0 0 15px 0'
                  }}>
                    {service.subtitle}
                  </p>
                  <p style={{
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    color: '#28a745',
                    margin: '0 0 20px 0'
                  }}>
                    {service.price}
                  </p>
                  <ul style={{
                    listStyle: 'none',
                    padding: '0',
                    margin: '0'
                  }}>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} style={{
                        padding: '8px 0',
                        color: '#666',
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        <span style={{ color: '#28a745', marginRight: '10px' }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" style={{
          padding: '80px 20px',
          background: '#f8f9fa'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
              gap: '60px',
              alignItems: 'center'
            }}>
              <div>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#333',
                  margin: '0 0 20px 0'
                }}>
                  About NEXYE Courier
                </h2>
                <p style={{
                  fontSize: '1.1rem',
                  color: '#666',
                  lineHeight: '1.8',
                  margin: '0 0 20px 0'
                }}>
                  Since our inception, NEXYE has been at the forefront of providing reliable and efficient courier services across India. We understand that every package carries someone's trust, and we honor that responsibility with dedication and professionalism.
                </p>
                <p style={{
                  fontSize: '1.1rem',
                  color: '#666',
                  lineHeight: '1.8',
                  margin: '0 0 30px 0'
                }}>
                  Our network spans across major cities and remote locations, ensuring your packages reach their destination safely and on time. With advanced tracking technology and a customer-first approach, we've become India's trusted courier partner.
                </p>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '40px'
                }}>
                  {[
                    { number: '50k+', label: 'Happy Customers' },
                    { number: '1M+', label: 'Packages Delivered' },
                    { number: '500+', label: 'Cities Covered' },
                    { number: '99.8%', label: 'On-time Delivery' }
                  ].map((stat, index) => (
                    <div key={index} style={{
                      textAlign: 'center',
                      padding: '20px',
                      background: 'white',
                      borderRadius: '15px',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                    }}>
                      <div style={{
                        fontSize: '1.8rem',
                        fontWeight: '800',
                        color: '#667eea',
                        margin: '0 0 5px 0'
                      }}>
                        {stat.number}
                      </div>
                      <div style={{
                        fontSize: '0.9rem',
                        color: '#666',
                        fontWeight: '500'
                      }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '20px',
                padding: '60px 40px',
                color: 'white',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '20px' }}>📦</div>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  margin: '0 0 20px 0'
                }}>
                  Our Mission
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  margin: '0'
                }}>
                  To revolutionize the courier industry in India by providing fast, reliable, and affordable logistics solutions while maintaining the highest standards of customer service and package security.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" style={{
          padding: '80px 20px',
          background: 'white'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#333',
                margin: '0 0 20px 0'
              }}>
                Get In Touch
              </h2>
              <p style={{
                fontSize: '1.1rem',
                color: '#666',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Have questions or need assistance? We're here to help you with all your courier needs.
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '40px'
            }}>
              {[
                {
                  icon: '📞',
                  title: 'Phone Support',
                  info: '+91 8888 888 888',
                  subtitle: 'Mon-Sat 9AM-7PM'
                },
                {
                  icon: '📧',
                  title: 'Email Support',
                  info: 'support@nexye.com',
                  subtitle: '24/7 Email Support'
                },
                {
                  icon: '🏢',
                  title: 'Head Office',
                  info: 'Mumbai, Maharashtra',
                  subtitle: 'Corporate Headquarters'
                },
                {
                  icon: '💬',
                  title: 'Live Chat',
                  info: 'Chat with us now',
                  subtitle: 'Instant assistance'
                }
              ].map((contact, index) => (
                <div key={index} style={{
                  background: '#f8f9fa',
                  padding: '40px 30px',
                  borderRadius: '20px',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '20px' }}>
                    {contact.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    color: '#333',
                    margin: '0 0 10px 0'
                  }}>
                    {contact.title}
                  </h3>
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#667eea',
                    fontWeight: '600',
                    margin: '0 0 5px 0'
                  }}>
                    {contact.info}
                  </p>
                  <p style={{
                    color: '#666',
                    fontSize: '0.9rem',
                    margin: '0'
                  }}>
                    {contact.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          padding: '80px 20px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              margin: '0 0 20px 0'
            }}>
              Ready to Ship?
            </h2>
            <p style={{
              fontSize: '1.2rem',
              margin: '0 0 40px 0',
              opacity: '0.9'
            }}>
              Join thousands of satisfied customers who trust NEXYE for their courier needs.
            </p>
            <button 
              onClick={handleGetStarted}
              style={{
                background: 'white',
                color: '#333',
                border: 'none',
                padding: '20px 40px',
                borderRadius: '30px',
                fontSize: '1.2rem',
                fontWeight: '700',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              🚀 Get Started Today
            </button>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

const styles = {
  integrationsSection: {
    padding: '80px 20px',
    background: '#f0f2f5',
    textAlign: 'center',
  },
  integrationsContent: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  integrationsHeading: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#333',
    marginBottom: '40px',
    lineHeight: '1.3',
  },
  logoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '20px',
    justifyItems: 'center',
  },
  logoItem: {
    backgroundColor: '#fff',
    padding: '15px 20px',
    borderRadius: '8px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70px',
    width: '100%',
    maxWidth: '180px',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
    },
  },
  logoImage: {
    maxWidth: '100%',
    height: 'auto',
    maxHeight: '80px',
    objectFit: 'contain',
  },
  container: {
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
    margin: 0,
    padding: 0,
    background: '#f4f4f4'
  },
  header: {
    background: '#333',
    color: '#fff',
    padding: '1rem 0',
    textAlign: 'center'
  },
  headerH1: {
    margin: 0
  },
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    background: '#444',
    padding: '0.5rem 0'
  },
  navbarA: {
    color: '#fff',
    textDecoration: 'none',
    padding: '0 1rem'
  },
  section: {
    padding: '20px',
    margin: '0 20px',
    background: '#fff',
    borderBottom: '1px solid #ddd'
  },
  sectionH2: {
    color: '#333'
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    background: '#333',
    color: '#fff'
  },
  logoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '40px'
  },
  logoItem: {
    background: '#f8f9fa',
    padding: '40px 30px',
    borderRadius: '20px',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
    cursor: 'pointer'
  },
  logoImage: {
    maxWidth: '100%',
    height: 'auto',
    maxHeight: '80px',
    objectFit: 'contain',
  }
};