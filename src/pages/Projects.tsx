import React, { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import { ProjectCard } from '../components/ui/ProjectCard';

export const Projects: React.FC = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  
  const projects = [
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
    {
      name: 'Customer Portal',
      description: 'Self-service portal for clients to manage accounts',
      progress: 60,
      daysLeft: 15,
      teamSize: 4,
      category: 'Development',
      priority: 'high' as const,
    },
    {
      name: 'Brand Identity',
      description: 'Refreshed brand identity and guidelines for startup',
      progress: 90,
      daysLeft: 5,
      teamSize: 2,
      category: 'Design',
      priority: 'medium' as const,
    },
    {
      name: 'Sales Analytics Dashboard',
      description: 'Interactive dashboard for sales performance tracking',
      progress: 35,
      daysLeft: 25,
      teamSize: 3,
      category: 'Sales',
      priority: 'medium' as const,
    },
    {
      name: 'Product Launch',
      description: 'Go-to-market strategy for new software release',
      progress: 15,
      daysLeft: 60,
      teamSize: 6,
      category: 'Marketing',
      priority: 'high' as const,
    },
    {
      name: 'Internal Tools',
      description: 'Suite of internal tools for operational efficiency',
      progress: 50,
      daysLeft: 30,
      teamSize: 3,
      category: 'Development',
      priority: 'low' as const,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Projects</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Manage and track all your ongoing projects</p>
      </div>
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="relative w-full md:w-64">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full pl-10 pr-4 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white transition-colors"
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button 
            onClick={() => setFilterOpen(!filterOpen)}
            className="px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <Filter size={16} />
            Filters
          </button>
          
          <select className="px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="">Sort by</option>
            <option value="name">Name</option>
            <option value="date">Due Date</option>
            <option value="progress">Progress</option>
            <option value="priority">Priority</option>
          </select>
          
          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md text-sm transition-colors">
            New Project
          </button>
        </div>
      </div>
      
      {filterOpen && (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Category
            </label>
            <select className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="">All categories</option>
              <option value="design">Design</option>
              <option value="development">Development</option>
              <option value="marketing">Marketing</option>
              <option value="sales">Sales</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Priority
            </label>
            <select className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="">All priorities</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Status
            </label>
            <select className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="">All statuses</option>
              <option value="planning">Planning</option>
              <option value="progress">In Progress</option>
              <option value="review">Review</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Due Date
            </label>
            <select className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="">All dates</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
            </select>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {projects.map((project, index) => (
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
  );
};