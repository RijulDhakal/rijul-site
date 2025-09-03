import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const stats = [
    { number: 3, label: 'Years of\nExperience', suffix: '' },
    { number: 10, label: 'Projects\nCompleted', suffix: '+' },
    { number: 8, label: 'Technologies\nMastered', suffix: '' },
    { number: 50, label: 'Code\nCommits', suffix: '+' }
  ];

  const CountUpAnimation = ({ target, suffix = '', duration = 2 }: { target: number; suffix?: string; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isInView) return;

      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * target);
        
        setCount(currentCount);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, [target, duration, isInView]);

    return (
      <span className="tabular-nums">
        {count}{suffix}
      </span>
    );
  };

  return (
    <section id="stats" className="py-16 px-6 lg:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-left group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4">
                <motion.h3
                  className="text-6xl md:text-7xl font-bold font-mono text-white group-hover:text-[#00ff99] transition-colors duration-300 tracking-wide"
                  whileHover={{ 
                    textShadow: '0 0 20px rgba(0, 255, 153, 0.5)' 
                  }}
                >
                  <CountUpAnimation target={stat.number} suffix={stat.suffix} duration={2 + index * 0.2} />
                </motion.h3>
              </div>
              <p className="text-gray-400 text-base font-mono font-bold whitespace-pre-line tracking-wide leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;