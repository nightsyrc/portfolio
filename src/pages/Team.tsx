import React from 'react';
import { Search } from 'lucide-react';
import { TeamMemberCard } from '../components/ui/TeamMemberCard';

export const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Product Designer',
      avatarUrl: 'https://images.pexels.com/photos/3772509/pexels-photo-3772509.jpeg?auto=compress&cs=tinysrgb&w=150',
      status: 'online' as const,
      stats: {
        projects: 8,
        tasks: 24,
        completed: 18,
      },
    },
    {
      name: 'Michael Chen',
      role: 'Full-Stack Developer',
      avatarUrl: 'https://images.pexels.com/photos/3785083/pexels-photo-3785083.jpeg?auto=compress&cs=tinysrgb&w=150',
      status: 'offline' as const,
      stats: {
        projects: 5,
        tasks: 16,
        completed: 12,
      },
    },
    {
      name: 'Emily Davis',
      role: 'Marketing Specialist',
      avatarUrl: 'https://images.pexels.com/photos/3756682/pexels-photo-3756682.jpeg?auto=compress&cs=tinysrgb&w=150',
      status: 'away' as const,
      stats: {
        projects: 6,
        tasks: 18,
        completed: 15,
      },
    },
    {
      name: 'James Wilson',
      role: 'Frontend Developer',
      avatarUrl: 'https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=150',
      status: 'online' as const,
      stats: {
        projects: 4,
        tasks: 12,
        completed: 9,
      },
    },
    {
      name: 'Olivia Martinez',
      role: 'UX Researcher',
      avatarUrl: 'https://images.pexels.com/photos/3756685/pexels-photo-3756685.jpeg?auto=compress&cs=tinysrgb&w=150',
      status: 'online' as const,
      stats: {
        projects: 7,
        tasks: 22,
        completed: 19,
      },
    },
    {
      name: 'David Kim',
      role: 'Backend Developer',
      avatarUrl: 'https://images.pexels.com/photos/3768902/pexels-photo-3768902.jpeg?auto=compress&cs=tinysrgb&w=150',
      status: 'offline' as const,
      stats: {
        projects: 3,
        tasks: 15,
        completed: 10,
      },
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Team</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Manage your team members and their access</p>
      </div>
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="relative w-full md:w-64">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search team members..."
            className="w-full pl-10 pr-4 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white transition-colors"
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <select className="px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="">All roles</option>
            <option value="design">Design</option>
            <option value="development">Development</option>
            <option value="marketing">Marketing</option>
          </select>
          
          <select className="px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="">All status</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
            <option value="away">Away</option>
          </select>
          
          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md text-sm transition-colors">
            Add Member
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            role={member.role}
            avatarUrl={member.avatarUrl}
            status={member.status}
            stats={member.stats}
          />
        ))}
      </div>
    </div>
  );
};