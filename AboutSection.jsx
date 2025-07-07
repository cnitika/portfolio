import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Users, Award, Code, Zap } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    { icon: Users, number: '500+', label: 'Students Mentored', color: 'text-blue-500' },
    { icon: Calendar, number: '3+', label: 'Years Experience', color: 'text-purple-500' },
    { icon: Code, number: '50+', label: 'Projects Completed', color: 'text-green-500' },
    { icon: Award, number: '10+', label: 'Certifications', color: 'text-orange-500' }
  ];

  const highlights = [
    'Expert in DevOps practices and CI/CD pipeline automation',
    'Advanced AI/ML model development and deployment',
    'Streamlit application development and optimization',
    'Cloud infrastructure management and scaling',
    'Technical training and mentorship experience',
    'Open-source contributor and community builder'
  ];

  return (
    <section id="about" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driven by curiosity and passion for innovation, I transform complex technical challenges 
            into elegant, scalable solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <div className="space-y-6">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Zap className="mr-2 h-6 w-6 text-yellow-500" />
                  My Journey
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Based in <span className="inline-flex items-center text-foreground font-medium">
                    <MapPin className="mr-1 h-4 w-4" /> India
                  </span>, I'm a passionate technologist who believes in the power of automation 
                  and artificial intelligence to solve real-world problems.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  My expertise spans across DevOps engineering, AI development, and automation 
                  engineering, with a special focus on creating intuitive Streamlit applications 
                  that make complex data accessible to everyone.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm committed to continuous learning and sharing knowledge with the community, 
                  having mentored over 500 students and contributed to numerous open-source projects.
                </p>
              </CardContent>
            </Card>

            {/* Key Highlights */}
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4">Key Highlights</h3>
                <div className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{highlight}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center lg:text-left">Achievements & Impact</h3>
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-0">
                    <achievement.icon className={`h-8 w-8 mx-auto mb-3 ${achievement.color}`} />
                    <div className="text-3xl font-bold mb-2">{achievement.number}</div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Philosophy */}
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2 border-gradient-to-r from-blue-200 to-purple-200">
              <CardContent className="p-0">
                <h4 className="text-xl font-bold mb-3">My Philosophy</h4>
                <blockquote className="text-muted-foreground italic leading-relaxed">
                  "Technology should empower people, not complicate their lives. Every line of code 
                  I write, every system I design, and every solution I create is driven by the goal 
                  of making complex technology accessible and beneficial for everyone."
                </blockquote>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-sm">
                📧 cnitika040@gmail.com
              </Badge>
              <Badge variant="secondary" className="text-sm">
                📱 +91-881393711
              </Badge>
              <Badge variant="secondary" className="text-sm">
                📍 India
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

