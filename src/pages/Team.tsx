import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Define a type for team member items
interface TeamMember {
  name: string;
  position: string;
  department: string;
  image: string;
  briefBio: string;
  fullBio: string;
  email: string;
  linkedin: string;
  experience?: string;
  expertise?: string[];
}

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Add scroll lock effect when modal is open
  useEffect(() => {
    if (selectedMember) {
      // Disable scrolling on body when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = 'auto';
    }
    
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedMember]);

  // Team members data
  const teamMembers = [
    {
      name: "Manoj Kumar",
      position: "Founder & Managing Director",
      department: "Executive",
      image: "/assets/team.png",
      briefBio: "A technical graduate and certified professional with deep expertise in renewable and solar energy.",
      fullBio: "Manoj Kumar is the Founder and Managing Director of ME Solar India. As a technical graduate and certified professional, he brings extensive expertise in renewable and solar energy to the company. With a strong background in engineering and sustainable energy solutions, Manoj has been instrumental in establishing ME Solar as a leading provider of solar solutions in India. His vision and leadership continue to drive the company's growth and innovation in the renewable energy sector.",
      email: "manoj.kumar@mesolar.com",
      linkedin: "https://linkedin.com/in/manojkumar",
      experience: "15+ years in renewable energy sector",
      expertise: ["Solar Energy Systems", "Renewable Energy Solutions", "Project Management", "Strategic Planning"],
    },
    {
      name: "Sunil Sagar",
      position: "Founder, Director & CEO",
      department: "Executive",
      image: "/assets/team.png",
      briefBio: "A postgraduate in finance with over a decade of experience across solar energy and IT sectors.",
      fullBio: "Sunil Sagar is the Founder, Director, and Chief Executive Officer (CEO) of ME Solar India. With a postgraduate degree in finance and over a decade of professional experience across the solar energy and IT sectors, he brings a unique blend of technical insight and strategic leadership. Sunil is known for his commitment to systematic corporate governance, operational excellence, and sustainable innovation. Under his leadership, the organization has consistently delivered impactful solutions and achieved measurable growth.",
      email: "sunil.sagar@mesolar.com",
      linkedin: "https://linkedin.com/in/sunilsagar",
      education: ["Postgraduate Degree in Finance"],
      experience: "10+ years in solar energy and information technology industries",
      expertise: ["Strategic Leadership", "Corporate Governance", "Financial Planning", "Business Development", "Sustainable Innovation"],

    },
    // {
    //     name: "Sadhna Gupta",
    //     position: "Director – Strategy Planning",
    //     department: "Executive",
    //     image: "/assets/team.png", // Update the path if there's a different image available
    //     briefBio: "Brings 7 years of experience in the education sector, specializing in mentoring and coaching.",
    //     fullBio: "Sadhna Gupta is the Director of Strategy Planning at ME Solar India. With 7 years of experience in the education sector, she has built a strong foundation in mentoring, coaching, and leadership development. Her focus on human capital and organizational growth has helped enhance employee development across ME Solar. Sadhna’s strategic vision and people-centric approach contribute significantly to the company’s long-term goals.",
    //     email: "sadhna.gupta@mesolar.com",
    //     linkedin: "https://linkedin.com/in/sadhnagupta", // Update if available
    //     education: ["Bachelor's Degree in Education or Related Field"], // Update if more accurate info is available
    //     experience: "7 years in the education sector, focused on coaching and employee development",
    //     expertise: ["Mentoring & Coaching", "Strategic Planning", "Employee Development", "Organizational Growth"],
    //     achievements: ["Established employee mentoring programs", "Enhanced internal development frameworks", "Contributed to strategic workforce planning"]
    //   },
    //   {
    //     name: "Reena Gupta",
    //     position: "Director – Business & Planning",
    //     department: "Executive",
    //     image: "/assets/team.png", // Update the path if there's a different image available
    //     briefBio: "A business professional since 2015 with a focus on strategy, collaboration, and organizational growth.",
    //     fullBio: "Reena Gupta serves as the Director of Business & Planning at ME Solar India. Since beginning her professional journey in 2015, she has demonstrated a strong aptitude for practical strategy, business planning, and team collaboration. Reena is known for fostering a creative and people-focused culture that aligns with ME Solar’s vision. Her work plays a key role in shaping the company’s growth roadmap and enhancing cross-functional coordination.",
    //     email: "reena.gupta@mesolar.com",
    //     linkedin: "https://linkedin.com/in/reenagupta", // Update if available
    //     education: ["Bachelor's Degree in Business or Related Field"], // Update if more accurate info is available
    //     experience: "Since 2015 in business planning and strategic development",
    //     expertise: ["Business Strategy", "Collaboration", "People-Centric Planning", "Growth Management"],
    //     achievements: ["Led cross-functional strategic initiatives", "Promoted innovation in business planning", "Enhanced team collaboration and communication"]
    //   }
      
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 py-24 px-6 sm:px-12 lg:px-16">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/assets/background.jpg" 
            alt="Solar panels background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Team
          </motion.h1>
          <motion.p 
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Meet the dedicated professionals behind ME Solar's success. Our team combines expertise, passion, and innovation to deliver exceptional solar solutions.
          </motion.p>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Vision & Mission</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Driving the future of renewable energy with purpose and innovation.
          </p>
        </div>

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


            
        {/* Team Members Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Leadership Team</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our leadership team brings decades of combined experience in renewable energy, engineering, and business management.
          </p>
        </div>

  
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-10">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex bg-white rounded-lg overflow-hidden shadow-lg h-64">
              <div className="w-1/2 h-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-1/2 p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-gray-600 font-medium mb-4">{member.position}</p>
                  <p className="text-gray-700 text-sm">{member.briefBio}</p>
                </div>
                <button 
                  onClick={() => setSelectedMember(member)}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-1.5 px-3 rounded-full flex items-center transition-all duration-300 mt-4 self-start"
                >
                  <span>Read More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for detailed member info - with scroll lock already implemented via useEffect */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <motion.div 
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-800 to-blue-600 p-8 text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-3xl font-bold">{selectedMember.name}</h2>
                      <p className="text-blue-200 text-xl mt-1">{selectedMember.position}</p>
                    </div>
                    <button 
                      onClick={() => setSelectedMember(null)}
                      className="text-white hover:text-blue-200 bg-blue-700 hover:bg-blue-800 rounded-full p-2 transition-colors duration-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/3">
                      <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-6">
                        <img 
                          src={selectedMember.image} 
                          alt={selectedMember.name} 
                          className="w-full h-auto object-cover object-center rounded-lg shadow-md mb-6"
                        />
                        
                        <h3 className="text-lg font-semibold text-blue-800 mb-3">Contact Information</h3>
                        <div className="space-y-3">
                          <p className="flex items-center text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <a href={`mailto:${selectedMember.email}`} className="text-blue-600 hover:underline">
                              {selectedMember.email}
                            </a>
                          </p>
                          <p className="flex items-center text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                            <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                              LinkedIn Profile
                            </a>
                          </p>
                        </div>
                      </div>
                      
                      {selectedMember.experience && (
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                          <h3 className="text-lg font-semibold text-blue-800 mb-2">Experience</h3>
                          <p className="text-gray-700">{selectedMember.experience}</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="lg:w-2/3">
                      <div className="bg-white rounded-xl border border-blue-100 p-6 mb-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-blue-800 mb-4">Biography</h3>
                        <p className="text-gray-700 leading-relaxed">{selectedMember.fullBio}</p>
                      </div>
                      
                      {selectedMember.expertise && (
                        <div className="bg-white rounded-xl border border-blue-100 p-6 mb-6 shadow-sm">
                          <h3 className="text-xl font-semibold text-blue-800 mb-4">Areas of Expertise</h3>
                          <div className="flex flex-wrap gap-2">
                            {selectedMember.expertise.map((skill, index) => (
                              <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Team;
