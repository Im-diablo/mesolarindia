import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Sunshine Valley Solar Farm",
      location: "California, USA",
      description: "A 50MW solar farm providing clean energy to over 10,000 homes.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      stats: {
        capacity: "50MW",
        homes: "10,000+",
        co2: "45,000 tons"
      }
    },
    {
      title: "Green City Initiative",
      location: "Texas, USA",
      description: "Solar installation project for government buildings across the city.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      stats: {
        capacity: "25MW",
        buildings: "50+",
        savings: "$2M/year"
      }
    },
    {
      title: "Desert Sun Project",
      location: "Arizona, USA",
      description: "Large-scale solar installation in desert conditions.",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      stats: {
        capacity: "75MW",
        area: "500 acres",
        impact: "60,000 homes"
      }
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h1>
          <p className="text-xl text-gray-600">
            Showcasing our commitment to renewable energy through successful implementations
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-green-600 font-medium mb-4">
                    {project.location}
                  </p>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-green-600">
                          {value}
                        </div>
                        <div className="text-sm text-gray-500 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <button className="mt-8 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Solar Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help you achieve your renewable energy goals
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors">
            Contact Our Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;