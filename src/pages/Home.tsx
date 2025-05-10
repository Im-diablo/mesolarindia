import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


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
  const navigate = useNavigate();
  const [showAllProjects] = useState(false);
  
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [showCareerModal, setShowCareerModal] = useState(false);
  const [showPartnerModal, setShowPartnerModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    notes: ''
  });

  // Form handlers
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

  // Navigation handlers
  const handleCareerClick = () => navigate('/career');
  const handlePartnerClick = () => navigate('/enquiry');

  // Modal handlers
  const closeCareerModal = () => setShowCareerModal(false);
  const closePartnerModal = () => setShowPartnerModal(false);

  const newsItems = [
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
    },
    {
      title: "Environmental Award Winner",
      date: "February 5, 2024",
      category: "Awards",
      priority: "medium",
      excerpt: "ME Solar receives the 2024 Green Innovation Award.",
      content: "ME Solar has been honored with the prestigious 2024 Green Innovation Award by the National Renewable Energy Council. This recognition celebrates our commitment to environmental sustainability and technological innovation in the solar industry. The award specifically highlighted our community solar projects, which have provided clean energy access to over 50,000 households in underserved communities. We're proud to be recognized for our efforts and remain dedicated to our mission of making clean energy solutions available to everyone.",
      image: "https://images.pexels.com/photos/2740956/pexels-photo-2740956.jpeg"
    },
    {
      title: "Community Solar Initiative Launches",
      date: "January 28, 2024",
      category: "Community",
      priority: "medium",
      excerpt: "New program brings solar power to underserved neighborhoods.",
      content: "ME Solar has launched a new community solar initiative aimed at bringing clean energy to underserved neighborhoods. The program allows residents to subscribe to a portion of a local solar array, receiving credits on their electricity bills without needing to install panels on their own homes. The first project will serve over 200 households in the Riverdale community, with plans to expand to five additional communities by year-end.",
      image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg"
    },
    {
      title: "ME Solar Partners with Local Schools",
      date: "January 20, 2024",
      category: "Education",
      priority: "low",
      excerpt: "Educational initiative brings solar learning to classrooms.",
      content: "ME Solar has launched a new educational partnership with the Metro School District to bring solar energy education to K-12 classrooms. The program includes curriculum materials, hands-on solar kits, and field trips to solar installations. Additionally, ME Solar will be installing demonstration solar arrays at three high schools, providing both educational opportunities and clean energy for the schools.",
      image: "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg"
    },
    {
      title: "Quarterly Financial Results Exceed Expectations",
      date: "January 15, 2024",
      category: "Financial",
      priority: "low",
      excerpt: "ME Solar reports 35% year-over-year growth in Q4.",
      content: "ME Solar announced its fourth quarter financial results today, reporting a 35% increase in revenue compared to the same period last year. The company attributed this growth to expanding residential installations and several new commercial contracts. The board has approved a plan to reinvest profits into research and development of next-generation solar technologies.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];
  
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

  // Functions to handle modals
  const openNewsModal = (news: NewsItem) => setSelectedNews(news);
  const closeNewsModal = () => setSelectedNews(null);
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
    <div className="min-h-screen relative"> {/* Added relative positioning */}
      {/* Hero Section */}
      <section id="home" className="relative h-screen bg-cover bg-center overflow-hidden" style={{ backgroundImage: 'url("/assets/background.jpg")' }}>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-black/60 to-primary-900/40 backdrop-blur-xs"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Powering Tomorrow with <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-accent-400">Solar Innovation</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-100">
              Leading the way in sustainable energy solutions for a brighter, cleaner future.
            </p>
            <motion.a 
              href="#contact" 
              className="inline-block bg-gradient-to-r from-primary-500 to-primary-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-primary-600 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-glow-primary transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Company Section */}
      <section id="company" className="py-20 bg-white relative overflow-hidden">
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
        
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-70"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(255,255,255,0) 70%)"
          }}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
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

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-bold text-primary-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the global leader in renewable energy solutions, creating a 
                cleaner, brighter future for generations to come.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-bold text-primary-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To accelerate the world's transition to sustainable energy through 
                innovative solar solutions and exceptional service.
              </p>
            </motion.div>
          </div>

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
                name: "Sadhna Gupta",
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
                className={`bg-gradient-to-br from-white to-primary-50 rounded-xl overflow-hidden shadow-soft hover:shadow-glow-primary transition-all duration-300 ${
                  index === 3 && "md:col-start-2 md:col-end-3"
                }`}
              >
                <img
                  src={member.image || "/api/placeholder/400/320"}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 border-t border-primary-100">
                  <h3 className="text-xl font-semibold text-primary-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
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

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="section-title inline-block">Our Projects</h2>
            <p className="text-xl text-gray-600 mt-4">
              Successfully completed solar installations across India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(showAllProjects ? [

            ] : [
              { capacity: "600 KW", type: "Design & Engineering", location: "Delhi-Mumbai Highway, Sohna, Haryana", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
              { capacity: "300 KW", type: "Design & Engineering", location: "Delhi-Mumbai Highway, Sohna, Haryana", image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
              { capacity: "100 KW", type: "Design & Engineering, I&C", location: "Arvind Hyundai, Agra", image: "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
              { capacity: "35 KW", type: "Design & Engineering, I&C", location: "Sunrise Hospital, Aligarh", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
              { capacity: "30KW", type: "Design & Engineering", location: "Bhargava Diagnostic, Aligarh", image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
              { capacity: "250KW", type: "I&C", location: "Eurogrip Footware, Agra", image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" }
            ]).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.location}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-xl font-bold">{project.capacity}</h3>
                      <p className="text-sm opacity-90">{project.type}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t border-gray-100">
                  <p className="text-gray-600 text-sm">{project.location}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {!showAllProjects && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center mt-8"
            >
            </motion.div>
          )}

          {/* Project Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold text-primary-800">129+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold text-primary-800">13.5MW+</h3>
              <p className="text-gray-600">Total Capacity</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold text-primary-800">15+</h3>
              <p className="text-gray-600">Cities Covered</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold text-primary-800">100%</h3>
              <p className="text-gray-600">Client Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>

            {/* News Section */}
            <section id="news" className="py-20 bg-gray-50 relative overflow-hidden">
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="section-title inline-block">Latest News</h2>
            <p className="text-xl text-gray-600 mt-6">
              Stay updated with our latest developments and innovations
            </p>
          </motion.div>

          <div className="grid grid-cols-12 gap-6">
            {newsItems.map((news, index) => {
              // Define size classes based on priority
              let sizeClasses = "";
              let imageHeight = "";
              let titleSize = "";
              let excerptDisplay = "";
              
              if (news.priority === "high") {
                sizeClasses = "col-span-12 md:col-span-6 lg:col-span-6";
                imageHeight = "h-64";
                titleSize = "text-2xl";
                excerptDisplay = "block";
              } else if (news.priority === "medium") {
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
                      src={news.image || "/api/placeholder/400/320"}
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-semibold px-2.5 py-0.5 m-2 rounded">
                      {news.category}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <h3 className={`${titleSize} font-semibold text-white p-4`}>
                        {news.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center mb-2">
                      <span className="text-gray-500 text-xs">{news.date}</span>
                    </div>
                    <h3 className={`${titleSize} font-semibold text-gray-900 mb-2 line-clamp-2`}>
                      {news.title}
                    </h3>
                    <p className={`text-gray-600 mb-3 text-sm line-clamp-2 ${excerptDisplay}`}>{news.excerpt}</p>
                    <motion.button 
                      className="text-primary-600 font-semibold hover:text-primary-700 transition-colors flex items-center text-sm"
                      onClick={() => openNewsModal(news)}
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
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-12 text-center"
          >
          </motion.div>
        </div>
      </section>

      {/* Enhanced News Modal */}
      {selectedNews && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closeNewsModal}
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
                src={selectedNews.image || "/api/placeholder/400/320"}
                alt={selectedNews.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2 inline-block">
                    {selectedNews.category}
                  </span>
                  <h2 className="text-2xl font-bold text-white">{selectedNews.title}</h2>
                </div>
              </div>
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
                <span className="text-gray-500 text-sm">{selectedNews.date}</span>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed whitespace-pre-line">{selectedNews.content}</p>
              <div className="flex justify-between items-center">
                <button
                  onClick={closeNewsModal}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}


{/* Chat Bubble */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      >
      </motion.div>

      {/* Contact Section */}
<section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-center mb-16"
    >
      <h2 className="section-title inline-block">Get In Touch</h2>
      <p className="text-xl text-gray-600 mt-6">
        Connect with us for solar solutions, career opportunities, or partnerships
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Contact Us */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="glass-card p-8"
      >
        <h3 className="text-2xl font-bold text-primary-800 mb-4">Contact Us</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              value={formData.name}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={formData.email}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              id="message"
              rows={4}
              onChange={handleChange}
              value={formData.message}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-primary-600 text-white px-4 py-2 rounded-full hover:bg-primary-700 transition-all duration-300"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>

      {/* Career with Us */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="glass-card p-8"
      >
        <h3 className="text-2xl font-bold text-primary-800 mb-4">Career with Us</h3>
        <div className="space-y-4">
          <p className="text-gray-600">Join our dynamic team and be part of the renewable energy revolution. We offer exciting opportunities for growth and innovation.</p>
          <div className="space-y-2">
            <h4 className="font-semibold text-primary-700">Current Openings:</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>Solar Installation Technician</li>
              <li>Project Manager</li>
              <li>Sales Representative</li>
              <li>Technical Support Specialist</li>
            </ul>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-primary-600 text-white px-4 py-2 rounded-full hover:bg-primary-700 transition-all duration-300"
            onClick={handleCareerClick}
          >
            View All Positions
          </motion.button>
        </div>
      </motion.div>

      {/* Partner with Us */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="glass-card p-8"
      >
        <h3 className="text-2xl font-bold text-primary-800 mb-4">Partner with Us</h3>
        <div className="space-y-4">
          <p className="text-gray-600">Explore partnership opportunities and grow your business with us. We welcome collaborations with:</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Solar Equipment Suppliers</li>
            <li>Installation Contractors</li>
            <li>Property Developers</li>
            <li>Energy Consultants</li>
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-primary-600 text-white px-4 py-2 rounded-full hover:bg-primary-700 transition-all duration-300"
            onClick={handlePartnerClick}
          >
            Become a Partner
          </motion.button>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* Career Modal */}
      {showCareerModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-y-auto"
          onClick={closeCareerModal}
        >
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <motion.div 
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <h3 className="text-2xl font-bold text-primary-800 mb-4">Career Opportunities</h3>
                    <div className="mt-4 space-y-4">
                      <p className="text-gray-600">Join our dynamic team and be part of the renewable energy revolution.</p>
                      <div>
                        <h4 className="font-semibold text-primary-700 mb-2">Current Openings:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                          <li>Solar Installation Technician</li>
                          <li>Project Manager</li>
                          <li>Sales Representative</li>
                          <li>Technical Support Specialist</li>
                        </ul>
                      </div>
                      <p className="text-gray-600">Send your resume to careers@company.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-600 text-base font-medium text-white hover:bg-primary-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeCareerModal}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Partner Modal */}
      {showPartnerModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-y-auto"
          onClick={closePartnerModal}
        >
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <motion.div 
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <h3 className="text-2xl font-bold text-primary-800 mb-4">Partnership Opportunities</h3>
                    <div className="mt-4 space-y-4">
                      <p className="text-gray-600">Explore partnership opportunities and grow your business with us.</p>
                      <div>
                        <h4 className="font-semibold text-primary-700 mb-2">We welcome collaborations with:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                          <li>Solar Equipment Suppliers</li>
                          <li>Installation Contractors</li>
                          <li>Property Developers</li>
                          <li>Energy Consultants</li>
                        </ul>
                      </div>
                      <p className="text-gray-600">Contact us at partnerships@company.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-600 text-base font-medium text-white hover:bg-primary-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closePartnerModal}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}

    </div>
  );
};

export default Home;
