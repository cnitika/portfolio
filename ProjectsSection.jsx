import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, Github, Play, Code, Database, Bot, Terminal } from 'lucide-react';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'automation-gui',
      title: 'Python Automation GUI (Streamlit)',
      category: 'streamlit',
      description: 'A comprehensive all-in-one automation dashboard built with Streamlit, featuring Gmail automation, WhatsApp bot, Docker management, and AI chatbot integration.',
      longDescription: 'This project represents a complete automation ecosystem designed to streamline daily tasks and workflows. Built with Streamlit for an intuitive web interface, it integrates multiple automation tools including email management, messaging automation, container orchestration, and AI-powered assistance.',
      technologies: ['Python', 'Streamlit', 'Gmail API', 'WhatsApp API', 'Docker', 'AI/ML'],
      features: [
        'Gmail automation with custom templates and scheduling',
        'WhatsApp bot for automated messaging and responses',
        'Docker container management and monitoring',
        'AI chatbot integration with GPT-4',
        'Face swap functionality using computer vision',
        'System memory and performance monitoring',
        'Dark theme with gradient headers and animations'
      ],
      github: 'https://github.com/cnitika/python-automation-gui',
      demo: 'https://automation-gui-demo.streamlit.app',
      image: '/api/placeholder/600/400',
      impact: {
        users: '1000+',
        efficiency: '75%',
        automation: '50+'
      }
    },
    {
      id: 'api-bot',
      title: 'All-in-One API Bot',
      category: 'automation',
      description: 'A powerful command-line automation bot with a colorful menu-driven interface supporting WhatsApp, Email, SMS automation, web scraping, and face detection.',
      longDescription: 'This CLI-based automation bot provides a comprehensive suite of API integrations through an intuitive menu system. Built with Python and featuring colorful terminal output, it serves as a central hub for various automation tasks and API interactions.',
      technologies: ['Python', 'Colorama', 'APIs', 'CLI', 'Web Scraping', 'Computer Vision'],
      features: [
        'Colorful ASCII art banner and menu system',
        'WhatsApp automation with message scheduling',
        'Email automation with template support',
        'SMS automation and bulk messaging',
        'Gmail reader with filtering capabilities',
        'Web scraping with data extraction',
        'Instagram automation tools',
        'Face detection and recognition'
      ],
      github: 'https://github.com/cnitika/all-in-one-api-bot',
      demo: 'https://api-bot-demo.herokuapp.com',
      image: '/api/placeholder/600/400',
      impact: {
        apis: '15+',
        tasks: '100+',
        time_saved: '80%'
      }
    },
    {
      id: 'docker-linux-app',
      title: 'Docker + Linux Task Automation Web App',
      category: 'devops',
      description: 'An interactive web application for Docker and Linux command execution with real-time output, system monitoring, and terminal-style interface.',
      longDescription: 'This web application bridges the gap between complex command-line operations and user-friendly interfaces. It provides a secure, web-based terminal for Docker and Linux operations with real-time feedback and system monitoring capabilities.',
      technologies: ['Python', 'Streamlit', 'Docker', 'Linux', 'Subprocess', 'System Monitoring'],
      features: [
        'Terminal-style interface with syntax highlighting',
        'Real-time command execution and output',
        'Docker container management dashboard',
        'Linux system administration tools',
        'File operations with drag-and-drop support',
        'Network tools and diagnostics',
        'Process management and monitoring',
        'System statistics and resource usage'
      ],
      github: 'https://github.com/cnitika/docker-linux-automation',
      demo: 'https://docker-linux-app.streamlit.app',
      image: '/api/placeholder/600/400',
      impact: {
        commands: '200+',
        uptime: '99.9%',
        users: '500+'
      }
    },
    {
      id: 'breakup-predictor',
      title: 'AI Breakup Predictor (Sus-o-Meter 3000)',
      category: 'ai',
      description: 'A humorous yet sophisticated AI application that analyzes relationship patterns using chat data, behavioral analysis, and machine learning algorithms.',
      longDescription: 'The Sus-o-Meter 3000 combines entertainment with advanced data analysis to provide insights into relationship dynamics. Using natural language processing and sentiment analysis, it evaluates communication patterns and provides predictive insights with a touch of humor.',
      technologies: ['Python', 'Streamlit', 'NLP', 'Sentiment Analysis', 'Plotly', 'Machine Learning'],
      features: [
        'Chat pattern analysis with sentiment scoring',
        'Behavioral pattern recognition and tracking',
        'Risk assessment with AI-powered predictions',
        'Interactive data visualizations and charts',
        'Meme therapy generator for emotional support',
        'Calendar-based relationship timeline reports',
        'Animated danger/safe zone indicators',
        'File upload support for chat exports'
      ],
      github: 'https://github.com/cnitika/sus-o-meter-3000',
      demo: 'https://sus-o-meter.streamlit.app',
      image: '/api/placeholder/600/400',
      impact: {
        accuracy: '85%',
        users: '2000+',
        laughs: 'Countless'
      }
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: Code },
    { id: 'streamlit', label: 'Streamlit Apps', icon: Database },
    { id: 'automation', label: 'Automation', icon: Bot },
    { id: 'devops', label: 'DevOps', icon: Terminal },
    { id: 'ai', label: 'AI/ML', icon: Bot }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const ProjectCard = ({ project }) => (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
      <CardHeader className="pb-4">
        <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg mb-4 flex items-center justify-center">
          <div className="text-6xl opacity-50">
            {project.category === 'streamlit' && <Database />}
            {project.category === 'automation' && <Bot />}
            {project.category === 'devops' && <Terminal />}
            {project.category === 'ai' && <Bot />}
          </div>
        </div>
        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
          {project.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{project.technologies.length - 3} more
            </Badge>
          )}
        </div>

        <div className="flex space-x-2">
          <Button size="sm" variant="outline" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </a>
          </Button>
          <Button 
            size="sm" 
            variant="ghost"
            onClick={() => setSelectedProject(project)}
          >
            <Play className="mr-2 h-4 w-4" />
            Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <Button variant="ghost" onClick={onClose}>×</Button>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-8xl opacity-50">
                    {project.category === 'streamlit' && <Database />}
                    {project.category === 'automation' && <Bot />}
                    {project.category === 'devops' && <Terminal />}
                    {project.category === 'ai' && <Bot />}
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {Object.entries(project.impact).map(([key, value]) => (
                    <div key={key} className="text-center p-3 bg-accent/10 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key.replace('_', ' ')}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-muted-foreground mb-4">{project.longDescription}</p>
                
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-1 mb-4">
                  {project.features.map((feature, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <h4 className="font-semibold mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <Button asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions that showcase the intersection of automation, AI, and user experience
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="flex items-center space-x-2"
            >
              <category.icon className="h-4 w-4" />
              <span>{category.label}</span>
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Project Modal */}
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
              <p className="text-muted-foreground mb-6">
                Check out my GitHub for additional projects and contributions to the open-source community.
              </p>
              <Button size="lg" asChild>
                <a href="https://github.com/cnitika" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View All Projects on GitHub
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

