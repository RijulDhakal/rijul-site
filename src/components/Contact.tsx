import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, Linkedin, Facebook, Github, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all fields.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('https://rijul-site.vercel.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message
        });
        // Clear form
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, threshold: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-6">
            Get In <span className="text-[#00ff99]">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono">
            Ready to work together? Let's create something amazing. Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, threshold: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-semibold font-mono text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <motion.div
                  className="flex items-center gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-[#00ff99]/10 rounded-lg flex items-center justify-center text-[#00ff99]">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-white font-medium font-mono">Phone</p>
                    <p className="text-gray-400 font-mono">+977 9746254793</p>
                  </div>
                </motion.div>
                
                <motion.div
                  className="flex items-center gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-[#00ff99]/10 rounded-lg flex items-center justify-center text-[#00ff99]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-white font-medium font-mono">Email</p>
                    <p className="text-gray-400 font-mono">rijuldhakal95@gmail.com</p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div>
              <h4 className="text-white font-semibold font-mono mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, href: 'https://www.instagram.com/rijuldhakal_95/' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/rijul-dhakal-00592b291/' },
                  { icon: Facebook, href: 'https://www.facebook.com/rijul.dhakal' },
                  { icon: Github, href: 'https://github.com/RijulDhakal' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#00ff99] hover:bg-[#00ff99]/10 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: '0 0 20px rgba(0, 255, 153, 0.3)'
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            className="bg-gray-900/50 rounded-xl p-8 border border-gray-800"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, threshold: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold font-mono text-white mb-6">Send a Message</h3>
            
            {/* Status Messages */}
            {submitStatus.type && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-900/30 border border-green-500/30 text-green-400' 
                    : 'bg-red-900/30 border border-red-500/30 text-red-400'
                }`}
              >
                {submitStatus.type === 'success' ? (
                  <CheckCircle size={20} />
                ) : (
                  <AlertCircle size={20} />
                )}
                <span className="font-mono text-sm">{submitStatus.message}</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div whileHover={{ scale: 1.02 }}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 font-mono focus:outline-none focus:border-[#00ff99] focus:shadow-lg focus:shadow-[#00ff99]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.02 }}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 font-mono focus:outline-none focus:border-[#00ff99] focus:shadow-lg focus:shadow-[#00ff99]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.02 }}>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 font-mono focus:outline-none focus:border-[#00ff99] focus:shadow-lg focus:shadow-[#00ff99]/20 transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                ></textarea>
              </motion.div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#00ff99] hover:bg-[#00ff99]/90 text-black px-6 py-3 rounded-lg font-semibold font-mono transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                whileHover={{ 
                  scale: isSubmitting ? 1 : 1.05,
                  boxShadow: '0 0 30px rgba(0, 255, 153, 0.4)'
                }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              >
                {isSubmitting ? (
                  <>
                    <Loader size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
