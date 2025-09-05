import React from 'react';
import { Search, User, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import govLogo from 'figma:asset/2f61562034df0fa2f8e5cdf05791e837c413d1b5.png';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Simulate search functionality
      alert(`Searching for: "${searchQuery}"`);
      // In a real app, this would navigate to search results
      // onNavigate('search', { query: searchQuery });
    }
  };

  const handleUserMenu = () => {
    // Simulate user menu/login functionality
    alert('Official Login - Ministry credentials required');
  };
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Niti Manthan' },
    { id: 'drafts', label: 'Drafts & Acts' },
    { id: 'workspace', label: 'My Workspace' },
    { id: 'analytics', label: 'Analytics & Reports' },
    { id: 'services', label: 'Additional Services' },
    { id: 'help', label: 'Help & FAQs' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <header className="bg-[#001F3F] text-white shadow-lg">
      {/* Top bar with emblem and title */}
      <div className="bg-white text-black py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src={govLogo} 
              alt="Government of India Logo" 
              className="h-16 w-auto object-contain"
            />
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#001F3F] tracking-wide" style={{fontFamily: 'arial'}}>
              NITI MANTHAN
            </h1>
            <p className="text-sm text-[#138808] mt-1 font-medium">EMPOWERING OFFICIALS, ENABLING POLICY</p>
            <p className="text-xs text-gray-600 mt-1">REGULATION • INTEGRATION • FACILITATOR • EDUCATOR</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="search"
                placeholder="Search policies, documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 rounded-full border-gray-300"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </form>
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full"
              onClick={handleUserMenu}
              title="User Menu"
            >
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Navigation menu */}
      <div className="bg-[#001F3F]">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-8 py-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm hover:text-[#FF9933] hover:underline transition-colors ${
                  currentPage === item.id ? 'text-[#FF9933] underline' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}