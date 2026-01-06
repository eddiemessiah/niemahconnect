
import React, { useState } from 'react';
import { CIRCLES } from '../constants';
import { 
  UserGroupIcon, 
  PlusIcon, 
  MapPinIcon, 
  UserPlusIcon,
  ChatBubbleLeftIcon,
  ShieldCheckIcon,
  SparklesIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

const Circles: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Circles' | 'Mentors'>('Circles');

  return (
    <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Sister Circles</h2>
          <p className="text-gray-600 max-w-xl">Find your tribe or find a mentor. Intelligent matching powered by Niyah AI.</p>
        </div>
        <div className="flex bg-white border border-gray-100 p-1.5 rounded-2xl shadow-sm">
          <button 
            onClick={() => setActiveTab('Circles')}
            className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'Circles' ? 'bg-orange-600 text-white shadow-lg shadow-orange-100' : 'text-gray-500'}`}
          >
            Communities
          </button>
          <button 
            onClick={() => setActiveTab('Mentors')}
            className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'Mentors' ? 'bg-orange-600 text-white shadow-lg shadow-orange-100' : 'text-gray-500'}`}
          >
            Mentors
          </button>
        </div>
      </header>

      {activeTab === 'Circles' ? (
        <>
          {/* Recommendations */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CIRCLES.map(circle => (
              <div key={circle.id} className="bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl transition-all group flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                    <UserGroupIcon className="w-8 h-8" />
                  </div>
                  <div className="flex -space-x-2 overflow-hidden">
                    {[1, 2, 3].map(i => (
                      <img key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src={`https://picsum.photos/seed/${circle.id}${i}/100/100`} alt="Member" />
                    ))}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-1 text-[10px] font-bold text-orange-600 uppercase tracking-widest">
                    <MapPinIcon className="w-3 h-3" />
                    {circle.region}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{circle.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{circle.description}</p>
                </div>

                <div className="mt-8 flex gap-3">
                  <button className="flex-1 bg-gray-900 text-white py-4 rounded-2xl font-bold text-sm hover:bg-black transition-all">
                    Join Community
                  </button>
                  <button className="w-14 h-14 border border-gray-200 rounded-2xl flex items-center justify-center text-gray-400 hover:text-orange-600 transition-all">
                    <ChatBubbleLeftIcon className="w-6 h-6" />
                  </button>
                </div>
              </div>
            ))}
          </section>
        </>
      ) : (
        <section className="space-y-6">
          <div className="bg-teal-600 rounded-[2.5rem] p-8 text-white flex items-center justify-between">
            <div className="max-w-md">
               <h3 className="text-2xl font-bold mb-2">Mentor Matchmaking</h3>
               <p className="text-teal-100 opacity-90">Based on your progress in "Blockchain Basics", we've found 3 mentors who can help you with Smart Contract debugging.</p>
            </div>
            <SparklesIcon className="w-16 h-16 opacity-20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {[1, 2].map(i => (
               <div key={i} className="bg-white border border-gray-100 rounded-[2.5rem] p-8 flex items-center gap-6 shadow-sm hover:shadow-md transition-all">
                  <div className="relative">
                    <img src={`https://picsum.photos/seed/mentor${i}/200/200`} className="w-24 h-24 rounded-3xl object-cover" alt="Mentor" />
                    <div className="absolute -bottom-1 -right-1 bg-teal-500 w-5 h-5 rounded-full border-4 border-white"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-lg text-gray-900">Dr. Amina J.</h4>
                      <ShieldCheckIcon className="w-5 h-5 text-teal-500" />
                    </div>
                    <p className="text-xs text-gray-500 font-medium mb-3">Senior Solidity Engineer • Nairobi</p>
                    <div className="flex gap-2">
                      <button className="bg-orange-600 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-md">Request Intro</button>
                      <button className="p-2 border border-gray-200 rounded-xl text-gray-400"><PhoneIcon className="w-4 h-4" /></button>
                    </div>
                  </div>
               </div>
             ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Circles;
