import { useState, useEffect, useRef } from 'react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);
  const [newsDropdownOpen, setNewsDropdownOpen] = useState(false);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const newsRef = useRef(null);

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
      if (contactRef.current && !(contactRef.current as HTMLElement).contains(event.target as Node)) {
        setContactDropdownOpen(false);
      }
      if (newsRef.current && !(newsRef.current as HTMLElement).contains(event.target as Node)) {
        setNewsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navigation = [
    { name: 'Home', href: '/#home' },
    { name: 'About Company', href: '/#company' },
    { 
      name: 'Services', 
      href: '/#services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Solar EPC', href: '/#services' },
        { name: 'Engineering & Design', href: '/#services' },
        { name: 'Installation & Commissioning', href: '/#services' },
        { name: 'Operation & Maintenance', href: '/#services' },
        { name: 'BOS Items', href: '/#services' },
        { name: 'Technical & Non-Technical Services', href: '/#services' }
      ] 
    },
    { name: 'Projects', href: '/projects' },
    { 
      name: 'NewsRoom', 
      href: '/#news',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Media', href: '/media' },
        { name: 'Events', href: '/events' },
        { name: 'Blogs', href: '/blogs' }
      ] 
    },
    { 
      name: "Let's Contact", 
      href: '/#contact',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Contact Us', href: '/contact' },
        { name: 'Career with Us', href: '/career' },
        { name: 'Partner with Us', href: '/enquiry' }
      ] 
    },
  ];

 
  const handleNavigation = (href: string) => {
    setIsOpen(false);
    setServicesDropdownOpen(false);
    setContactDropdownOpen(false);
    
    
    if (href.startsWith('/') && !href.includes('#')) {
     
      navigate(href);
      window.scrollTo(0, 0);
    } else {
     
      const hashPart = href.includes('#') ? href.substring(href.indexOf('#')) : '';
      
      if (href.startsWith('/') && href !== '/') {
        
        navigate(href.substring(0, href.indexOf('#')));
        setTimeout(() => scrollToSection(hashPart), 100);
      } else {
        scrollToSection(hashPart);
      }
    }
  };

 
  const scrollToSection = (href: string) => {
    console.log(`Attempting to navigate to section: ${href}`);
    
    setIsOpen(false);
    
    setServicesDropdownOpen(false);
    
   
    const isServiceLink = href.startsWith('#services-');
    
    // Add a small delay to ensure UI updates before scrolling
    setTimeout(() => {
     
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
              const serviceTop = serviceElement.getBoundingClientRect().top + window.scrollY - navbarHeight - 20; 
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
            <Link 
              to="/"
              className="flex-shrink-0 flex items-center -ml-5"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/#home');
              }}
            >
              <motion.img 
                src="/assets/logo.png"
                alt="ME Solar Logo" 
                className="h-36 w-36"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8}}
              />
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => (
              item.hasDropdown ? (
                <div 
                  key={item.name}
                  ref={item.name === 'Services' ? servicesRef : item.name === 'NewsRoom' ? newsRef : contactRef}
                  className="relative"
                  onMouseEnter={() => {
                    if (item.name === 'Services') setServicesDropdownOpen(true);
                    if (item.name === 'NewsRoom') setNewsDropdownOpen(true);
                    if (item.name === "Let's Contact") setContactDropdownOpen(true);
                  }}
                  onMouseLeave={() => {
                    if (item.name === 'Services') setServicesDropdownOpen(false);
                    if (item.name === 'NewsRoom') setNewsDropdownOpen(false);
                    if (item.name === "Let's Contact") setContactDropdownOpen(false);
                  }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item.href);
                    }}
                    className={`flex items-center px py-0 rounded-md text-lg font-bold transition-colors text-black hover:text-green-400`}
                  >
                    {item.name}
                    <ChevronDownIcon className="ml-1 h-4 w-4" />
                  </a>
                  
                  <AnimatePresence>
                    {((item.name === 'Services' && servicesDropdownOpen) ||
                      (item.name === 'NewsRoom' && newsDropdownOpen) ||
                      (item.name === "Let's Contact" && contactDropdownOpen)) && (
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
                                handleNavigation(dropdownItem.href);
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
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => {
                    if (item.href.includes('#')) {
                      e.preventDefault();
                      handleNavigation(item.href);
                    }
                  }}
                  className={`relative px py-0 rounded-md text-lg font-bold transition-colors text-black hover:text-green-400`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button - update onClick handler */}
          <div className="flex items-center md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md text-black hover:text-green-400 focus:outline-none`}
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

      {/* Update mobile menu handlers */}
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
                        handleNavigation(item.href);
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
                            handleNavigation(dropdownItem.href);
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
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={(e) => {
                      if (item.href.includes('#')) {
                        e.preventDefault();
                        handleNavigation(item.href);
                      }
                      setIsOpen(false);
                    }}
                    className="block px-3 py-2 rounded-md text-base font-medium text-primary-800 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                  >
                    {item.name}
                  </Link>
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
