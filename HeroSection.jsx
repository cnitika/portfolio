import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import profileImage from '../assets/profile.png';

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // Particle animation setup
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const heroElement = heroRef.current;
    
    if (heroElement) {
      heroElement.appendChild(canvas);
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.zIndex = '1';
      canvas.style.pointerEvents = 'none';
      
      const resizeCanvas = () => {
        canvas.width = heroElement.offsetWidth;
        canvas.height = heroElement.offsetHeight;
      };
      
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);
      
      // Particle system
      const particles = [];
      const particleCount = 50;
      
      class Particle {
        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.vx = (Math.random() - 0.5) * 0.5;
          this.vy = (Math.random() - 0.5) * 0.5;
          this.size = Math.random() * 2 + 1;
          this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
          this.x += this.vx;
          this.y += this.vy;
          
          if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
          if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        
        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
          ctx.fill();
        }
      }
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
      
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
          particle.update();
          particle.draw();
        });
        
        requestAnimationFrame(animate);
      };
      
      animate();
      
      return () => {
        window.removeEventListener('resize', resizeCanvas);
        if (heroElement.contains(canvas)) {
          heroElement.removeChild(canvas);
        }
      };
    }
  }, []);

  const handleDownloadResume = () => {
    // Create a simple resume download link
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Nitika_Kalirawna_Resume.pdf';
    link.click();
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/cnitika', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/nitika-kalirawna', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:cnitika040@gmail.com', label: 'Email' },
    { icon: Phone, href: 'tel:+91-881393711', label: 'Phone' }
  ];

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/10"
    >
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                  Nitika
                </span>
                <br />
                <span className="text-foreground">Kalirawna</span>
              </h1>
              <div className="text-xl lg:text-2xl text-muted-foreground mb-6">
                <div className="typewriter">
                  <span className="text-blue-500 font-semibold">DevOps Engineer</span> | 
                  <span className="text-purple-500 font-semibold"> AI Developer</span> | 
                  <span className="text-pink-500 font-semibold"> Automation Engineer</span> | 
                  <span className="text-green-500 font-semibold"> Streamlit Creator</span>
                </div>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Passionate about building innovative solutions that bridge the gap between 
                cutting-edge technology and real-world applications. Specializing in DevOps, 
                AI development, and automation engineering.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleDownloadResume}
                className="border-2 hover:bg-accent"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-accent hover:scale-110 transition-all duration-200"
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-600 shadow-2xl hover:scale-105 transition-transform duration-300">
                <img 
                  src={profileImage} 
                  alt="Nitika Kalirawna" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce delay-300"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-pink-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-foreground/30 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

