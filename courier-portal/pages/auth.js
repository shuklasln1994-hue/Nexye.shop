import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Authentication() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    mobile: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check if user is already authenticated
  useEffect(() => {
    const authData = localStorage.getItem('userAuth');
    if (authData) {
      // User is already authenticated, redirect to order form
      router.push('/');
    }
  }, [router]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // Validate mobile number (basic validation for Indian mobile numbers)
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile.trim())) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate authentication process
      setTimeout(() => {
        // Store authentication data in localStorage
        localStorage.setItem('userAuth', JSON.stringify({
          name: formData.name,
          mobile: formData.mobile,
          timestamp: new Date().toISOString()
        }));
        
        // Redirect to order form
        router.push('/order-form');
      }, 1000);
    }
  };

  return (
    <>
      <Head>
        <title>Authentication - NEXYE | Fast & Reliable Shipping</title>
        <meta name="description" content="Authenticate to access NEXYE courier services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="📦" />
      </Head>
      
      <div style={{ 
        minHeight: '100vh',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <Header />
        <div style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '20px',
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <div style={{
              background: 'rgba(255,255,255,0.98)',
              borderRadius: '25px',
              padding: '40px',
              boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: '#e3f2fd',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                  fontSize: '2.5rem'
                }}>
                  🔐
                </div>
                <h2 style={{ 
                  fontSize: '1.8rem', 
                  fontWeight: '700',
                  color: '#1565c0',
                  margin: '0 0 10px 0'
                }}>
                  Authenticate
                </h2>
                <p style={{ fontSize: '1rem', color: '#546e7a', margin: '0' }}>
                  Please enter your details to continue
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#1565c0' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '14px',
                      border: errors.name ? '2px solid #f44336' : '2px solid #e1f5fe',
                      borderRadius: '10px',
                      fontSize: '16px',
                      boxSizing: 'border-box',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = errors.name ? '#f44336' : '#2196f3'}
                    onBlur={(e) => e.target.style.borderColor = errors.name ? '#f44336' : '#e1f5fe'}
                  />
                  {errors.name && (
                    <p style={{ color: '#f44336', margin: '5px 0 0 0', fontSize: '0.85rem' }}>
                      {errors.name}
                    </p>
                  )}
                </div>

                <div style={{ marginBottom: '30px' }}>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#1565c0' }}>
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="10-digit mobile number"
                    style={{
                      width: '100%',
                      padding: '14px',
                      border: errors.mobile ? '2px solid #f44336' : '2px solid #e1f5fe',
                      borderRadius: '10px',
                      fontSize: '16px',
                      boxSizing: 'border-box',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = errors.mobile ? '#f44336' : '#2196f3'}
                    onBlur={(e) => e.target.style.borderColor = errors.mobile ? '#f44336' : '#e1f5fe'}
                  />
                  {errors.mobile && (
                    <p style={{ color: '#f44336', margin: '5px 0 0 0', fontSize: '0.85rem' }}>
                      {errors.mobile}
                    </p>
                  )}
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: 'radial-gradient(circle at top left, #ff9a9e 0%, #fad0c4 50%, #ffe3e3 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    opacity: isSubmitting ? 0.7 : 1,
                    transition: 'all 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <span style={{ 
                        display: 'inline-block', 
                        width: '20px', 
                        height: '20px', 
                        border: '3px solid rgba(255,255,255,0.3)', 
                        borderRadius: '50%', 
                        borderTopColor: 'white', 
                        animation: 'spin 1s linear infinite',
                        marginRight: '10px'
                      }}></span>
                      Authenticating...
                    </>
                  ) : 'Continue to Order Form'}
                </button>
              </form>

              <style jsx>{`
                @keyframes spin {
                  to { transform: rotate(360deg); }
                }
              `}</style>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}