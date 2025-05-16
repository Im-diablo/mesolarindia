import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiOutlineLocationMarker, HiOutlineLightBulb, HiOutlineCalendar, HiOutlineOfficeBuilding } from 'react-icons/hi';
import { FaSolarPanel, FaLeaf, FaChartLine } from 'react-icons/fa';

// Define a type for project items
interface ProjectItem {
  id?: number;
  capacity: string;
  type: string;
  location: string;
  image: string;
  description?: string;
  completionDate?: string;
  client?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  gallery?: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Modal handlers
  const openProjectModal = (project: ProjectItem) => setSelectedProject(project);
  const closeProjectModal = () => setSelectedProject(null);

  // Auto-rotate featured projects
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const projectItems: ProjectItem[] = [
    {
       id: 1,
      capacity: "15 MW",
      type: "DC Work",
      location: "NTPC, Kanpur",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Large-scale solar installation for NTPC thermal power plant",
      completionDate: "2023",
      client: "NTPC",
      challenge: "Implementation of large-scale DC work in an operational power plant",
      solution: "Systematic phase-wise implementation with strict safety protocols",
      results: [
        "Successfully integrated with existing power infrastructure",
        "Enhanced power generation capacity",
        "Reduced carbon footprint"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 2,
      capacity: "11 MW",
      type: "Engineering & Design",
      location: "CEL, Maharashtra",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Engineering and design for CEL solar project",
      completionDate: "2023",
      client: "CEL",
      challenge: "Complex engineering requirements for large-scale implementation",
      solution: "Comprehensive design approach with advanced engineering solutions",
      gallery: [
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 3,
      capacity: "600 KW",
      type: "Design & Engineering",
      location: "Delhi-Mumbai Highway, Sohna, Haryana",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "A large-scale solar installation along the Delhi-Mumbai Highway, providing sustainable energy to nearby facilities.",
      completionDate: "January 2023",
      client: "National Highways Authority of India",
      challenge: "Installing solar panels in a high-traffic area with limited access and strict safety requirements.",
      solution: "Implemented a phased installation approach with specialized mounting systems designed for highway environments.",
      results: [
        "Reduced carbon emissions by 750 tons annually",
        "Decreased energy costs by 35% for highway lighting and facilities",
        "Created a showcase project for sustainable highway infrastructure"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 4,
      capacity: "300 KW",
      type: "Design & Engineering",
      location: "Delhi-Mumbai Highway, Sohna, Haryana",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Solar power system designed for highway infrastructure, providing energy for lighting and monitoring systems.",
      completionDate: "November 2022",
      client: "Highway Infrastructure Development Corp",
      challenge: "Designing a system that could withstand extreme weather conditions while maintaining optimal efficiency.",
      solution: "Utilized weather-resistant panels and implemented a robust monitoring system for remote management.",
      results: [
        "Achieved 99.8% uptime since installation",
        "Reduced maintenance costs by 40% compared to traditional systems",
        "Implemented smart monitoring for predictive maintenance"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 5,
      capacity: "250 KW",
      type: "I&C",
      location: "Eurogrip Footware, Agra",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Large-scale installation and commissioning project for Eurogrip's manufacturing facility, reducing operational costs.",
      completionDate: "October 2023",
      client: "Eurogrip Footware",
      challenge: "Installing a large system on an active manufacturing facility without disrupting production schedules.",
      solution: "Coordinated installation during planned maintenance periods and weekends with a specialized rapid deployment team.",
      results: [
        "Completed installation 2 weeks ahead of schedule",
        "Reduced factory's energy costs by 40%",
        "Zero production time lost during installation"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 6,
      capacity: "200 KW",
      type: "I&C",
      location: "Rooftop, Mainpuri",
      image: "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Rooftop solar installation for commercial building in Mainpuri",
      completionDate: "2023",
      client: "Commercial Building Owner",
      challenge: "Optimizing panel placement on limited rooftop space",
      solution: "Custom mounting solution to maximize energy generation",
      results: [
        "Reduced electricity costs by 40%",
        "Achieved optimal energy production despite space constraints"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 7,
      capacity: "125 KW",
      type: "I&C",
      location: "Diamond Export, Agra",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Solar installation for Diamond Export facility in Agra",
      completionDate: "2023",
      client: "Diamond Export",
      challenge: "Providing consistent power for precision equipment",
      solution: "Implemented advanced power conditioning systems",
      results: [
        "Eliminated production disruptions due to power issues",
        "Reduced energy costs by 35%"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 8,
      capacity: "100 KW",
      type: "Design & Engineering, I&C",
      location: "Arvind Hyundai, Agra",
      image: "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Complete solar solution for Arvind Hyundai's dealership, including design, engineering, installation, and commissioning.",
      completionDate: "March 2023",
      client: "Arvind Hyundai",
      challenge: "Integrating solar power with existing electrical systems while maintaining dealership operations.",
      solution: "Implemented a phased installation plan with minimal disruption to business operations.",
      results: [
        "Reduced electricity bills by 45%",
        "Created a green showcase for customers",
        "ROI expected within 4 years"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 9,
      capacity: "50 KW",
      type: "I&C",
      location: "Rajasthan Charam Kala Kendra, Runkata, Agra",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Solar installation for cultural center in Agra",
      completionDate: "2023",
      client: "Rajasthan Charam Kala Kendra",
      challenge: "Balancing energy needs with aesthetic considerations",
      solution: "Custom panel placement to maintain building aesthetics",
      results: [
        "Reduced energy costs while preserving architectural integrity",
        "Enhanced sustainability profile of cultural institution"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 10,
      capacity: "50 KW",
      type: "I&C",
      location: "Bhawani Laminators, Agra",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Solar installation for manufacturing facility in Agra",
      completionDate: "2023",
      client: "Bhawani Laminators",
      challenge: "Meeting high energy demands of manufacturing equipment",
      solution: "High-efficiency panel system with optimized placement",
      results: [
        "Reduced production costs through energy savings",
        "Improved sustainability profile for manufacturing operations"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 11,
      capacity: "50 KW",
      type: "I&C",
      location: "Nauwa Shoe Manufacturer, Agra",
      image: "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Solar installation for shoe manufacturing facility in Agra",
      completionDate: "2023",
      client: "Nauwa Shoe Manufacturer",
      challenge: "Integrating renewable energy into manufacturing processes",
      solution: "Custom solar solution designed for manufacturing facility needs",
      results: [
        "Reduced carbon footprint of manufacturing operations",
        "Decreased energy costs by 30%"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 12,
      capacity: "40 KW",
      type: "Re-I&C",
      location: "Karam Udyog, Gailana, Agra",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Re-installation and commissioning of solar system for industrial facility",
      completionDate: "2023",
      client: "Karam Udyog",
      challenge: "Upgrading existing solar installation for improved efficiency",
      solution: "Modernized system with enhanced monitoring capabilities",
      results: [
        "Increased energy output by 25%",
        "Improved system reliability and monitoring"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 13,
      capacity: "36 KW",
      type: "I&C",
      location: "Bhagat Villa, Agra",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Residential solar installation for large villa in Agra",
      completionDate: "2023",
      client: "Bhagat Villa",
      challenge: "Designing aesthetically pleasing system for luxury residence",
      solution: "Low-profile panels with custom mounting solutions",
      results: [
        "Achieved energy independence for large residence",
        "Maintained architectural integrity of luxury property"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 14,
      capacity: "35 KW",
      type: "Design & Engineering, I&C",
      location: "Sunrise Hospital, Aligarh",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Critical power backup system for Sunrise Hospital, ensuring uninterrupted power for essential medical equipment.",
      completionDate: "June 2023",
      client: "Sunrise Hospital",
      challenge: "Creating a reliable solar system that could integrate with the hospital's critical power needs and backup generators.",
      solution: "Designed a hybrid system with battery storage and smart switching capabilities for seamless power transitions.",
      results: [
        "Ensured 100% power availability for critical systems",
        "Reduced dependency on diesel generators by 60%",
        "Decreased carbon footprint while improving reliability"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 15,
      capacity: "30 KW",
      type: "Design & Engineering",
      location: "Bhargava Diagnostic, Aligarh",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Custom solar solution for a diagnostic center with specialized power requirements for sensitive medical equipment.",
      completionDate: "August 2023",
      client: "Bhargava Diagnostic Center",
      challenge: "Providing clean, stable power for sensitive diagnostic equipment with zero tolerance for fluctuations.",
      solution: "Implemented advanced power conditioning and battery backup systems with medical-grade power quality.",
      results: [
        "Eliminated power-related equipment failures",
        "Reduced operational costs by 30%",
        "Improved diagnostic accuracy through stable power supply"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 16,
      capacity: "20 KW",
      type: "I&C",
      location: "GK Enterprises, Pratapgarh",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Solar installation for business enterprise in Pratapgarh",
      completionDate: "2023",
      client: "GK Enterprises",
      challenge: "Meeting diverse power needs of multi-function business",
      solution: "Scalable solar system with smart power distribution",
      results: [
        "Reduced operational costs through energy savings",
        "Created sustainable business operations model"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    }
  ];

  // Featured projects for the hero carousel
  const featuredProjects = projectItems.slice(0, 3);

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-white to-gray-50 font-sans overflow-hidden">
      {/* Hero Section - Static */}
      <div className="relative w-full left-0 right-0 h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Renewable Energy Project"
            className="w-full h-full object-cover absolute inset-0 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
        </div>
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl font-extrabold text-white mb-6 drop-shadow-lg tracking-tight">
              Our <span className="text-primary-400">Renewable Energy</span> Projects
            </h1>
            <p className="text-xl text-white/90 drop-shadow-md max-w-2xl mx-auto font-light leading-relaxed mb-8">
              Explore our innovative solar solutions that power a sustainable future across India. From large-scale installations to custom designs, we deliver excellence in every project.
            </p>
            <button
              className="btn-primary text-lg px-8 py-3 hover:scale-105 active:scale-95 transition-transform"
              onClick={() => {
                // Scroll to the featured projects section
                document.querySelector('.section-title')?.parentElement?.parentElement?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              Explore Projects
            </button>
          </div>
        </div>
      </div>

      {/* Project Stats with Icons */}
      <section className="py-16 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title inline-block">Our Impact</h2>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              Delivering sustainable energy solutions across India with proven results and satisfied clients
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0}}
              viewport={{ once: true }}
              className="text-center p-6 glass-card hover:bg-white/90 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-50 rounded-full flex items-center justify-center">
                <FaSolarPanel className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-4xl font-bold text-primary-800 mb-2">129+</h3>
              <p className="text-gray-600 font-medium">Projects Completed</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 glass-card hover:bg-white/90 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-50 rounded-full flex items-center justify-center">
                <HiOutlineLightBulb className="text-4xl text-primary-600" />
              </div>
              <h3 className="text-4xl font-bold text-primary-800 mb-2">13.5MW+</h3>
              <p className="text-gray-600 font-medium">Total Capacity</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6 glass-card hover:bg-white/90 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-50 rounded-full flex items-center justify-center">
                <FaLeaf className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-4xl font-bold text-primary-800 mb-2">15+</h3>
              <p className="text-gray-600 font-medium">Cities Covered</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center p-6 glass-card hover:bg-white/90 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-50 rounded-full flex items-center justify-center">
                <FaChartLine className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-4xl font-bold text-primary-800 mb-2">100%</h3>
              <p className="text-gray-600 font-medium">Client Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section with Full-Width Zig-Zag Layout */
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent z-0"></div>
        <div className="absolute -top-10 right-0 w-72 h-72 bg-primary-100 rounded-full filter blur-3xl opacity-30 z-0"></div>
        <div className="absolute top-1/3 left-10 w-60 h-60 bg-accent-100 rounded-full filter blur-3xl opacity-20 z-0"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title inline-block">Featured Projects</h2>
              <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
                Explore our successful solar installations across India, delivering sustainable energy solutions
              </p>
            </motion.div>

            {/* Removed: Filter Controls */}
            {/* <div className="flex flex-wrap justify-center gap-4 mb-16">
              {filterOptions.map((option) => (
                <motion.button
                  key={option.value}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-3 rounded-full transition-all duration-300 text-lg font-medium ${filter === option.value ? 'bg-primary-600 text-white shadow-lg' : 'bg-white text-gray-700 border border-gray-200 hover:border-primary-300 hover:bg-primary-50'}`}
                  onClick={() => setFilter(option.value)}
                >
                  {option.label}
                </motion.button>
              ))}
            </div> */}
          </div>

          {/* Full-Width Projects Zig-Zag Layout - Using projectItems instead of filteredProjects */}
          <div className="space-y-32">
            {projectItems.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative w-full cursor-pointer group"
                onClick={() => openProjectModal(project)}
              >
                {/* Full-width background image with parallax effect */}
                <div className="absolute inset-0 w-full h-[600px] overflow-hidden">
                  <motion.div
                    initial={{ y: 0 }}
                    whileInView={{ y: -20 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="w-full h-[650px]" // Extra height for parallax movement
                  >
                    <img 
                      src={project.image} 
                      alt={project.location}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </motion.div>
                  
                  {/* Overlay gradient that changes based on zig-zag pattern */}
                  <div className={`absolute inset-0 ${index % 2 === 0 
                    ? 'bg-gradient-to-r from-black/90 via-black/60 to-transparent' 
                    : 'bg-gradient-to-l from-black/90 via-black/60 to-transparent'}`}>
                  </div>
                </div>
                
                {/* Content container */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[600px] flex items-center">
                  {/* Content positioned based on zig-zag pattern */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'ml-0' : 'ml-auto'} p-8 md:p-12 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-2xl`}>
                    {/* Capacity badge */}
                    <div className="inline-block bg-primary-600 text-white px-4 py-2 rounded-lg text-lg font-bold shadow-lg mb-4">
                      {project.capacity}
                    </div>
                    
                    {/* Project type with animated underline */}
                    <div className="mb-2">
                      <span className="text-primary-300 font-medium text-xl relative inline-block">
                        {project.type}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-500"></span>
                      </span>
                    </div>
                    
                    {/* Project location */}
                    <h3 className="text-4xl font-bold text-white mt-2 mb-6 leading-tight">
                      {project.location}
                    </h3>
                    
                    {/* Project description */}
                    {project.description && (
                      <p className="text-white/90 text-lg mb-8 leading-relaxed max-w-xl">
                        {project.description}
                      </p>
                    )}
                    
                    {/* Project details with icons */}
                    <div className="flex items-center gap-3 mb-8 text-white/80">
                      <HiOutlineCalendar className="text-primary-300" />
                      <span>{project.completionDate || 'Ongoing'}</span>
                    </div>
                    
                    {/* View details button */}
                    <motion.button 
                      className="group/btn relative overflow-hidden rounded-lg bg-primary-600 px-8 py-3 text-white shadow-md transition-all duration-300 hover:shadow-lg hover:bg-primary-700 inline-flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Explore Project
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-primary-700 to-accent-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 z-0"></span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

          }
      {selectedProject && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 overflow-y-auto"
          onClick={closeProjectModal}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.location}
                className="w-full h-80 object-cover"
              />
              <button
                onClick={closeProjectModal}
                className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-md hover:bg-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                <div className="inline-block px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full mb-3">
                  {selectedProject.type}
                </div>
                <h2 className="text-4xl font-bold text-white">{selectedProject.capacity}</h2>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <HiOutlineLocationMarker className="text-primary-600 mt-1 flex-shrink-0 text-2xl" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Location</h3>
                    <p className="text-gray-800 font-medium text-lg">{selectedProject.location}</p>
                  </div>
                </div>
                
                {selectedProject.completionDate && (
                  <div className="flex items-start gap-3">
                    <HiOutlineCalendar className="text-primary-600 mt-1 flex-shrink-0 text-2xl" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Completion Date</h3>
                      <p className="text-gray-800 font-medium text-lg">{selectedProject.completionDate}</p>
                    </div>
                  </div>
                )}
                
                {selectedProject.client && (
                  <div className="flex items-start gap-3">
                    <HiOutlineOfficeBuilding className="text-primary-600 mt-1 flex-shrink-0 text-2xl" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Client</h3>
                      <p className="text-gray-800 font-medium text-lg">{selectedProject.client}</p>
                    </div>
                  </div>
                )}
                
                <div className="flex items-start gap-3">
                  <HiOutlineLightBulb className="text-primary-600 mt-1 flex-shrink-0 text-2xl" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Capacity</h3>
                    <p className="text-gray-800 font-medium text-lg">{selectedProject.capacity}</p>
                  </div>
                </div>
              </div>
              
              {selectedProject.description && (
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">Project Overview</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{selectedProject.description}</p>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {selectedProject.challenge && (
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary-500">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      Challenge
                    </h3>
                    <p className="text-gray-700">{selectedProject.challenge}</p>
                  </div>
                )}
                
                {selectedProject.solution && (
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-accent-500">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Our Solution
                    </h3>
                    <p className="text-gray-700">{selectedProject.solution}</p>
                  </div>
                )}
              </div>
              
              {selectedProject.results && selectedProject.results.length > 0 && (
                <div className="mb-8 bg-gradient-to-r from-primary-50 to-white p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <FaChartLine className="text-primary-600" />
                    Results & Impact
                  </h3>
                  <ul className="space-y-3">
                    {selectedProject.results.map((result, index) => (
                      <motion.li 
                        key={index} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-lg">{result}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
              
              {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">Project Gallery</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {selectedProject.gallery.map((image, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="rounded-lg overflow-hidden shadow-lg h-64 group"
                      >
                        <img 
                          src={image} 
                          alt={`Project image ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Projects;
