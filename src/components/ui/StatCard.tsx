import React from 'react';
import { ArrowDown, ArrowUp, DivideIcon as LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  icon: LucideIcon;
  color: string;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon: Icon, color }) => {
  const isPositive = change >= 0;
  
  const getBackgroundColor = () => {
    switch (color) {
      case 'indigo':
        return 'bg-indigo-50 dark:bg-indigo-900/30';
      case 'emerald':
        return 'bg-emerald-50 dark:bg-emerald-900/30';
      case 'amber':
        return 'bg-amber-50 dark:bg-amber-900/30';
      case 'rose':
        return 'bg-rose-50 dark:bg-rose-900/30';
      default:
        return 'bg-gray-50 dark:bg-gray-800';
    }
  };
  
  const getIconColor = () => {
    switch (color) {
      case 'indigo':
        return 'text-indigo-600 dark:text-indigo-400';
      case 'emerald':
        return 'text-emerald-600 dark:text-emerald-400';
      case 'amber':
        return 'text-amber-600 dark:text-amber-400';
      case 'rose':
        return 'text-rose-600 dark:text-rose-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${getBackgroundColor()}`}>
          <Icon size={18} className={getIconColor()} />
        </div>
      </div>
      <div>
        <p className="text-2xl font-semibold text-gray-900 dark:text-white">{value}</p>
        <div className="flex items-center mt-1">
          <span>
            {isPositive ? <ArrowUp size={14} className="text-emerald-500" /> : <ArrowDown size={14} className="text-rose-500" />}
          </span>
          <span className={`text-sm ${isPositive ? 'text-emerald-500' : 'text-rose-500'}`}>
            {Math.abs(change)}%
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">vs last month</span>
        </div>
      </div>
    </div>
  );
};