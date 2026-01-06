
import React from 'react';
import { JOBS } from '../constants';
import { 
  BriefcaseIcon, 
  MapPinIcon, 
  CurrencyDollarIcon, 
  CheckBadgeIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const Opportunities: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Opportunity Board</h2>
          <p className="text-gray-600 max-w-xl">Curated remote jobs, internships, and bounties from companies committed to diversity and inclusion.</p>
        </div>
        <div className="bg-orange-50 border border-orange-100 px-6 py-4 rounded-3xl flex items-center gap-3">
          <ShieldCheckIcon className="w-8 h-8 text-orange-600" />
          <div>
            <p className="text-xs font-bold text-orange-600 uppercase tracking-wider">Vetted Partners</p>
            <p className="text-sm font-medium text-orange-800">Diversity Checked Listings Only</p>
          </div>
        </div>
      </header>

      {/* Featured Jobs */}
      <div className="space-y-4">
        {JOBS.map(job => (
          <div key={job.id} className="bg-white border border-gray-100 rounded-3xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-xl hover:border-orange-100 transition-all cursor-pointer group">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
                <BriefcaseIcon className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{job.title}</h3>
                  {job.verified && <CheckBadgeIcon className="w-5 h-5 text-teal-500" />}
                </div>
                <p className="text-gray-500 font-medium">{job.company}</p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-gray-400">
                  <span className="flex items-center gap-1"><MapPinIcon className="w-4 h-4" /> {job.location}</span>
                  <span className="flex items-center gap-1 font-bold text-orange-600/70">{job.type}</span>
                  {job.salary && <span className="flex items-center gap-1 text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full"><CurrencyDollarIcon className="w-4 h-4" /> {job.salary}</span>}
                </div>
              </div>
            </div>
            <button className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-black transition-all shadow-lg whitespace-nowrap">
              Quick Apply
            </button>
          </div>
        ))}
      </div>

      {/* Bounties Section */}
      <section className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-3xl font-black">Open Bounties</h3>
            <p className="text-indigo-100 text-lg">Earn while you learn. Complete micro-tasks for global projects and get paid in stablecoins instantly.</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 text-center flex-1 min-w-[140px]">
                <p className="text-xs text-indigo-200 mb-1">Total Available</p>
                <p className="text-2xl font-bold">$12.5k+</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 text-center flex-1 min-w-[140px]">
                <p className="text-xs text-indigo-200 mb-1">New Today</p>
                <p className="text-2xl font-bold">14</p>
              </div>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-indigo-300">Trending Bounty</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/5">
                <div>
                  <p className="font-bold">Translate Solidity Guide to Portuguese</p>
                  <p className="text-xs text-indigo-300">Est. 4 hours • High Priority</p>
                </div>
                <span className="text-lg font-black text-teal-400">120 USDC</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/5">
                <div>
                  <p className="font-bold">Logo Design for DAO Project</p>
                  <p className="text-xs text-indigo-300">Est. 6 hours • Creative</p>
                </div>
                <span className="text-lg font-black text-teal-400">250 USDC</span>
              </div>
            </div>
            <button className="w-full bg-indigo-500 hover:bg-indigo-400 py-4 rounded-2xl font-bold transition-all mt-4">
              Browse All Bounties
            </button>
          </div>
        </div>
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/20 rounded-full blur-[100px]"></div>
      </section>
    </div>
  );
};

export default Opportunities;
