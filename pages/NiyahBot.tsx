
import React, { useState, useRef, useEffect } from 'react';
import { 
  PaperAirplaneIcon, 
  SparklesIcon,
  UserCircleIcon,
  CommandLineIcon,
  QuestionMarkCircleIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';
import { sendMessageToNiyahBot } from '../services/geminiService';
import { ChatMessage } from '../types';

const NiyahBot: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello sister! I'm Niyah, your AI tech mentor. How can I help you on your learning journey today? I can explain coding concepts, talk about blockchain, or give you career advice!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
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

  const quickQuestions = [
    "What is Blockchain?",
    "Explain Python loops",
    "How to find a remote job?",
    "Advice for beginners"
  ];

  return (
    <div className="h-[calc(100vh-10rem)] md:h-[calc(100vh-8rem)] flex flex-col gap-6 animate-in fade-in duration-500">
      <header className="flex items-center gap-4">
        <div className="w-14 h-14 bg-gradient-to-tr from-orange-500 to-rose-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-100">
          <SparklesIcon className="w-8 h-8" />
        </div>
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">Niyah Bot</h2>
          <p className="text-gray-500 text-sm">Your 24/7 AI Tech Tutor & Mentor</p>
        </div>
      </header>

      <div className="flex-1 bg-white border border-gray-100 rounded-[2.5rem] flex flex-col overflow-hidden shadow-xl shadow-gray-100">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 hide-scrollbar">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex gap-3 max-w-[85%] md:max-w-[70%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-600'}`}>
                  {msg.role === 'user' ? <UserCircleIcon className="w-6 h-6" /> : <SparklesIcon className="w-5 h-5" />}
                </div>
                <div className={`p-4 rounded-[1.5rem] text-sm leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-orange-600 text-white rounded-tr-none' 
                  : 'bg-gray-50 text-gray-700 rounded-tl-none border border-gray-100'
                }`}>
                  {msg.text}
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex gap-3 max-w-[70%] flex-row">
                <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center">
                  <SparklesIcon className="w-5 h-5 animate-pulse" />
                </div>
                <div className="p-4 bg-gray-50 rounded-[1.5rem] rounded-tl-none border border-gray-100 flex gap-1">
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-100 bg-gray-50/50">
          <div className="mb-4 overflow-x-auto hide-scrollbar flex gap-2">
            {quickQuestions.map(q => (
              <button 
                key={q}
                onClick={() => setInput(q)}
                className="whitespace-nowrap bg-white border border-gray-200 px-4 py-2 rounded-xl text-xs font-bold text-gray-600 hover:border-orange-200 hover:text-orange-600 transition-all"
              >
                {q}
              </button>
            ))}
          </div>
          <div className="relative flex items-center">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..."
              className="w-full bg-white border border-gray-200 rounded-2xl pl-6 pr-14 py-4 outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className={`absolute right-2 p-3 rounded-xl transition-all ${
                input.trim() && !isTyping ? 'bg-orange-600 text-white shadow-lg shadow-orange-200' : 'bg-gray-100 text-gray-400'
              }`}
            >
              <PaperAirplaneIcon className="w-5 h-5" />
            </button>
          </div>
          <p className="text-[10px] text-center text-gray-400 mt-4 font-medium uppercase tracking-widest">
            Powered by Gemini 3 Flash • Part of Niemah's Lite Mode Ecosystem
          </p>
        </div>
      </div>
    </div>
  );
};

export default NiyahBot;
