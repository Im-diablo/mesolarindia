import { motion } from 'framer-motion';

const Partner = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-primary-800 mb-4">Partnership Opportunities</h1>
          <p className="text-xl text-gray-600">Grow your business with us in the renewable energy sector</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Solar Equipment Suppliers",
              description: "Partner with us to supply high-quality solar equipment.",
              benefits: [
                "Access to large customer base",
                "Regular bulk orders",
                "Long-term contracts",
                "Marketing support"
              ]
            },
            {
              title: "Installation Contractors",
              description: "Join our network of certified installation partners.",
              benefits: [
                "Steady stream of projects",
                "Technical training",
                "Certification support",
                "Competitive rates"
              ]
            },
            {
              title: "Property Developers",
              description: "Integrate solar solutions in your development projects.",
              benefits: [
                "Increased property value",
                "Green building certification",
                "Custom solar solutions",
                "Project consultation"
              ]
            },
            {
              title: "Energy Consultants",
              description: "Collaborate on energy optimization projects.",
              benefits: [
                "Access to latest technology",
                "Joint project opportunities",
                "Technical support",
                "Revenue sharing model"
              ]
            }
          ].map((opportunity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-soft p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-primary-800 mb-4">{opportunity.title}</h3>
              <p className="text-gray-600 mb-4">{opportunity.description}</p>
              <div>
                <h4 className="font-semibold text-primary-700 mb-2">Benefits:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {opportunity.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 w-full bg-primary-600 text-white px-4 py-2 rounded-full hover:bg-primary-700 transition-colors duration-300"
                onClick={() => window.location.href = 'mailto:partnerships@company.com'}
              >
                Contact Us
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;