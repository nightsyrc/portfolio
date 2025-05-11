import React from 'react';

interface ProgressBarProps {
  value: number;
  max: number;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max,
  color = 'indigo',
  size = 'md',
  showValue = true,
}) => {
  const percentage = Math.min(Math.max(0, (value / max) * 100), 100);
  
  const getColorClass = () => {
    switch (color) {
      case 'indigo':
        return 'bg-indigo-600 dark:bg-indigo-500';
      case 'emerald':
        return 'bg-emerald-600 dark:bg-emerald-500';
      case 'amber':
        return 'bg-amber-600 dark:bg-amber-500';
      case 'rose':
        return 'bg-rose-600 dark:bg-rose-500';
      default:
        return 'bg-indigo-600 dark:bg-indigo-500';
    }
  };
  
  const getHeightClass = () => {
    switch (size) {
      case 'sm':
        return 'h-1.5';
      case 'md':
        return 'h-2';
      case 'lg':
        return 'h-3';
      default:
        return 'h-2';
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        {showValue && (
          <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{percentage.toFixed(0)}%</div>
        )}
      </div>
      <div className={`bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden ${getHeightClass()}`}>
        <div 
          className={`${getColorClass()} ${getHeightClass()} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};