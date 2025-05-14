import { motion } from 'framer-motion';
import { useState } from 'react';

// Define a type for event items
interface EventItem {
  title: string;
  date: string;
  category: string;
  priority: string;
  excerpt: string;
  content: string;
  image: string;
  location?: string;
  eventDate?: string;
}

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  // Modal handlers
  const openEventModal = (event: EventItem) => setSelectedEvent(event);
  const closeEventModal = () => setSelectedEvent(null);

  const eventItems = [
    {
      title: "Annual Solar Innovation Summit",
      date: "February 5, 2024",
      category: "Conference",
      priority: "high",
      excerpt: "Join us for our annual conference showcasing the latest in solar technology.",
      content: "ME Solar is proud to host the Annual Solar Innovation Summit, bringing together industry leaders, researchers, and enthusiasts to explore the latest advancements in solar technology. The event will feature keynote speeches, panel discussions, and interactive workshops on topics ranging from photovoltaic efficiency to energy storage solutions. Attendees will have the opportunity to network with professionals from across the renewable energy sector and gain insights into the future of solar power.",
      image: "https://images.pexels.com/photos/2740956/pexels-photo-2740956.jpeg",
      location: "Phoenix Convention Center, Phoenix, AZ",
      eventDate: "March 15-17, 2024"
    },
    {
      title: "Community Solar Workshop",
      date: "January 28, 2024",
      category: "Workshop",
      priority: "medium",
      excerpt: "Learn how community solar projects can benefit your neighborhood.",
      content: "ME Solar is hosting a free workshop for community members interested in learning about the benefits and implementation of community solar projects. Our experts will explain how these shared solar arrays work, the economic and environmental advantages they offer, and how neighborhoods can come together to make solar power accessible to all residents. The workshop will include case studies of successful community solar initiatives and practical advice for starting a project in your area.",
      image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg",
      location: "ME Solar Headquarters, Denver, CO",
      eventDate: "February 22, 2024"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Upcoming Events</h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-100">
              Join us at our upcoming events, workshops, and conferences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
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
            {eventItems.map((event, index) => {
              // Define size classes based on priority
              let sizeClasses = "";
              let imageHeight = "";
              let titleSize = "";
              let excerptDisplay = "";
              
              if (event.priority === "high") {
                sizeClasses = "col-span-12 md:col-span-6 lg:col-span-6";
                imageHeight = "h-64";
                titleSize = "text-2xl";
                excerptDisplay = "block";
              } else if (event.priority === "medium") {
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
                      src={event.image || "/api/placeholder/400/320"}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-semibold px-2.5 py-0.5 m-2 rounded">
                      {event.category}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <h3 className={`${titleSize} font-semibold text-white p-4`}>
                        {event.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center mb-2">
                      <span className="text-gray-500 text-xs">{event.date}</span>
                    </div>
                    <h3 className={`${titleSize} font-semibold text-gray-900 mb-2 line-clamp-2`}>
                      {event.title}
                    </h3>
                    {event.eventDate && (
                      <div className="flex items-center text-sm text-primary-600 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {event.eventDate}
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {event.location}
                      </div>
                    )}
                    <p className={`text-gray-600 mb-3 text-sm line-clamp-2 ${excerptDisplay}`}>{event.excerpt}</p>
                    <motion.button 
                      className="text-primary-600 font-semibold hover:text-primary-700 transition-colors flex items-center text-sm"
                      onClick={() => openEventModal(event)}
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

      {/* Event Modal */}
      {selectedEvent && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closeEventModal}
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
                src={selectedEvent.image || "/api/placeholder/400/320"}
                alt={selectedEvent.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2 inline-block">
                    {selectedEvent.category}
                  </span>
                  <h2 className="text-3xl font-bold text-white">{selectedEvent.title}</h2>
                  <p className="text-white/80 text-sm mt-2">{selectedEvent.date}</p>
                </div>
              </div>
              <button
                onClick={closeEventModal}
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              {selectedEvent.eventDate && (
                <div className="flex items-center text-sm text-primary-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">{selectedEvent.eventDate}</span>
                </div>
              )}
              {selectedEvent.location && (
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{selectedEvent.location}</span>
                </div>
              )}
              <div className="prose prose-lg max-w-none">
                <p>{selectedEvent.content}</p>
              </div>
              <div className="mt-6">
                <button
                  className="bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700 transition-colors"
                >
                  Register for Event
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Events;