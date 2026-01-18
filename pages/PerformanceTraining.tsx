import React from 'react';
import { ArrowLeft, Zap, Target, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const PerformanceTraining: React.FC = () => {
  const pillars = [
    {
      icon: Zap,
      title: 'Strength Development',
      description: 'Building maximum strength through structured progression, advanced techniques, and scientific training principles'
    },
    {
      icon: Target,
      title: 'Power & Explosiveness',
      description: 'Developing rate of force development and explosive capability for competitive advantage'
    },
    {
      icon: TrendingUp,
      title: 'Endurance & Work Capacity',
      description: 'Building aerobic and anaerobic capacity to maintain high performance throughout competition'
    },
    {
      icon: Users,
      title: 'Movement Mastery',
      description: 'Perfecting movement patterns and biomechanics for efficiency and injury prevention'
    }
  ];

  const trainingMethods = [
    { name: 'Periodized Training', description: 'Strategic training cycles optimized for peak performance timing' },
    { name: 'Plyometric Training', description: 'Explosive movements building power and athletic capability' },
    { name: 'Resistance Training', description: 'Progressive loading protocols for strength development' },
    { name: 'Complex Training', description: 'Combining strength and power for maximum athletic gains' },
    { name: 'Velocity Training', description: 'Movement speed optimization for competitive sports' },
    { name: 'Metabolic Conditioning', description: 'Sport-specific energy system training' }
  ];

  return (
    <div className="bg-white min-h-screen text-forge-text">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img
            src="./forge2.jpeg"
            alt="Performance Training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-6xl md:text-8xl font-bold text-white leading-tight tracking-tighter mb-6 drop-shadow-2xl uppercase">
            Performance Training
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium tracking-wide">
            Maximizing athletic capability through scientific training
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
              Advanced Performance Enhancement
            </h2>
            <p className="text-lg text-forge-muted leading-relaxed">
              Performance training at Forge is built on the foundation of sports science. We combine periodization, advanced strength methodologies, and sport-specific conditioning to extract maximum athletic capability. Whether you're an aspiring elite athlete or competitive enthusiast, our performance training programs are designed to elevate your game.
            </p>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-20 bg-forge-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase">
              Four Pillars of Performance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-sm border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-forge-accent/10 rounded flex items-center justify-center mr-4">
                      <Icon className="h-6 w-6 text-forge-accent" />
                    </div>
                    <h3 className="font-bold text-lg text-forge-text">{pillar.title}</h3>
                  </div>
                  <p className="text-forge-muted leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text uppercase mb-4">
              Advanced Training Methods
            </h2>
            <p className="text-lg text-forge-muted max-w-3xl mx-auto">
              We employ a variety of scientifically-proven training methodologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingMethods.map((method, index) => (
              <div key={index} className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg text-forge-text mb-2 uppercase">{method.name}</h3>
                <p className="text-forge-muted">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Assessment */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text uppercase">
              Comprehensive Performance Testing
            </h2>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Baseline Assessment</h3>
              <p className="text-forge-muted leading-relaxed">
                Complete evaluation of your current performance capability including strength, power, speed, and movement quality to establish starting point.
              </p>
            </div>

            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Ongoing Monitoring</h3>
              <p className="text-forge-muted leading-relaxed">
                Regular testing throughout your training cycle to track progress and ensure programming is delivering desired results.
              </p>
            </div>

            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Data-Driven Adjustments</h3>
              <p className="text-forge-muted leading-relaxed">
                Use of performance data to refine training programming and maximize return on training investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-forge-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 uppercase">
            Ready to Maximize Your Performance?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Start your performance training journey with our expert coaches
          </p>
          <Link 
            to="/" 
            className="inline-block px-8 py-3 bg-forge-accent text-white font-bold uppercase tracking-wider rounded hover:bg-forge-accentHover transition-colors"
          >
            Begin Training
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PerformanceTraining;
