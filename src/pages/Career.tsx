import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiOutlineBriefcase, HiOutlineAcademicCap, HiOutlineLocationMarker, HiOutlineInformationCircle } from 'react-icons/hi';

const jobOpenings = [
  {
    title: "Sales Executive – Residential",
    description: "Join our sales team to help residential customers transition to solar energy.",
    overview: "Promote and sell solar solutions to residential customers in assigned territories.",
    location: "Lucknow, Hardoi, Unnao, Lakhimpur, Raibareli, Sitapur, Gaziabad",
    requirements: [
      "Experience in residential sales",
      "Knowledge of solar energy systems",
      "Excellent communication skills",
      "Target-driven mindset"
    ],
    salary: "Best in the solar Industry",
    applyLink: "mailto:careers@company.com?subject=Application%20for%20Sales%20Executive%20Residential"
  },
  {
    title: "Business Development Executive - C&I",
    description: "Develop business opportunities in the Commercial & Industrial solar sector.",
    overview: "Identify and pursue business opportunities with commercial and industrial clients for solar installations.",
    location: "Lucknow, Hardoi, Unnao, Lakhimpur, Raibareli, Sitapur, Gaziabad",
    requirements: [
      "Experience in B2B sales",
      "Understanding of commercial energy needs",
      "Strong negotiation skills",
      "Ability to build client relationships"
    ],
    salary: "Best in the solar Industry",
    applyLink: "mailto:careers@company.com?subject=Application%20for%20Business%20Development%20Executive"
  },
  {
    title: "Solar Technician",
    description: "Looking for experienced technicians to join our installation team.",
    overview: "Install, maintain, and repair solar panel systems for residential and commercial clients.",
    location: "Lucknow, Hardoi, Unnao, Lakhimpur, Raibareli, Sitapur, Gaziabad",
    requirements: [
      "Experience in solar installation",
      "Technical knowledge of electrical systems",
      "Safety certification",
      "Physical ability to work on rooftops"
    ],
    salary: "Best in the solar Industry",
    applyLink: "mailto:careers@company.com?subject=Application%20for%20Solar%20Technician"
  },
  {
    title: "Solar Engineer – Services",
    description: "Provide engineering expertise for solar installation projects.",
    overview: "Design, plan, and oversee solar system installations, ensuring technical compliance and optimal performance.",
    location: "Lucknow, Hardoi, Unnao, Lakhimpur, Raibareli, Sitapur, Gaziabad",
    requirements: [
      "Degree in Electrical/Mechanical Engineering",
      "Experience with solar PV systems",
      "Knowledge of electrical codes and standards",
      "Project management skills"
    ],
    salary: "Best in the solar Industry",
    applyLink: "mailto:careers@company.com?subject=Application%20for%20Solar%20Engineer%20Services"
  },
  {
    title: "Liasoning Executive",
    description: "Manage relationships with government agencies and regulatory bodies.",
    overview: "Handle permits, approvals, and compliance requirements for solar projects with various authorities.",
    location: "Lucknow, Hardoi, Unnao, Lakhimpur, Raibareli, Sitapur, Gaziabad",
    requirements: [
      "Experience in government relations",
      "Knowledge of renewable energy regulations",
      "Strong communication skills",
      "Attention to detail"
    ],
    salary: "Best in the solar Industry",
    applyLink: "mailto:careers@company.com?subject=Application%20for%20Liasoning%20Executive"
  },
  {
    title: "Loan Process Executive",
    description: "Facilitate financing options for customers investing in solar solutions.",
    overview: "Guide customers through solar financing options, loan applications, and documentation processes.",
    location: "Lucknow, Hardoi, Unnao, Lakhimpur, Raibareli, Sitapur, Gaziabad",
    requirements: [
      "Experience in finance or banking",
      "Knowledge of loan processing",
      "Customer service orientation",
      "Attention to detail"
    ],
    salary: "Best in the solar Industry",
    applyLink: "mailto:careers@company.com?subject=Application%20for%20Loan%20Process%20Executive"
  },
  {
    title: "Office Assistant",
    description: "Provide administrative support to ensure smooth office operations.",
    overview: "Handle administrative tasks, coordinate schedules, manage documentation, and support office staff.",
    location: "Lucknow, Hardoi, Unnao, Lakhimpur, Raibareli, Sitapur, Gaziabad",
    requirements: [
      "Administrative experience",
      "Proficiency in MS Office",
      "Organizational skills",
      "Multitasking ability"
    ],
    salary: "Best in the solar Industry",
    applyLink: "mailto:careers@company.com?subject=Application%20for%20Office%20Assistant"
  },
  {
    title: "HR Assistant",
    description: "Support HR functions including recruitment, onboarding, and employee relations.",
    overview: "Assist with recruitment processes, employee documentation, and general HR administrative tasks.",
    location: "Lucknow, Hardoi, Unnao, Lakhimpur, Raibareli, Sitapur, Gaziabad",
    requirements: [
      "HR background or education",
      "Knowledge of HR practices",
      "Good interpersonal skills",
      "Discretion and confidentiality"
    ],
    salary: "Best in the solar Industry",
    applyLink: "mailto:careers@company.com?subject=Application%20for%20HR%20Assistant"
  },
  {
    title: "Account Executive",
    description: "Manage financial operations and accounting processes.",
    overview: "Handle accounts payable/receivable, financial reporting, and maintain accounting records.",
    location: "Lucknow, Hardoi, Unnao, Lakhimpur, Raibareli, Sitapur, Gaziabad",
    requirements: [
      "Accounting qualification",
      "Experience in financial management",
      "Proficiency in accounting software",
      "Attention to detail"
    ],
    salary: "Best in the solar Industry",
    applyLink: "mailto:careers@company.com?subject=Application%20for%20Account%20Executive"
  },
  {
    title: "Digital Marketing Executive",
    description: "Drive online presence and lead generation through digital marketing strategies.",
    overview: "Manage social media, content creation, SEO, and digital campaigns to promote solar solutions.",
    location: "Lucknow, Hardoi, Unnao, Lakhimpur, Raibareli, Sitapur, Gaziabad",
    requirements: [
      "Digital marketing experience",
      "Social media management skills",
      "Content creation abilities",
      "Analytics knowledge"
    ],
    salary: "Best in the solar Industry",
    applyLink: "mailto:careers@company.com?subject=Application%20for%20Digital%20Marketing%20Executive"
  }
];

const internshipOpenings = [
  {
    title: "Marketing Intern",
    description: "Assist our marketing team with campaigns and outreach.",
    overview: "Work with the marketing team to plan and execute campaigns, manage social media, and analyze outreach effectiveness.",
    location: "Remote / Mumbai, India",
    requirements: [
      "Currently pursuing a degree in Marketing or related field",
      "Strong communication skills",
      "Familiarity with social media platforms"
    ],
    stipend: "₹8,000/month",
    applyLink: "mailto:careers@company.com?subject=Application%20for%20Marketing%20Intern"
  },
  {
    title: "HRM Intern",
    description: "Support our engineering team in solar project design and analysis.",
    overview: "Gain hands-on experience in solar project design and technical analysis.",
    location: "Hyderabad, India",
    requirements: [
      "Currently pursuing a degree in Engineering",
      "Interest in renewable energy",
      "Basic knowledge of CAD tools"
    ],
    stipend: "₹10,000/month",
    applyLink: "mailto:careers@company.com?subject=Application%20for%20Engineering%20Intern"
  }
];

// Define a type for job/internship positions
interface Position {
  title: string;
  description: string;
  overview: string;
  location: string;
  requirements?: string[];
  salary?: string;
  stipend?: string;
  applyLink: string;
}

// At the top of your Career component (add this right after the Career component declaration)
const Career = () => {
  const [openJobIndex, setOpenJobIndex] = useState<number | null>(null);
  const [openInternIndex, setOpenInternIndex] = useState<number | null>(null);
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white to-gray-50 font-sans">
      {/* Main Jobs Banner - Larger Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full left-0 right-0 mb-12 h-96 flex items-center justify-center overflow-hidden"
      >
        <img
          src="/assets/img1.png"
          alt="Career Opportunities"
          className="w-full h-full object-cover absolute inset-0 z-0 filter brightness-90"
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 bg-gradient-to-r from-black/50 to-blue-900/40">
          <h1 className="text-5xl font-extrabold text-white mb-3 drop-shadow-lg tracking-tight">Career Opportunities</h1>
          <p className="text-xl text-white drop-shadow-md text-center max-w-2xl font-light leading-relaxed">
            Join our dynamic team and be part of the renewable energy revolution
          </p>
        </div>
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Image Gallery Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center relative inline-block">
            <span className="relative z-10">Our Work Environment</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-200/50 -z-10 transform -rotate-1"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-xl shadow-lg h-64"
            >
              <img src="/assets/img1.png" alt="Solar Installation" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-xl shadow-lg h-64 md:h-80"
            >
              <img src="/assets/img2.jpg" alt="Team Collaboration" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-xl shadow-lg h-64"
            >
              <img src="/assets/background.jpg" alt="Solar Panels" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </motion.div>

        {/* Company Information Sections - Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Building a Future Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-blue-800 mb-5 relative inline-block">
              <span className="relative z-10">Building a Future with Green Energy</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-200/50 -z-10 transform -rotate-1"></span>
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-500 h-full transform transition-transform hover:scale-[1.01] duration-300">
              <p className="text-gray-700 mb-5 leading-relaxed text-lg">
                <strong className="text-blue-700 font-semibold">At our company</strong>, we are committed to driving the green energy revolution. With over 750+ MW of installed capacity till 2024 and corporate and PSU clients across various sectors, we are at the forefront of renewable energy solutions. Our team is composed of experts who are passionate about making a difference, and we're growing fast!
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Whether you're an experienced professional or a passionate newcomer, you'll have the opportunity to develop your skills, work on cutting-edge projects, and contribute to a more sustainable world.
              </p>
              <div className="mt-6 overflow-hidden rounded-lg shadow-md">
                <img src="/assets/background.jpg" alt="Solar Installation" className="w-full h-48 object-cover" />
              </div>
            </div>
          </motion.div>

          {/* Our Culture Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-blue-800 mb-5 relative inline-block">
              <span className="relative z-10">Our Culture & Values</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-200/50 -z-10 transform -rotate-1"></span>
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-500 h-full transform transition-transform hover:scale-[1.01] duration-300">
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <p className="text-gray-700 mb-5 leading-relaxed text-lg">
                    We believe in fostering an inclusive and innovative work environment where each employee is empowered to bring their best ideas to the table.
                  </p>
                  <p className="text-gray-700 mb-5 leading-relaxed text-lg">
                    We value teamwork, integrity, and continuous learning. Our mission is to create a culture of sustainability both in and outside the workplace. Join us, and be a part of our journey towards a greener future.
                  </p>
                  <div className="mt-4 mb-6 overflow-hidden rounded-lg shadow-md">
                    <img src="/assets/img2.jpg" alt="Team Collaboration" className="w-full h-48 object-cover" />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg flex-1 border-l-4 border-blue-400">
                    <p className="text-blue-700 text-base font-medium italic">"Driven by Integrity and Innovation"</p>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <img src="/assets/img2.jpg" alt="Great Place to Work" className="h-20 w-auto rounded-lg shadow-md" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Featured Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 overflow-hidden rounded-xl shadow-xl"
        >
          <img 
            src="/assets/img1.png" 
            alt="Solar Energy Team" 
            className="w-full h-96 object-cover"
          />
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">Join Our Growing Team</h3>
            <p className="text-lg">Be part of the renewable energy revolution and help build a sustainable future</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex justify-center w-full">
            <h2 className="text-3xl font-bold text-blue-800 mb-2 text-center relative inline-block">
              <span className="relative z-10">Open Positions</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-200/50 -z-10 transform -rotate-1"></span>
            </h2>
          </div>
          <p className="text-center text-blue-600 mb-8">Explore our current job openings and join our mission for a sustainable future.</p>
         
          <div className="space-y-4">
            {jobOpenings.map((position, index) => (
              <BriefCard 
                key={index} 
                position={position} 
                open={openJobIndex === index}
                onClick={() => {
                  // Close internship cards when opening a job card
                  setOpenInternIndex(null);
                  // Toggle the current job card
                  setOpenJobIndex(openJobIndex === index ? null : index);
                }}
              />
            ))}
          </div>
          
          <div className="space-y-4">
            {internshipOpenings.map((intern, index) => (
              <BriefCard 
                key={index} 
                position={intern} 
                isInternship={true} 
                open={openInternIndex === index}
                onClick={() => {
                  // Close job cards when opening an internship card
                  setOpenJobIndex(null);
                  // Toggle the current internship card
                  setOpenInternIndex(openInternIndex === index ? null : index);
                }}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Internship Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-3 relative inline-block">
              <span className="relative z-10">Internship Opportunities</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-200/50 -z-10 transform -rotate-1"></span>
            </h2>
            <p className="text-lg text-blue-700 mb-8 max-w-2xl mx-auto font-light">Kickstart your career with hands-on experience in the solar industry</p>
          </div>
          <div className="space-y-4">
            {internshipOpenings.map((intern, index) => (
              <BriefCard 
                key={index} 
                position={intern} 
                isInternship={true} 
                open={openInternIndex === index}
                onClick={() => setOpenInternIndex(openInternIndex === index ? null : index)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Career;

// Update BriefCardProps
interface BriefCardProps {
  position: Position;
  isInternship?: boolean;
  open: boolean;
  onClick: () => void;
}

// Update BriefCard component
const BriefCard: React.FC<BriefCardProps> = ({ position, isInternship = false, open, onClick }) => {
  const summary = position.description.length > 80 ? position.description.slice(0, 80) + '...' : position.description;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-xl shadow-xl bg-gradient-to-br from-white via-blue-50 to-blue-100 border border-blue-200 hover:shadow-2xl transition-all duration-300 mb-8 group"
      whileHover={{ y: -5 }}
    >
      <div 
        className="flex flex-col md:flex-row md:items-center px-8 py-8 cursor-pointer relative z-10 overflow-hidden bg-gradient-to-r from-blue-50 via-white to-blue-100 group-hover:from-blue-100 group-hover:to-blue-200 transition-colors duration-300 border-b-2 border-blue-100"
        onClick={onClick}
      >
        <div className="flex items-center gap-5 min-w-0 relative z-10 flex-1">
          <div className="text-4xl text-blue-600 bg-blue-100 p-3 rounded-full shadow-md group-hover:bg-blue-200 transition-colors duration-300 border-2 border-blue-200">
            {isInternship ? <HiOutlineAcademicCap /> : <HiOutlineBriefcase />}
          </div>
          <div className="min-w-0">
            <span className="font-bold text-blue-800 block truncate text-xl md:text-2xl mb-2 group-hover:text-blue-700 transition-colors duration-300 tracking-wide drop-shadow-sm">
              {position.title}
            </span>
            <span className="text-gray-700 text-base block truncate italic opacity-90">
              {summary}
            </span>
          </div>
        </div>
        {open && (
          <a
            href={position.applyLink}
            className="ml-auto bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 text-center text-base font-semibold transform hover:scale-105 hover:shadow-xl z-20"
            onClick={e => e.stopPropagation()}
          >
            Apply Now
          </a>
        )}
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 bg-blue-100/90 rounded-b-lg border-t border-blue-200 shadow-inner relative z-10"
        >
          {/* Keep the existing expanded content */}
          {position.overview && (
            <div className="mb-4 flex items-start text-base text-blue-700 mt-2 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <HiOutlineInformationCircle className="mr-3 text-2xl flex-shrink-0 mt-1" />
              <span><strong className="text-blue-800">Overview:</strong> {position.overview}</span>
            </div>
          )}
          {position.location && (
            <div className="mb-4 flex items-center text-base text-blue-700 bg-blue-50 p-4 rounded-lg">
              <HiOutlineLocationMarker className="mr-3 text-2xl flex-shrink-0" />
              <span><strong className="text-blue-800">Location:</strong> {position.location}</span>
            </div>
          )}
          {position.requirements && (
            <div className="mb-4 bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-3 text-lg flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Requirements:
              </h4>
              <ul className="list-none text-gray-700 text-base space-y-3">
                {position.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="inline-block w-5 h-5 bg-green-100 rounded-full flex-shrink-0 mr-3 mt-1 flex items-center justify-center">
                      <span className="text-green-600 text-xs">✓</span>
                    </span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="mt-4 flex flex-wrap gap-4">
            {position.salary && (
              <div className="text-base bg-blue-800 text-white px-4 py-2 rounded-lg inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <strong>Salary:</strong> {position.salary}
              </div>
            )}
            {position.stipend && (
              <div className="text-base bg-green-700 text-white px-4 py-2 rounded-lg inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <strong>Stipend:</strong> {position.stipend}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};
