import React from 'react';
import { ArrowLeft, Heart, TrendingUp, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const SportsRecovery: React.FC = () => {
  const recoveryModalities = [
    {
      icon: Heart,
      title: 'Stretching & Mobility',
      description: 'Active and passive stretching protocols to restore range of motion and prepare for next training session'
    },
    {
      icon: Zap,
      title: 'Soft Tissue Therapy',
      description: 'Professional massage, foam rolling, and myofascial release to accelerate recovery and reduce soreness'
    },
    {
      icon: TrendingUp,
      title: 'Contrast Therapy',
      description: 'Strategic use of hot and cold exposure to manage inflammation and promote recovery'
    },
    {
      icon: Users,
      title: 'Compression & Traction',
      description: 'Advanced recovery tools to enhance blood flow and reduce fatigue'
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
            alt="Sports Recovery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-6xl md:text-8xl font-bold text-white leading-tight tracking-tighter mb-6 drop-shadow-2xl uppercase">
            Sports Recovery
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium tracking-wide">
            Recover faster. Perform better. Stay healthy.
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
            <span className="text-forge-accent font-bold tracking-widest uppercase text-sm mb-2 block">Optimization</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text mb-6 uppercase">
              Accelerate Your Recovery
            </h2>
            <p className="text-lg text-forge-muted leading-relaxed">
              Training creates the stimulus for adaptation, but recovery is where the magic happens. At Forge, we provide comprehensive sports recovery services to ensure your body adapts optimally between training sessions. Faster recovery means better performance and reduced injury risk.
            </p>
          </div>
        </div>
      </section>

      {/* Recovery Modalities */}
      <section className="py-20 bg-forge-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase">
              Recovery Tools & Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recoveryModalities.map((modality, index) => {
              const Icon = modality.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-sm border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-forge-accent/10 rounded flex items-center justify-center mr-4">
                      <Icon className="h-6 w-6 text-forge-accent" />
                    </div>
                    <h3 className="font-bold text-lg text-forge-text">{modality.title}</h3>
                  </div>
                  <p className="text-forge-muted leading-relaxed">{modality.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recovery Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text uppercase">
              Holistic Recovery Approach
            </h2>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Sleep Optimization</h3>
              <p className="text-forge-muted leading-relaxed">
                Sleep is the most powerful recovery tool. We provide guidance on sleep quality and optimization strategies to maximize adaptation and performance gains.
              </p>
            </div>

            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Nutrition Protocol</h3>
              <p className="text-forge-muted leading-relaxed">
                Proper nutrition is critical for recovery. We guide your post-training nutrition to optimize protein synthesis and glycogen replenishment.
              </p>
            </div>

            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Active Recovery</h3>
              <p className="text-forge-muted leading-relaxed">
                Light movement on recovery days enhances blood flow and accelerates adaptation without imposing significant training stress.
              </p>
            </div>

            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Stress Management</h3>
              <p className="text-forge-muted leading-relaxed">
                Chronic stress impairs recovery. We emphasize stress management and mental recovery as essential components of athletic recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Facilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text uppercase mb-4">
              State-of-the-Art Recovery Facility
            </h2>
            <p className="text-lg text-forge-muted max-w-3xl mx-auto">
              Forge is equipped with advanced recovery technologies and amenities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Cold Plunge', 'Sauna', 'Steam Room', 'Massage Chairs', 'Stretch Area', 'Meditation Space', 'Ice Bath', 'Massage Beds', 'Recovery Lounge'].map((facility, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:shadow-lg transition-shadow">
                <p className="font-bold text-forge-text uppercase tracking-wider">{facility}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text uppercase">
              Personalized Recovery Plans
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-2xl text-forge-text mb-4 uppercase">Post-Training</h3>
              <p className="text-forge-muted mb-4">Immediate recovery protocols following training sessions to optimize adaptation</p>
              <ul className="space-y-2 text-sm text-forge-muted">
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Cool-down protocols</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Stretching routines</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Nutrition timing</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-2xl text-forge-text mb-4 uppercase">Between Sessions</h3>
              <p className="text-forge-muted mb-4">Daily recovery maintenance to ensure consistent adaptation and readiness</p>
              <ul className="space-y-2 text-sm text-forge-muted">
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Active recovery days</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Sleep optimization</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Mobility work</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-2xl text-forge-text mb-4 uppercase">Weekly Intensive</h3>
              <p className="text-forge-muted mb-4">Comprehensive recovery sessions for deep regeneration and injury prevention</p>
              <ul className="space-y-2 text-sm text-forge-muted">
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Sports massage</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Advanced therapies</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Contrast therapy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-forge-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 uppercase">
            Optimize Your Recovery Today
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Experience the difference proper recovery can make in your performance
          </p>
          <Link 
            to="/" 
            className="inline-block px-8 py-3 bg-forge-accent text-white font-bold uppercase tracking-wider rounded hover:bg-forge-accentHover transition-colors"
          >
            Book Recovery Session
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SportsRecovery;
