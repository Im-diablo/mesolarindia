import { motion } from 'framer-motion';

const Newsroom = () => {
  const news = [
    {
      title: "SolarTech Expands Operations to New Markets",
      date: "February 15, 2024",
      category: "Company News",
      excerpt: "We're excited to announce our expansion into three new states, bringing sustainable energy solutions to more communities.",
      image: "https://images.unsplash.com/photo-1497440001374-f658d8094c88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "New Solar Technology Breakthrough",
      date: "February 10, 2024",
      category: "Innovation",
      excerpt: "Our research team has developed a new solar panel technology that increases efficiency by 25%.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "SolarTech Wins Environmental Award",
      date: "February 5, 2024",
      category: "Awards",
      excerpt: "We're honored to receive the 2024 Green Innovation Award for our contributions to sustainable energy.",
      image: "https://images.unsplash.com/photo-1497440001374-f658d8094c88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Newsroom</h1>
          <p className="text-xl text-gray-600">
            Stay updated with the latest news and developments at SolarTech
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-green-600 text-sm font-semibold">
                    {item.category}
                  </span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-gray-500 text-sm">{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <button className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                  Read More →
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-20 bg-green-50 rounded-lg p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter for the latest updates and insights
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-green-500"
              />
              <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsroom;