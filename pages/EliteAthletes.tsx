import React from 'react';
import { ArrowLeft, Zap, Trophy, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const EliteAthletes: React.FC = () => {
  const services = [
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Advanced training protocols designed to extract maximum performance gains and competitive edge'
    },
    {
      icon: Trophy,
      title: 'Sport-Specific Training',
      description: 'Specialized programs tailored to the unique demands of your specific sport and position'
    },
    {
      icon: Target,
      title: 'Competition Preparation',
      description: 'Strategic preparation and peak performance protocols timed perfectly for competition season'
    },
    {
      icon: TrendingUp,
      title: 'Advanced Analytics',
      description: 'Data-driven training with real-time performance monitoring and predictive analytics'
    }
  ];

  return (
    <div className="bg-white min-h-screen text-forge-text">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img
            src="./forge2.jpeg"
            alt="Elite Athletes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-6xl md:text-8xl font-bold text-white leading-tight tracking-tighter mb-6 drop-shadow-2xl uppercase">
            Elite Athletes
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium tracking-wide">
            Training for champions—reaching the peak of your athletic potential
          </p>
        </div>
      </section>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link 
          to="/" 
          className="inline-flex items-center text-forge-accent hover:text-forge-accentHover font-bold uppercase tracking-wider text-sm transition-colors group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </div>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-forge-accent font-bold tracking-widest uppercase text-sm mb-2 block">Elite Training</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text mb-6 uppercase">
              Championship-Level Performance Training
            </h2>
            <p className="text-lg text-forge-muted leading-relaxed">
              For elite athletes who refuse to settle, Forge Performance Hub provides world-class training facilities and expert coaching that matches the intensity and precision required at the highest levels of sport. Our elite program is designed for competitive athletes striving for excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-forge-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-sm border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-forge-accent/10 rounded flex items-center justify-center mr-4">
                      <Icon className="h-6 w-6 text-forge-accent" />
                    </div>
                    <h3 className="font-bold text-lg text-forge-text">{service.title}</h3>
                  </div>
                  <p className="text-forge-muted leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training Components */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text uppercase">
              Comprehensive Elite Training
            </h2>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Technical Mastery</h3>
              <p className="text-forge-muted leading-relaxed">
                Perfect your sport-specific techniques with biomechanical analysis, video feedback, and expert correction from coaches with professional-level experience in your sport.
              </p>
            </div>

            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Power & Speed Development</h3>
              <p className="text-forge-muted leading-relaxed">
                Advanced plyometric and explosive training protocols designed to maximize your power output, reaction time, and competitive edge in high-intensity moments.
              </p>
            </div>

            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Strength & Endurance Balance</h3>
              <p className="text-forge-muted leading-relaxed">
                Strategic integration of strength training with sport-specific conditioning to build resilience, prevent fatigue, and maintain performance throughout competition.
              </p>
            </div>

            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Recovery & Regeneration</h3>
              <p className="text-forge-muted leading-relaxed">
                Elite recovery protocols including advanced stretching, sports massage, and evidence-based regeneration strategies to optimize adaptation and prevent injury.
              </p>
            </div>

            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Mental Performance</h3>
              <p className="text-forge-muted leading-relaxed">
                Sport psychology principles, visualization techniques, and mental toughness coaching to ensure peak mental state during competition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Elite Facilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text uppercase mb-4">
              Elite-Grade Facilities
            </h2>
            <p className="text-lg text-forge-muted max-w-3xl mx-auto">
              We provide the same level of training equipment and recovery technology used by professional and national teams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Olympic Platform', 'Advanced Recovery Zone', 'Performance Analytics Lab', 'Sport-Specific Training Areas', 'Video Analysis Studio', 'Biometric Testing Center'].map((facility, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <p className="font-bold text-forge-text uppercase tracking-wider">{facility}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-forge-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 uppercase">
            Elevate Your Elite Performance
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Connect with our elite coaching staff to discuss your championship goals
          </p>
          <Link 
            to="/" 
            className="inline-block px-8 py-3 bg-forge-accent text-white font-bold uppercase tracking-wider rounded hover:bg-forge-accentHover transition-colors"
          >
            Contact Elite Coaching
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EliteAthletes;
