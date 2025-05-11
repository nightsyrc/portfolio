import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { TechStack } from './components/TechStack';
import { CompanyCarousel } from './components/CompanyCarousel';
import { PersonalityCard } from './components/PersonalityCard';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <a href="#home" className="text-xl font-bold text-emerald-400">CM</a>
              <div className="hidden md:flex space-x-8">
                <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
                <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
                <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
                className="hover:text-emerald-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:your@email.com" className="hover:text-emerald-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hey, I'm <span className="text-emerald-400">Cristian</span> 👋
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              Building my future one line of code at a time.
            </p>
            <a href="#about" 
              className="inline-block px-8 py-3 bg-emerald-500 text-gray-900 font-medium rounded-lg
                hover:bg-emerald-400 transition-colors">
              Learn about me
            </a>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
              <div className="flex flex-col items-center space-y-6">
                <img 
                  src="/images/fsd_img_profile_pic.png" 
                  alt="Cristian Melendez"
                  className="w-32 h-32 rounded-full border-4 border-emerald-400 object-cover"
                />
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a results-driven technologist transitioning from years in enterprise SaaS and 
                  technical support into full-stack development. I've led escalations, API debugging, 
                  and infrastructure ops for high-growth platforms like 
                  <a href="https://www.coursedog.com/" target="_blank" rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline mx-1">Coursedog</a>,
                  <a href="https://www.paystand.com/" target="_blank" rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline mx-1">Paystand</a>, and
                  <a href="https://www.dalet.com/" target="_blank" rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline mx-1">Dalet</a>
                  — supporting clients like Stanford, Motorola, and the BBC.
                </p>
              </div>
            </motion.div>

            <TechStack />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-800/50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Companies I've Partnered With
            </h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
              From high-growth startups to established global enterprises, I've helped resolve complex 
              technical challenges and streamline operations. These experiences have sharpened my ability 
              to adapt quickly, collaborate cross-functionally, and deliver results in fast-paced environments.
            </p>
            <CompanyCarousel />
          </div>
        </section>

        {/* Personality Section */}
        <section id="personality" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Personality</h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
              I'm a curious, systems-driven thinker who thrives on solving real-world problems through 
              both logic and empathy. With an <span className="text-emerald-400">ENTP-T</span> personality, 
              I naturally challenge assumptions, ask better questions, and rapidly connect ideas across domains.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PersonalityCard
                icon="🧠"
                title="Problem Solver"
                description="Whether debugging an API or building new features, I'm driven by understanding the why, not just the how."
              />
              <PersonalityCard
                icon="🙋‍♂️"
                title="User-First Perspective"
                description="Years in technical support taught me how to anticipate user needs and design for real-world edge cases."
              />
              <PersonalityCard
                icon="🚀"
                title="Fast Learner"
                description="I actively seek feedback, experiment with new tools, and love pushing boundaries in development."
              />
              <PersonalityCard
                icon="🤝"
                title="Collaboration-Ready"
                description="I bring positive energy to teams, contribute proactively, and know how to listen just as much as I build."
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-800/50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900/50 rounded-lg overflow-hidden"
                >
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Study Plan Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">📚 Study Plan</h2>
            <p className="text-gray-300 mb-8">Check out my full study roadmap hosted on Notion:</p>
            <a
              href="https://www.notion.so/Fullstack-Engineer-Dev-Plan-1e1fb365b3df80e7b024cf848505d9c8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-emerald-500 text-gray-900 font-medium rounded-lg
                hover:bg-emerald-400 transition-colors"
            >
              🚀 View Study Plan on Notion
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your@email.com" 
              className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-gray-400">© 2024 Cristian Melendez. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const projects = [
  {
    title: "Dynamic Message Board",
    description: "Users can type and post messages live to the page.",
    image: "/images/fsd_img_3.webp",
  },
  {
    title: "Simple Portfolio",
    description: "A personal site with my resume and GitHub links.",
    image: "/images/fsd_img_4.jpg",
  },
  {
    title: "JS Clock",
    description: "A digital clock built purely with Javascript",
    image: "/images/fsd_img_5.jpg",
  },
];

export default App;