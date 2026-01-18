import React from 'react';
import { ArrowLeft, Zap, TrendingUp, Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const SportsConditioning: React.FC = () => {
  const conditioningTypes = [
    {
      icon: Zap,
      title: 'Aerobic Conditioning',
      description: 'Building cardiovascular capacity and endurance for sustained performance throughout competition'
    },
    {
      icon: TrendingUp,
      title: 'Anaerobic Conditioning',
      description: 'Developing high-intensity effort capability for explosive movements and competition surges'
    },
    {
      icon: Heart,
      title: 'Sport-Specific Conditioning',
      description: 'Training the exact movement patterns and energy systems required by your specific sport'
    },
    {
      icon: Users,
      title: 'Work Capacity Development',
      description: 'Improving your ability to perform multiple high-intensity efforts with minimal recovery'
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
            alt="Sports Conditioning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-6xl md:text-8xl font-bold text-white leading-tight tracking-tighter mb-6 drop-shadow-2xl uppercase">
            Sports Conditioning
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium tracking-wide">
            Build the conditioning to dominate in your sport
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
            <span className="text-forge-accent font-bold tracking-widest uppercase text-sm mb-2 block">Performance Edge</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text mb-6 uppercase">
              Sport-Specific Conditioning Programs
            </h2>
            <p className="text-lg text-forge-muted leading-relaxed">
              Conditioning is often the difference between winning and losing. Our sport-specific conditioning programs are designed to prepare your body for the exact demands of your sport. From interval training to work capacity development, we build the conditioning that delivers competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Conditioning Types */}
      <section className="py-20 bg-forge-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {conditioningTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-sm border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-forge-accent/10 rounded flex items-center justify-center mr-4">
                      <Icon className="h-6 w-6 text-forge-accent" />
                    </div>
                    <h3 className="font-bold text-lg text-forge-text">{type.title}</h3>
                  </div>
                  <p className="text-forge-muted leading-relaxed">{type.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programming Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text uppercase mb-4">
              Our Conditioning Philosophy
            </h2>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Sport Analysis</h3>
              <p className="text-forge-muted leading-relaxed">
                We analyze the specific demands of your sport including movement patterns, intensity fluctuations, and recovery demands to design targeted conditioning.
              </p>
            </div>

            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Progressive Intensity</h3>
              <p className="text-forge-muted leading-relaxed">
                Conditioning improves through systematic progression. We gradually increase training intensity while managing fatigue and injury risk.
              </p>
            </div>

            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Injury Prevention</h3>
              <p className="text-forge-muted leading-relaxed">
                Proper conditioning reduces injury risk. Our programs build resilience and prepare your body for the demands of competition.
              </p>
            </div>

            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Competitive Timing</h3>
              <p className="text-forge-muted leading-relaxed">
                We peak your conditioning for competition season, ensuring you're at your best when it matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditioning Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text uppercase">
              Track Your Conditioning Progress
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
              <p className="font-bold text-forge-text uppercase tracking-wider mb-2">Heart Rate Recovery</p>
              <p className="text-sm text-forge-muted">Monitor cardiovascular improvement</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
              <p className="font-bold text-forge-text uppercase tracking-wider mb-2">Work Capacity</p>
              <p className="text-sm text-forge-muted">Track your ability to perform at intensity</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
              <p className="font-bold text-forge-text uppercase tracking-wider mb-2">Power Output</p>
              <p className="text-sm text-forge-muted">Measure explosive capability gains</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-forge-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 uppercase">
            Build Championship Conditioning
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get the conditioning edge that separates champions from competitors
          </p>
          <Link 
            to="/" 
            className="inline-block px-8 py-3 bg-forge-accent text-white font-bold uppercase tracking-wider rounded hover:bg-forge-accentHover transition-colors"
          >
            Start Conditioning
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SportsConditioning;
