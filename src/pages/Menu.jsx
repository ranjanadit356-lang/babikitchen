import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, ShoppingCart, ArrowRight } from 'lucide-react';
import { products, categories } from '../data/products';
import { useAuth } from '../context/AuthContext';

const Menu = () => {
  const { isAuthenticated } = useAuth();

  console.log('Menu component loaded');
  console.log('Products:', products);
  console.log('Products length:', products?.length);

  const handleAddToCart = (product) => {
    if (!isAuthenticated) {
      alert('Please login to add items to cart');
      return;
    }
    
    // Emit event to parent component
    window.dispatchEvent(new CustomEvent('addToCart', { detail: product }));
    
    // Show temporary feedback
    const button = document.getElementById(`add-to-cart-${product.id}`);
    if (button) {
      button.textContent = 'Added!';
      button.classList.add('bg-green-500');
      setTimeout(() => {
        button.textContent = 'Add';
        button.classList.remove('bg-green-500');
      }, 1000);
    }
  };

  const categoryMap = {
    'pickles': 'Pickles',
    'papad': 'Papad', 
    'chips': 'Chips',
    'combos': 'Combos'
  };

  // Simple render without complex state
  return (
    <div className="min-h-screen bg-gray-50 py-12" id="menu">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-gradient">Menu</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our authentic homemade delicacies, crafted with love and traditional recipes
          </p>
        </motion.div>

        {/* Debug Info */}
        <div className="text-center mb-8">
          <p className="text-sm text-gray-500">Total Products: {products?.length || 0}</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products && products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      {product.badge}
                    </span>
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <span className="text-xs font-medium text-gray-700">
                    {categoryMap[product.category]}
                  </span>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                
                {/* Product Features */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{product.rating || 4.8}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{product.prepTime || 'Ready'}</span>
                  </div>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between">
                  <div>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through mr-2">₹{product.originalPrice}</span>
                    )}
                    <span className="text-2xl font-bold text-blue-600">₹{product.price}</span>
                  </div>
                  <motion.button
                    id={`add-to-cart-${product.id}`}
                    onClick={() => handleAddToCart(product)}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {(!products || products.length === 0) && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <ShoppingCart className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500">Check back later for more delicious items!</p>
          </div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Craving Something Delicious?</h2>
          <p className="text-lg mb-6 opacity-90">
            Order now and get authentic homemade food delivered to your doorstep
          </p>
          <motion.button
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Order Now
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;
