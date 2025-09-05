import React, { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { DraftLegislation } from './components/DraftLegislation';
import { AnalyticsReports } from './components/AnalyticsReports';
import { MyWorkspace } from './components/MyWorkspace';
import { AdminPanel } from './components/AdminPanel';
import { HomePage } from './components/HomePage';
import { WordCloudViewer } from './components/WordCloudViewer';
import { TrendReport } from './components/TrendReport';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { HelpPage } from './components/HelpPage';
import { ServicesPage } from './components/ServicesPage';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage onNavigate={setCurrentPage} />;
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentPage} />;
      case 'drafts':
        return <DraftLegislation />;
      case 'analytics':
        return <AnalyticsReports />;
      case 'wordcloud':
        return <WordCloudViewer />;
      case 'trends':
        return <TrendReport />;
      case 'workspace':
        return <MyWorkspace />;
      case 'admin':
        return <AdminPanel />;
      case 'contact':
        return <ContactPage onNavigate={setCurrentPage} />;
      case 'help':
        return <HelpPage onNavigate={setCurrentPage} />;
      case 'services':
        return <ServicesPage onNavigate={setCurrentPage} />;
      case 'feedback':
        return <DraftLegislation />; // Redirect to drafts for feedback
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  const showSidebar = currentPage !== 'home';

  return (
    <div className="min-h-screen bg-gray-50">
      
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <div className="flex">
        {showSidebar && (
          <Sidebar
            currentPage={currentPage}
            onNavigate={setCurrentPage}
            collapsed={sidebarCollapsed}
            onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          />
        )}
        
        <main className={`flex-1 ${showSidebar ? (sidebarCollapsed ? 'ml-16' : 'ml-64') : ''} transition-all duration-300`}>
          {renderContent()}
        </main>
      </div>
      
      {/* Footer */}
      <footer className="bg-[#001F3F] text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="mb-4">Niti Manthan</h3>
              <p className="text-gray-300 text-sm">
                Empowering Officials, Enabling Policy
              </p>
            </div>
            
            <div>
              <h3 className="mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <button 
                    onClick={() => window.open('/terms', '_blank')} 
                    className="hover:text-[#FF9933] cursor-pointer"
                  >
                    Terms of Use
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => window.open('/privacy', '_blank')} 
                    className="hover:text-[#FF9933] cursor-pointer"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => window.open('/accessibility', '_blank')} 
                    className="hover:text-[#FF9933] cursor-pointer"
                  >
                    Accessibility
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <button 
                    onClick={() => window.open('tel:1800-123-4567')}
                    className="hover:text-[#FF9933] cursor-pointer"
                  >
                    Helpline: 1800-123-4567
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => window.open('mailto:help@nitimanthan.gov.in')}
                    className="hover:text-[#FF9933] cursor-pointer"
                  >
                    Email: help@nitimanthan.gov.in
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <button 
                  onClick={() => window.open('https://linkedin.com/company/nitimanthan', '_blank')}
                  className="text-gray-300 hover:text-[#FF9933] cursor-pointer"
                >
                  LinkedIn
                </button>
                <button 
                  onClick={() => window.open('https://twitter.com/nitimanthan', '_blank')}
                  className="text-gray-300 hover:text-[#FF9933] cursor-pointer"
                >
                  Twitter
                </button>
                <button 
                  onClick={() => window.open('https://youtube.com/nitimanthan', '_blank')}
                  className="text-gray-300 hover:text-[#FF9933] cursor-pointer"
                >
                  YouTube
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
            <p>© 2024 Government of India. All rights reserved.</p>
            <p className="mt-2">
              Website content is owned by Niti Manthan Division, Government of India.
            </p>
          </div>
        </div>
      </footer>
      
      <Toaster />
    </div>
  );
}