import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Import skill icons
import pythonIcon from '../assets/python-icon.png';
import bashIcon from '../assets/bash-icon.png';
import htmlCssJsIcon from '../assets/html-css-js-icon.jpg';
import dockerIcon from '../assets/docker-icon.png';
import jenkinsIcon from '../assets/jenkins-icon.png';
import linuxIcon from '../assets/linux-icon.png';
import gitIcon from '../assets/git-icon.png';
import gpt4Icon from '../assets/gpt4-icon.jpg';
import yoloIcon from '../assets/yolo-icon.png';
import cnnIcon from '../assets/cnn-icon.png';
import faceRecognitionIcon from '../assets/face-recognition-icon.jpg';

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = {
    programming: {
      title: 'Programming Languages',
      icon: '💻',
      skills: [
        { name: 'Python', level: 95, icon: pythonIcon, description: 'Advanced automation, AI/ML, and web development' },
        { name: 'Bash', level: 80, icon: bashIcon, description: 'Shell scripting and system automation' },
        { name: 'HTML/CSS/JS', level: 90, icon: htmlCssJsIcon, description: 'Modern web development and UI/UX' }
      ]
    },
    devops: {
      title: 'DevOps & Infrastructure',
      icon: '🚀',
      skills: [
        { name: 'Docker', level: 95, icon: dockerIcon, description: 'Containerization and microservices architecture' },
        { name: 'Jenkins', level: 75, icon: jenkinsIcon, description: 'CI/CD pipeline automation and deployment' },
        { name: 'Linux', level: 90, icon: linuxIcon, description: 'System administration and server management' },
        { name: 'Git', level: 90, icon: gitIcon, description: 'Version control and collaborative development' }
      ]
    },
    ai: {
      title: 'AI & Machine Learning',
      icon: '🤖',
      skills: [
        { name: 'OpenAI GPT-4', level: 90, icon: gpt4Icon, description: 'Advanced AI integration and prompt engineering' },
        { name: 'YOLO', level: 75, icon: yoloIcon, description: 'Object detection and computer vision' },
        { name: 'CNN', level: 75, icon: cnnIcon, description: 'Deep learning and neural networks' },
        { name: 'Face Recognition', level: 85, icon: faceRecognitionIcon, description: 'Biometric systems and identity verification' }
      ]
    }
  };

  const SkillCard = ({ skill, category }) => (
    <Card 
      className="p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
      onMouseEnter={() => setHoveredSkill(`${category}-${skill.name}`)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      <CardContent className="p-0">
        <div className="flex items-center space-x-4 mb-3">
          <div className="w-12 h-12 rounded-lg overflow-hidden bg-accent/20 flex items-center justify-center">
            <img 
              src={skill.icon} 
              alt={skill.name} 
              className="w-8 h-8 object-contain"
            />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-lg">{skill.name}</h4>
            <div className="flex items-center space-x-2">
              <Progress value={skill.level} className="flex-1 h-2" />
              <Badge variant="secondary" className="text-xs">
                {skill.level}%
              </Badge>
            </div>
          </div>
        </div>
        
        {hoveredSkill === `${category}-${skill.name}` && (
          <div className="mt-3 p-3 bg-accent/10 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm text-muted-foreground">{skill.description}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );

  const additionalSkills = [
    'Streamlit', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Azure', 
    'Kubernetes', 'Terraform', 'Ansible', 'Prometheus', 'Grafana', 'ELK Stack',
    'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenCV'
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable, and intelligent solutions
          </p>
        </div>

        <Tabs defaultValue="programming" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {Object.entries(skillCategories).map(([key, category]) => (
              <TabsTrigger key={key} value={key} className="text-sm">
                <span className="mr-2">{category.icon}</span>
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(skillCategories).map(([key, category]) => (
            <TabsContent key={key} value={key}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <span className="mr-3 text-3xl">{category.icon}</span>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.skills.map((skill) => (
                      <SkillCard 
                        key={skill.name} 
                        skill={skill} 
                        category={key}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Additional Skills Cloud */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-sm py-2 px-4 hover:bg-accent hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Skill Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20">
            <CardContent className="p-0">
              <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-lg font-semibold mb-1">Programming Languages</div>
              <div className="text-sm text-muted-foreground">Proficient in multiple paradigms</div>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20">
            <CardContent className="p-0">
              <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-lg font-semibold mb-1">DevOps Tools</div>
              <div className="text-sm text-muted-foreground">End-to-end automation expertise</div>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20">
            <CardContent className="p-0">
              <div className="text-4xl font-bold text-green-600 mb-2">10+</div>
              <div className="text-lg font-semibold mb-1">AI/ML Frameworks</div>
              <div className="text-sm text-muted-foreground">Cutting-edge AI solutions</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

