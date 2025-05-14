import { motion } from 'framer-motion';
import { useState } from 'react';

// Define a type for blog items
interface BlogItem {
  title: string;
  date: string;
  category: string;
  priority: string;
  excerpt: string;
  content: string;
  image: string;
  author?: string;
  readTime?: string;
}

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState<BlogItem | null>(null);

  // Modal handlers
  const openBlogModal = (blog: BlogItem) => setSelectedBlog(blog);
  const closeBlogModal = () => setSelectedBlog(null);

  const blogItems = [
    {
      title: "The Future of Solar Energy in Residential Markets",
      date: "February 20, 2024",
      category: "Industry Insights",
      priority: "high",
      excerpt: "Exploring how solar technology is transforming home energy solutions.",
      content: "The residential solar market is experiencing unprecedented growth as homeowners increasingly recognize the financial and environmental benefits of solar power. Recent advancements in panel efficiency and battery storage technology have made solar systems more accessible and practical for the average homeowner. This blog explores the latest trends in residential solar, including the impact of decreasing installation costs, new financing options, and innovative integration with smart home systems. We also discuss how government incentives and net metering policies are evolving across different regions, and what these changes mean for homeowners considering the switch to solar power.",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Sarah Johnson",
      readTime: "5 min read"
    },
    {
      title: "Understanding Solar Panel Efficiency Ratings",
      date: "February 15, 2024",
      category: "Technical Guide",
      priority: "medium",
      excerpt: "A comprehensive guide to interpreting solar panel specifications.",
      content: "When shopping for solar panels, efficiency ratings are among the most important specifications to consider, yet they're often misunderstood. This blog breaks down what these percentages actually mean, how they're calculated, and why they matter for your specific installation. We compare monocrystalline, polycrystalline, and thin-film technologies, explaining the trade-offs between efficiency, cost, and space requirements. Additionally, we discuss how environmental factors like temperature, shading, and orientation affect real-world performance beyond the rated efficiency. By the end of this guide, you'll be equipped to make informed decisions about which solar panels best suit your energy needs and installation constraints.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Michael Chen",
      readTime: "7 min read"
    },
    {
      title: "Solar Energy and Climate Change: Making a Difference",
      date: "February 8, 2024",
      category: "Sustainability",
      priority: "high",
      excerpt: "How transitioning to solar power contributes to fighting climate change.",
      content: "The relationship between solar energy adoption and climate change mitigation is stronger than many realize. This blog examines the quantifiable environmental impact of switching from fossil fuels to solar power, both at individual and community scales. We present case studies of communities that have significantly reduced their carbon footprint through solar initiatives, and discuss how these examples can be replicated elsewhere. The blog also addresses common misconceptions about the manufacturing carbon footprint of solar equipment, providing a full lifecycle analysis that demonstrates the net positive environmental impact of solar technology. Finally, we explore how combining solar with other renewable energy sources and conservation efforts can create comprehensive climate action strategies for homes, businesses, and municipalities.",
      image: "https://images.pexels.com/photos/2740956/pexels-photo-2740956.jpeg",
      author: "Emma Rodriguez",
      readTime: "6 min read"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-100">
              Insights, guides, and news about solar energy and sustainable living
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blogs Section */}
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
            {blogItems.map((blog, index) => {
              // Define size classes based on priority
              let sizeClasses = "";
              let imageHeight = "";
              let titleSize = "";
              let excerptDisplay = "";
              
              if (blog.priority === "high") {
                sizeClasses = "col-span-12 md:col-span-6 lg:col-span-6";
                imageHeight = "h-64";
                titleSize = "text-2xl";
                excerptDisplay = "block";
              } else if (blog.priority === "medium") {
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
                      src={blog.image || "/api/placeholder/400/320"}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-semibold px-2.5 py-0.5 m-2 rounded">
                      {blog.category}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <h3 className={`${titleSize} font-semibold text-white p-4`}>
                        {blog.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-500 text-xs">{blog.date}</span>
                      {blog.readTime && (
                        <span className="text-primary-600 text-xs font-medium">{blog.readTime}</span>
                      )}
                    </div>
                    <h3 className={`${titleSize} font-semibold text-gray-900 mb-2 line-clamp-2`}>
                      {blog.title}
                    </h3>
                    {blog.author && (
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {blog.author}
                      </div>
                    )}
                    <p className={`text-gray-600 mb-3 text-sm line-clamp-2 ${excerptDisplay}`}>{blog.excerpt}</p>
                    <motion.button 
                      className="text-primary-600 font-semibold hover:text-primary-700 transition-colors flex items-center text-sm"
                      onClick={() => openBlogModal(blog)}
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

      {/* Blog Modal */}
      {selectedBlog && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closeBlogModal}
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
                src={selectedBlog.image || "/api/placeholder/400/320"}
                alt={selectedBlog.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2 inline-block">
                    {selectedBlog.category}
                  </span>
                  <h2 className="text-3xl font-bold text-white">{selectedBlog.title}</h2>
                  <p className="text-white/80 text-sm mt-2">{selectedBlog.date}</p>
                </div>
              </div>
              <button
                onClick={closeBlogModal}
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              {selectedBlog.author && (
                <div className="flex items-center text-sm text-primary-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="font-medium">{selectedBlog.author}</span>
                  {selectedBlog.readTime && (
                    <span className="ml-4 text-gray-500">{selectedBlog.readTime}</span>
                  )}
                </div>
              )}
              <div className="prose prose-lg max-w-none">
                <p>{selectedBlog.content}</p>
              </div>
              <div className="mt-6 flex space-x-4">
                <button className="text-gray-600 flex items-center text-sm hover:text-primary-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Share
                </button>
                <button className="text-gray-600 flex items-center text-sm hover:text-primary-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  Bookmark
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Blogs;