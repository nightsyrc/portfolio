import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface SidebarLinkProps {
  id: string;
  label: string;
  icon: LucideIcon;
  active: boolean;
  collapsed: boolean;
  onClick: () => void;
}

export const SidebarLink: React.FC<SidebarLinkProps> = ({
  id,
  label,
  icon: Icon,
  active,
  collapsed,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center rounded-md py-2 px-3 w-full transition-colors ${
        active 
          ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400' 
          : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
      }`}
    >
      <Icon size={18} className={active ? 'text-indigo-600 dark:text-indigo-400' : ''} />
      {!collapsed && <span className="ml-3 font-medium">{label}</span>}
    </button>
  );
};