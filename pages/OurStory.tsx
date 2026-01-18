import React from 'react';
import { ArrowLeft, Target, Award, Heart, Users, TrendingUp, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const OurStory: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-forge-text">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img
            src="./forge2.jpeg"
            alt="Forge Performance Story"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-6xl md:text-8xl font-bold text-white leading-tight tracking-tighter mb-6 drop-shadow-2xl uppercase">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium tracking-wide">
            From a vision to a movement—building Uganda's premier performance training facility
          </p>
        </div>
      </section>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link 
          to="./" 
          className="inline-flex items-center text-forge-accent hover:text-forge-accentHover font-bold uppercase tracking-wider text-sm transition-colors group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </div>

      {/* Origin Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-forge-accent font-bold tracking-widest uppercase text-sm mb-2 block">The Beginning</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text mb-6 uppercase">
              Where It All Started
            </h2>
          </div>

          <div className="prose prose-lg max-w-none space-y-6 text-forge-muted leading-relaxed">
            <p className="text-xl font-medium text-forge-text">
              Forge Performance Hub was born from a simple observation: Uganda's athletes deserved world-class training facilities and expertise that matched their incredible potential.
            </p>
            
            <p>
              In 2019, our founders—former athletes themselves—recognized a critical gap in the local fitness landscape. While talent was abundant, access to scientific training methodologies, proper recovery protocols, and elite coaching remained limited to a privileged few.
            </p>

            <p>
              What started as weekend training sessions in a modest space at Kings Park Arena has evolved into Bweyogerere's most comprehensive performance training facility. We've built more than just a gym—we've created an ecosystem where athletes, fitness enthusiasts, and rehabilitation clients can access the same tools and expertise used by professional sports organizations worldwide.
            </p>

            <p>
              Today, Forge Performance Hub stands as a testament to what's possible when passion meets purpose. Every barbell, every recovery tool, every coaching session reflects our unwavering commitment to elevating performance standards across Uganda.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-forge-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-forge-accent font-bold tracking-widest uppercase text-sm mb-2 block">What Drives Us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text uppercase">
              Mission & Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Mission */}
            <div className="bg-white border border-gray-200 p-10 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-forge-accent/10 rounded flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-forge-accent" />
                </div>
                <h3 className="font-display text-3xl font-bold text-forge-text uppercase">Our Mission</h3>
              </div>
              <p className="text-forge-muted leading-relaxed">
                To democratize elite athletic performance training by providing world-class facilities, evidence-based programming, and expert coaching to every individual committed to maximizing their physical potential—regardless of background or experience level.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white border border-gray-200 p-10 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-forge-accent/10 rounded flex items-center justify-center mr-4">
                  <TrendingUp className="h-6 w-6 text-forge-accent" />
                </div>
                <h3 className="font-display text-3xl font-bold text-forge-text uppercase">Our Vision</h3>
              </div>
              <p className="text-forge-muted leading-relaxed">
                To establish the gold standard for performance training across East Africa, creating a pipeline of athletes, coaches, and fitness professionals who elevate the region's reputation in global sports and wellness.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Award className="h-6 w-6" />,
                title: "Excellence",
                description: "We pursue mastery in every detail—from programming to execution to recovery."
              },
              {
                icon: <Heart className="h-6 w-6" />,
                title: "Integrity",
                description: "Honest assessments, evidence-based methods, and transparent communication guide everything we do."
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Community",
                description: "Individual growth flourishes in a supportive environment. We rise together."
              },
              {
                icon: <Zap className="h-6 w-6" />,
                title: "Innovation",
                description: "We continuously evolve our methods, incorporating cutting-edge science and technology."
              },
              {
                icon: <Target className="h-6 w-6" />,
                title: "Results",
                description: "Measurable progress drives our programming. Your success is our metric."
              },
              {
                icon: <Heart className="h-6 w-6" />,
                title: "Safety",
                description: "Intelligent training minimizes risk while maximizing gains. Longevity matters."
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-white border border-gray-200 p-6 group hover:border-forge-accent/50 transition-all shadow-sm">
                <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center text-forge-accent mb-4 group-hover:bg-forge-accent group-hover:text-white transition-colors">
                  {value.icon}
                </div>
                <h4 className="font-display text-xl font-bold text-forge-text mb-2 uppercase">{value.title}</h4>
                <p className="text-sm text-forge-muted leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Team Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-forge-accent font-bold tracking-widest uppercase text-sm mb-2 block">Our Approach</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text mb-6 uppercase">
              The Forge Philosophy
            </h2>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-forge-accent pl-6">
              <h3 className="font-display text-2xl font-bold text-forge-text mb-3 uppercase">Science Meets Sweat</h3>
              <p className="text-forge-muted leading-relaxed">
                Every program we design is rooted in exercise science, biomechanics, and sports medicine. But data alone doesn't build champions—it's the fusion of evidence-based programming with old-school grit that produces extraordinary results.
              </p>
            </div>

            <div className="border-l-4 border-forge-accent pl-6">
              <h3 className="font-display text-2xl font-bold text-forge-text mb-3 uppercase">Individual Within Community</h3>
              <p className="text-forge-muted leading-relaxed">
                While we celebrate the collective energy of training together, we recognize that every athlete's journey is unique. Our coaches design personalized progressions that honor your starting point, respect your constraints, and push your specific limits.
              </p>
            </div>

            <div className="border-l-4 border-forge-accent pl-6">
              <h3 className="font-display text-2xl font-bold text-forge-text mb-3 uppercase">Performance, Not Just Exercise</h3>
              <p className="text-forge-muted leading-relaxed">
                We don't sell workouts—we build athletic capacity. Whether you're training for life, sport, or competition, our focus remains constant: optimize movement quality, develop resilient tissues, and enhance your ability to express power, speed, and endurance when it matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Impact */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-forge-accent font-bold tracking-widest uppercase text-sm mb-2 block">By The Numbers</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase">
              Our Impact
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Active Members" },
              { number: "50+", label: "Elite Athletes Trained" },
              { number: "10,000+", label: "Training Sessions Delivered" },
              { number: "95%", label: "Client Satisfaction Rate" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="font-display text-5xl md:text-6xl font-bold text-forge-accent mb-2">{stat.number}</div>
                <div className="text-gray-400 uppercase tracking-wider text-sm font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forge-dark border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text mb-6 uppercase">
            Ready to Write Your Story?
          </h2>
          <p className="text-xl text-forge-muted mb-10 leading-relaxed">
            Join hundreds of athletes who've transformed their performance at Forge. Your journey starts with a single session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#membership"
              className="px-8 py-4 bg-forge-accent hover:bg-forge-accentHover text-white font-bold uppercase tracking-wider text-sm transition-all inline-block"
            >
              Start Your Journey
            </Link>
            <Link
              to="/#trainers"
              className="px-8 py-4 border-2 border-gray-300 hover:border-forge-accent hover:text-forge-accent text-forge-text font-bold uppercase tracking-wider text-sm transition-all inline-block"
            >
              Meet Our Coaches
            </Link>
          </div>
        </div>
      </section>

      {/* Footer - Simple version for secondary page */}
      <footer className="bg-gray-900 text-white py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Forge Performance Hub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default OurStory;