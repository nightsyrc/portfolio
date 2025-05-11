import React from 'react';
import { MoreVertical } from 'lucide-react';
import { ProgressBar } from './ProgressBar';

interface ProjectCardProps {
  name: string;
  description: string;
  progress: number;
  daysLeft: number;
  teamSize: number;
  category: string;
  priority: 'low' | 'medium' | 'high';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  progress,
  daysLeft,
  teamSize,
  category,
  priority,
}) => {
  const getPriorityColor = () => {
    switch (priority) {
      case 'low':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
      case 'medium':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
      case 'high':
        return 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  const getCategoryColor = () => {
    switch (category.toLowerCase()) {
      case 'design':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'development':
        return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300';
      case 'marketing':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'sales':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-medium text-gray-900 dark:text-white">{name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{description}</p>
        </div>
        <button className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
          <MoreVertical size={16} />
        </button>
      </div>
      
      <div className="mb-4">
        <ProgressBar value={progress} max={100} color="indigo" />
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        <span className={`text-xs px-2.5 py-1 rounded-full ${getCategoryColor()}`}>
          {category}
        </span>
        <span className={`text-xs px-2.5 py-1 rounded-full ${getPriorityColor()}`}>
          {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
        </span>
      </div>
      
      <div className="flex justify-between text-sm">
        <div className="text-gray-500 dark:text-gray-400">
          <span className="font-medium text-gray-900 dark:text-white">{daysLeft}</span> days left
        </div>
        <div className="text-gray-500 dark:text-gray-400">
          <span className="font-medium text-gray-900 dark:text-white">{teamSize}</span> team members
        </div>
      </div>
    </div>
  );
};