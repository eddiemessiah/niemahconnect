
import React from 'react';
import { CIRCLES } from '../constants';
import { 
  UserGroupIcon, 
  PlusIcon, 
  MapPinIcon, 
  UserPlusIcon,
  ChatBubbleLeftIcon
} from '@heroicons/react/24/outline';

const Circles: React.FC = () => {
  return (
    <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
      <header className="flex justify-between items-end">
        <div className="space-y-2">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Sister Circles</h2>
          <p className="text-gray-600 max-w-xl">Find your tribe. Safe, supportive communities organized by region and interest.</p>
        </div>
        <button className="hidden sm:flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-2xl font-bold hover:bg-black transition-all">
          <PlusIcon className="w-5 h-5" />
          Create Circle
        </button>
      </header>

      {/* Recommendations */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CIRCLES.map(circle => (
          <div key={circle.id} className="bg-white border border-gray-100 rounded-[2rem] p-6 shadow-sm hover:shadow-xl transition-all group flex flex-col">
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                <UserGroupIcon className="w-8 h-8" />
              </div>
              <div className="flex -space-x-2 overflow-hidden">
                {[1, 2, 3].map(i => (
                  <img 
                    key={i}
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src={`https://picsum.photos/seed/${circle.id}${i}/100/100`}
                    alt="Member"
                  />
                ))}
                <div className="inline-flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white bg-gray-50 text-[10px] font-bold text-gray-500">
                  +{Math.floor(circle.members / 100)}k
                </div>
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
              <button className="flex-1 bg-gray-900 text-white py-3 rounded-xl font-bold text-sm hover:bg-black transition-all flex items-center justify-center gap-2">
                <UserPlusIcon className="w-4 h-4" />
                Join Circle
              </button>
              <button className="w-12 h-12 border border-gray-200 rounded-xl flex items-center justify-center text-gray-400 hover:text-orange-600 hover:border-orange-100 hover:bg-orange-50 transition-all">
                <ChatBubbleLeftIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Feed-like section */}
      <section className="bg-white border border-gray-100 rounded-[2.5rem] p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Activity Feed</h3>
        <div className="space-y-6">
          {[1, 2].map(i => (
            <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
              <img src={`https://picsum.photos/seed/user${i}/100/100`} className="w-12 h-12 rounded-full object-cover" alt="User" />
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-gray-900">Mariana S. <span className="text-xs font-normal text-gray-400 ml-2">in Crypto Queens LatAm</span></h4>
                  <span className="text-[10px] text-gray-400 font-medium uppercase">2h ago</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  I just finished my first smart contract deployment on Celo! 🚀 It was easier than I thought. Any sisters here working on DeFi projects?
                </p>
                <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-100">
                  <button className="text-xs font-bold text-gray-400 hover:text-orange-600">Like</button>
                  <button className="text-xs font-bold text-gray-400 hover:text-orange-600">Reply (14)</button>
                  <button className="text-xs font-bold text-gray-400 hover:text-orange-600">Share</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Circles;
