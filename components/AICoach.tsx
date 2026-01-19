import React, { useState } from 'react';
import { Bot, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { getAIWorkoutAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';
import logo from '../src/assets/logo.png';

const AICoach: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Welcome to Forge. I am your AI Performance Specialist. How can I assist your training today?' }
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const advice = await getAIWorkoutAdvice(userMsg);
    
    setIsLoading(false);
    setMessages(prev => [...prev, { role: 'model', text: advice }]);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-forge-accent hover:bg-forge-accentHover text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        aria-label="Open AI Coach"
      >
        <Sparkles className="h-6 w-6 animate-pulse" />
        <span className="absolute right-full mr-4 bg-white text-gray-900 shadow-lg text-xs font-bold px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Ask AI Coach
        </span>
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end sm:p-6 pointer-events-none">
          <div className="bg-white border border-gray-200 w-full sm:w-[400px] h-[500px] sm:rounded-xl shadow-2xl flex flex-col pointer-events-auto animate-fade-in-up overflow-hidden">
            
            {/* Header */}
            <div className="bg-gray-900 p-4 flex justify-between items-center border-b border-gray-800">
              <div className="flex items-center space-x-3">
                <div className="p-1.5 bg-white/10 rounded-lg border border-white/20">
                  <img src={logo} alt="Forge AI" className="h-6 w-auto brightness-0 invert" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white tracking-wide">FORGE AI</h3>
                  <p className="text-xs text-gray-400">Performance Specialist</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/50 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 scrollbar-thin scrollbar-thumb-forge-accent/20 scrollbar-track-transparent">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-lg text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-forge-accent text-white rounded-br-none' 
                      : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                  }`}>
                    {msg.text.split('\n').map((line: string, i: number) => (
                       <React.Fragment key={i}>
                         {line}
                         {i !== msg.text.split('\n').length - 1 && <br />}
                       </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white text-gray-500 p-3 rounded-lg rounded-bl-none flex items-center space-x-2 border border-gray-200 shadow-sm">
                    <Loader2 className="h-4 w-4 animate-spin text-forge-accent" />
                    <span className="text-xs">Analyzing metrics...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-200">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask for a workout..."
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg pl-4 pr-12 py-3 focus:outline-none focus:border-forge-accent focus:ring-1 focus:ring-forge-accent transition-colors placeholder-gray-400"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-forge-accent hover:bg-forge-accentHover rounded-md text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AICoach;