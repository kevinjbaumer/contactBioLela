import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="home" className="pt-20 bg-white min-h-screen flex items-center">
      <div className="px-4 sm:px-6 lg:px-8 md:py-12 py-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <div className="mb-12">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-trust-navy mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Lena Johnson Boost
            </motion.h1>
            <motion.h2
              className="text-xl text-trust-blue font-medium mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Professional Caregiver | Elderly Care Specialist | Recovery Support | CNA
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              10 plus years of experience providing compassionate, professional care
              for elderly individuals and post-surgery recovery support.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="h-5 w-5 text-trust-blue" />
                <span>+1 (339) 883 8399</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="h-5 w-5 text-trust-blue" />
                <span>lenapjboost@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-5 w-5 text-trust-blue" />
                <span>DHL HART Texas United States</span>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            className="bg-gray-50 p-8 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-trust-blue">10 plus</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-trust-blue">CNA</div>
                <div className="text-sm text-gray-600">Certified</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-trust-blue">9hrs/5days</div>
                <div className="text-sm text-gray-600">Emergency Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-trust-blue">60+</div>
                <div className="text-sm text-gray-600">Consultations</div>
              </div>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="contact"
                smooth={true}
                duration={600}
                offset={-70}
                className="bg-trust-blue border border-black text-black px-6 py-3 rounded-lg hover:bg-trust-navy transition font-medium cursor-pointer"
              >
                Contact Me
              </Link>
              <button
              onClick={() => scrollToSection("services")}
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-trust-navy transition-colors duration-200 font-medium"
            >
              Care Services
            </button>
              
            </div>
          </motion.div>
        </motion.div>
        <div className="flex items-center h-[500px] md:h-[600px] w-full">
          <img src="/lena.jpg" alt="" className="object-cover object-top rounded-2xl w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
