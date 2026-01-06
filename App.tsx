
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  HomeIcon, 
  AcademicCapIcon, 
  UserGroupIcon, 
  BriefcaseIcon, 
  UserCircleIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { HomeIcon as HomeIconSolid, AcademicCapIcon as AcademicCapIconSolid, UserGroupIcon as UserGroupIconSolid, BriefcaseIcon as BriefcaseIconSolid, UserCircleIcon as UserCircleIconSolid, ChatBubbleLeftRightIcon as ChatBubbleLeftRightIconSolid } from '@heroicons/react/24/solid';

// Pages
import Dashboard from './pages/Dashboard';
import Academy from './pages/Academy';
import Circles from './pages/Circles';
import Opportunities from './pages/Opportunities';
import Profile from './pages/Profile';
import NiyahBot from './pages/NiyahBot';

// Components
import ApiKeyGate from './components/ApiKeyGate';

const App: React.FC = () => {
  const [points, setPoints] = useState(1250);
  
  const addPoints = (amount: number) => {
    setPoints(prev => prev + amount);
  };

  return (
    <Router>
      <ApiKeyGate>
        <div className="flex flex-col min-h-screen pb-20 md:pb-0 md:pl-64">
          {/* Sidebar for Desktop */}
          <nav className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 overflow-y-auto z-50">
            <div className="p-6">
              <h1 className="text-2xl font-bold text-orange-600 tracking-tight flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white text-lg">N</span>
                Niemah
              </h1>
            </div>
            
            <div className="flex-1 px-4 space-y-1">
              <SidebarLink to="/" label="Home" icon={<HomeIcon className="w-6 h-6" />} activeIcon={<HomeIconSolid className="w-6 h-6" />} />
              <SidebarLink to="/academy" label="Academy" icon={<AcademicCapIcon className="w-6 h-6" />} activeIcon={<AcademicCapIconSolid className="w-6 h-6" />} />
              <SidebarLink to="/circles" label="Circles" icon={<UserGroupIcon className="w-6 h-6" />} activeIcon={<UserGroupIconSolid className="w-6 h-6" />} />
              <SidebarLink to="/opportunities" label="Careers" icon={<BriefcaseIcon className="w-6 h-6" />} activeIcon={<BriefcaseIconSolid className="w-6 h-6" />} />
              <SidebarLink to="/bot" label="Niyah Bot" icon={<ChatBubbleLeftRightIcon className="w-6 h-6" />} activeIcon={<ChatBubbleLeftRightIconSolid className="w-6 h-6" />} />
              <SidebarLink to="/profile" label="Identity" icon={<UserCircleIcon className="w-6 h-6" />} activeIcon={<UserCircleIconSolid className="w-6 h-6" />} />
            </div>

            <div className="p-4 mt-auto">
              <div className="bg-orange-50 rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <SparklesIcon className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs text-orange-600 font-medium">Earned Points</p>
                  <p className="text-lg font-bold text-orange-900">{points.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </nav>

          {/* Bottom Bar for Mobile */}
          <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-2 flex justify-around items-center z-50 shadow-lg">
            <MobileLink to="/" label="Home" icon={<HomeIcon className="w-6 h-6" />} activeIcon={<HomeIconSolid className="w-6 h-6" />} />
            <MobileLink to="/academy" label="Learn" icon={<AcademicCapIcon className="w-6 h-6" />} activeIcon={<AcademicCapIconSolid className="w-6 h-6" />} />
            <MobileLink to="/bot" label="Bot" icon={<ChatBubbleLeftRightIcon className="w-6 h-6" />} activeIcon={<ChatBubbleLeftRightIconSolid className="w-6 h-6" />} />
            <MobileLink to="/circles" label="Circles" icon={<UserGroupIcon className="w-6 h-6" />} activeIcon={<UserGroupIconSolid className="w-6 h-6" />} />
            <MobileLink to="/profile" label="Profile" icon={<UserCircleIcon className="w-6 h-6" />} activeIcon={<UserCircleIconSolid className="w-6 h-6" />} />
          </nav>

          {/* Header for Mobile */}
          <header className="md:hidden bg-white px-4 py-3 flex justify-between items-center sticky top-0 z-40 border-b border-gray-100">
             <h1 className="text-xl font-bold text-orange-600 flex items-center gap-2">
                <span className="w-7 h-7 bg-orange-600 rounded flex items-center justify-center text-white text-sm">N</span>
                Niemah
              </h1>
              <div className="flex items-center gap-2 bg-orange-50 px-3 py-1 rounded-full">
                <SparklesIcon className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-bold text-orange-700">{points}</span>
              </div>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-6 md:p-8">
            <Routes>
              <Route path="/" element={<Dashboard points={points} />} />
              <Route path="/academy" element={<Academy onEarnPoints={addPoints} />} />
              <Route path="/circles" element={<Circles />} />
              <Route path="/opportunities" element={<Opportunities />} />
              <Route path="/profile" element={<Profile points={points} />} />
              <Route path="/bot" element={<NiyahBot />} />
            </Routes>
          </main>
        </div>
      </ApiKeyGate>
    </Router>
  );
};

const SidebarLink: React.FC<{ to: string; label: string; icon: React.ReactNode; activeIcon: React.ReactNode }> = ({ to, label, icon, activeIcon }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link 
      to={to} 
      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive ? 'bg-orange-50 text-orange-700 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}
    >
      {isActive ? activeIcon : icon}
      <span>{label}</span>
    </Link>
  );
};

const MobileLink: React.FC<{ to: string; label: string; icon: React.ReactNode; activeIcon: React.ReactNode }> = ({ to, label, icon, activeIcon }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link 
      to={to} 
      className={`flex flex-col items-center justify-center flex-1 py-1 gap-1 transition-all ${isActive ? 'text-orange-600' : 'text-gray-400'}`}
    >
      {isActive ? activeIcon : icon}
      <span className="text-[10px] font-medium">{label}</span>
    </Link>
  );
};

export default App;
