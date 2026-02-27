import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import Cart from './components/Cart.jsx';
import Footer from './components/Footer.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import Login from './components/Login.jsx';
import AddressForm from './components/AddressForm.jsx';
import PaymentGateway from './components/PaymentGateway.jsx';
import OrderConfirmation from './components/OrderConfirmation.jsx';
import { AuthProvider, useAuth } from './context/AuthContext';
import { products, categories } from './data/products';

function AppContent() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(null); // null, 'address', 'payment', 'confirmation'
  const [orderData, setOrderData] = useState({});
  const { login, isAuthenticated } = useAuth();

  const addToCart = (product) => {
    if (!isAuthenticated) {
      setShowLogin(true);
      return;
    }
    
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message: `${product.name} added to cart!` }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 3000);
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity === 0) {
      removeFromCart(productId);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const getFilteredProducts = () => {
    if (selectedCategory === 'All Products') {
      return products;
    }
    
    const categoryMap = {
      'Pickles': 'pickles',
      'Papad': 'papad', 
      'Chips': 'chips',
      'Combos': 'combos'
    };
    
    const targetCategory = categoryMap[selectedCategory];
    return targetCategory ? products.filter(product => product.category === targetCategory) : products;
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setCheckoutStep('address');
  };

  const handleAddressSubmit = (addressData) => {
    setOrderData(prev => ({ ...prev, addressData }));
    setCheckoutStep('payment');
  };

  const handlePaymentSubmit = (paymentData) => {
    setOrderData(prev => ({ ...prev, paymentData }));
    setCheckoutStep('confirmation');
  };

  const handleOrderComplete = () => {
    setCart([]);
    setCheckoutStep(null);
    setOrderData({});
  };

  const handleBackToCart = () => {
    setCheckoutStep(null);
    setIsCartOpen(true);
  };

  const handleBackToAddress = () => {
    setCheckoutStep('address');
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  const filteredProducts = getFilteredProducts();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)}
        onLoginClick={() => setShowLogin(true)}
      />
      
      <Hero />
      
      <ProductGrid 
        products={filteredProducts}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        onAddToCart={addToCart}
      />
      
      <Footer />
      
      {isCartOpen && (
        <Cart
          cart={cart}
          cartTotal={cartTotal}
          onClose={() => setIsCartOpen(false)}
          onRemoveFromCart={removeFromCart}
          onUpdateQuantity={updateQuantity}
          onCheckout={handleCheckout}
        />
      )}
      
      {showLogin && (
        <Login
          onLogin={login}
          onClose={() => setShowLogin(false)}
        />
      )}
      
      {checkoutStep === 'address' && (
        <AddressForm
          onSubmit={handleAddressSubmit}
          onBack={handleBackToCart}
          cartTotal={cartTotal}
        />
      )}
      
      {checkoutStep === 'payment' && (
        <PaymentGateway
          onSubmit={handlePaymentSubmit}
          onBack={handleBackToAddress}
          cartTotal={cartTotal}
          addressData={orderData.addressData}
        />
      )}
      
      {checkoutStep === 'confirmation' && (
        <OrderConfirmation
          orderData={orderData}
          onClose={handleOrderComplete}
          onContinueShopping={handleOrderComplete}
        />
      )}
      
      {notifications.map(notification => (
        <div
          key={notification.id}
          className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg"
        >
          {notification.message}
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
