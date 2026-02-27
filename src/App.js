import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import OrderForm from './components/OrderForm';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import { products, categories } from './data/products';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const addToCart = (product) => {
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

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  const filteredProducts = getFilteredProducts();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <Hero />
      
      <ProductGrid 
        products={filteredProducts}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        onAddToCart={addToCart}
      />
      
      <OrderForm cart={cart} cartTotal={cartTotal} />
      
      <Footer />
      
      {isCartOpen && (
        <Cart
          cart={cart}
          cartTotal={cartTotal}
          onClose={() => setIsCartOpen(false)}
          onRemoveFromCart={removeFromCart}
          onUpdateQuantity={updateQuantity}
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

export default App;
