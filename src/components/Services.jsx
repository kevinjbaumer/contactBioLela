// import React from 'react';
// import { motion } from 'framer-motion';
// import { Element } from 'react-scroll';

// const Services = () => {
//   const services = [
//     {
//       title: "Daily Assistance & Personal Care",
//       skills: ["Bathing & hygiene assistance", "Dressing & grooming", "Transfer & mobility support", "Toileting assistance", "Skin care monitoring"]
//     },
//     {
//       title: "Post-Surgery Recovery Support",
//       skills: ["Wound care monitoring", "Medication management", "Physical therapy support", "Recovery tracking", "Pain management assistance"]
//     },
//     {
//       title: "Rehabilitation & Recovery Assistance",
//       skills: ["Exercise assistance", "Therapy appointment support", "Progress tracking", "Motivation & encouragement", "Equipment assistance"]
//     },
//     {
//       title: "Meal Preparation & Nutrition",
//       skills: ["Custom meal planning", "Grocery shopping", "Cooking & preparation", "Dietary restriction management", "Nutrition monitoring"]
//     },
//     {
//       title: "Medication Management",
//       skills: ["Medication reminders", "Pill organization", "Dosage monitoring", "Healthcare provider communication", "Side effect monitoring"]
//     },
//     {
//       title: "Companionship & Emotional Support",
//       skills: ["Friendly conversation", "Activity participation", "Emotional support", "Social engagement", "Mental stimulation activities"]
//     }
//   ];

//   return (
//     <Element name="services">
//       <section className="py-16 bg-soft-blue">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="max-w-4xl mx-auto"
//           >
//             <h2 className="text-3xl font-bold text-trust-navy mb-8 text-center">
//               Services & Specializations
//             </h2>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-6">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-soft-peach p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
//               >
//                 <h3 className="text-lg font-semibold text-trust-navy mb-4">
//                   {service.title}
//                 </h3>
//                 <ul className="space-y-2">
//                   {service.skills.map((skill, skillIndex) => (
//                     <li
//                       key={skillIndex}
//                       className="flex items-start space-x-2 text-sm text-trust-blue"
//                     >
//                       <span className="w-1 h-1 bg-trust-blue rounded-full mt-2 flex-shrink-0"></span>
//                       <span>{skill}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             ))}
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             viewport={{ once: true }}
//             className="mt-8 bg-soft-lavender p-6 rounded-lg shadow-md"
//           >
//             <h3 className="text-lg font-semibold text-trust-navy mb-4">
//               Service Coverage
//             </h3>
//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <h4 className="font-medium text-trust-navy mb-2">Geographic Area</h4>
//                 <ul className="text-sm text-trust-blue space-y-1">
//                   <li>• Greater Metro Area (30-mile radius)</li>
//                   <li>• Downtown and suburban communities</li>
//                   <li>• Assisted living facilities</li>
//                   <li>• Private residences</li>
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="font-medium text-trust-navy mb-2">Availability</h4>
//                 <ul className="text-sm text-trust-blue space-y-1">
//                   <li>• Flexible scheduling (days, evenings, weekends)</li>
//                   <li>• Short-term and long-term care</li>
//                   <li>• Emergency support available</li>
//                   <li>• Respite care for family caregivers</li>
//                 </ul>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </Element>
//   );
// };

// export default Services;


import React from 'react';
import { Users, Utensils, Pill as Pills, Home, Activity, MessageCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Daily Assistance & Personal Care",
      skills: ["Bathing & hygiene assistance", "Dressing & grooming", "Transfer & mobility support", "Toileting assistance", "Skin care monitoring"]
    },
    {
      title: "Post-Surgery Recovery Support",
      skills: ["Wound care monitoring", "Medication management", "Physical therapy support", "Recovery tracking", "Pain management assistance"]
    },
    {
      title: "Rehabilitation & Recovery Assistance",
      skills: ["Exercise assistance", "Therapy appointment support", "Progress tracking", "Motivation & encouragement", "Equipment assistance"]
    },
    {
      title: "Meal Preparation & Nutrition",
      skills: ["Custom meal planning", "Grocery shopping", "Cooking & preparation", "Dietary restriction management", "Nutrition monitoring"]
    },
    {
      title: "Medication Management",
      skills: ["Medication reminders", "Pill organization", "Dosage monitoring", "Healthcare provider communication", "Side effect monitoring"]
    },
    {
      title: "Companionship & Emotional Support",
      skills: ["Friendly conversation", "Activity participation", "Emotional support", "Social engagement", "Mental stimulation activities"]
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="px-4 md:px-10">
        <div>
          <h2 className="text-3xl font-bold text-trust-navy mb-8 text-center">Services & Specializations</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-trust-navy mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-start space-x-2 text-sm text-gray-700">
                      <span className="w-1 h-1 bg-trust-blue rounded-full mt-2 flex-shrink-0"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-trust-navy mb-4">Service Coverage</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Geographic Area</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Greater Metro Area (30-mile radius)</li>
                  <li>• Downtown and suburban communities</li>
                  <li>• Assisted living facilities</li>
                  <li>• Private residences</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Availability</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Flexible scheduling (days, evenings, weekends)</li>
                  <li>• Short-term and long-term care</li>
                  <li>• Emergency support available</li>
                  <li>• Respite care for family caregivers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;