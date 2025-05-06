import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: FaFacebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: FaXTwitter, href: 'https://x.com/mesolarindia', label: 'X (Twitter)' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/me-solar-918059362/', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://www.instagram.com/mesolarindia/', label: 'Instagram' }
  ];

  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Company', href: '#company' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-primary-400">ME Solar</h3>
            <p className="mt-4 text-gray-300">
              Powering a sustainable future through innovative solar solutions.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-300 hover:text-primary-300 transition-colors duration-300 block animated-underline inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <motion.li 
                whileHover={{ x: 5 }}
                className="hover:text-green-500 transition-colors duration-300"
              >
               2/125, Vishwas Khand
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                className="hover:text-green-500 transition-colors duration-300"
              >
                Gomti Nagar, Lucknow, U.P. (226010)
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                className="hover:text-green-500 transition-colors duration-300"
              >
                Phone: +91 9153832222
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                className="hover:text-green-500 transition-colors duration-300"
              >
                Email: info@mesolar.com
              </motion.li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-300"
        >
          <p>&copy; {new Date().getFullYear()} ME Solar. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;