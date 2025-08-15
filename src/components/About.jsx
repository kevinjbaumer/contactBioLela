import React from "react";
import { motion } from "framer-motion";
import { scroller } from "react-scroll";

const About = () => {
  const scrollToSection = (id) => {
    scroller.scrollTo(id, {
      smooth: true,
      duration: 700,
      offset: -80, // offset for fixed header
    });
  };

  return (
    <section
      id="about"
      className="bg-white py-20 px-4 md:px-10 h-max flex items-center"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center h-[450px] w-full"
        >
          <img
            src="/lena_aboutbio.jpg"
            alt="About Lena"
            className="rounded-2xl shadow-lg object-cover object-top w-full h-auto max-w-md"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-trust-navy mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Hi, I’m <span className="font-semibold text-trust-blue">Lena Johnson Boost</span>, a
            Certified Nursing Assistant with over 10 years of experience providing
            compassionate care to elderly individuals and post-surgery recovery patients.
            My passion and goal is to continue to bring comfort, dignity, and peace of mind to every person I
            work with, ensuring they receive the highest standard of care.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Whether it’s assisting with daily activities, offering emotional support, or
            providing specialized recovery care, I approach my work with patience,
            empathy, and professionalism.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection("services")}
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-trust-navy transition-colors duration-200 font-medium"
            >
              My Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border border-trust-blue text-trust-blue px-6 py-3 rounded-lg hover:bg-trust-blue transition-colors duration-200 font-medium"
            >
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
