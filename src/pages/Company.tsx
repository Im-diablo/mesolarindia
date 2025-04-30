import { motion } from 'framer-motion';

const Company = () => {
  const team = [
    {
      name: "Manoj Kumar",
      role: "Founder & Managing Director",
      image: "",
      bio: "A technical graduate and certified professional with deep expertise in renewable and solar energy."
    },
    {
      name: "Sunil Sagar",
      role: "Founder , Director & Chief Executive Officer (CEO)",
      image: "",
      bio: "A postgraduate in finance with over 10 years of experience in the solar and IT sectors, driving systematic corporate management."
    },
    {
      name: "Sadha Gupta",
      role: "Director- Stratergy Planning",
      image: "",
      bio: "Brings 7 years of experience in the education sector, specializing in mentoring and coaching, enhancing employee development at ME Solar."
    },
    {
      name: "Reena Gupta",
      role: "Director - Business & Planning",
      image: "",
      bio: "A business professional since 2015, with expertise in practical strategy, collaboration, and growth, fostering a creative and people-focused approach."
    },

  ];

  const values = [
    {
      title: "Innovation",
      description: "Constantly pushing the boundaries of solar technology",
      icon: "💡"
    },
    {
      title: "Sustainability",
      description: "Committed to environmental stewardship",
      icon: "🌱"
    },
    {
      title: "Excellence",
      description: "Delivering the highest quality in everything we do",
      icon: "⭐"
    },
    {
      title: "Integrity",
      description: "Operating with transparency and honesty",
      icon: "🤝"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Company</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SolarTech is a leading provider of innovative solar solutions, 
            committed to powering a sustainable future through renewable energy.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To accelerate the world's transition to sustainable energy through 
              innovative solar solutions and exceptional service.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the global leader in renewable energy solutions, creating a 
              cleaner, brighter future for generations to come.
            </p>
          </motion.div>
        </div>

        {/* Company Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Leadership Team */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-green-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Company;