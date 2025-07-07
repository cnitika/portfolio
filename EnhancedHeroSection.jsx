import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Download, ArrowDown } from 'lucide-react';
import { gsap } from 'gsap';
import TypewriterEffect from '../animations/TypewriterEffect';
import FloatingElements from '../animations/FloatingElements';
import InteractiveCard from '../3d/InteractiveCard';
import profileImage from '../../assets/profile.png';

const EnhancedHeroSection = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const particlesRef = useRef(null);

  const roles = [
    "DevOps Engineer",
    "AI Developer", 
    "Automation Engineer",
    "Streamlit Creator"
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/cnitika", label: "GitHub", color: "hover:text-gray-400" },
    { icon: Linkedin, href: "https://linkedin.com/in/nitika-kalirawna", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Mail, href: "mailto:cnitika040@gmail.com", label: "Email", color: "hover:text-green-400" },
    { icon: Phone, href: "tel:+91-881393711", label: "Phone", color: "hover:text-purple-400" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate profile image with floating effect
      gsap.to(imageRef.current, {
        y: -20,
        duration: 3,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true
      });

      // Create floating particles
      const particles = [];
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-1 h-1 bg-purple-500/30 rounded-full';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particlesRef.current?.appendChild(particle);
        particles.push(particle);

        gsap.to(particle, {
          y: -100,
          x: Math.random() * 200 - 100,
          opacity: 0,
          duration: Math.random() * 3 + 2,
          repeat: -1,
          delay: Math.random() * 2
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: { duration: 0.3 }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
    >
      {/* Animated Background */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none" />
      <FloatingElements />
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <span className="block text-foreground">Hi, I'm</span>
                <span className="block gradient-text animate-gradient">
                  Nitika Kalirawna
                </span>
              </motion.h1>
              
              <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground min-h-[2em]">
                <TypewriterEffect 
                  texts={roles}
                  speed={100}
                  deleteSpeed={50}
                  delayBetweenTexts={2000}
                  className="font-semibold"
                />
              </div>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              Passionate about building innovative solutions that bridge the gap between 
              cutting-edge technology and real-world applications. Specializing in DevOps, 
              AI development, and automation engineering.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={scrollToProjects}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View Projects</span>
                <ArrowDown size={20} />
              </motion.button>
              
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-center lg:justify-start space-x-6"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: 0.8 + index * 0.1 }
                    }}
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <InteractiveCard className="w-80 h-80 sm:w-96 sm:h-96">
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <motion.img
                  ref={imageRef}
                  src={profileImage}
                  alt="Nitika Kalirawna"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-blue-500/20" />
                
                {/* Floating badges */}
                <motion.div
                  className="absolute top-4 right-4 px-3 py-1 bg-green-500/90 text-white text-sm rounded-full font-semibold"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Available for hire
                </motion.div>
                
                <motion.div
                  className="absolute bottom-4 left-4 px-3 py-1 bg-purple-500/90 text-white text-sm rounded-full font-semibold"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  500+ Students Mentored
                </motion.div>
              </div>
            </InteractiveCard>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.2 }}
        >
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedHeroSection;

