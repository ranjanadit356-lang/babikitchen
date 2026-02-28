import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, UserCheck, AlertCircle } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12" id="privacy">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-lg text-gray-600">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-500 mt-2">Last updated: February 2024</p>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              At Babita's Kitchen, we are committed to protecting your personal information and your right to privacy. 
              This Privacy Policy explains how we collect, use, process, and protect your personal information when you 
              visit our website, use our services, or interact with us in other ways.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              By using our services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </motion.div>

          {/* Information We Collect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800">Information We Collect</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Personal Information</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Name and contact details (email, phone number)</li>
                  <li>Delivery address and location information</li>
                  <li>Payment information (processed securely)</li>
                  <li>Account credentials (username, password)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Order Information</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Order history and preferences</li>
                  <li>Food preferences and dietary requirements</li>
                  <li>Delivery instructions</li>
                  <li>Feedback and ratings</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Technical Information</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>IP address and device information</li>
                  <li>Browser type and operating system</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Usage patterns and website interactions</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* How We Use Your Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-800">How We Use Your Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Service Delivery</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Process and deliver your orders</li>
                  <li>• Communicate about your orders</li>
                  <li>• Provide customer support</li>
                  <li>• Handle payments and refunds</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Personalization</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Recommend relevant products</li>
                  <li>• Personalize your experience</li>
                  <li>• Remember your preferences</li>
                  <li>• Send relevant updates</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Communication</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Send order confirmations</li>
                  <li>• Provide delivery updates</li>
                  <li>• Share promotional offers</li>
                  <li>• Request feedback</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Improvement</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Analyze usage patterns</li>
                  <li>• Improve our services</li>
                  <li>• Develop new features</li>
                  <li>• Enhance user experience</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Data Protection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-800">Data Protection & Security</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-green-50 border-l-4 border-green-500 p-4">
                <h3 className="font-semibold text-green-800 mb-2">Security Measures</h3>
                <ul className="text-green-700 space-y-1">
                  <li>• SSL encryption for all data transmission</li>
                  <li>• Secure payment processing</li>
                  <li>• Regular security audits</li>
                  <li>• Limited employee access to data</li>
                  <li>• Secure data storage systems</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h3 className="font-semibold text-blue-800 mb-2">Data Retention</h3>
                <p className="text-blue-700">
                  We retain your personal information only as long as necessary to provide our services 
                  and comply with legal obligations. You can request deletion of your account and associated 
                  data at any time.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Your Rights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="w-6 h-6 text-orange-600" />
              <h2 className="text-2xl font-bold text-gray-800">Your Rights</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Access & Correction</h3>
                <p className="text-sm text-gray-600">
                  You can access and update your personal information through your account settings 
                  or by contacting us directly.
                </p>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Data Portability</h3>
                <p className="text-sm text-gray-600">
                  You can request a copy of your personal data in a machine-readable format.
                </p>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Deletion</h3>
                <p className="text-sm text-gray-600">
                  You have the right to request deletion of your personal data, subject to legal obligations.
                </p>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Opt-out</h3>
                <p className="text-sm text-gray-600">
                  You can opt-out of marketing communications at any time through your account settings.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Cookies & Tracking</h2>
            <p className="text-gray-600 mb-4">
              We use cookies and similar tracking technologies to enhance your experience, analyze usage, 
              and provide personalized content. You can control cookie preferences through your browser settings.
            </p>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center py-2 border-b">
                <span className="font-medium text-gray-700">Essential Cookies</span>
                <span className="text-sm text-gray-500">Required for basic functionality</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="font-medium text-gray-700">Analytics Cookies</span>
                <span className="text-sm text-gray-500">Help us improve our services</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-medium text-gray-700">Marketing Cookies</span>
                <span className="text-sm text-gray-500">For personalized offers</span>
              </div>
            </div>
          </motion.div>

          {/* Third-Party Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Third-Party Services</h2>
            <p className="text-gray-600 mb-4">
              We work with trusted third-party service providers to deliver our services:
            </p>
            
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Payment Gateways:</strong> Secure payment processing</li>
              <li><strong>Delivery Partners:</strong> Order fulfillment and delivery</li>
              <li><strong>Analytics Services:</strong> Website usage analysis</li>
              <li><strong>Communication Platforms:</strong> Email and SMS services</li>
            </ul>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                <p className="text-yellow-700 text-sm">
                  These third parties have their own privacy policies and are responsible for their own data practices.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg p-6 text-white"
          >
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or how we handle your personal information, 
              please contact us:
            </p>
            
            <div className="space-y-2">
              <p><strong>Email:</strong> privacy@babitaskitchen.com</p>
              <p><strong>Phone:</strong> +91 98765 43210</p>
              <p><strong>Address:</strong> 123, Food Street, Kitchen Colony, Delhi - 110001</p>
            </div>
            
            <p className="mt-4 text-sm opacity-90">
              We will respond to your privacy concerns within 7 business days.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
