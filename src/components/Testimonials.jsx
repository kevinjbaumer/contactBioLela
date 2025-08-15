// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules"; // ✅ v10+ way
// import "swiper/css";
// import "swiper/css/pagination";
// import { Link } from "react-scroll";

// const testimonials = [
//   {
//     name: "Margaret Thompson",
//     role: "Daughter of Patient",
//     image: "https://randomuser.me/api/portraits/women/65.jpg",
//     feedback:
//       "Lena cared for my mother after her hip surgery. She was gentle, professional, and truly treated her like family. I couldn't have asked for better support.",
//   },
//   {
//     name: "James Walker",
//     role: "Elderly Client",
//     image: "https://randomuser.me/api/portraits/men/32.jpg",
//     feedback:
//       "I've had several caregivers over the years, but Lena is in a class of her own. She’s patient, attentive, and always knows exactly what I need before I even ask.",
//   },
//   {
//     name: "Laura Peterson",
//     role: "Family Caregiver",
//     image: "https://randomuser.me/api/portraits/women/43.jpg",
//     feedback:
//       "Having Lena step in for respite care was a lifesaver. I was able to rest knowing my father was in capable and compassionate hands.",
//   },
//   {
//     name: "Daniel Harris",
//     role: "Post-Surgery Patient",
//     image: "https://randomuser.me/api/portraits/men/21.jpg",
//     feedback:
//       "After my knee replacement, Lena handled my recovery care with such precision and kindness. She helped me get back on my feet in no time.",
//   },
//   {
//     name: "Evelyn Brooks",
//     role: "Assisted Living Resident",
//     image: "https://randomuser.me/api/portraits/women/76.jpg",
//     feedback:
//       "Lena brightens my day every time she visits. She’s not just a caregiver, she’s a friend who makes life more joyful.",
//   },
//   {
//     name: "Robert Mitchell",
//     role: "Son of Patient",
//     image: "https://randomuser.me/api/portraits/men/54.jpg",
//     feedback:
//       "We trusted Lena to take care of my father while we were away. She went above and beyond, keeping us updated and ensuring he was comfortable.",
//   },
// ];

// export default function Testimonials() {
//   return (
//     <section
//       id="testimonials"
//       className="py-16 bg-white text-center  px-4 md:px-10"
//     >
//       <h2 className="text-3xl font-bold mb-2">What Clients Say</h2>
//       <p className="mb-6">
//         Below are some Heart felt comments some clients have said about my care
//         and support services
//       </p>
//       <Swiper
//         modules={[Pagination, Autoplay]}
//         spaceBetween={20}
//         slidesPerView={1}
//         autoplay={{
//           delay: 3000, // 3 seconds per slide
//           disableOnInteraction: false, // keeps autoplay after user swipes
//         }}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         pagination={{ clickable: true }}
//         className="pb-12"
//       >
//         {testimonials.map((t, index) => (
//           <SwiperSlide key={index} className="h-full">
//             {({ isActive }) => (
//               <div
//                 className={`flex flex-col justify-between h-full p-6 rounded-xl transition-all duration-300 ${
//                   isActive
//                     ? "bg-black text-white shadow-lg"
//                     : "bg-white border border-gray-300 text-gray-800"
//                 }`}
//               >
//                 <p className="text-base mb-6">{t.feedback}</p>
//                 <div className="flex items-center gap-4 mt-auto">
//                   <img
//                     src={t.image}
//                     alt={t.name}
//                     className="w-12 h-12 rounded-full object-cover"
//                   />
//                   <div className="text-left">
//                     <h4 className="font-semibold">{t.name}</h4>
//                     <p
//                       className={`text-sm ${
//                         isActive ? "text-gray-300" : "text-gray-500"
//                       }`}
//                     >
//                       {t.role}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <div className="mt-8">
//         <Link
//           to="contact"
//           smooth={true}
//           duration={600}
//           offset={-70}
//           className="bg-trust-blue border border-black text-black px-6 py-3 rounded-lg hover:bg-trust-navy transition font-medium cursor-pointer"
//         >
//           Contact Me Today
//         </Link>
//       </div>
//     </section>
//   );
// }


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-scroll";

// const testimonials = [
//   {
//     name: "Margaret Thompson",
//     role: "Daughter of Patient",
//     image: "https://randomuser.me/api/portraits/women/65.jpg",
//     feedback:
//       "Lena cared for my mother after her hip surgery. She was gentle, professional, and truly treated her like family. I couldn't have asked for better support.",
//   },
//   {
//     name: "James Walker",
//     role: "Elderly Client",
//     image: "https://randomuser.me/api/portraits/men/32.jpg",
//     feedback:
//       "I've had several caregivers over the years, but Lena is in a class of her own. She’s patient, attentive, and always knows exactly what I need before I even ask.",
//   },
//   {
//     name: "Laura Peterson",
//     role: "Family Caregiver",
//     image: "https://randomuser.me/api/portraits/women/43.jpg",
//     feedback:
//       "Having Lena step in for respite care was a lifesaver. I was able to rest knowing my father was in capable and compassionate hands.",
//   },
//   {
//     name: "Daniel Harris",
//     role: "Post-Surgery Patient",
//     image: "https://randomuser.me/api/portraits/men/21.jpg",
//     feedback:
//       "After my knee replacement, Lena handled my recovery care with such precision and kindness. She helped me get back on my feet in no time.",
//   },
//   {
//     name: "Evelyn Brooks",
//     role: "Assisted Living Resident",
//     image: "https://randomuser.me/api/portraits/women/76.jpg",
//     feedback:
//       "Lena brightens my day every time she visits. She’s not just a caregiver, she’s a friend who makes life more joyful.",
//   },
//   {
//     name: "Robert Mitchell",
//     role: "Son of Patient",
//     image: "https://randomuser.me/api/portraits/men/54.jpg",
//     feedback:
//       "We trusted Lena to take care of my father while we were away. She went above and beyond, keeping us updated and ensuring he was comfortable.",
//   },
// ];


const testimonials = [
  {
    name: "Margaret Thompson",
    role: "Daughter of Patient",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    feedback:
      "Lena cared for my mother after her hip surgery. She was gentle, professional, and truly treated her like family. I couldn't have asked for better support.",
  },
  {
    name: "James Walker",
    role: "Elderly Client",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "I've had several caregivers over the years, but Lena is in a class of her own. She’s patient, attentive, and always knows exactly what I need before I even ask.",
  },
  {
    name: "Laura Peterson",
    role: "Family Caregiver",
    image: "https://randomuser.me/api/portraits/women/43.jpg",
    feedback:
      "Having Lena step in for respite care was a lifesaver. I was able to rest knowing my father was in capable and compassionate hands.",
  },
  {
    name: "Daniel Harris",
    role: "Post-Surgery Patient",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
    feedback:
      "After my knee replacement, Lena handled my recovery care with such precision and kindness. She helped me get back on my feet in no time.",
  },
  {
    name: "Evelyn Brooks",
    role: "Assisted Living Resident",
    image: "https://randomuser.me/api/portraits/women/76.jpg",
    feedback:
      "Lena brightens my day every time she visits. She’s not just a caregiver, she’s a friend who makes life more joyful.",
  },
  {
    name: "Robert Mitchell",
    role: "Son of Patient",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    feedback:
      "We trusted Lena to take care of my father while we were away. She went above and beyond, keeping us updated and ensuring he was comfortable.",
  },
  // New 6 Testimonials
  {
    name: "Katherine Lewis",
    role: "Hospital Discharge Nurse",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    feedback:
      "I've worked alongside many caregivers, and Lena stands out. She listens, learns quickly, and genuinely cares about each patient’s unique needs.",
  },
  {
    name: "Michael Anderson",
    role: "Son of Elderly Parent",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    feedback:
      "Lena made my mom feel safe and valued. Her calm, reassuring manner made the transition to in-home care so much easier for our whole family.",
  },
  {
    name: "Patricia Young",
    role: "Neighbor & Friend",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    feedback:
      "Even outside of her job, Lena is the kind of person who notices when someone needs help. She’s a true blessing to our community.",
  },
  {
    name: "Christopher Bennett",
    role: "Stroke Recovery Patient",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    feedback:
      "Recovering from a stroke was frightening, but Lena’s patience and encouragement kept me moving forward. I’m walking again because of her dedication.",
  },
  {
    name: "Ashley Roberts",
    role: "Granddaughter of Patient",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    feedback:
      "When my grandmother’s health declined, Lena became part of our family. She treats her with respect and dignity every single day.",
  },
  {
    name: "Brian Cooper",
    role: "Long-Term Care Client",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
    feedback:
      "I’ve been under Lena’s care for almost a year now. She’s dependable, skilled, and has a great sense of humor that makes each day brighter.",
  },
];


export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 bg-white text-center px-4 md:px-10"
    >
      <h2 className="text-3xl font-bold mb-2">What Clients Say</h2>
      <p className="mb-6">
        Below are some heartfelt comments clients have said about my care
        and support services
      </p>

      <div className="relative">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{
            clickable: true,
          }}
          className="pb-16" // space for pagination
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index} className="h-full">
              {({ isActive }) => (
                <div
                  className={`flex flex-col justify-between h-full p-6 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-black text-white shadow-lg"
                      : "bg-white border border-gray-300 text-gray-800"
                  }`}
                >
                  <p className="text-base mb-6">{t.feedback}</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <h4 className="font-semibold">{t.name}</h4>
                      <p
                        className={`text-sm ${
                          isActive ? "text-gray-300" : "text-gray-500"
                        }`}
                      >
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CTA button further down */}
      <div className="mt-12">
        <Link
          to="contact"
          smooth={true}
          duration={600}
          offset={-70}
          className="bg-trust-blue border border-black text-black px-6 py-3 rounded-lg hover:bg-trust-navy transition font-medium cursor-pointer"
        >
          Contact Me Today
        </Link>
      </div>
    </section>
  );
}
