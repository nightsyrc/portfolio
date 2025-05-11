import React from 'react';
import { ArrowRight, BarChart, DollarSign, ShoppingCart, Users } from 'lucide-react';
import { StatCard } from '../components/ui/StatCard';
import { ProjectCard } from '../components/ui/ProjectCard';

export const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Total Revenue', value: '$45,231', change: 12.5, icon: DollarSign, color: 'indigo' },
    { title: 'New Customers', value: '3,452', change: 5.2, icon: Users, color: 'emerald' },
    { title: 'Active Projects', value: '12', change: -2.3, icon: BarChart, color: 'amber' },
    { title: 'Pending Orders', value: '45', change: 8.1, icon: ShoppingCart, color: 'rose' },
  ];

  const recentProjects = [
    {
      name: 'Website Redesign',
      description: 'New responsive website for client XYZ Corp',
      progress: 75,
      daysLeft: 12,
      teamSize: 5,
      category: 'Design',
      priority: 'high' as const,
    },
    {
      name: 'Mobile App Development',
      description: 'Cross-platform app for tracking fitness activities',
      progress: 45,
      daysLeft: 30,
      teamSize: 3,
      category: 'Development',
      priority: 'medium' as const,
    },
    {
      name: 'Marketing Campaign',
      description: 'Q3 marketing campaign for new product launch',
      progress: 20,
      daysLeft: 45,
      teamSize: 2,
      category: 'Marketing',
      priority: 'low' as const,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Welcome back, here's an overview of your workspace</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
            color={stat.color}
          />
        ))}
      </div>
      
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Recent Projects</h2>
          <button className="flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
            View all
            <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentProjects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              progress={project.progress}
              daysLeft={project.daysLeft}
              teamSize={project.teamSize}
              category={project.category}
              priority={project.priority}
            />
          ))}
        </div>
      </div>
    </div>
  );
};