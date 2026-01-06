
import React, { useState } from 'react';
import { COURSES } from '../constants';
import { 
  MagnifyingGlassIcon, 
  FunnelIcon,
  PlayCircleIcon,
  BookOpenIcon,
  AcademicCapIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline';

const Academy: React.FC<{ onEarnPoints: (amount: number) => void }> = ({ onEarnPoints }) => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Coding', 'Blockchain', 'Design', 'Soft Skills'];

  const filteredCourses = filter === 'All' 
    ? COURSES 
    : COURSES.filter(c => c.category === filter);

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Niyah Academy</h2>
          <p className="text-gray-600 max-w-xl">Gamified, bite-sized courses designed for the future tech leaders of Africa and Latin America.</p>
        </div>
        <div className="flex items-center gap-2 bg-white border border-gray-100 p-2 rounded-2xl shadow-sm">
          <div className="bg-teal-50 text-teal-600 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
            <CheckBadgeIcon className="w-5 h-5" />
            2 Courses Completed
          </div>
        </div>
      </header>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <MagnifyingGlassIcon className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search courses, skills, or topics..." 
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-100 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-shadow shadow-sm"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 hide-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`whitespace-nowrap px-6 py-3 rounded-2xl text-sm font-bold transition-all ${
                filter === cat 
                ? 'bg-orange-600 text-white shadow-lg shadow-orange-100' 
                : 'bg-white border border-gray-100 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map(course => (
          <div key={course.id} className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black text-orange-600 uppercase">
                {course.level}
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <button 
                  onClick={() => {
                    alert(`Started ${course.title}! You'll earn ${course.points} points upon completion.`);
                    onEarnPoints(10); // Small bonus for starting
                  }}
                  className="bg-white text-gray-900 p-4 rounded-full transform scale-50 group-hover:scale-100 transition-transform duration-300 shadow-xl"
                >
                  <PlayCircleIcon className="w-8 h-8" />
                </button>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="mb-3">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{course.category}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-1">{course.title}</h3>
              </div>
              <p className="text-gray-500 text-sm line-clamp-2 mb-6">{course.description}</p>
              
              <div className="mt-auto space-y-4">
                <div className="flex justify-between items-center text-xs text-gray-400 font-medium">
                   <div className="flex items-center gap-1">
                      <BookOpenIcon className="w-4 h-4" />
                      {course.modules} Modules
                   </div>
                   <div className="flex items-center gap-1">
                      <AcademicCapIcon className="w-4 h-4" />
                      {course.duration}
                   </div>
                </div>
                
                <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center">
                      <span className="text-orange-600 font-bold text-xs">+{course.points}</span>
                    </div>
                    <span className="text-xs text-gray-500">Points available</span>
                  </div>
                  <button className="text-orange-600 font-bold text-sm hover:translate-x-1 transition-transform flex items-center gap-1">
                    Start Learning →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Offline Mode Indicator */}
      <div className="bg-blue-600 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-100">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-2xl font-bold">Traveling or low on data?</h3>
          <p className="text-blue-100">Download your course modules and learn offline. We'll sync your points when you're back online!</p>
        </div>
        <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-colors whitespace-nowrap shadow-lg">
          Enable Offline Mode
        </button>
      </div>
    </div>
  );
};

export default Academy;
