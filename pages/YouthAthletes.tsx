import React from 'react';
import { ArrowLeft, Zap, Target, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import forge2 from '../src/assets/forge2.jpeg';

const YouthAthletes: React.FC = () => {
  const developmentAreas = [
    {
      icon: Zap,
      title: 'Athletic Foundations',
      description: 'Building fundamental movement patterns, coordination, and athletic qualities that form the basis for sports success'
    },
    {
      icon: Target,
      title: 'Sport-Specific Development',
      description: 'Progressive skill development tailored to your sport while maintaining overall athleticism and injury prevention'
    },
    {
      icon: TrendingUp,
      title: 'Strength & Conditioning',
      description: 'Age-appropriate strength training and conditioning programs designed specifically for growing athletes'
    },
    {
      icon: Users,
      title: 'Life Skills & Mentorship',
      description: 'Building character, discipline, resilience, and leadership both on and off the field'
    }
  ];

  const ageGroups = [
    {
      age: '8-12 Years',
      focus: 'Movement Fundamentals',
      details: ['Basic athleticism', 'Coordination development', 'Sport introduction', 'Fun and enjoyment']
    },
    {
      age: '13-16 Years',
      focus: 'Skill Development',
      details: ['Sport-specific skills', 'Strength foundation', 'Competition readiness', 'Injury prevention']
    },
    {
      age: '17-19 Years',
      focus: 'Advanced Training',
      details: ['Elite-level training', 'Competitive preparation', 'Collegiate readiness', 'Professional development']
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
            alt="Youth Athletes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-6xl md:text-8xl font-bold text-white leading-tight tracking-tighter mb-6 drop-shadow-2xl uppercase">
            Youth Athletes
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium tracking-wide">
            Building the champions of tomorrow through proper development
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
            <span className="text-forge-accent font-bold tracking-widest uppercase text-sm mb-2 block">Youth Development</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text mb-6 uppercase">
              Building Champions Through Proper Development
            </h2>
            <p className="text-lg text-forge-muted leading-relaxed">
              Youth development at Forge goes far beyond training. We believe in building complete athletes—individuals who are not only physically capable but also mentally resilient, disciplined, and equipped with life skills that extend far beyond sports. Our coaches work with young athletes to develop proper movement patterns, athletic qualities, and the character needed to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Development Areas */}
      <section className="py-20 bg-forge-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {developmentAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-sm border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-forge-accent/10 rounded flex items-center justify-center mr-4">
                      <Icon className="h-6 w-6 text-forge-accent" />
                    </div>
                    <h3 className="font-bold text-lg text-forge-text">{area.title}</h3>
                  </div>
                  <p className="text-forge-muted leading-relaxed">{area.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Age-Based Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text uppercase mb-4">
              Age-Appropriate Programs
            </h2>
            <p className="text-lg text-forge-muted max-w-3xl mx-auto">
              Each stage of development requires different focus areas. Our programs are scientifically structured to match your athlete's developmental stage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ageGroups.map((group, index) => (
              <div 
                key={index}
                className="bg-gray-50 border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="font-display text-3xl font-bold text-forge-accent mb-2">{group.age}</h3>
                <p className="font-bold text-lg text-forge-text mb-4 uppercase tracking-wider">{group.focus}</p>
                <ul className="space-y-3">
                  {group.details.map((detail, i) => (
                    <li key={i} className="flex items-start text-forge-muted">
                      <span className="w-2 h-2 bg-forge-accent rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Youth Development Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text uppercase">
              Our Youth Philosophy
            </h2>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Safe Development First</h3>
              <p className="text-forge-muted leading-relaxed">
                We prioritize injury prevention and proper movement patterns. All youth programs are designed with biological maturity and growth patterns in mind, not just age.
              </p>
            </div>

            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Long-Term Athletic Development</h3>
              <p className="text-forge-muted leading-relaxed">
                Rather than specialization too early, we develop well-rounded athletes with broad athletic foundations that prepare them for excellence in any sport.
              </p>
            </div>

            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Character & Life Skills</h3>
              <p className="text-forge-muted leading-relaxed">
                Sports are a vehicle for character development. We teach discipline, resilience, teamwork, and leadership that translate to success in all areas of life.
              </p>
            </div>

            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Enjoyment & Passion</h3>
              <p className="text-forge-muted leading-relaxed">
                We keep sport fun while maintaining excellence. Young athletes who enjoy their training are more likely to succeed and continue athletic pursuits long-term.
              </p>
            </div>

            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Parental Partnership</h3>
              <p className="text-forge-muted leading-relaxed">
                Parents are essential partners in their child's development. We provide regular feedback and guidance to support optimal athletic and personal growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Youth Programs Offered */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text uppercase mb-4">
              Programs & Opportunities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-2xl text-forge-text mb-4 uppercase">Group Training Programs</h3>
              <p className="text-forge-muted mb-4">Join cohort-based training groups with other young athletes at your developmental stage for team camaraderie.</p>
              <ul className="space-y-2 text-sm text-forge-muted">
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Small group training</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Team environment</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Peer learning</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-2xl text-forge-text mb-4 uppercase">1-on-1 Coaching</h3>
              <p className="text-forge-muted mb-4">Personalized coaching for athletes with specific goals or sport-specific needs requiring individualized attention.</p>
              <ul className="space-y-2 text-sm text-forge-muted">
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Custom programming</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Individual attention</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Sport-specific focus</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-2xl text-forge-text mb-4 uppercase">Performance Camps</h3>
              <p className="text-forge-muted mb-4">Intensive training camps focused on specific skills, conditioning, or preparing for competition season.</p>
              <ul className="space-y-2 text-sm text-forge-muted">
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Intensive training</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Skill development</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Competition prep</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-2xl text-forge-text mb-4 uppercase">Athlete Development Program</h3>
              <p className="text-forge-muted mb-4">Multi-year development program designed for young athletes with championship aspirations.</p>
              <ul className="space-y-2 text-sm text-forge-muted">
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Long-term planning</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Progress tracking</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-forge-accent rounded-full mr-2"></span>Mentorship</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-forge-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 uppercase">
            Start Your Youth Athlete's Journey
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Give your young athlete the foundation for lifelong athletic success
          </p>
          <Link 
            to="/" 
            className="inline-block px-8 py-3 bg-forge-accent text-white font-bold uppercase tracking-wider rounded hover:bg-forge-accentHover transition-colors"
          >
            Enroll Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default YouthAthletes;
