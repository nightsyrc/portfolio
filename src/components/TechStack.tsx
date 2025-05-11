import { motion } from 'framer-motion';

const technologies = [
  { name: 'HTML5', icon: '/images/html5Logo.png' },
  { name: 'CSS3', icon: '/images/cssLogo.png' },
  { name: 'JavaScript', icon: '/images/jsLogo.png' },
  { name: 'Node.js', icon: '/images/nodeJs.png' },
  { name: 'SQL', icon: '/images/sqlLogo.png' },
  { name: 'React', icon: '/images/reactLogo.png' },
  { name: 'Express', icon: '/images/expressLogo.png' },
];

export function TechStack() {
  return (
    <div className="py-12">
      <h3 className="text-2xl font-semibold text-center mb-8">Tech Stack</h3>
      <div className="grid grid-cols-3 md:grid-cols-7 gap-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-2 hover:bg-gray-700 transition-colors">
              <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
            </div>
            <span className="text-sm text-gray-400">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}