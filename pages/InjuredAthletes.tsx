import React from 'react';
import { ArrowLeft, Heart, Zap, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const InjuredAthletes: React.FC = () => {
  const rehabilitationPhases = [
    {
      phase: 'Phase 1: Acute Recovery',
      description: 'Initial healing and inflammation management with safe movement restoration',
      duration: 'Weeks 1-2',
      focus: ['Immobilization if needed', 'Gentle movement', 'Pain management', 'Swelling reduction']
    },
    {
      phase: 'Phase 2: Active Rehabilitation',
      description: 'Progressive strengthening and controlled movement pattern retraining',
      duration: 'Weeks 3-6',
      focus: ['Progressive loading', 'Range of motion', 'Stability work', 'Proprioception']
    },
    {
      phase: 'Phase 3: Functional Restoration',
      description: 'Sport-specific movement patterns and power development return',
      duration: 'Weeks 7-12',
      focus: ['Sport-specific drills', 'Power return', 'Agility training', 'Confidence building']
    },
    {
      phase: 'Phase 4: Return to Sport',
      description: 'Full competitive clearance and injury prevention strategies',
      duration: 'Weeks 13+',
      focus: ['Competition readiness', 'Maintenance program', 'Injury prevention', 'Performance']
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
            alt="Injured Athletes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-6xl md:text-8xl font-bold text-white leading-tight tracking-tighter mb-6 drop-shadow-2xl uppercase">
            Injured Athletes
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium tracking-wide">
            Professional rehabilitation and safe return to sport
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
            <span className="text-forge-accent font-bold tracking-widest uppercase text-sm mb-2 block">Rehabilitation & Recovery</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text mb-6 uppercase">
              Professional Athletic Rehabilitation
            </h2>
            <p className="text-lg text-forge-muted leading-relaxed">
              An injury doesn't have to end your athletic career. At Forge Performance Hub, we specialize in rehabilitating injured athletes with a structured, evidence-based approach that prioritizes safe return to sport. Our rehabilitation programs are designed in collaboration with sports medicine professionals and follow internationally recognized protocols.
            </p>
          </div>
        </div>
      </section>

      {/* Rehabilitation Process */}
      <section className="py-20 bg-forge-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase">
              Four-Phase Rehabilitation Protocol
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rehabilitationPhases.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-forge-accent/10 text-forge-accent font-bold text-xs uppercase tracking-wider rounded mb-3">
                    {item.duration}
                  </span>
                  <h3 className="font-bold text-xl text-forge-text mb-2">{item.phase}</h3>
                </div>
                <p className="text-forge-muted leading-relaxed mb-4">{item.description}</p>
                <div>
                  <p className="text-sm font-bold text-forge-text uppercase tracking-wider mb-2">Focus Areas:</p>
                  <ul className="space-y-1">
                    {item.focus.map((focus, i) => (
                      <li key={i} className="text-sm text-forge-muted flex items-center">
                        <span className="w-1.5 h-1.5 bg-forge-accent rounded-full mr-2"></span>
                        {focus}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Injury Types We Treat */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text uppercase mb-4">
              Common Injuries We Rehabilitate
            </h2>
            <p className="text-lg text-forge-muted max-w-3xl mx-auto">
              We have experience rehabilitating a wide range of sports injuries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['ACL Reconstruction', 'Rotator Cuff', 'Meniscus Tear', 'Ankle Sprain', 'Hamstring Strain', 'Shoulder Dislocation', 'Knee Ligament Injury', 'Wrist/Forearm Injury', 'Back/Spine Injury'].map((injury, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="font-bold text-forge-text uppercase tracking-wider">{injury}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text uppercase">
              Our Rehabilitation Philosophy
            </h2>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase flex items-center">
                <Heart className="h-6 w-6 text-forge-accent mr-3" />
                Patient-Centered Care
              </h3>
              <p className="text-forge-muted leading-relaxed">
                We put your recovery first, customizing every aspect of rehabilitation to your specific injury, sport, and goals.
              </p>
            </div>

            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase flex items-center">
                <Zap className="h-6 w-6 text-forge-accent mr-3" />
                Evidence-Based Protocols
              </h3>
              <p className="text-forge-muted leading-relaxed">
                All rehabilitation programs are grounded in peer-reviewed research and follow internationally accepted standards for athletic rehabilitation.
              </p>
            </div>

            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase flex items-center">
                <TrendingUp className="h-6 w-6 text-forge-accent mr-3" />
                Progressive Return to Sport
              </h3>
              <p className="text-forge-muted leading-relaxed">
                We follow a systematic approach ensuring you're truly ready before returning to competition, minimizing re-injury risk.
              </p>
            </div>

            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase flex items-center">
                <Users className="h-6 w-6 text-forge-accent mr-3" />
                Multidisciplinary Team
              </h3>
              <p className="text-forge-muted leading-relaxed">
                Our coaches work alongside sports medicine professionals, physiotherapists, and other specialists to ensure comprehensive care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Success Rate */}
      <section className="py-16 bg-forge-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="font-display text-5xl md:text-6xl font-bold text-forge-accent mb-2">98%</div>
              <p className="text-lg text-gray-300 uppercase tracking-widest font-semibold">Successful Returns</p>
            </div>
            <div className="text-center">
              <div className="font-display text-5xl md:text-6xl font-bold text-forge-accent mb-2">350+</div>
              <p className="text-lg text-gray-300 uppercase tracking-widest font-semibold">Athletes Rehabilitated</p>
            </div>
            <div className="text-center">
              <div className="font-display text-5xl md:text-6xl font-bold text-forge-accent mb-2">12w</div>
              <p className="text-lg text-gray-300 uppercase tracking-widest font-semibold">Average Recovery Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-forge-text mb-6 uppercase">
            Start Your Recovery Today
          </h2>
          <p className="text-lg text-forge-muted mb-8">
            Let our expert team guide you safely back to your sport
          </p>
          <Link 
            to="/" 
            className="inline-block px-8 py-3 bg-forge-accent text-white font-bold uppercase tracking-wider rounded hover:bg-forge-accentHover transition-colors"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default InjuredAthletes;
