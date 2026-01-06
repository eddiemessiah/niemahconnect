
import React, { useState, useEffect } from 'react';
import { SparklesIcon, CreditCardIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

interface ApiKeyGateProps {
  children: React.ReactNode;
}

const ApiKeyGate: React.FC<ApiKeyGateProps> = ({ children }) => {
  const [hasKey, setHasKey] = useState<boolean | null>(null);

  useEffect(() => {
    const checkKey = async () => {
      // Check if aistudio global is available
      if (window.aistudio) {
        const selected = await window.aistudio.hasSelectedApiKey();
        setHasKey(selected);
      } else {
        // Fallback for local dev or standard environments
        setHasKey(true);
      }
    };
    checkKey();
  }, []);

  const handleSelectKey = async () => {
    if (window.aistudio) {
      await window.aistudio.openSelectKey();
      // Proceed immediately as per race condition guidelines
      setHasKey(true);
    }
  };

  if (hasKey === null) return null; // Loading state

  if (!hasKey) {
    return (
      <div className="fixed inset-0 z-[100] bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl shadow-orange-100 p-8 text-center space-y-6 animate-in fade-in zoom-in duration-500">
          <div className="w-20 h-20 bg-orange-600 rounded-3xl mx-auto flex items-center justify-center text-white shadow-lg">
            <SparklesIcon className="w-12 h-12" />
          </div>
          
          <div className="space-y-2">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Activate Niemah</h2>
            <p className="text-gray-500">To enable Niyah Bot and high-tier learning features, please connect your Google Cloud project.</p>
          </div>

          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 flex items-start gap-3 text-left">
            <CreditCardIcon className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm font-bold text-orange-900">Paid Project Required</p>
              <p className="text-xs text-orange-700">Ensure your selected API key belongs to a project with billing enabled.</p>
              <a 
                href="https://ai.google.dev/gemini-api/docs/billing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-black uppercase tracking-wider text-orange-600 hover:underline mt-2 inline-block"
              >
                Billing Documentation
              </a>
            </div>
          </div>

          <button
            onClick={handleSelectKey}
            className="w-full bg-gray-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-black transition-all flex items-center justify-center gap-3 group shadow-xl"
          >
            Connect Project Key
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">
            Secure connection via Google AI Studio
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ApiKeyGate;
