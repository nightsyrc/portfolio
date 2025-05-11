import React, { useState } from 'react';
import { Bell, Menu, Search, User } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { NotificationsDropdown } from '../ui/NotificationsDropdown';
import { UserDropdown } from '../ui/UserDropdown';

interface HeaderProps {
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ sidebarCollapsed, setSidebarCollapsed }) => {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <header className="h-16 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex items-center justify-between px-4 transition-colors duration-300">
      <div className="flex items-center lg:hidden">
        <button 
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="p-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          aria-label="Toggle sidebar"
        >
          <Menu size={20} />
        </button>
      </div>
      
      <div className="hidden md:flex items-center relative w-64 max-w-sm">
        <Search size={18} className="absolute left-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white transition-colors"
        />
      </div>
      
      <div className="flex items-center space-x-3">
        <ThemeToggle />
        
        <div className="relative">
          <button
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="relative p-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            aria-label="Notifications"
          >
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          {notificationsOpen && (
            <NotificationsDropdown onClose={() => setNotificationsOpen(false)} />
          )}
        </div>
        
        <div className="relative">
          <button
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="flex items-center gap-2 p-1 rounded-md text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            aria-label="User menu"
          >
            <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
              <User size={18} className="text-indigo-600 dark:text-indigo-400" />
            </div>
            <span className="hidden md:inline text-sm font-medium">Alex Morgan</span>
          </button>
          
          {userMenuOpen && (
            <UserDropdown onClose={() => setUserMenuOpen(false)} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;