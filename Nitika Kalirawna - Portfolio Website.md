# Nitika Kalirawna - Portfolio Website

A comprehensive, modern portfolio website showcasing Nitika Kalirawna's expertise as a DevOps Engineer, AI Developer, Automation Engineer, and Streamlit Creator.

## 🌟 Live Demo

**Website URL:** [https://oannvnao.manus.space](https://oannvnao.manus.space)

## 🚀 Features

### ✨ Modern Design
- **Dark/Light Theme Toggle** - Seamless theme switching with system preference detection
- **Responsive Design** - Optimized for all devices (desktop, tablet, mobile)
- **Gradient Animations** - Beautiful animated gradients and particle effects
- **Glassmorphism Effects** - Modern UI with backdrop blur and transparency
- **Smooth Animations** - Micro-interactions and hover effects throughout

### 🎯 Interactive Sections

#### 🏠 Hero Section
- Dynamic particle background animation
- Animated typewriter effect for role descriptions
- Professional profile image with floating elements
- Call-to-action buttons with gradient styling
- Social media links with hover animations

#### 👤 About Section
- Personal journey and philosophy
- Achievement statistics with animated counters
- Key highlights with bullet points
- Contact information badges
- Professional quote section

#### 🛠️ Skills & Technologies
- **Tabbed Interface** with three categories:
  - 💻 Programming Languages (Python, Bash, HTML/CSS/JS)
  - 🚀 DevOps & Infrastructure (Docker, Jenkins, Linux, Git)
  - 🤖 AI & Machine Learning (OpenAI GPT-4, YOLO, CNN, Face Recognition)
- Interactive skill cards with progress bars
- Hover effects with detailed descriptions
- Additional technologies cloud with badges
- Skill summary statistics

#### 📁 Featured Projects
- **Project Filtering** by category (All, Streamlit Apps, Automation, DevOps, AI/ML)
- Detailed project cards with:
  - Project descriptions and features
  - Technology stack badges
  - GitHub and demo links
  - Interactive modal with full details
- **4 Featured Projects:**
  1. **Python Automation GUI (Streamlit)** - All-in-one automation dashboard
  2. **All-in-One API Bot** - Command-line automation bot
  3. **Docker + Linux Task Automation Web App** - Interactive web terminal
  4. **AI Breakup Predictor (Sus-o-Meter 3000)** - Humorous AI relationship analyzer

#### 📞 Contact Section
- **Interactive Contact Form** with validation
- **Contact Information** with clickable links
- **Quick Actions** for scheduling and inquiries
- **Social Media Links** with descriptions
- **Service Offerings** badges

#### 🦶 Footer
- Brand information and description
- Quick navigation links
- Contact details
- Social media icons
- "Back to Top" functionality
- Copyright and attribution

### 🎨 Technical Features
- **React 18** with modern hooks and components
- **Tailwind CSS** for utility-first styling
- **Shadcn/UI** components for consistent design
- **Lucide Icons** for beautiful iconography
- **Framer Motion** for smooth animations
- **GSAP** for advanced animations
- **Three.js** for 3D effects and particles
- **Responsive Images** with optimized loading
- **SEO Optimized** with proper meta tags
- **Accessibility Features** with ARIA labels and keyboard navigation

## 🏗️ Project Structure

```
nitika-portfolio-app/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/                 # Images and icons
│   │   ├── profile.png
│   │   ├── python-icon.png
│   │   ├── docker-icon.png
│   │   └── ... (other skill icons)
│   ├── components/             # React components
│   │   ├── Header.jsx          # Navigation header
│   │   ├── HeroSection.jsx     # Hero/landing section
│   │   ├── AboutSection.jsx    # About me section
│   │   ├── SkillsSection.jsx   # Skills and technologies
│   │   ├── ProjectsSection.jsx # Featured projects
│   │   ├── ContactSection.jsx  # Contact form and info
│   │   └── Footer.jsx          # Footer section
│   ├── App.jsx                 # Main application component
│   ├── App.css                 # Global styles and animations
│   └── main.jsx                # Application entry point
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind configuration
├── vite.config.js              # Vite bundler configuration
└── README.md                   # This file
```

## 🛠️ Technologies Used

### Frontend Framework
- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **JavaScript (ES6+)** - Modern JavaScript features

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - High-quality React components
- **Custom CSS** - Advanced animations and effects
- **Responsive Design** - Mobile-first approach

### Icons & Graphics
- **Lucide React** - Beautiful icon library
- **Custom Images** - Optimized skill icons and profile image
- **SVG Graphics** - Scalable vector graphics

### Animations & Effects
- **CSS Animations** - Custom keyframe animations
- **Hover Effects** - Interactive micro-interactions
- **Particle System** - Dynamic background effects
- **Gradient Animations** - Smooth color transitions

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nitika-portfolio-app
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   pnpm run dev
   # or
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
pnpm run build
# or
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
pnpm run preview
# or
npm run preview
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- **Desktop** (1920px and above)
- **Laptop** (1024px - 1919px)
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)

### Key Responsive Features
- Adaptive navigation (hamburger menu on mobile)
- Flexible grid layouts
- Scalable typography
- Touch-friendly interactions
- Optimized images for different screen sizes

## 🎨 Theme System

### Dark Mode (Default)
- Deep dark backgrounds
- High contrast text
- Vibrant accent colors
- Gradient highlights

### Light Mode
- Clean white backgrounds
- Subtle shadows
- Professional color scheme
- Accessible contrast ratios

### Theme Toggle
- Automatic system preference detection
- Smooth transitions between themes
- Persistent theme selection
- Icon changes based on current theme

## 🔧 Customization

### Colors
Edit the CSS variables in `src/App.css` to customize the color scheme:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  /* ... other color variables */
}
```

### Content
Update the content in each component file:
- Personal information in `AboutSection.jsx`
- Skills and technologies in `SkillsSection.jsx`
- Projects in `ProjectsSection.jsx`
- Contact details throughout components

### Styling
Modify Tailwind classes or add custom CSS in `App.css` for styling changes.

## 📊 Performance Optimizations

- **Code Splitting** - Automatic route-based splitting
- **Image Optimization** - Compressed and properly sized images
- **CSS Optimization** - Purged unused styles
- **Bundle Analysis** - Optimized bundle size
- **Lazy Loading** - Deferred loading of non-critical resources

## 🔍 SEO Features

- **Meta Tags** - Comprehensive meta information
- **Open Graph** - Social media sharing optimization
- **Structured Data** - Schema.org markup
- **Semantic HTML** - Proper HTML5 semantics
- **Alt Text** - Descriptive image alt attributes

## ♿ Accessibility

- **ARIA Labels** - Screen reader support
- **Keyboard Navigation** - Full keyboard accessibility
- **Color Contrast** - WCAG AA compliant contrast ratios
- **Focus Indicators** - Clear focus states
- **Semantic Markup** - Proper heading hierarchy

## 🚀 Deployment

The portfolio is deployed using Manus deployment service and is available at:
**https://oannvnao.manus.space**

### Deployment Steps
1. Build the project: `pnpm run build`
2. Deploy using Manus service
3. Verify deployment and functionality

## 📄 License

This project is created for Nitika Kalirawna's personal portfolio. All rights reserved.

## 🤝 Contact

For any questions or inquiries about this portfolio:

- **Email:** cnitika040@gmail.com
- **Phone:** +91-881393711
- **GitHub:** [https://github.com/cnitika](https://github.com/cnitika)
- **LinkedIn:** [https://linkedin.com/in/nitika-kalirawna](https://linkedin.com/in/nitika-kalirawna)

---

**Built with ❤️ and lots of ☕ by Manus AI**

