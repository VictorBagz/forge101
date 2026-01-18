import React from 'react';
import { ArrowLeft, Star, Users, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ClientReviews: React.FC = () => {
  const reviews = [
    {
      name: 'Alex Kato',
      role: 'Professional Athlete',
      rating: 5,
      text: 'Forge transformed my training regimen. The coaches understand the nuances of athletic performance like no one else I\'ve worked with.',
      image: './client-1.jpg'
    },
    {
      name: 'Priscilla Nnanna',
      role: 'Fitness Enthusiast',
      rating: 5,
      text: 'The facilities are world-class and the team genuinely cares about your progress. I\'ve never felt more supported in my fitness journey.',
      image: './client-2.jpg'
    },
    {
      name: 'Michael Okonkwo',
      role: 'Rehabilitation Client',
      rating: 5,
      text: 'After my injury, Forge\'s rehabilitation program helped me return stronger than ever. Professional and compassionate from day one.',
      image: './client-3.jpg'
    },
    {
      name: 'Sarah Mwangi',
      role: 'Corporate Wellness',
      rating: 5,
      text: 'Our team has seen remarkable improvements in health and energy levels since joining Forge\'s corporate program. Highly recommended!',
      image: './client-4.jpg'
    },
    {
      name: 'James Osei',
      role: 'Youth Athlete',
      rating: 5,
      text: 'As a young athlete, having access to professional coaching and modern facilities at Forge has accelerated my development significantly.',
      image: './client-5.jpg'
    },
    {
      name: 'Linda Mensah',
      role: 'Adult Fitness',
      rating: 5,
      text: 'Never thought I could achieve this level of fitness. The personalized approach and supportive community make all the difference.',
      image: './client-6.jpg'
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
            alt="Client Reviews"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-6xl md:text-8xl font-bold text-white leading-tight tracking-tighter mb-6 drop-shadow-2xl uppercase">
            Client Reviews
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium tracking-wide">
            Hear from our community of athletes, fitness enthusiasts, and success stories
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

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-forge-accent font-bold tracking-widest uppercase text-sm mb-2 block">Success Stories</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text uppercase mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-forge-muted max-w-3xl mx-auto">
              Real stories from real people who've transformed their fitness and performance at Forge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-forge-text">{review.name}</h3>
                    <p className="text-sm text-forge-accent font-medium uppercase tracking-wider">{review.role}</p>
                  </div>
                  <MessageCircle className="h-5 w-5 text-forge-accent" />
                </div>
                
                <div className="flex mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-forge-accent text-forge-accent" />
                  ))}
                </div>

                <p className="text-forge-muted leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-forge-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="font-display text-5xl md:text-6xl font-bold text-forge-accent mb-2">500+</div>
              <p className="text-lg text-forge-muted uppercase tracking-widest font-semibold">Active Members</p>
            </div>
            <div className="text-center">
              <div className="font-display text-5xl md:text-6xl font-bold text-forge-accent mb-2">95%</div>
              <p className="text-lg text-forge-muted uppercase tracking-widest font-semibold">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <div className="font-display text-5xl md:text-6xl font-bold text-forge-accent mb-2">1000+</div>
              <p className="text-lg text-forge-muted uppercase tracking-widest font-semibold">Lives Transformed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-forge-text mb-6 uppercase">
            Ready to Become a Forge Success Story?
          </h2>
          <p className="text-lg text-forge-muted mb-8">
            Join our community and start your transformation journey today
          </p>
          <Link 
            to="/" 
            className="inline-block px-8 py-3 bg-forge-accent text-white font-bold uppercase tracking-wider rounded hover:bg-forge-accentHover transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ClientReviews;
