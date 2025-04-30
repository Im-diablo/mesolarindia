import { motion } from 'framer-motion';
import { useState } from 'react';

// Define a type for news items
interface NewsItem {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
}

// Define a type for service items
interface ServiceItem {
  title: string;
  description: string;
  image: string;
  fullDescription: string;
  benefits: string[];
  pricing: string;
}

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // Update state and function to use the NewsItem and ServiceItem types
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  
  // Added state for booking form within service modal
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", bookingData);
    // Here you would typically send the booking data to your server
    alert("Your booking request has been submitted!");
    setBookingData({
      name: '',
      email: '',
      phone: '',
      date: '',
      notes: ''
    });
    setSelectedService(null); // Close the modal after submission
  };

  // News items with full content
  const newsItems = [
    {
      title: "SolarTech Expands Operations",
      date: "February 15, 2024",
      category: "Company News",
      excerpt: "We're excited to announce our expansion into three new states.",
      content: "SolarTech is proud to announce its expansion into three new strategic markets: Arizona, Nevada, and New Mexico. This expansion will allow us to better serve customers across the Southwest region, where solar energy potential is among the highest in the nation. Our expansion includes new installation teams, customer service centers, and partnerships with local businesses. We expect to create over 200 new jobs in these regions within the next year, further supporting the transition to renewable energy across America.",
      image: "https://images.unsplash.com/photo-1497440001374-f658d8094c88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "New Solar Technology Breakthrough",
      date: "February 10, 2024",
      category: "Innovation",
      excerpt: "Our research team has developed a new solar panel technology.",
      content: "After three years of intensive research and development, our engineering team has created a revolutionary new solar panel design that increases energy efficiency by 27% while reducing manufacturing costs. The new SolarMax panels use a proprietary photovoltaic material that captures a wider spectrum of light, including lower-intensity wavelengths during cloudy conditions. This breakthrough technology will be available to residential customers starting next quarter and represents a significant step forward in making solar energy more accessible and efficient for everyone.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Environmental Award Winner",
      date: "February 5, 2024",
      category: "Awards",
      excerpt: "SolarTech receives the 2024 Green Innovation Award.",
      content: "SolarTech has been honored with the prestigious 2024 Green Innovation Award by the National Renewable Energy Council. This recognition celebrates our commitment to environmental sustainability and technological innovation in the solar industry. The award specifically highlighted our community solar projects, which have provided clean energy access to over 50,000 households in underserved communities. We're proud to be recognized for our efforts and remain dedicated to our mission of making clean energy solutions available to everyone.",
      image: "https://images.unsplash.com/photo-1497440001374-f658d8094c88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];
  
  // Services with detailed content
  const services = [
    {
      title: "Residential Solar Installation",
      description: "Complete solar solutions for homes, including panel installation, battery storage, and smart monitoring systems.",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      fullDescription: "Our residential solar installation service offers a comprehensive solution for homeowners looking to reduce their carbon footprint and energy bills. We handle everything from initial assessment and design to installation and monitoring setup. Our expert team will evaluate your home's solar potential, recommend the optimal panel configuration, and install high-efficiency solar panels with minimal disruption to your daily life. We also offer integrated battery storage solutions to ensure you have power even when the sun isn't shining.",
      benefits: [
        "Reduce monthly energy bills by up to 70%",
        "Increase property value",
        "25-year warranty on all installations",
        "Real-time energy monitoring via smartphone app",
        "Available federal and state tax incentives"
      ],
      pricing: "Starting at $15,000 (before incentives)"
    },
    {
      title: "Commercial Solar Systems",
      description: "Large-scale solar installations for businesses, warehouses, and industrial facilities.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      fullDescription: "Our commercial solar solutions are designed to help businesses reduce operational costs while meeting sustainability goals. We specialize in designing and installing large-scale solar systems for commercial buildings, warehouses, manufacturing facilities, and agricultural operations. Our team works closely with your business to develop a customized solar solution that maximizes your ROI and provides long-term energy independence. We handle all aspects of the project, from permitting and design to installation and maintenance.",
      benefits: [
        "Significant reduction in operational expenses",
        "Quick ROI - typically 3-7 years",
        "Enhanced corporate sustainability profile",
        "Protection against rising energy costs",
        "Potential for LEED certification points"
      ],
      pricing: "Custom quotes based on facility size and energy needs"
    },
    {
      title: "Solar Maintenance",
      description: "Regular maintenance and repair services to ensure optimal performance of your solar system.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      fullDescription: "Maximize the efficiency and lifespan of your solar investment with our comprehensive maintenance services. Regular maintenance is essential to ensure your solar system operates at peak efficiency. Our technicians are trained to diagnose and repair all types of solar systems, regardless of who installed them. We offer scheduled maintenance packages as well as emergency repair services. Our maintenance includes panel cleaning, inspection of electrical components, performance testing, and monitoring system verification.",
      benefits: [
        "Maintain optimal energy production",
        "Early detection of potential issues",
        "Extended system lifespan",
        "Maintain manufacturer warranty compliance",
        "24/7 emergency repair service available"
      ],
      pricing: "Maintenance plans starting at $199/year"
    },
    {
      title: "Energy Storage Solutions",
      description: "Advanced battery storage systems for continuous power supply during non-solar hours.",
      image: "https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      fullDescription: "Our energy storage solutions provide the missing link in solar energy independence. We offer cutting-edge battery systems that store excess energy produced during sunny periods for use during cloudy days or nighttime. Our battery solutions are scalable to meet any energy storage need, from small residential systems to large commercial applications. We partner with industry-leading manufacturers to provide reliable, safe, and long-lasting battery systems that integrate seamlessly with new or existing solar installations.",
      benefits: [
        "Energy independence from the grid",
        "Backup power during outages",
        "Use stored solar energy during peak rate hours",
        "Smart energy management via integrated app",
        "Expandable capacity for growing energy needs"
      ],
      pricing: "Systems starting at $8,000 (before incentives)"
    }
  ];

  // Functions to handle modals
  const openNewsModal = (news: NewsItem) => {
    setSelectedNews(news);
  };

  const closeNewsModal = () => {
    setSelectedNews(null);
  };
  
  const openServiceModal = (service: ServiceItem) => {
    setSelectedService(service);
  };
  
  const closeServiceModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/src/homepage-background.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Powering Tomorrow with Solar Innovation
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Leading the way in sustainable energy solutions for a brighter, cleaner future.
            </p>
            <a href="#contact" className="inline-block bg-yellow-400 text-gray-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-colors">
              Get Started
            </a>
          </motion.div>
        </div>
      </section>

      {/* Company Section */}
      <section id="company" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Company</h2>
            <p className="text-xl text-gray-600">
              Leading the way in sustainable energy solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the global leader in renewable energy solutions, creating a 
                cleaner, brighter future for generations to come.
              </p>
            </motion.div>
          </div>

          {/* Team members with 4th centered if alone */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Manoj Kumar",
                role: "Founder & Managing Director",
                image: "",
                bio: "A technical graduate and certified professional with deep expertise in renewable and solar energy."
              },
              {
                name: "Sunil Sagar",
                role: "Founder , Director & Chief Executive Officer (CEO)",
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
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`bg-white rounded-lg overflow-hidden shadow-lg ${
                  index === 3 && "md:col-start-2 md:col-end-3"
                }`}
              >
                <img
                  src={member.image || "/api/placeholder/400/320"}
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
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive solar solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index, servicesArray) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`bg-white rounded-lg overflow-hidden shadow-lg ${
                  index === 3 && servicesArray.length % 2 !== 0 ? "md:col-span-2 max-w-md mx-auto" : ""
                }`}
              >
                <img
                  src={service.image || "/api/placeholder/400/320"}
                  alt={service.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                  <button 
                    className="mt-4 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors"
                    onClick={() => openServiceModal(service)}
                  >
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeServiceModal}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedService.image || "/api/placeholder/400/320"}
                alt={selectedService.title}
                className="w-full h-40 object-cover"
              />
              <button
                onClick={closeServiceModal}
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedService.title}</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">{selectedService.fullDescription}</p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Benefits:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {selectedService.benefits.map((benefit, index) => (
                    <li key={index} className="text-gray-700">{benefit}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Pricing:</h3>
                <p className="text-gray-700">{selectedService.pricing}</p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Book This Service</h3>
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="booking-name" className="block text-sm font-medium text-gray-700">Name</label>
                      <input
                        type="text"
                        id="booking-name"
                        name="name"
                        value={bookingData.name}
                        onChange={handleBookingChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="booking-email" className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        id="booking-email"
                        name="email"
                        value={bookingData.email}
                        onChange={handleBookingChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="booking-phone" className="block text-sm font-medium text-gray-700">Phone</label>
                      <input
                        type="tel"
                        id="booking-phone"
                        name="phone"
                        value={bookingData.phone}
                        onChange={handleBookingChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="booking-date" className="block text-sm font-medium text-gray-700">Preferred Date</label>
                      <input
                        type="date"
                        id="booking-date"
                        name="date"
                        value={bookingData.date}
                        onChange={handleBookingChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="booking-notes" className="block text-sm font-medium text-gray-700">Additional Notes</label>
                    <textarea
                      id="booking-notes"
                      name="notes"
                      rows={3}
                      value={bookingData.notes}
                      onChange={handleBookingChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    ></textarea>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button
                      type="submit"
                      className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
                    >
                      Book Now
                    </button>
                    <button
                      type="button"
                      onClick={closeServiceModal}
                      className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
            <p className="text-xl text-gray-600">
              Showcasing our commitment to renewable energy through successful implementations
            </p>
          </motion.div>

          <div className="space-y-16">
            {[
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
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`bg-white rounded-lg overflow-hidden shadow-lg ${
                  index === 3 && "max-w-4xl mx-auto"
                }`}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <img
                    src={project.image || "/api/placeholder/400/320"}
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
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
            <p className="text-xl text-gray-600">
              Stay updated with our latest developments and innovations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((news, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={news.image || "/api/placeholder/400/320"}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-green-600 text-sm font-semibold">
                      {news.category}
                    </span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-500 text-sm">{news.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{news.excerpt}</p>
                  <button 
                    className="text-green-600 font-semibold hover:text-green-700 transition-colors"
                    onClick={() => openNewsModal(news)}
                  >
                    Read More →
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* News Modal */}
      {selectedNews && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeNewsModal}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-full overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedNews.image || "/api/placeholder/400/320"}
                alt={selectedNews.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={closeNewsModal}
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-green-600 text-sm font-semibold">
                  {selectedNews.category}
                </span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-gray-500 text-sm">{selectedNews.date}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedNews.title}</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">{selectedNews.content}</p>
              <button
                onClick={closeNewsModal}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">
              Get in touch with our team for any inquiries or support
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-lg font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">
                        123 Solar Street<br />
                        Sunshine City, SC 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-lg font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-lg font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">info@solartech.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Business Hours
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <select
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="quote">Request a Quote</option>
                    <option value="support">Technical Support</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
