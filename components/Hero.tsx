import React from 'react';
import { ChevronRight } from 'lucide-react';
import forge1 from '../src/assets/forge1.jpeg';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={forge1}
          alt="Gym background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/30"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight tracking-tighter mb-6 drop-shadow-2xl">
          FORGE YOUR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">LEGACY</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-10 font-medium tracking-wide leading-relaxed">
          Strength. Conditioning. Rehabilitation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="#membership"
            className="px-8 py-4 bg-forge-accent hover:bg-forge-accentHover text-white font-bold uppercase tracking-wider text-sm transition-all flex items-center justify-center group"
          >
            Join The Forge
            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#programs"
            className="px-8 py-4 border border-white/20 hover:border-white hover:bg-white/5 text-white font-bold uppercase tracking-wider text-sm transition-all"
          >
            Explore Programs
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-forge-accent to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;