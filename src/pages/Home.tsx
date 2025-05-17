import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Define a type for news items
interface NewsItem {
  title: string;
  date: string;
  category: string;
  priority: string;
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
  const [] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [] = useState<NewsItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    notes: ''
  });
  
  // Booking handlers
  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", bookingData);
    alert("Your booking request has been submitted!");
    setBookingData({
      name: '',
      email: '',
      phone: '',
      date: '',
      notes: ''
    });
    setSelectedService(null);
    setShowBookingModal(false);
  };

  
  // Services with detailed content
  const services = [
    {
      title: "Solar EPC",
      description: "Complete end-to-end solar power plant solutions including engineering, procurement, and construction services.",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      fullDescription: "Our Solar EPC (Engineering, Procurement, and Construction) service provides comprehensive solutions for solar power plant development. We handle everything from initial site assessment and design to material procurement and complete construction. Our expert team ensures quality installation, timely project completion, and optimal system performance for both utility-scale and commercial solar projects.",

      benefits: [
        "Turn-key solar power plant solutions",
        "Expert project management",
        "Quality assurance at every stage",
        "Timely project completion",
        "Post-installation support"
      ],
      pricing: "Custom quotes based on project scope"
    },
    {
      title: "Engineering & Design",
      description: "Specialized solar system design and engineering services for optimal performance and efficiency.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      fullDescription: "Our engineering and design services focus on creating optimized solar power systems. We utilize advanced simulation tools and expert knowledge to design systems that maximize energy yield while ensuring structural integrity and compliance with all relevant standards. Our team provides detailed technical documentation, 3D modeling, and performance projections.",
      benefits: [
        "Custom system design",
        "Advanced performance simulation",
        "Structural engineering analysis",
        "Technical documentation",
        "Compliance certification"
      ],
      pricing: "Based on project complexity and size"
    },
    {
      title: "Installation & Commissioning",
      description: "Professional solar system installation and commissioning services with strict quality control.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      fullDescription: "Our installation and commissioning team ensures your solar system is properly installed and fully operational. We follow industry best practices and safety standards during installation, perform comprehensive testing, and provide detailed system documentation. Our commissioning process includes performance verification and user training.",
      benefits: [
        "Professional installation team",
        "Strict quality control",
        "Safety compliance",
        "Performance testing",
        "User training and documentation"
      ],
      pricing: "Calculated based on system size and complexity"
    },
    {
      title: "Operation & Maintenance",
      description: "Comprehensive maintenance and monitoring services to ensure optimal system performance.",
      image: "https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      fullDescription: "Keep your solar power system running at peak efficiency with our operation and maintenance services. We provide regular inspections, preventive maintenance, performance monitoring, and rapid response to any issues. Our team uses advanced monitoring systems to track system performance and identify potential problems before they affect production.",
      benefits: [
        "24/7 system monitoring",
        "Preventive maintenance",
        "Emergency repair service",
        "Performance optimization",
        "Regular reporting"
      ],
      pricing: "Annual contracts starting from $1,999"
    },
    {
      title: "BOS Items",
      description: "Supply and installation of Balance of System components for solar power plants.",
      image: "https://images.unsplash.com/photo-1497440001374-f658d8094c88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      fullDescription: "We provide high-quality Balance of System (BOS) components essential for solar power plant operation. Our offerings include inverters, mounting structures, cables, transformers, and switchgear. We ensure all components meet quality standards and are optimally integrated into your solar power system.",
      benefits: [
        "Quality-certified components",
        "Comprehensive warranty",
        "Technical support",
        "Integration services",
        "Competitive pricing"
      ],
      pricing: "Component-specific pricing available"
    },
    {
      title: "Technical & Non-Technical Services",
      description: "Supporting services including documentation, training, and consulting for solar projects.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      fullDescription: "We offer a range of technical and non-technical services to support your solar project. This includes feasibility studies, financial analysis, permit acquisition, documentation, staff training, and ongoing consulting. Our team helps navigate regulatory requirements and optimize project outcomes.",
      benefits: [
        "Project feasibility studies",
        "Regulatory compliance support",
        "Staff training programs",
        "Documentation services",
        "Ongoing consulting"
      ],
      pricing: "Service-specific quotes available"
    }
  ];

  const openServiceModal = (service: ServiceItem) => setSelectedService(service);
  const closeServiceModal = () => setSelectedService(null);
  const openBookingModal = (service: ServiceItem) => {
    setSelectedService(service);
    setShowBookingModal(true);
  };
  
  const closeBookingModal = () => {
    setShowBookingModal(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen relative"> 
      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen bg-cover bg-center overflow-hidden max-w-full"
        style={{ backgroundImage: 'url("/assets/background.gif")' }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-black/60 to-primary-900/40 backdrop-blur-xs"
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{ transformOrigin: "center" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white w-full"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Powering Tomorrow with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-accent-400">
                Solar Innovation
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl text-gray-100">
              Leading the way in sustainable energy solutions for a brighter, cleaner future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Section with Brief Team Info */}
      <section id="company" className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="section-title inline-block">About Company</h2>
            <p className="text-xl text-gray-600 mt-6">
              Leading the way in sustainable energy solutions
            </p>
          </motion.div>

         
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-2xl shadow-xl border border-blue-100 overflow-hidden mb-16 group hover:shadow-2xl hover:border-blue-300 transition-all duration-500"
              >
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="md:w-1/3">
                      <motion.h2 
                        className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent mb-4"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        Our Mission
                      </motion.h2>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-lg text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                        To accelerate the adoption of renewable energy solutions across industries, enabling a carbon-neutral future through innovation, advanced solar EPC technology, and strategic sustainability initiatives.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>



              {/* Values Section */}
              <div className="mb-16">
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-center bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent mb-12"
                >
                  Our Values
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white border-2 border-blue-500 rounded-xl p-8 shadow-sm group hover:shadow-blue-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold text-blue-700 mb-4">Discipline</h3>
                    <p className="text-gray-700">Ensuring excellence in renewable energy project execution.</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white border-2 border-blue-500 rounded-xl p-8 shadow-sm group hover:shadow-blue-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold text-blue-700 mb-4">Dedication</h3>
                    <p className="text-gray-700">Commitment to delivering high-impact solar and wind energy solutions.</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white border-2 border-blue-500 rounded-xl p-8 shadow-sm group hover:shadow-blue-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold text-blue-700 mb-4">Direction</h3>
                    <p className="text-gray-700">A clear roadmap towards clean energy transformation.</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white border-2 border-blue-500 rounded-xl p-8 shadow-sm group hover:shadow-blue-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold text-blue-700 mb-4">Decision Making</h3>
                    <p className="text-gray-700">Using industry insights to optimize solar EPC and BESS projects.</p>
                  </motion.div>
                </div>
              </div>
            </div>


          {/* Leadership Team Brief Section */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <h3 className="text-2xl font-bold text-primary-800">Our Leadership</h3>
              <p className="text-gray-600 mt-2">
                Meet the visionaries behind ME Solar India
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "Manoj Kumar",
                  role: "Founder & Managing Director",
                  image: "/assets/team.png",
                  bio: "A technical graduate and certified professional with deep expertise in renewable and solar energy."
                },
                {
                  name: "Sunil Sagar",
                  role: "Founder, Director & CEO",
                  image: "/assets/team.png",
                  bio: "A postgraduate in finance with over a decade of experience across solar energy and IT sectors."
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gradient-to-br from-white to-blue-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row">
                    <img
                      src={member.image || "/api/placeholder/400/320"}
                      alt={member.name}
                      className="w-full md:w-1/3 h-48 object-cover"
                    />
                    <div className="p-6 md:w-2/3">
                      <h3 className="text-xl font-semibold text-blue-800 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                      <p className="text-gray-600 mb-4">{member.bio}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <a 
                  href="/team" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                >
                  Meet Our Full Team
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="section-title inline-block">Our Services</h2>
            <p className="text-xl text-gray-600 mt-6">
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
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 0 25px rgba(20, 184, 166, 0.2)"
                }}
                className={`bg-gradient-to-br from-white via-primary-50 to-white rounded-xl overflow-hidden shadow-soft ${
                  index === 3 && servicesArray.length % 2 !== 0 ? "md:col-span-2 max-w-md mx-auto" : ""
                }`}
              >
                <div className="relative overflow-hidden h-48 group">
                  <img
                    src={service.image || "/api/placeholder/400/320"}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <h3 className="text-2xl font-semibold text-white p-4">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6 border-t border-primary-100">
                  <h3 className="text-2xl font-semibold text-primary-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex space-x-3 mt-4">
                    <motion.button 
                      className="bg-primary-600 text-white px-4 py-2 rounded-full hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary-500/20"
                      onClick={() => openServiceModal(service)}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </motion.button>
                    <motion.button 
                      className="bg-white text-primary-700 px-4 py-2 rounded-full border border-primary-200 hover:border-primary-400 hover:bg-primary-50 transition-all duration-300 shadow-md"
                      onClick={() => openBookingModal(service)}
                      whileTap={{ scale: 0.95 }}
                    >
                      Book Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && !showBookingModal && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closeServiceModal}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-2xl w-full max-w-4xl max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden rounded-t-lg">
              <img
                src={selectedService.image || "/api/placeholder/400/320"}
                alt={selectedService.title}
                className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <h2 className="absolute bottom-4 left-4 text-3xl font-bold text-white">{selectedService.title}</h2>
              <button
                onClick={closeServiceModal}
                className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-md hover:bg-white transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">{selectedService.fullDescription}</p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Benefits:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {selectedService.benefits.map((benefit, index) => (
                    <motion.li 
                      key={index} 
                      className="text-gray-700"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {benefit}
                    </motion.li>
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

      {/* Booking Modal */}
      {showBookingModal && selectedService && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeBookingModal}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedService.image || "/api/placeholder/400/320"}
                alt={selectedService.title}
                className="w-full h-40 object-cover"
              />
              <button
                onClick={closeBookingModal}
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Book {selectedService.title}</h2>
              <p className="text-gray-600 mb-6">Fill out the form below to book this service. We'll contact you to confirm your appointment.</p>
              
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
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="booking-phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="tel"
                      id="booking-phone"
                      name="phone"
                      value={bookingData.phone}
                      onChange={handleBookingChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={closeBookingModal}
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Implementation Partners Section */}
      <section id="partners" className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 opacity-20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary-100 opacity-20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="section-title inline-block">Our Implementation Partners</h2>
            <p className="text-xl text-gray-600 mt-6">
              Working with industry leaders to deliver exceptional solar solutions
            </p>
          </motion.div>

          {/* Enhanced Partner Logo Carousel */}
          <div className="relative px-4 sm:px-10 py-8 bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-primary-500 opacity-20"></div>
              <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23000\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}></div>
            </div>
            
            {/* Add state for carousel */}
          {(() => {
            // Partner logos data array
            const partnerLogos = [
              { id: 1, logo: '/assets/logo.webp', name: 'Partner 1' },
              { id: 2, logo: '/assets/logo.webp', name: 'Partner 2' },
              { id: 3, logo: '/assets/logo.webp', name: 'Partner 3' },
              { id: 4, logo: '/assets/logo.webp', name: 'Partner 4' },
              { id: 5, logo: '/assets/logo.webp', name: 'Partner 5' },
              { id: 6, logo: '/assets/logo.webp', name: 'Partner 6' },
              { id: 7, logo: '/assets/logo.webp', name: 'Partner 7' },
              { id: 8, logo: '/assets/logo.webp', name: 'Partner 8' },
              { id: 9, logo: '/assets/logo.webp', name: 'Partner 9' },
          
            ];
            
            // Responsive logos per slide based on screen size
            const [logosPerSlide, setLogosPerSlide] = useState(4); 
            const [currentSlide, setCurrentSlide] = useState(0);
            
            // Update logos per slide based on screen width
            useEffect(() => {
              const handleResize = () => {
                if (window.innerWidth < 640) { 
                  setLogosPerSlide(2);
                } else {
                  setLogosPerSlide(4); 
                }
              };
              
              handleResize();
              window.addEventListener('resize', handleResize);
              
              // Cleanup
              return () => window.removeEventListener('resize', handleResize);
            }, []);
            
            // Calculate total slides based on current logosPerSlide
            const totalSlides = Math.ceil(partnerLogos.length / logosPerSlide);
            
            // Create slides array dynamically based on current logosPerSlide
            const getSlides = () => {
              const slides = [];
              for (let i = 0; i < partnerLogos.length; i += logosPerSlide) {
                slides.push(partnerLogos.slice(i, i + logosPerSlide));
              }
              return slides;
            };
            
            // Handle navigation with improved responsiveness
            const nextSlide = () => {
              setCurrentSlide((prev) => {
                const next = (prev + 1) % totalSlides;
                return next;
              });
            };
            
            useEffect(() => {
              const timer = setInterval(() => {
                nextSlide();
              }, 2000); 
              return () => clearInterval(timer);
            }, [totalSlides]);
            
            useEffect(() => {
              if (currentSlide >= totalSlides) {
                setCurrentSlide(0);
              }
            }, [totalSlides, currentSlide]);
            
            return (
              <>
                {/* Carousel container */}
                <div className="relative overflow-hidden z-10">
                  <div 
                    className="flex transition-transform duration-1000 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {/* Generate slides dynamically based on responsive logosPerSlide */}
                    {getSlides().map((slideLogos, slideIndex) => (
                      <div key={slideIndex} className="min-w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-2">
                        {slideLogos.map((partner) => (
                          <div 
                            key={partner.id}
                            className="bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-blue-50 h-32 md:h-40"
                          >
                            <div className="relative overflow-hidden w-full h-full flex items-center justify-center"> 
                              <img 
                                src={partner.logo} 
                                alt={partner.name} 
                                className="h-16 md:h-20 w-auto mx-auto" 
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Navigation controls - only indicator dots */}
                <div className="flex justify-center items-center mt-6 md:mt-8">
                  {/* Indicator dots */}
                  <div className="flex space-x-2">
                    {Array.from({ length: totalSlides }).map((_, i) => (
                      <button
                        key={i}
                        className={`h-2 w-2 md:h-3 md:w-3 rounded-full transition-all duration-200 ${i === currentSlide ? 'bg-blue-600 scale-125' : 'bg-blue-200'}`}
                        onClick={() => setCurrentSlide(i)}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </>
            );
          })()}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <a 
              href="/enquiry" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
            >
              Become a Partner
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-100 opacity-20 rounded-full blur-3xl transform -translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary-100 opacity-20 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="section-title inline-block">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 mt-6">
              Find answers to common questions about solar energy and our services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {/* FAQ Items with enhanced visual design */}
            {[
              {
                question: "What are the benefits of solar energy?",
                answer: "Solar energy offers numerous benefits including reduced electricity bills, lower carbon footprint, energy independence, minimal maintenance requirements, and potential tax incentives. Additionally, solar installations can increase property value and create a sustainable energy source for decades.",
                icon: "⚡"
              },
              {
                question: "How long does a solar installation take?",
                answer: "The actual installation of a residential solar system typically takes 1-3 days, depending on the system size and complexity. However, the entire process from initial consultation to being fully operational usually takes 2-3 months due to permitting, inspection, and utility approval processes.",
                icon: "🕒"
              },
              {
                question: "What maintenance do solar panels require?",
                answer: "Solar panels require minimal maintenance. Occasional cleaning to remove dust and debris is recommended, typically 2-4 times per year depending on your location. Most systems include monitoring software that alerts you to any performance issues. Professional inspections every few years can ensure optimal performance and longevity.",
                icon: "🔧"
              },
              {
                question: "What happens to solar panels during power outages?",
                answer: "Standard grid-tied solar systems will shut down during power outages for safety reasons. However, systems with battery storage or special transfer switches can continue to provide electricity during outages. We offer various backup solutions to keep your essential appliances running even when the grid is down.",
                icon: "🔌"
              },
              {
                question: "How do I know if my property is suitable for solar?",
                answer: "Several factors determine solar suitability including roof orientation, shading, roof condition, and available space. South-facing roofs with minimal shade are ideal, but east and west-facing roofs can also be effective. Our team conducts thorough site assessments to evaluate your property's solar potential and design an optimal system for your specific conditions.",
                icon: "🏠"
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="mb-6"
              >
                <details className="group bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100 hover:border-blue-300 transition-all duration-300">
                  <summary className="flex items-center p-6 cursor-pointer bg-gradient-to-r from-white to-blue-50 hover:from-blue-50 hover:to-blue-100 transition-colors duration-300">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 mr-4 text-xl">
                      {faq.icon}
                    </span>
                    <h3 className="text-lg font-semibold text-blue-900 flex-1">{faq.question}</h3>
                    <span className="ml-6 flex-shrink-0 text-blue-600 group-open:rotate-180 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="px-6 pb-6 pt-2 text-gray-700 border-t border-blue-50"
                  >
                    <div className="pl-14"> {/* Align with the icon */}
                      <p className="leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                </details>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
            >
              Have More Questions?
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
      {/* Success Stories Section */}
      <section id="success-stories" className="py-20 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 opacity-20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary-100 opacity-20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="section-title inline-block">Success Stories</h2>
            <p className="text-xl text-gray-600 mt-6">
              Real results from our satisfied customers across India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "30kW Rooftop Solar System",
                location: "Delhi, India",
                description: "Reduced electricity bills by 85% for a family home in Delhi, with complete ROI achieved in just 4 years.",
                savings: "₹1.8 Lakhs",
                image: "/assets/img1.png",
                status: "Completed",
                stats: {
                  co2: "22 tons",
                  energy: "42,000 kWh"
                }
              },
              {
                title: "250kW Commercial Installation",
                location: "Mumbai, India",
                description: "Helped a manufacturing facility reduce carbon emissions by 320 tons annually while cutting power costs by 70%.",
                savings: "₹24 Lakhs",
                image: "/assets/img2.jpg",
                status: "Completed",
                stats: {
                  co2: "320 tons",
                  energy: "375,000 kWh"
                }
              },
              {
                title: "100kW Solar Irrigation System",
                location: "Punjab, India",
                description: "Transformed a 50-acre farm with solar-powered irrigation, eliminating diesel costs and increasing crop yield by 35%.",
                savings: "₹8.5 Lakhs",
                image: "/assets/Future.png",
                status: "Completed",
                stats: {
                  co2: "85 tons",
                  energy: "150,000 kWh"
                }
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg overflow-hidden border border-blue-100 transition-all duration-500"
              >
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform transition-transform duration-300 group-hover:translate-y-0">
                    <h3 className="text-xl font-bold mb-1 text-white group-hover:text-blue-200 transition-colors duration-300">{story.title}</h3>
                    <p className="text-blue-200 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {story.location}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {story.description}
                  </p>
                  
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-2 mb-6 bg-blue-50 p-3 rounded-lg">
                    <div className="text-center">
                      <p className="text-xs text-blue-600 font-medium">Annual Savings</p>
                      <p className="text-lg font-bold text-blue-900">{story.savings}</p>
                    </div>
                    <div className="text-center border-l border-r border-blue-100">
                      <p className="text-xs text-blue-600 font-medium">CO₂ Reduced</p>
                      <p className="text-lg font-bold text-blue-900">{story.stats.co2}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-blue-600 font-medium">Energy/Year</p>
                      <p className="text-lg font-bold text-blue-900">{story.stats.energy}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-medium flex items-center bg-green-50 px-3 py-1 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {story.status}
                    </span>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors duration-300"
                    >
                      View Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <a 
              href="/projects" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
            >
              View All Projects
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
