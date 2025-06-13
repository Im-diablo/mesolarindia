import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-white to-primary-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-2xl p-8 text-center shadow-blue-300/50 overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary-100 rounded-full opacity-50"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-green-100 rounded-full opacity-50"></div>
          
          <div className="relative z-10">
            <div className="mb-8">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                className="w-24 h-24 bg-green-100 rounded-full mx-auto flex items-center justify-center"
              >
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </motion.div>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-3xl font-bold text-gray-800 mb-4"
            >
              Thank You for Your Enquiry!
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-8 flex justify-center"
            >
              <img 
                src="/assets/ThankYou.webp" 
                alt="Solar Energy Future" 
                className="w-64 h-auto rounded-lg shadow-md"
              />
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-600 mb-4"
            >
              We've received your information and will get back to you shortly.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-md text-gray-500 mb-8"
            >
              Our team is reviewing your enquiry and will contact you at the email or phone number you provided. 
              Thank you for your interest in our solar energy solutions!
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link 
                to="/"
                className="inline-block bg-gradient-to-r from-primary-500 to-primary-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:from-primary-600 hover:to-primary-800 hover:scale-105"
              >
                Return to Home
              </Link>
              
              <Link 
                to="/projects"
                className="inline-block bg-white border border-primary-500 text-primary-700 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-md hover:bg-primary-50 hover:scale-105"
              >
                View Our Projects
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYou;