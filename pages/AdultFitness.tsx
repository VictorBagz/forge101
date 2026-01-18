import React from 'react';
import { ArrowLeft, Heart, Zap, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AdultFitness: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: 'Cardiovascular Health',
      description: 'Science-based programs designed to improve heart health, build endurance, and increase overall fitness levels'
    },
    {
      icon: Zap,
      title: 'Strength & Conditioning',
      description: 'Functional strength training that improves daily life performance and maintains muscle mass as you age'
    },
    {
      icon: Users,
      title: 'Community & Accountability',
      description: 'Train alongside like-minded adults in a supportive environment with expert coaching and guidance'
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Results',
      description: 'Long-term fitness solutions that fit into your lifestyle and deliver lasting health improvements'
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
            alt="Adult Fitness"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-6xl md:text-8xl font-bold text-white leading-tight tracking-tighter mb-6 drop-shadow-2xl uppercase">
            Adult Fitness
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium tracking-wide">
            Transform your health and fitness at any age
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
            <span className="text-forge-accent font-bold tracking-widest uppercase text-sm mb-2 block">For All Ages</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text mb-6 uppercase">
              Fitness Programs Designed for Adults
            </h2>
            <p className="text-lg text-forge-muted leading-relaxed">
              Whether you're just starting your fitness journey or looking to level up your current routine, Forge Performance Hub offers comprehensive adult fitness programs. Our coaches understand the unique needs of working professionals, busy parents, and anyone looking to build sustainable health habits that fit into real life.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-forge-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-sm border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-forge-accent/10 rounded flex items-center justify-center mr-4">
                      <Icon className="h-6 w-6 text-forge-accent" />
                    </div>
                    <h3 className="font-bold text-lg text-forge-text">{feature.title}</h3>
                  </div>
                  <p className="text-forge-muted leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-forge-accent font-bold tracking-widest uppercase text-sm mb-2 block">Choose Your Path</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text uppercase">
              Training Programs for Every Goal
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-2xl text-forge-text mb-4 uppercase">Weight Loss</h3>
              <p className="text-forge-muted mb-6">Personalized nutrition and training programs to help you reach your ideal weight and maintain it long-term.</p>
              <ul className="space-y-2 text-sm text-forge-muted">
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Custom diet planning</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Metabolic training</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Progress tracking</li>
              </ul>
            </div>

            <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-2xl text-forge-text mb-4 uppercase">Strength Building</h3>
              <p className="text-forge-muted mb-6">Build functional strength that improves daily life and boosts confidence with science-based training.</p>
              <ul className="space-y-2 text-sm text-forge-muted">
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Personalized strength plans</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Form coaching</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Progressive overload</li>
              </ul>
            </div>

            <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-2xl text-forge-text mb-4 uppercase">General Wellness</h3>
              <p className="text-forge-muted mb-6">Balanced programs combining cardio, strength, and mobility work for overall health improvement.</p>
              <ul className="space-y-2 text-sm text-forge-muted">
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Balanced training</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Mobility work</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Lifestyle coaching</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text uppercase mb-4">
              Adult Success Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-gray-200 rounded-lg">
              <p className="text-forge-muted italic mb-4">
                "I was intimidated walking into a gym, but Forge's coaches made me feel welcome and capable from day one. In 6 months, I've lost 15kg and gained confidence I didn't think I'd have."
              </p>
              <p className="font-bold text-forge-text">Margaret Okonkwo</p>
              <p className="text-sm text-forge-accent uppercase tracking-wider">Age 52 • Fitness Journey</p>
            </div>

            <div className="bg-white p-8 border border-gray-200 rounded-lg">
              <p className="text-forge-muted italic mb-4">
                "Balancing work and family was tough, but Forge's flexible programs fit my schedule. Now I'm stronger and have more energy for everything else in my life."
              </p>
              <p className="font-bold text-forge-text">John Mwangi</p>
              <p className="text-sm text-forge-accent uppercase tracking-wider">Age 38 • Corporate Professional</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-forge-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 uppercase">
            Ready to Transform Your Fitness?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Start your adult fitness journey today with personalized coaching and support
          </p>
          <Link 
            to="/" 
            className="inline-block px-8 py-3 bg-forge-accent text-white font-bold uppercase tracking-wider rounded hover:bg-forge-accentHover transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AdultFitness;
