
import React, { useState, useRef, useEffect } from 'react';
import { 
  PaperAirplaneIcon, 
  SparklesIcon,
  UserCircleIcon,
  MicrophoneIcon,
  StopIcon,
  PhotoIcon,
  LanguageIcon
} from '@heroicons/react/24/outline';
import { sendMessageToNiyahBot } from '../services/geminiService';
import { ChatMessage } from '../types';

const NiyahBot: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello sister! I'm Niyah. You can type or tap the microphone to talk to me. How's your learning going today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    const responseText = await sendMessageToNiyahBot(input, messages);
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Logic for voice would go here using Live API in a real implementation
    }
  };

  return (
    <div className="h-[calc(100vh-10rem)] md:h-[calc(100vh-8rem)] flex flex-col gap-6 animate-in fade-in duration-500">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-gradient-to-tr from-orange-500 to-rose-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-100">
            <SparklesIcon className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">Niyah Bot</h2>
            <p className="text-gray-500 text-sm">AI Tutor • Voice & Text Enabled</p>
          </div>
        </div>
        <div className="flex gap-2">
           <button className="p-3 bg-white border border-gray-100 rounded-xl text-gray-400 hover:text-orange-600 transition-colors">
              <LanguageIcon className="w-6 h-6" />
           </button>
        </div>
      </header>

      <div className="flex-1 bg-white border border-gray-100 rounded-[2.5rem] flex flex-col overflow-hidden shadow-xl shadow-gray-100">
        <div className="flex-1 overflow-y-auto p-6 space-y-6 hide-scrollbar">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex gap-3 max-w-[85%] md:max-w-[70%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-orange-100 text-orange-600' : 'bg-gray-900 text-white'}`}>
                  {msg.role === 'user' ? <UserCircleIcon className="w-6 h-6" /> : <SparklesIcon className="w-5 h-5" />}
                </div>
                <div className={`p-4 rounded-[1.5rem] text-sm leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-orange-600 text-white rounded-tr-none shadow-lg shadow-orange-100' 
                  : 'bg-gray-50 text-gray-700 rounded-tl-none border border-gray-100'
                }`}>
                  {msg.text}
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
               <div className="flex gap-3 items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center animate-pulse">
                    <SparklesIcon className="w-5 h-5" />
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-75"></div>
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-150"></div>
                  </div>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Improved Controls Area */}
        <div className="p-6 border-t border-gray-100 bg-gray-50/50">
          <div className="relative flex items-center gap-3">
            <button className="p-4 bg-white border border-gray-200 rounded-2xl text-gray-400 hover:text-orange-600 transition-all shadow-sm">
              <PhotoIcon className="w-6 h-6" />
            </button>
            <div className="relative flex-1">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type or use voice..."
                className="w-full bg-white border border-gray-200 rounded-2xl pl-6 pr-14 py-4 outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className={`absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-xl transition-all ${
                  input.trim() && !isTyping ? 'bg-orange-600 text-white shadow-lg shadow-orange-200' : 'bg-gray-100 text-gray-400'
                }`}
              >
                <PaperAirplaneIcon className="w-5 h-5" />
              </button>
            </div>
            <button 
              onClick={toggleRecording}
              className={`p-4 rounded-2xl transition-all shadow-lg ${
                isRecording 
                ? 'bg-rose-600 text-white animate-pulse' 
                : 'bg-gray-900 text-white hover:bg-black'
              }`}
            >
              {isRecording ? <StopIcon className="w-6 h-6" /> : <MicrophoneIcon className="w-6 h-6" />}
            </button>
          </div>
          {isRecording && (
            <p className="text-center text-rose-600 text-[10px] font-black uppercase tracking-widest mt-3">Listening...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NiyahBot;
