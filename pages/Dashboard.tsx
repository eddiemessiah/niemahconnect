
import React from 'react';
import { COURSES } from '../constants';
import { 
  ArrowRightIcon, 
  AcademicCapIcon, 
  UserGroupIcon, 
  BriefcaseIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Dashboard: React.FC<{ points: number }> = ({ points }) => {
  const featuredCourses = COURSES.slice(0, 2);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="space-y-2">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Welcome back, Sister! 👋</h2>
        <p className="text-gray-600 max-w-2xl">You're doing amazing. Keep learning to unlock more opportunities in the digital economy.</p>
      </header>

      {/* Hero Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-orange-500 to-rose-600 rounded-3xl p-6 text-white shadow-xl shadow-orange-100 overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="text-orange-100 font-medium mb-1">Your Earnings</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black">{points}</span>
              <span className="text-orange-100">Niyah Points</span>
            </div>
            <p className="text-sm mt-4 text-orange-100 opacity-90">≈ ${(points/100).toFixed(2)} in rewards</p>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-20 transform rotate-12">
            <AcademicCapIcon className="w-32 h-32" />
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-teal-50 w-12 h-12 rounded-2xl flex items-center justify-center">
              <CheckCircleIcon className="w-7 h-7 text-teal-600" />
            </div>
            <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded">2 Active</span>
          </div>
          <h3 className="text-gray-900 font-bold text-lg mb-1">Learning Progress</h3>
          <p className="text-gray-500 text-sm">45% through Blockchain Basics</p>
          <div className="w-full bg-gray-100 h-2 rounded-full mt-4">
            <div className="bg-teal-500 h-2 rounded-full" style={{ width: '45%' }}></div>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-blue-50 w-12 h-12 rounded-2xl flex items-center justify-center">
              <UserGroupIcon className="w-7 h-7 text-blue-600" />
            </div>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">New</span>
          </div>
          <h3 className="text-gray-900 font-bold text-lg mb-1">Circle Activity</h3>
          <p className="text-gray-500 text-sm">12 new messages in Moms in Tech</p>
          <Link to="/circles" className="text-blue-600 text-sm font-semibold mt-4 inline-flex items-center gap-1 hover:gap-2 transition-all">
            Join the conversation <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Featured Academy */}
      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-gray-900">Niyah Academy</h3>
          <Link to="/academy" className="text-orange-600 text-sm font-bold hover:underline">View all courses</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredCourses.map(course => (
            <div key={course.id} className="bg-white border border-gray-100 rounded-3xl overflow-hidden flex flex-col sm:flex-row group shadow-sm hover:shadow-xl transition-all cursor-pointer">
              <div className="w-full sm:w-40 h-40 sm:h-auto overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">
                      {course.category}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                      {course.level}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">{course.title}</h4>
                  <p className="text-sm text-gray-500 line-clamp-2">{course.description}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <AcademicCapIcon className="w-4 h-4 text-gray-400" />
                    <span className="text-xs text-gray-500">{course.duration}</span>
                  </div>
                  <span className="text-xs font-bold text-teal-600">Earn {course.points} pts</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="bg-gray-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-xl">
          <h3 className="text-2xl font-bold mb-2">Need Help with your project?</h3>
          <p className="text-gray-400 mb-6">Ask Niyah Bot about code, design, or career advice. She's available 24/7 to support your journey.</p>
          <Link to="/bot" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-2xl font-bold transition-all transform hover:-translate-y-1">
            Talk to Niyah Bot <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-orange-600/20 to-transparent hidden md:block"></div>
      </section>
    </div>
  );
};

export default Dashboard;
