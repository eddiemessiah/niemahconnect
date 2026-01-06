
import React, { useState } from 'react';
import { COURSES } from '../constants';
import { 
  MagnifyingGlassIcon, 
  PlayCircleIcon,
  BookOpenIcon,
  AcademicCapIcon,
  CheckBadgeIcon,
  SparklesIcon,
  CloudArrowDownIcon
} from '@heroicons/react/24/outline';

const Academy: React.FC<{ onEarnPoints: (amount: number) => void }> = ({ onEarnPoints }) => {
  const [filter, setFilter] = useState('All');
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const categories = ['All', 'Coding', 'Blockchain', 'Design', 'Soft Skills'];

  const filteredCourses = filter === 'All' 
    ? COURSES 
    : COURSES.filter(c => c.category === filter);

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Niyah Academy</h2>
          <p className="text-gray-600 max-w-xl">Gamified, bite-sized courses. Complete challenges, earn points, and mint your verifiable SBT certificates.</p>
        </div>
        <div className="flex gap-3">
          <div className="bg-teal-50 text-teal-600 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
            <CheckBadgeIcon className="w-5 h-5" />
            2 Verified SBTs
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

      {/* Interactive Active Learning Card (Next Level Feature) */}
      <div className="bg-gradient-to-r from-orange-600 to-rose-600 rounded-[2.5rem] p-8 text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl shadow-orange-100">
        <div className="flex-1 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <SparklesIcon className="w-4 h-4" />
            Active Challenge
          </div>
          <h3 className="text-3xl font-black">Ready for your first Solidity Test?</h3>
          <p className="text-orange-100 opacity-90 max-w-md">Complete this 2-minute quiz to earn 100 bonus points and your "Blockchain Pioneer" badge.</p>
          <div className="flex gap-4 pt-2">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-2xl font-bold shadow-lg hover:bg-orange-50 transition-colors">
              Start Quiz
            </button>
            <button className="flex items-center gap-2 text-white font-bold hover:underline">
              <CloudArrowDownIcon className="w-5 h-5" />
              Download for Offline
            </button>
          </div>
        </div>
        <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center border-4 border-white/20 animate-pulse">
           <div className="w-32 h-32 bg-white rounded-3xl flex items-center justify-center text-orange-600 shadow-2xl">
              <AcademicCapIcon className="w-16 h-16" />
           </div>
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
                   <div className="flex items-center gap-1 font-bold text-teal-600">
                      Earn {course.points} pts
                   </div>
                </div>
                
                <button 
                  onClick={() => onEarnPoints(5)}
                  className="w-full bg-gray-50 group-hover:bg-orange-600 group-hover:text-white text-gray-900 py-3 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2"
                >
                  <PlayCircleIcon className="w-5 h-5" />
                  Continue Module
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Academy;
