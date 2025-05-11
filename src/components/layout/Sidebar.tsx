import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  FolderKanban, 
  Settings, 
  ChevronLeft, 
  ChevronRight, 
  LifeBuoy, 
  LogOut 
} from 'lucide-react';
import { SidebarLink } from './SidebarLink';

interface SidebarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  currentPage, 
  setCurrentPage, 
  collapsed, 
  setCollapsed 
}) => {
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const links = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'projects', label: 'Projects', icon: FolderKanban },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div 
      className={`bg-white dark:bg-gray-800 h-full flex flex-col border-r border-gray-200 dark:border-gray-700 transition-all duration-300 ${
        collapsed ? 'w-[70px]' : 'w-64'
      }`}
    >
      <div className="flex items-center justify-between p-4 h-16 border-b border-gray-200 dark:border-gray-700">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-indigo-600 flex items-center justify-center">
              <span className="text-white font-semibold">IN</span>
            </div>
            <h1 className="font-semibold text-lg text-gray-900 dark:text-white">Insight</h1>
          </div>
        )}
        {collapsed && (
          <div className="h-8 w-8 mx-auto rounded-md bg-indigo-600 flex items-center justify-center">
            <span className="text-white font-semibold">IN</span>
          </div>
        )}
        <button 
          onClick={toggleCollapse} 
          className="rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white p-1"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>
      <div className="flex flex-col gap-1 p-3 flex-1">
        {links.map(link => (
          <SidebarLink
            key={link.id}
            id={link.id}
            label={link.label}
            icon={link.icon}
            active={currentPage === link.id}
            collapsed={collapsed}
            onClick={() => setCurrentPage(link.id)}
          />
        ))}
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 p-3">
        <SidebarLink
          id="help"
          label="Help"
          icon={LifeBuoy}
          active={false}
          collapsed={collapsed}
          onClick={() => {}}
        />
        <SidebarLink
          id="logout"
          label="Logout"
          icon={LogOut}
          active={false}
          collapsed={collapsed}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default Sidebar;