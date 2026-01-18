import React from 'react';
import { ArrowLeft, Zap, Brain, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const TrainingMethods: React.FC = () => {
  const methods = [
    {
      icon: Zap,
      title: 'Periodized Strength Training',
      description: 'Scientifically structured training cycles that optimize strength gains, power development, and injury prevention through strategic variation.',
      details: [
        'Macrocycle planning',
        'Mesocycle structure',
        'Microcycle optimization',
        'Deload protocols'
      ]
    },
    {
      icon: Brain,
      title: 'Movement Assessment & Correction',
      description: 'Comprehensive biomechanical analysis and corrective exercise programming to identify and resolve movement dysfunctions.',
      details: [
        'Functional movement screening',
        'Postural analysis',
        'Mobility assessment',
        'Movement correction'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking & Analytics',
      description: 'Data-driven approach using advanced tracking systems to monitor progress, identify trends, and adjust programming in real-time.',
      details: [
        'Progress metrics',
        'Performance analytics',
        'Personalized reporting',
        'Predictive modeling'
      ]
    },
    {
      icon: Users,
      title: 'Sport-Specific Programming',
      description: 'Tailored training protocols designed specifically for different sports and athletic demands to maximize sport-specific performance.',
      details: [
        'Sport analysis',
        'Movement pattern training',
        'Competition preparation',
        'Sport-specific conditioning'
      ]
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
            alt="Training Methods"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-6xl md:text-8xl font-bold text-white leading-tight tracking-tighter mb-6 drop-shadow-2xl uppercase">
            Training Methods
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium tracking-wide">
            Evidence-based methodologies that deliver results
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
            <span className="text-forge-accent font-bold tracking-widest uppercase text-sm mb-2 block">Our Approach</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text mb-6 uppercase">
              Science-Based Performance Training
            </h2>
            <p className="text-lg text-forge-muted leading-relaxed">
              At Forge Performance Hub, we combine cutting-edge sports science with time-tested training principles. Every program is built on evidence, refined through experience, and customized to individual needs.
            </p>
          </div>
        </div>
      </section>

      {/* Training Methods Grid */}
      <section className="py-20 bg-forge-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {methods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-200"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-forge-accent/10 rounded flex items-center justify-center mr-4">
                      <Icon className="h-8 w-8 text-forge-accent" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-forge-text">{method.title}</h3>
                  </div>

                  <p className="text-forge-muted leading-relaxed mb-6">
                    {method.description}
                  </p>

                  <ul className="space-y-2">
                    {method.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-forge-muted">
                        <span className="w-2 h-2 bg-forge-accent rounded-full mr-3"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-forge-accent font-bold tracking-widest uppercase text-sm mb-2 block">Core Philosophy</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text uppercase">
              The Forge Methodology
            </h2>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-forge-accent pl-6">
              <h3 className="font-bold text-xl text-forge-text mb-2 uppercase">Individualization</h3>
              <p className="text-forge-muted leading-relaxed">
                No two athletes are the same. We conduct thorough assessments to understand your unique biomechanics, movement patterns, and performance goals before designing your program.
              </p>
            </div>

            <div className="border-l-4 border-forge-accent pl-6">
              <h3 className="font-bold text-xl text-forge-text mb-2 uppercase">Progressive Overload</h3>
              <p className="text-forge-muted leading-relaxed">
                Continuous improvement requires systematic increases in training stimulus. We apply strategic progression principles to ensure consistent gains while minimizing injury risk.
              </p>
            </div>

            <div className="border-l-4 border-forge-accent pl-6">
              <h3 className="font-bold text-xl text-forge-text mb-2 uppercase">Recovery & Adaptation</h3>
              <p className="text-forge-muted leading-relaxed">
                Gains happen during recovery. We prioritize rest, nutrition, and recovery protocols as essential components of the training equation, not afterthoughts.
              </p>
            </div>

            <div className="border-l-4 border-forge-accent pl-6">
              <h3 className="font-bold text-xl text-forge-text mb-2 uppercase">Feedback & Adjustment</h3>
              <p className="text-forge-muted leading-relaxed">
                Training is a dynamic process. We continuously monitor performance data and client feedback to refine programming and ensure optimal results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-forge-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 uppercase">
            Experience the Forge Difference
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Ready to train with science and experience on your side?
          </p>
          <Link 
            to="/" 
            className="inline-block px-8 py-3 bg-forge-accent text-white font-bold uppercase tracking-wider rounded hover:bg-forge-accentHover transition-colors"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TrainingMethods;
