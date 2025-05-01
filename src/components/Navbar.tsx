import { useState, useEffect, useRef } from 'react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !(servicesRef.current as HTMLElement).contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About Company', href: '#company' },
    { 
      name: 'Services', 
      href: '#services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Solar Panel Installation', href: '#services-solar-panels' },
        { name: 'Energy Consultation', href: '#services-consultation' },
        { name: 'System Maintenance', href: '#services-maintenance' },
        { name: 'Battery Storage', href: '#services-battery' }
      ] 
    },
    { name: 'Projects', href: '#projects' },
    { name: 'NewsRoom', href: '#news' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    console.log(`Attempting to navigate to section: ${href}`);
    // Close the mobile menu first
    setIsOpen(false);
    // Also close the services dropdown
    setServicesDropdownOpen(false);
    
    // Check if it's a service-specific link
    const isServiceLink = href.startsWith('#services-');
    
    // Add a small delay to ensure UI updates before scrolling
    setTimeout(() => {
      // For service links, first navigate to the services section and then to the specific service
      if (isServiceLink) {
        // First scroll to the main services section
        const servicesSection = document.querySelector('#services');
        if (servicesSection) {
          const navbarHeight = 64;
          const servicesTop = servicesSection.getBoundingClientRect().top + window.scrollY - navbarHeight;
          
          window.scrollTo({
            top: servicesTop,
            behavior: 'smooth'
          });
          
          // Then handle specific service section after a delay
          setTimeout(() => {
            const serviceElement = document.querySelector(href);
            if (serviceElement) {
              const serviceTop = serviceElement.getBoundingClientRect().top + window.scrollY - navbarHeight - 20; // Extra offset for sub-sections
              window.scrollTo({
                top: serviceTop,
                behavior: 'smooth'
              });
            }
          }, 300);
        }
      } else {
        // Standard scroll for non-service links
        const element = document.querySelector(href);
        if (element) {
          console.log(`Element found for ${href}:`, element);
          // Calculate position with offset for the navbar height
          const navbarHeight = 64; // This is the h-16 class height in pixels
          const top = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
          
          window.scrollTo({ 
            top, 
            behavior: 'smooth'
          });
          console.log(`Successfully scrolled to section: ${href}`);
        } else {
          console.error(`Element not found for ${href}`);
        }
      }
    }, 100);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled && window.scrollY > window.innerHeight
        ? 'bg-white/95 shadow-lg border-b-0'
        : 'bg-white/1 backdrop'
    }`}>  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a 
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="flex-shrink-0 flex items-center"
            >
              <motion.img 
                src="assets/logo.png"
                alt="ME Solar Logo" 
                className="h-36 w-36"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8}}
              />
            </a>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => (
              item.hasDropdown ? (
                <div 
                  key={item.name}
                  ref={servicesRef}
                  className="relative"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className={`flex items-center px py-0 rounded-md text-lg font-bold transition-colors ${
                      'text-black hover:text-green-400'
                    }`}
                  >
                    {item.name}
                    <ChevronDownIcon className="ml-1 h-4 w-4" />
                  </a>
                  
                  {/* Services Dropdown */}
                  <AnimatePresence>
                    {servicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden z-50"
                      >
                        <div className="py-1">
                          {item.dropdownItems.map((dropdownItem) => (
                            <motion.a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(dropdownItem.href);
                              }}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                            >
                              {dropdownItem.name}
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`relative px py-0 rounded-md text-lg font-bold transition-colors ${
                    'text-black hover:text-green-400'
                  }`}
                >
                  {item.name}
                </a>
              )
            ))}
          </div>

          <div className="flex items-center md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                'text-black hover:text-green-400'
              } focus:outline-none`}
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg border-t border-primary-100"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => 
                item.hasDropdown ? (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                      className="block px-3 py-2 rounded-md text-base font-medium text-primary-800 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                    >
                      {item.name}
                    </a>
                    <div className="pl-4">
                      {item.dropdownItems.map((dropdownItem) => (
                        <motion.a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(dropdownItem.href);
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="block px-3 py-2 rounded-md text-sm font-medium text-primary-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                        >
                          {dropdownItem.name}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="block px-3 py-2 rounded-md text-base font-medium text-primary-800 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                  >
                    {item.name}
                  </a>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;