import React from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  MessageSquare, 
  BarChart3, 
  Cloud, 
  TrendingUp, 
  User, 
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from './ui/button';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export function Sidebar({ currentPage, onNavigate, collapsed, onToggleCollapse }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'drafts', label: 'Draft Legislations', icon: FileText },
    { id: 'feedback', label: 'Submit Feedback', icon: MessageSquare },
    { id: 'analytics', label: 'Sentiment Analysis', icon: BarChart3 },
    { id: 'wordcloud', label: 'Word Cloud Viewer', icon: Cloud },
    { id: 'trends', label: 'Trend Reports', icon: TrendingUp },
    { id: 'workspace', label: 'My Contributions', icon: User },
    { id: 'admin', label: 'Admin Panel', icon: Settings },
  ];

  return (
    <div className={`fixed left-0 top-[120px] h-[calc(100vh-120px)] bg-white border-r border-gray-200 transition-all duration-300 ${
      collapsed ? 'w-16' : 'w-64'
    } shadow-lg z-30`}>
      
      {/* Collapse toggle */}
      <div className="flex justify-end p-2 border-b border-gray-200">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleCollapse}
          className="h-8 w-8"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
      
      {/* Menu items */}
      <nav className="p-2">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`w-full flex items-center px-3 py-2 rounded-lg text-left transition-colors ${
                    currentPage === item.id
                      ? 'bg-[#001F3F] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  title={collapsed ? item.label : undefined}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  {!collapsed && (
                    <span className="ml-3 text-sm">{item.label}</span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}