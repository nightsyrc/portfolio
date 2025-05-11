import React, { useEffect, useRef } from 'react';
import { Bell, Info, MessageSquare, User } from 'lucide-react';

interface NotificationsDropdownProps {
  onClose: () => void;
}

export const NotificationsDropdown: React.FC<NotificationsDropdownProps> = ({ onClose }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const notifications = [
    {
      id: 1,
      type: 'message',
      content: 'New message from Sarah',
      time: '5 min ago',
    },
    {
      id: 2,
      type: 'mention',
      content: 'David mentioned you in a comment',
      time: '1 hour ago',
    },
    {
      id: 3,
      type: 'info',
      content: 'Your subscription will expire soon',
      time: '3 hours ago',
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'message':
        return <MessageSquare size={16} className="text-blue-500" />;
      case 'mention':
        return <User size={16} className="text-green-500" />;
      case 'info':
        return <Info size={16} className="text-amber-500" />;
      default:
        return <Bell size={16} className="text-gray-500" />;
    }
  };

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

  return (
    <div 
      ref={dropdownRef}
      className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 shadow-lg rounded-md border border-gray-200 dark:border-gray-700 overflow-hidden z-10"
    >
      <div className="p-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <h3 className="font-medium text-gray-900 dark:text-white">Notifications</h3>
        <span className="text-xs font-medium bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
          {notifications.length} New
        </span>
      </div>
      
      <div className="max-h-80 overflow-y-auto">
        {notifications.map(notification => (
          <div 
            key={notification.id}
            className="p-3 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 cursor-pointer transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                {getIcon(notification.type)}
              </div>
              <div>
                <p className="text-sm text-gray-800 dark:text-gray-200">{notification.content}</p>
                <span className="text-xs text-gray-500 dark:text-gray-400">{notification.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-2 text-center">
        <button className="text-sm text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
          View all notifications
        </button>
      </div>
    </div>
  );
};