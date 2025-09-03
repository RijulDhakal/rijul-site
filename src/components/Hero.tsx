import React from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Youtube, Twitter } from "lucide-react";
import profileImage from "../assets/rijul.jpg";

const Hero = () => {
  const dashes = Array.from({ length: 24 }); // number of dashes

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20 bg-gradient-to-br from-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side */}
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-gray-300 text-lg mb-8 font-mono font-bold tracking-wide">
              UI/UX Designer & Developer
            </p>
            <h1 className="text-5xl md:text-7xl font-bold font-mono text-white mb-4 leading-tight tracking-wide">
              Hello I'm
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold font-mono text-[#00ff99] mb-12 leading-tight tracking-wide">
              Rijul Dhakal
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-2xl font-mono">
              I excel at designing elegant digital experiences and developing
              modern web applications. I combine UI/UX creativity with strong
              frontend & backend skills to deliver impactful projects.
            </p>

            {/* Buttons and Social Links */}
            <div className="flex flex-col sm:flex-row items-start gap-8 mb-16">
              {/* Download CV Button */}
              <motion.a
                href="/Rijul-CV.pdf"
                download
                className="bg-transparent border-2 border-[#00ff99] hover:bg-[#00ff99] text-[#00ff99] hover:text-black px-8 py-4 rounded-full font-mono font-bold flex items-center gap-3 transition-all duration-300 tracking-wide"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(0, 255, 153, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                DOWNLOAD CV
              </motion.a>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {[
                  { icon: Github, href: "https://github.com/RijulDhakal" },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/rijul-dhakal-00592b291/",
                  },
                  { icon: Youtube, href: "https://www.youtube.com/@DesignWithRijul" },
                  { icon: Twitter, href: "https://x.com/DhakalRijul" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my profile on ${
                      social.icon.displayName || "social media"
                    }`}
                    className="w-14 h-14 border-2 border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:text-[#00ff99] hover:border-[#00ff99] transition-all duration-300"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 15px rgba(0, 255, 153, 0.3)",
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={22} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side */}
          <motion.div
            className="flex justify-center lg:justify-end items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
              {/* Rotating Dashes */}
              <motion.div
                className="absolute w-full h-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {dashes.map((_, i) => {
                  const angle = (i / dashes.length) * 360;
                  return (
                    <div
                      key={i}
                      className="absolute bg-[#00ff99] rounded-full"
                      style={{
                        width: "6px",
                        height: "28px",
                        transform: `rotate(${angle}deg) translateY(-200px)`,
                        transformOrigin: "center",
                      }}
                    />
                  );
                })}
              </motion.div>

              {/* Profile Image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-800 z-10">
                <motion.img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
