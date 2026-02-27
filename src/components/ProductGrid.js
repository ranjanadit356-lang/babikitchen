import React, { useState } from 'react';
import { ShoppingCart, Star, Clock, Sparkles, Heart, Eye } from 'lucide-react';

const ProductGrid = ({ products, categories, selectedCategory, onCategoryChange, onAddToCart }) => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Our Delicious Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handcrafted with love, using traditional recipes passed down through generations
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.name)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category.name
                  ? category.name === 'Chips' 
                    ? 'bg-gradient-to-r from-google-green to-google-green-dark text-white shadow-lg scale-105'
                    : category.name === 'Papad'
                    ? 'bg-gradient-to-r from-google-yellow to-google-yellow-dark text-white shadow-lg scale-105'
                    : category.name === 'Pickles'
                    ? 'bg-gradient-to-r from-google-red to-google-red-dark text-white shadow-lg scale-105'
                    : category.name === 'Combos'
                    ? 'bg-gradient-to-r from-google-blue to-google-blue-dark text-white shadow-lg scale-105'
                    : 'bg-gray-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden card-hover cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-google-red to-google-yellow text-white text-xs font-bold shadow-lg">
                    <Sparkles className="inline-block w-3 h-3 mr-1" />
                    {product.badge}
                  </div>
                )}

                {/* Rating */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1 px-2 py-1 rounded-full bg-white/90 backdrop-blur-sm">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-xs font-semibold">{product.rating}</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Price & Time */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-google-blue">₹{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                      <Clock className="w-3 h-3" />
                      <span>{product.prepTime}</span>
                    </div>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => onAddToCart(product)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-google-blue to-google-red text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <ShoppingCart className="inline-block w-4 h-4 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {products.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
