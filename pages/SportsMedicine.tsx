import React from 'react';
import { ArrowLeft, Heart, Zap, Shield, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import forge2 from '../src/assets/forge2.jpeg';

const SportsMedicine: React.FC = () => {
  const services = [
    {
      icon: Heart,
      title: 'Injury Prevention',
      description: 'Proactive assessment and intervention to identify and address potential injury risks before they occur'
    },
    {
      icon: Zap,
      title: 'Biomechanical Analysis',
      description: 'Advanced movement analysis to identify dysfunctions and prescribe corrective interventions'
    },
    {
      icon: Shield,
      title: 'Injury Management',
      description: 'Comprehensive care for acute and chronic sports injuries using evidence-based protocols'
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Addressing mobility, stability, and movement quality to enhance athletic performance and reduce re-injury risk'
    }
  ];

  return (
    <div className="bg-white min-h-screen text-forge-text">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img
            src={forge2}
            alt="Sports Medicine"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-6xl md:text-8xl font-bold text-white leading-tight tracking-tighter mb-6 drop-shadow-2xl uppercase">
            Sports Medicine
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium tracking-wide">
            Professional injury prevention and management
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
            <span className="text-forge-accent font-bold tracking-widest uppercase text-sm mb-2 block">Medical Support</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text mb-6 uppercase">
              Comprehensive Sports Medicine Services
            </h2>
            <p className="text-lg text-forge-muted leading-relaxed">
              Forge's Sports Medicine program is dedicated to keeping athletes healthy and performing at their best. Through preventive assessment, biomechanical analysis, and collaboration with medical professionals, we address the physical demands of sport while minimizing injury risk.
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

      {/* Assessment Process */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text uppercase">
              Comprehensive Assessment Protocol
            </h2>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Initial Evaluation</h3>
              <p className="text-forge-muted leading-relaxed">
                Complete assessment of movement quality, flexibility, stability, and any existing limitations or dysfunctions that may increase injury risk.
              </p>
            </div>

            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Sport-Specific Analysis</h3>
              <p className="text-forge-muted leading-relaxed">
                Evaluation of the specific movement patterns and demands of your sport to identify sport-specific risk factors and areas needing attention.
              </p>
            </div>

            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Intervention Planning</h3>
              <p className="text-forge-muted leading-relaxed">
                Development of targeted corrective exercise programs and training modifications to address identified dysfunctions and reduce injury risk.
              </p>
            </div>

            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Progress Monitoring</h3>
              <p className="text-forge-muted leading-relaxed">
                Regular follow-up assessments to track improvement, ensure protocols are working, and adjust interventions as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues We Address */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text uppercase mb-4">
              Dysfunctions We Correct
            </h2>
            <p className="text-lg text-forge-muted max-w-3xl mx-auto">
              We identify and address movement dysfunctions before they lead to injury
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Postural Dysfunction', 'Muscle Imbalances', 'Limited Mobility', 'Core Weakness', 'Poor Ankle Stability', 'Shoulder Impingement', 'Hip Dysfunction', 'Knee Tracking Issues', 'Movement Pattern Flaws'].map((issue, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="font-bold text-forge-text uppercase tracking-wider">{issue}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prevention Strategies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text uppercase mb-4">
              Injury Prevention Strategies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-2xl text-forge-text mb-4 uppercase">Corrective Exercise</h3>
              <p className="text-forge-muted mb-4">Targeted exercises to address movement dysfunctions and build strength in weak areas</p>
              <ul className="space-y-2 text-sm text-forge-muted">
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Activation drills</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Mobility work</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Stability training</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-2xl text-forge-text mb-4 uppercase">Training Modification</h3>
              <p className="text-forge-muted mb-4">Adjustments to training volume, intensity, and technique to prevent overuse injuries</p>
              <ul className="space-y-2 text-sm text-forge-muted">
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Technique correction</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Load management</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Periodization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-forge-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 uppercase">
            Stay Healthy and Perform Better
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get your sports medicine assessment today and prevent injuries before they happen
          </p>
          <Link 
            to="/" 
            className="inline-block px-8 py-3 bg-forge-accent text-white font-bold uppercase tracking-wider rounded hover:bg-forge-accentHover transition-colors"
          >
            Schedule Assessment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SportsMedicine;
