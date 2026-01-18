import React from 'react';
import { ArrowLeft, BookOpen, Lightbulb, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Articles: React.FC = () => {
  const articles = [
    {
      category: 'Training',
      title: 'The Science of Progressive Overload',
      excerpt: 'Understanding how to systematically increase training stimulus for continuous gains without burnout or injury.',
      date: 'January 15, 2024',
      readTime: '8 min read'
    },
    {
      category: 'Recovery',
      title: 'Sleep, Nutrition, and Performance: The Recovery Trifecta',
      excerpt: 'Why recovery is just as important as training, and how to optimize sleep and nutrition for peak performance.',
      date: 'January 10, 2024',
      readTime: '10 min read'
    },
    {
      category: 'Fitness',
      title: 'Building Sustainable Strength Training Habits',
      excerpt: 'Practical strategies for creating consistent training routines that actually stick, even with a busy lifestyle.',
      date: 'January 5, 2024',
      readTime: '7 min read'
    },
    {
      category: 'Sports Performance',
      title: 'Injury Prevention in Athletic Training',
      excerpt: 'Evidence-based approaches to identifying and addressing movement dysfunctions before they become injuries.',
      date: 'December 28, 2023',
      readTime: '12 min read'
    },
    {
      category: 'Nutrition',
      title: 'Fueling for Performance: Nutrition Timing and Composition',
      excerpt: 'How to optimize your diet around training sessions to maximize performance gains and recovery.',
      date: 'December 20, 2023',
      readTime: '9 min read'
    },
    {
      category: 'Mental Fitness',
      title: 'The Psychology of Performance: Mindset Over Matter',
      excerpt: 'Exploring the mental strategies that separate elite performers from the rest and how to develop them.',
      date: 'December 15, 2023',
      readTime: '11 min read'
    },
    {
      category: 'Training',
      title: 'Periodization Models for Different Athletic Goals',
      excerpt: 'A comprehensive guide to choosing and implementing the right periodization strategy for your specific goals.',
      date: 'December 10, 2023',
      readTime: '13 min read'
    },
    {
      category: 'Mobility',
      title: 'Mobility vs. Flexibility: What\'s the Difference?',
      excerpt: 'Understanding the distinction between these two concepts and why both matter for your long-term health.',
      date: 'December 5, 2023',
      readTime: '6 min read'
    }
  ];

  const categories = ['All', 'Training', 'Recovery', 'Fitness', 'Sports Performance', 'Nutrition', 'Mental Fitness', 'Mobility'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="bg-white min-h-screen text-forge-text">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img
            src="./forge2.jpeg"
            alt="Articles"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-6xl md:text-8xl font-bold text-white leading-tight tracking-tighter mb-6 drop-shadow-2xl uppercase">
            Articles
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium tracking-wide">
            Insights, tips, and evidence-based knowledge to fuel your performance journey
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

      {/* Category Filter */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded font-medium uppercase tracking-wider text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-forge-accent text-white'
                    : 'bg-white text-forge-text border border-gray-300 hover:border-forge-accent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col group cursor-pointer"
              >
                {/* Category Badge */}
                <div className="px-6 pt-6">
                  <span className="inline-block px-3 py-1 bg-forge-accent/10 text-forge-accent font-bold text-xs uppercase tracking-wider rounded">
                    {article.category}
                  </span>
                </div>

                {/* Content */}
                <div className="px-6 py-4 flex-1 flex flex-col">
                  <h3 className="font-display text-xl font-bold text-forge-text mb-2 group-hover:text-forge-accent transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-forge-muted leading-relaxed mb-4 flex-1">
                    {article.excerpt}
                  </p>
                </div>

                {/* Footer */}
                <div className="px-6 pb-6">
                  <div className="flex justify-between items-center text-sm text-forge-muted border-t border-gray-100 pt-4">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-forge-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Lightbulb className="h-12 w-12 text-forge-accent mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 uppercase">
            Stay Informed
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Subscribe to receive the latest articles, training tips, and performance insights directly to your inbox
          </p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 max-w-sm px-4 py-3 rounded bg-white text-forge-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forge-accent"
            />
            <button 
              type="submit"
              className="px-8 py-3 bg-forge-accent text-white font-bold uppercase tracking-wider rounded hover:bg-forge-accentHover transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text uppercase">
              Other Resources
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <BookOpen className="h-12 w-12 text-forge-accent mx-auto mb-4" />
              <h3 className="font-bold text-lg text-forge-text mb-2 uppercase">Exercise Library</h3>
              <p className="text-forge-muted mb-4">Browse our comprehensive database of proper exercise techniques and form cues</p>
              <Link to="/" className="text-forge-accent font-bold uppercase tracking-wider text-sm hover:underline">
                Explore →
              </Link>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <Target className="h-12 w-12 text-forge-accent mx-auto mb-4" />
              <h3 className="font-bold text-lg text-forge-text mb-2 uppercase">Training Programs</h3>
              <p className="text-forge-muted mb-4">Discover ready-made programs designed by our coaches for various fitness levels</p>
              <Link to="/" className="text-forge-accent font-bold uppercase tracking-wider text-sm hover:underline">
                Browse →
              </Link>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-forge-accent mx-auto mb-4" />
              <h3 className="font-bold text-lg text-forge-text mb-2 uppercase">Community Forum</h3>
              <p className="text-forge-muted mb-4">Connect with other members, share experiences, and get expert advice</p>
              <Link to="/" className="text-forge-accent font-bold uppercase tracking-wider text-sm hover:underline">
                Join →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;
