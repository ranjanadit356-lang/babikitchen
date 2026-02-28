import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Users, Clock, ChefHat, Star, Quote, CheckCircle } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Babita Devi",
      role: "Founder & Head Chef",
      image: "/Images/logo.jpg",
      description: "With over 20 years of experience in traditional Indian cooking, Babita brings authentic flavors to every dish."
    },
    {
      name: "Ranjit Kumar",
      role: "Operations Manager", 
      image: "/Images/logo.jpg",
      description: "Ensuring seamless delivery and customer satisfaction with every order."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every dish is prepared with care and attention to detail, just like homemade food."
    },
    {
      icon: Award,
      title: "Quality First",
      description: "We use only the finest ingredients and traditional recipes to ensure the best taste."
    },
    {
      icon: Users,
      title: "Customer Happiness",
      description: "Your satisfaction is our priority. We go the extra mile to make you happy."
    },
    {
      icon: Clock,
      title: "Fresh Daily",
      description: "All our products are made fresh daily to ensure maximum freshness and taste."
    }
  ];

  const milestones = [
    { year: "2004", title: "Humble Beginning", description: "Started from home kitchen with just 2 recipes" },
    { year: "2010", title: "First Shop", description: "Opened our first physical store in Delhi" },
    { year: "2015", title: "Delivery Service", description: "Started home delivery service within 5km radius" },
    { year: "2020", title: "Online Launch", description: "Launched our website and mobile app" },
    { year: "2024", title: "1000+ Happy Customers", description: "Serving over 1000 satisfied customers daily" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12" id="about">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 mt-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About <span className="text-gradient">Babita's Kitchen</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Bringing authentic homemade Indian flavors to your table since 2004. 
            We believe in preserving traditional recipes while serving with modern convenience.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Babita's Kitchen began in 2004 as a small home-based business run by Babita Devi. 
                What started with just two traditional pickle recipes quickly grew into a beloved 
                local brand known for authenticity and quality.
              </p>
              <p className="text-gray-600 mb-4">
                Today, we're proud to serve over 1000 customers daily with our range of homemade 
                pickles, papads, chips, and combo packs. Every product is still made using the 
                same traditional recipes and methods that Babita perfected over two decades ago.
              </p>
              <p className="text-gray-600">
                Our mission is simple: to bring the taste of authentic homemade Indian food to 
                every household, preserving the culinary heritage that has been passed down 
                through generations.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl shadow-xl w-full h-96 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src="/Images/logo.jpg"
                  alt="Babita's Kitchen"
                  className="w-64 h-64 object-contain"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-xl">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-bold">4.9/5 Customer Rating</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Milestones Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600"></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                <div className="w-1/2"></div>
                <div className="w-8 h-8 bg-white border-4 border-blue-500 rounded-full z-10"></div>
                <div className={`w-1/2 px-8 ${index % 2 === 0 ? 'text-right' : ''}`}>
                  <div className="bg-gray-50 rounded-xl p-4 inline-block">
                    <div className="text-blue-600 font-bold text-sm mb-1">{milestone.year}</div>
                    <h3 className="font-bold text-gray-800 mb-1">{milestone.title}</h3>
                    <p className="text-gray-600 text-sm">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="flex items-center p-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mr-6 flex items-center justify-center bg-white border-2 border-gray-200">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white mb-12"
        >
          <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <Quote className="w-8 h-8 mb-4 opacity-50" />
              <p className="mb-4 italic">
                "The pickles taste exactly like my grandmother's recipe! Absolutely authentic and delicious."
              </p>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="font-bold">RK</span>
                </div>
                <div>
                  <p className="font-semibold">Rahul Kumar</p>
                  <p className="text-sm opacity-75">Regular Customer</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <Quote className="w-8 h-8 mb-4 opacity-50" />
              <p className="mb-4 italic">
                "Fast delivery and amazing packaging. The food always arrives fresh and hot. Highly recommend!"
              </p>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="font-bold">SP</span>
                </div>
                <div>
                  <p className="font-semibold">Sonia Patel</p>
                  <p className="text-sm opacity-75">Happy Customer</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <Quote className="w-8 h-8 mb-4 opacity-50" />
              <p className="mb-4 italic">
                "The combo packs are perfect for family gatherings. Great value for money and excellent taste!"
              </p>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="font-bold">AS</span>
                </div>
                <div>
                  <p className="font-semibold">Amit Sharma</p>
                  <p className="text-sm opacity-75">Loyal Customer</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center bg-white rounded-2xl shadow-lg p-8"
        >
          <ChefHat className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Taste Authentic Homemade Food?
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied customers who enjoy our authentic homemade delicacies every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Order Now
            </motion.button>
            <motion.button
              className="border-2 border-blue-500 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Menu
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
