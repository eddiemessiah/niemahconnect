
import React from 'react';
import { 
  UserCircleIcon, 
  QrCodeIcon, 
  IdentificationIcon, 
  ShareIcon,
  CircleStackIcon,
  AcademicCapIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

const Profile: React.FC<{ points: number }> = ({ points }) => {
  const certifications = [
    { title: 'Python Foundation', issuer: 'Niemah Academy', date: 'Oct 2024', hash: '0x3f...2e1a' },
    { title: 'Web3 Citizen', issuer: 'Solana University', date: 'Sep 2024', hash: '0x8b...55bc' }
  ];

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      {/* Decentralized ID (DID) Card */}
      <section className="bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-xl shadow-gray-100 flex flex-col md:flex-row">
        <div className="bg-gray-900 p-10 text-white md:w-80 flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="w-32 h-32 rounded-3xl overflow-hidden border-4 border-orange-600 bg-gray-800">
              <img src="https://picsum.photos/seed/user-profile/300/300" className="w-full h-full object-cover" alt="Profile" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-orange-600 p-2 rounded-xl shadow-lg">
              <QrCodeIcon className="w-6 h-6" />
            </div>
          </div>
          <h2 className="text-2xl font-black">Adwoa Mensah</h2>
          <p className="text-orange-500 font-bold text-sm tracking-widest uppercase mt-1">Full-Stack Developer</p>
          <div className="mt-8 space-y-4 w-full">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
              <span className="text-xs text-gray-400 font-medium">Points</span>
              <span className="font-bold text-orange-500">{points}</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
              <span className="text-xs text-gray-400 font-medium">Niyah DID</span>
              <span className="font-mono text-[10px] text-gray-400">niyah.eth</span>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-10 flex-1 space-y-8">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Digital CV</h3>
              <p className="text-gray-500 text-sm">On-chain verified credentials & achievements</p>
            </div>
            <button className="bg-gray-50 p-3 rounded-2xl hover:bg-orange-50 hover:text-orange-600 transition-colors">
              <ShareIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             <div className="border border-gray-100 rounded-3xl p-6 bg-gray-50/30 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                    <AcademicCapIcon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-gray-900">Learning Stats</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Completed Courses</span>
                    <span className="font-bold">4</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Certificates Earned</span>
                    <span className="font-bold">2</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Learning Hours</span>
                    <span className="font-bold">128h</span>
                  </div>
                </div>
             </div>

             <div className="border border-gray-100 rounded-3xl p-6 bg-gray-50/30 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
                    <CircleStackIcon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-gray-900">Wallet Balance</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Stablecoin (USDC)</span>
                    <span className="font-bold">45.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Native (Celo/Sui)</span>
                    <span className="font-bold">12.5</span>
                  </div>
                  <button className="w-full text-center text-teal-600 text-xs font-bold pt-1 hover:underline">Withdraw to Local Bank</button>
                </div>
             </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-gray-900 flex items-center gap-2">
              <TrophyIcon className="w-5 h-5 text-orange-600" />
              Verified On-Chain Certificates
            </h4>
            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 border border-gray-100 rounded-2xl bg-white hover:border-orange-200 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center">
                      <IdentificationIcon className="w-7 h-7 text-gray-400" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{cert.title}</p>
                      <p className="text-xs text-gray-400">{cert.issuer} • {cert.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-gray-300 block mb-1">{cert.hash}</span>
                    <button className="text-[10px] font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full uppercase">Verify SBT</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
