import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  avatarUrl: string;
  status: 'online' | 'offline' | 'away';
  stats: {
    projects: number;
    tasks: number;
    completed: number;
  };
}

export const TeamMemberCard: React.FC<TeamMemberProps> = ({
  name,
  role,
  avatarUrl,
  status,
  stats,
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'online':
        return 'bg-emerald-500';
      case 'offline':
        return 'bg-gray-400';
      case 'away':
        return 'bg-amber-500';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="relative flex-shrink-0">
          <img 
            src={avatarUrl}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 ${getStatusColor()} rounded-full border-2 border-white dark:border-gray-800`}></div>
        </div>
        
        <div className="flex-1">
          <h3 className="font-medium text-gray-900 dark:text-white">{name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
          
          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">{stats.projects}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Projects</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">{stats.tasks}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Tasks</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">{stats.completed}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};