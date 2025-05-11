import React, { useEffect, useRef } from 'react';
import { LogOut, Settings, User } from 'lucide-react';

interface UserDropdownProps {
  onClose: () => void;
}

export const UserDropdown: React.FC<UserDropdownProps> = ({ onClose }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const menuItems = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'logout', label: 'Logout', icon: LogOut },
  ];

  return (
    <div 
      ref={dropdownRef}
      className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 shadow-lg rounded-md border border-gray-200 dark:border-gray-700 overflow-hidden z-10"
    >
      <div className="p-3 border-b border-gray-200 dark:border-gray-700">
        <p className="font-medium text-gray-900 dark:text-white">Alex Morgan</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">alex@example.com</p>
      </div>
      
      <div className="py-1">
        {menuItems.map(item => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Icon size={16} className="mr-2" />
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};