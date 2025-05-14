import { motion } from 'framer-motion';
import { useState } from 'react';

// Define a type for media items
interface MediaItem {
  title: string;
  date: string;
  category: string;
  priority: string;
  excerpt: string;
  content: string;
  image: string;
}

const Media = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  // Modal handlers
  const openMediaModal = (media: MediaItem) => setSelectedMedia(media);
  const closeMediaModal = () => setSelectedMedia(null);

  const mediaItems = [
    {
      title: "ME Solar Expands Operations",
      date: "February 15, 2024",
      category: "Company News",
      priority: "high",
      excerpt: "We're excited to announce our expansion into three new states.",
      content: "ME Solar is proud to announce its expansion into three new strategic markets: Arizona, Nevada, and New Mexico. This expansion will allow us to better serve customers across the Southwest region, where solar energy potential is among the highest in the nation. Our expansion includes new installation teams, customer service centers, and partnerships with local businesses. We expect to create over 200 new jobs in these regions within the next year, further supporting the transition to renewable energy across America.",
      image: "https://images.unsplash.com/photo-1497440001374-f658d8094c88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "New Solar Technology Breakthrough",
      date: "February 10, 2024",
      category: "Innovation",
      priority: "high",
      excerpt: "Our research team has developed a new solar panel technology.",
      content: "After three years of intensive research and development, our engineering team has created a revolutionary new solar panel design that increases energy efficiency by 27% while reducing manufacturing costs. The new SolarMax panels use a proprietary photovoltaic material that captures a wider spectrum of light, including lower-intensity wavelengths during cloudy conditions. This breakthrough technology will be available to residential customers starting next quarter and represents a significant step forward in making solar energy more accessible and efficient for everyone.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary-900 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Media Center</h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-100">
              Stay updated with our latest media releases, company news, and innovations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Media Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-70"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(20,184,166,0.2) 0%, rgba(255,255,255,0) 70%)"
          }}
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-6">
            {mediaItems.map((media, index) => {
              // Define size classes based on priority
              let sizeClasses = "";
              let imageHeight = "";
              let titleSize = "";
              let excerptDisplay = "";
              
              if (media.priority === "high") {
                sizeClasses = "col-span-12 md:col-span-6 lg:col-span-6";
                imageHeight = "h-64";
                titleSize = "text-2xl";
                excerptDisplay = "block";
              } else if (media.priority === "medium") {
                sizeClasses = "col-span-12 md:col-span-6 lg:col-span-4";
                imageHeight = "h-48";
                titleSize = "text-xl";
                excerptDisplay = "block";
              } else { // low priority
                sizeClasses = "col-span-6 md:col-span-4 lg:col-span-3";
                imageHeight = "h-32";
                titleSize = "text-lg";
                excerptDisplay = "hidden md:block";
              }
              
              return (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.03, 
                    boxShadow: "0 0 25px rgba(20, 184, 166, 0.2)"
                  }}
                  className={`bg-white rounded-lg overflow-hidden shadow-lg ${sizeClasses}`}
                >
                  <div className={`relative overflow-hidden ${imageHeight} group`}>
                    <img
                      src={media.image || "/api/placeholder/400/320"}
                      alt={media.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-semibold px-2.5 py-0.5 m-2 rounded">
                      {media.category}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <h3 className={`${titleSize} font-semibold text-white p-4`}>
                        {media.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center mb-2">
                      <span className="text-gray-500 text-xs">{media.date}</span>
                    </div>
                    <h3 className={`${titleSize} font-semibold text-gray-900 mb-2 line-clamp-2`}>
                      {media.title}
                    </h3>
                    <p className={`text-gray-600 mb-3 text-sm line-clamp-2 ${excerptDisplay}`}>{media.excerpt}</p>
                    <motion.button 
                      className="text-primary-600 font-semibold hover:text-primary-700 transition-colors flex items-center text-sm"
                      onClick={() => openMediaModal(media)}
                      whileHover={{ x: 5 }}
                    >
                      Read More 
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Media Modal */}
      {selectedMedia && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closeMediaModal}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-full overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedMedia.image || "/api/placeholder/400/320"}
                alt={selectedMedia.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2 inline-block">
                    {selectedMedia.category}
                  </span>
                  <h2 className="text-3xl font-bold text-white">{selectedMedia.title}</h2>
                  <p className="text-white/80 text-sm mt-2">{selectedMedia.date}</p>
                </div>
              </div>
              <button
                onClick={closeMediaModal}
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="prose prose-lg max-w-none">
                <p>{selectedMedia.content}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Media;