import React from 'react';
import { ArrowLeft, Heart, TrendingUp, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import forge2 from '../src/assets/forge2.jpeg';

const WellnessTracking: React.FC = () => {
  const trackingMetrics = [
    {
      icon: Heart,
      title: 'Heart Rate & Recovery',
      description: 'Monitor resting heart rate and heart rate recovery to assess cardiovascular fitness and readiness'
    },
    {
      icon: TrendingUp,
      title: 'Performance Metrics',
      description: 'Track strength, power, speed, and endurance improvements to measure training progress'
    },
    {
      icon: Zap,
      title: 'Energy Levels',
      description: 'Monitor daily energy and readiness to optimize training intensity and recovery timing'
    },
    {
      icon: Users,
      title: 'Body Composition',
      description: 'Track changes in muscle mass, body fat, and overall composition to support fitness goals'
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
            alt="Wellness Tracking"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-6xl md:text-8xl font-bold text-white leading-tight tracking-tighter mb-6 drop-shadow-2xl uppercase">
            Wellness Tracking
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium tracking-wide">
            Data-driven insights into your health and performance
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
            <span className="text-forge-accent font-bold tracking-widest uppercase text-sm mb-2 block">Smart Training</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text mb-6 uppercase">
              Comprehensive Wellness Tracking
            </h2>
            <p className="text-lg text-forge-muted leading-relaxed">
              What gets measured gets managed. Forge's wellness tracking system provides comprehensive insights into your health, fitness, and performance. From heart rate variability to body composition, we track the metrics that matter and use data to optimize your training and recovery.
            </p>
          </div>
        </div>
      </section>

      {/* Tracking Metrics */}
      <section className="py-20 bg-forge-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trackingMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-sm border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-forge-accent/10 rounded flex items-center justify-center mr-4">
                      <Icon className="h-6 w-6 text-forge-accent" />
                    </div>
                    <h3 className="font-bold text-lg text-forge-text">{metric.title}</h3>
                  </div>
                  <p className="text-forge-muted leading-relaxed">{metric.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tracking Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text uppercase">
              Why Track Your Wellness?
            </h2>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Informed Decision Making</h3>
              <p className="text-forge-muted leading-relaxed">
                Data eliminates guesswork. Real metrics show exactly what's working and where adjustments are needed in your training and recovery.
              </p>
            </div>

            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Objective Progress Measurement</h3>
              <p className="text-forge-muted leading-relaxed">
                Track tangible improvements in fitness, strength, endurance, and body composition to stay motivated and celebrate wins.
              </p>
            </div>

            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Injury Prevention</h3>
              <p className="text-forge-muted leading-relaxed">
                Monitor for warning signs like elevated resting heart rate or movement asymmetries that may indicate impending injury.
              </p>
            </div>

            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Optimal Training Timing</h3>
              <p className="text-forge-muted leading-relaxed">
                Use readiness metrics to determine when to push hard and when to prioritize recovery for maximum adaptation.
              </p>
            </div>

            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Long-Term Trend Analysis</h3>
              <p className="text-forge-muted leading-relaxed">
                Identify patterns over weeks and months to understand your body's response to training and make strategic adjustments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tracking Tools */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text uppercase mb-4">
              Advanced Tracking Technology
            </h2>
            <p className="text-lg text-forge-muted max-w-3xl mx-auto">
              We integrate wearable technology and advanced testing to provide comprehensive wellness insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Heart Rate Variability', 'Sleep Tracking', 'Stress Monitoring', 'Movement Analysis', 'Strength Testing', 'Endurance Metrics', 'Recovery Index', 'Readiness Score', 'Progress Dashboard'].map((tool, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:shadow-lg transition-shadow">
                <p className="font-bold text-forge-text uppercase tracking-wider">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text uppercase">
              Personal Wellness Dashboard
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-2xl text-forge-text mb-4 uppercase">Real-Time Metrics</h3>
              <p className="text-forge-muted mb-4">View current performance data and readiness status</p>
              <ul className="space-y-2 text-sm text-forge-muted">
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Live data updates</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Mobile access</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Quick insights</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-2xl text-forge-text mb-4 uppercase">Trend Analysis</h3>
              <p className="text-forge-muted mb-4">Visualize long-term patterns and progress</p>
              <ul className="space-y-2 text-sm text-forge-muted">
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Weekly reports</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Monthly summaries</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Year-over-year</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-2xl text-forge-text mb-4 uppercase">Coaching Feedback</h3>
              <p className="text-forge-muted mb-4">Personalized recommendations from your coaches</p>
              <ul className="space-y-2 text-sm text-forge-muted">
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Data interpretation</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Program adjustments</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Goal updates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-forge-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 uppercase">
            Start Tracking Your Wellness
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get access to comprehensive wellness tracking and data-driven insights
          </p>
          <Link 
            to="/" 
            className="inline-block px-8 py-3 bg-forge-accent text-white font-bold uppercase tracking-wider rounded hover:bg-forge-accentHover transition-colors"
          >
            Enable Tracking
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WellnessTracking;
