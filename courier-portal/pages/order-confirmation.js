import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { CheckCircle, Package, MapPin, Clock, CreditCard } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function OrderConfirmation() {
  const router = useRouter();
  const [orderData, setOrderData] = useState(null);
  
  // Generate order ID
  const generateOrderId = () => {
    const timestamp = Date.now().toString(36);
    const randomStr = Math.random().toString(36).substring(2, 8);
    return `CRR-${timestamp}-${randomStr}`.toUpperCase();
  };

  useEffect(() => {
    // Check if router is ready and has query parameters
    if (!router.isReady) return;
    
    // Check if user is authenticated
    const storedAuthData = localStorage.getItem('userAuth');
    if (!storedAuthData) {
      // Redirect to auth page if not authenticated
      router.push('/auth');
      return;
    }
    
    // If we have query data, use it
    if (Object.keys(router.query).length > 0) {
      const formattedOrderData = {
        orderId: generateOrderId(),
        pickupAddress: router.query.pickup || "",
        deliveryAddress: router.query.delivery || "",
        packageType: router.query.packageType || "Standard Package",
        weight: router.query.weight || "",
        price: parseInt(router.query.price) || 0,
        estimatedDelivery: "Tomorrow, 2-4 PM",
        orderDate: new Date().toLocaleDateString(),
        orderTime: new Date().toLocaleTimeString(),
        customerName: router.query.customerName || "",
        customerPhone: router.query.customerPhone || "",
        receiverName: router.query.receiverName || "",
        receiverPhone: router.query.receiverPhone || "",
        authName: router.query.authName || (authData ? authData.name : ""),
        authMobile: router.query.authMobile || (authData ? authData.mobile : "")
      };
      
      setOrderData(formattedOrderData);
    } else {
      // Fallback to sample data if no query parameters (for development/testing)
      // Parse auth data
      let authName = "";
      let authMobile = "";
      try {
        const authData = JSON.parse(storedAuthData);
        authName = authData.name;
        authMobile = authData.mobile;
      } catch (error) {
        console.error('Error parsing auth data:', error);
      }
      
      const sampleOrderData = {
        orderId: generateOrderId(),
        pickupAddress: "123 MG Road, Connaught Place, New Delhi, 110001",
        deliveryAddress: "456 Brigade Road, Bengaluru, Karnataka, 560001",
        packageType: "Standard Package",
        weight: "2.5 kg",
        price: 299,
        estimatedDelivery: "Tomorrow, 2-4 PM",
        orderDate: new Date().toLocaleDateString(),
        orderTime: new Date().toLocaleTimeString(),
        customerName: "John Doe",
        customerPhone: "+91 98765 43210",
        receiverName: "Jane Smith",
        receiverPhone: "+91 98765 12345",
        authName: authName,
        authMobile: authMobile
      };
      
      setOrderData(sampleOrderData);
    }
  }, [router.isReady, router.query]);

  if (!orderData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading order details...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Order Confirmation - NEXYE | Fast & Reliable Shipping</title>
        <meta name="description" content="Your order has been confirmed. Track your shipment with NEXYE courier service." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="📦" />
      </Head>
      
      <div style={{ 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Header */}
          <Header />
          
          <div style={{ textAlign: 'center', marginBottom: '30px', color: 'white' }}>
            <p style={{ fontSize: '1.3rem', opacity: '0.9', margin: '0' }}>

              Order Confirmation
            </p>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.98)',
            borderRadius: '25px',
            padding: '40px',
            boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
            backdropFilter: 'blur(10px)',
            marginBottom: '30px'
          }}>
            {/* Success Header */}
            <div style={{
              textAlign: 'center',
              marginBottom: '30px'
            }}>
              <div style={{
                width: '100px',
                height: '100px',
                background: '#e3f2fd',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto'
              }}>
                <CheckCircle size={60} color="#1565c0" />
              </div>
              <h1 style={{ 
                fontSize: '2.5rem', 
                fontWeight: '700',
                color: '#1565c0',
                margin: '0 0 10px 0'
              }}>
                Order Confirmed!
              </h1>
              <p style={{ fontSize: '1.1rem', color: '#546e7a', margin: '0' }}>
                Your courier request has been successfully placed
              </p>
            </div>

            {/* Order ID Card */}
            <div style={{
              background: 'linear-gradient(135deg, #e3f2fd, #bbdefb)',
              padding: '30px',
              borderRadius: '20px',
              marginBottom: '30px',
              border: '2px solid #2196f3',
              textAlign: 'center'
            }}>
              <h2 style={{ 
                color: '#1565c0', 
                marginBottom: '10px',
                fontSize: '1rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                ORDER ID
              </h2>
              <p style={{ 
                fontSize: '2rem', 
                fontWeight: '700',
                color: '#1565c0',
                margin: '0 0 10px 0',
                letterSpacing: '1px'
              }}>
                {orderData.orderId}
              </p>
              <p style={{ fontSize: '0.9rem', color: '#1565c0', margin: '0', fontWeight: '500' }}>
                Save this ID to track your order
              </p>
            </div>

            {/* Ship Star Message */}
            <div style={{
              background: 'linear-gradient(135deg, #f3e5f5, #e1bee7)',
              padding: '30px',
              borderRadius: '20px',
              marginBottom: '30px',
              border: '2px solid #9c27b0'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div style={{
                  background: 'white',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}>
                  <Package size={30} color="#9c27b0" />
                </div>
                <div>
                  <h3 style={{ 
                    color: '#6a1b9a', 
                    marginBottom: '10px',
                    fontSize: '1.2rem',
                    fontWeight: '600'
                  }}>
                    Booking Confirmed with NEXYE Courier
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: '#6a1b9a', margin: '0', lineHeight: '1.6' }}>
                    Your courier has been successfully booked with NEXYE, our trusted courier partner. 
                    Our team will arrange pickup of your shipment within 24 working hours. Please ensure 
                    your package is ready with proper packaging and labeling for smooth pickup and delivery.
                  </p>
                </div>
              </div>
            </div>

            {/* Order Details */}
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '20px',
              marginBottom: '30px',
              boxShadow: '0 10px 15px rgba(0,0,0,0.05)',
              border: '1px solid #e0e0e0'
            }}>
              <h2 style={{ 
                color: '#424242', 
                marginBottom: '20px',
                fontSize: '1.5rem',
                fontWeight: '700'
              }}>
                Order Details
              </h2>
              <div style={{ display: 'grid', gap: '20px' }}>
                {/* Pickup & Delivery */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                    <div style={{
                      background: '#e8f5e9',
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <MapPin size={20} color="#2e7d32" />
                    </div>
                    <div>
                      <h3 style={{ 
                        color: '#424242', 
                        marginBottom: '5px',
                        fontSize: '1rem',
                        fontWeight: '600'
                      }}>
                        Pickup Address
                      </h3>
                      <p style={{ fontSize: '0.95rem', color: '#616161', margin: '0' }}>
                        {orderData.pickupAddress}
                      </p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                    <div style={{
                      background: '#e3f2fd',
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <MapPin size={20} color="#1565c0" />
                    </div>
                    <div>
                      <h3 style={{ 
                        color: '#424242', 
                        marginBottom: '5px',
                        fontSize: '1rem',
                        fontWeight: '600'
                      }}>
                        Delivery Address
                      </h3>
                      <p style={{ fontSize: '0.95rem', color: '#616161', margin: '0' }}>
                        {orderData.deliveryAddress}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Package Info */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', paddingTop: '15px', borderTop: '1px solid #eee' }}>
                  <div style={{
                    background: '#fff3e0',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Package size={20} color="#e65100" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ 
                      color: '#424242', 
                      marginBottom: '5px',
                      fontSize: '1rem',
                      fontWeight: '600'
                    }}>
                      Package Information
                    </h3>
                    <div style={{ fontSize: '0.95rem', color: '#616161', marginTop: '5px' }}>
                      <span style={{ display: 'inline-block', marginRight: '15px' }}>Type: {orderData.packageType}</span>
                      <span>Weight: {orderData.weight}</span>
                    </div>
                  </div>
                </div>

                {/* Timing */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', paddingTop: '15px', borderTop: '1px solid #eee' }}>
                  <div style={{
                    background: '#f3e5f5',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Clock size={20} color="#9c27b0" />
                  </div>
                  <div>
                    <h3 style={{ 
                      color: '#424242', 
                      marginBottom: '5px',
                      fontSize: '1rem',
                      fontWeight: '600'
                    }}>
                      Estimated Delivery
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: '#616161', margin: '0' }}>
                      {orderData.estimatedDelivery}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', paddingTop: '15px', borderTop: '1px solid #eee' }}>
                  <div style={{
                    background: '#e8f5e9',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <CreditCard size={20} color="#2e7d32" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <h3 style={{ 
                        color: '#424242', 
                        margin: '0',
                        fontSize: '1rem',
                        fontWeight: '600'
                      }}>
                        Total Amount
                      </h3>
                      <p style={{ fontSize: '1.25rem', fontWeight: '700', color: '#424242', margin: '0' }}>₹{orderData.price}</p>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: '#757575', marginTop: '5px' }}>Payment will be collected upon pickup/delivery</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Info */}
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '20px',
              marginBottom: '30px',
              boxShadow: '0 10px 15px rgba(0,0,0,0.05)',
              border: '1px solid #e0e0e0'
            }}>
              <h2 style={{ 
                color: '#424242', 
                marginBottom: '20px',
                fontSize: '1.5rem',
                fontWeight: '700'
              }}>
                Customer Information
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                <div style={{ 
                  background: 'linear-gradient(135deg, #e3f2fd, #bbdefb)',
                  padding: '20px',
                  borderRadius: '15px',
                  border: '1px solid #90caf9'
                }}>
                  <h3 style={{ 
                    color: '#1565c0', 
                    marginBottom: '15px',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}>
                    Sender
                  </h3>
                  <div style={{ display: 'grid', gap: '10px', fontSize: '0.95rem', color: '#1565c0' }}>
                    <p style={{ margin: '0' }}>
                      <span style={{ fontWeight: '600', marginRight: '5px' }}>Name:</span> 
                      {orderData.customerName}
                    </p>
                    <p style={{ margin: '0' }}>
                      <span style={{ fontWeight: '600', marginRight: '5px' }}>Phone:</span> 
                      {orderData.customerPhone}
                    </p>
                    <p style={{ margin: '0' }}>
                      <span style={{ fontWeight: '600', marginRight: '5px' }}>Order Date:</span> 
                      {orderData.orderDate}
                    </p>
                  </div>
                </div>
                <div style={{ 
                  background: 'linear-gradient(135deg, #f3e5f5, #e1bee7)',
                  padding: '20px',
                  borderRadius: '15px',
                  border: '1px solid #ce93d8'
                }}>
                  <h3 style={{ 
                    color: '#6a1b9a', 
                    marginBottom: '15px',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}>
                    Receiver
                  </h3>
                  <div style={{ display: 'grid', gap: '10px', fontSize: '0.95rem', color: '#6a1b9a' }}>
                    <p style={{ margin: '0' }}>
                      <span style={{ fontWeight: '600', marginRight: '5px' }}>Name:</span> 
                      {orderData.receiverName}
                    </p>
                    <p style={{ margin: '0' }}>
                      <span style={{ fontWeight: '600', marginRight: '5px' }}>Phone:</span> 
                      {orderData.receiverPhone}
                    </p>
                    <p style={{ margin: '0' }}>
                      <span style={{ fontWeight: '600', marginRight: '5px' }}>Order Time:</span> 
                      {orderData.orderTime}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                <button style={{ 
                  background: 'linear-gradient(135deg, #1976d2, #1565c0)',
                  color: 'white',
                  padding: '15px 20px',
                  borderRadius: '10px',
                  textAlign: 'center',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  transition: 'transform 0.2s ease-in-out'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Track Order
                </button>
                <button style={{ 
                  background: 'linear-gradient(135deg, #f5f5f5, #e0e0e0)',
                  color: '#424242',
                  padding: '15px 20px',
                  borderRadius: '10px',
                  textAlign: 'center',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  transition: 'transform 0.2s ease-in-out'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" />
                  </svg>
                  Print Receipt
                </button>
                <button style={{ 
                  background: 'linear-gradient(135deg, #43a047, #2e7d32)',
                  color: 'white',
                  padding: '15px 20px',
                  borderRadius: '10px',
                  textAlign: 'center',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  transition: 'transform 0.2s ease-in-out'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  New Order
                </button>
              </div>
            </div>

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}