import { motion } from 'framer-motion';

interface PersonalityCardProps {
  icon: string;
  title: string;
  description: string;
}

export function PersonalityCard({ icon, title, description }: PersonalityCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-emerald-400/50 transition-colors"
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-emerald-400">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}