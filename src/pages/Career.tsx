import { motion } from 'framer-motion';

const Career = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-primary-800 mb-4">Career Opportunities</h1>
          <p className="text-xl text-gray-600">Join our dynamic team and be part of the renewable energy revolution</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Solar Installation Technician",
              description: "Looking for experienced technicians to join our installation team.",
              requirements: [
                "2+ years experience in solar installation",
                "Valid driver's license",
                "Safety certification",
                "Physical ability to lift 50+ lbs"
              ]
            },
            {
              title: "Project Manager",
              description: "Seeking project managers to oversee solar installations from start to finish.",
              requirements: [
                "5+ years project management experience",
                "PMP certification preferred",
                "Experience in renewable energy sector",
                "Strong communication skills"
              ]
            },
            {
              title: "Sales Representative",
              description: "Join our sales team to help customers transition to solar energy.",
              requirements: [
                "3+ years sales experience",
                "Knowledge of solar energy systems",
                "Excellent presentation skills",
                "Target-driven mindset"
              ]
            },
            {
              title: "Technical Support Specialist",
              description: "Provide technical support for our solar monitoring systems.",
              requirements: [
                "Technical background in electrical systems",
                "Customer service experience",
                "Problem-solving skills",
                "Available for rotating shifts"
              ]
            }
          ].map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-soft p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-primary-800 mb-4">{position.title}</h3>
              <p className="text-gray-600 mb-4">{position.description}</p>
              <div>
                <h4 className="font-semibold text-primary-700 mb-2">Requirements:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {position.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 w-full bg-primary-600 text-white px-4 py-2 rounded-full hover:bg-primary-700 transition-colors duration-300"
                onClick={() => window.location.href = 'mailto:careers@company.com'}
              >
                Apply Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;