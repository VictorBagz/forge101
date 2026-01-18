import React, { useState } from 'react';
import { ArrowLeft, Search, Filter, Play, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ExerciseLibrary: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const exercises = [
    { name: 'Barbell Back Squat', category: 'Strength', difficulty: 'Intermediate', video: true },
    { name: 'Deadlift', category: 'Strength', difficulty: 'Intermediate', video: true },
    { name: 'Bench Press', category: 'Strength', difficulty: 'Intermediate', video: true },
    { name: 'Box Jump', category: 'Power', difficulty: 'Intermediate', video: true },
    { name: 'Medicine Ball Slam', category: 'Power', difficulty: 'Beginner', video: true },
    { name: 'Kettlebell Swing', category: 'Conditioning', difficulty: 'Beginner', video: true },
    { name: 'Sprinting', category: 'Conditioning', difficulty: 'Beginner', video: true },
    { name: 'Battle Ropes', category: 'Conditioning', difficulty: 'Intermediate', video: true },
    { name: 'Push-ups', category: 'Strength', difficulty: 'Beginner', video: true },
    { name: 'Pull-ups', category: 'Strength', difficulty: 'Intermediate', video: true },
    { name: 'Plyometric Push-up', category: 'Power', difficulty: 'Advanced', video: true },
    { name: 'Lateral Lunge', category: 'Mobility', difficulty: 'Beginner', video: true }
  ];

  const categories = ['All', 'Strength', 'Power', 'Conditioning', 'Mobility'];
  
  const filteredExercises = selectedCategory === 'All' 
    ? exercises 
    : exercises.filter(ex => ex.category === selectedCategory);

  return (
    <div className="bg-white min-h-screen text-forge-text">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img
            src="./forge2.jpeg"
            alt="Exercise Library"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-6xl md:text-8xl font-bold text-white leading-tight tracking-tighter mb-6 drop-shadow-2xl uppercase">
            Exercise Library
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium tracking-wide">
            Learn proper form and techniques for every exercise
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
            <span className="text-forge-accent font-bold tracking-widest uppercase text-sm mb-2 block">Learn & Master</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text mb-6 uppercase">
              Comprehensive Exercise Database
            </h2>
            <p className="text-lg text-forge-muted leading-relaxed">
              The Forge Exercise Library contains hundreds of exercises with detailed instructions, video demonstrations, and coaching cues. Whether you're a beginner learning fundamental movements or an advanced athlete perfecting your technique, our library provides the guidance you need to execute exercises safely and effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-3 h-5 w-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search exercises..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forge-accent"
              />
            </div>
          </div>

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

      {/* Exercise Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredExercises.map((exercise, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col group cursor-pointer"
              >
                {/* Image Placeholder */}
                <div className="bg-gray-200 h-40 flex items-center justify-center group-hover:bg-forge-accent/20 transition-colors relative">
                  {exercise.video && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="h-12 w-12 text-forge-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-lg text-forge-text mb-2 group-hover:text-forge-accent transition-colors">
                    {exercise.name}
                  </h3>
                  
                  <div className="flex gap-2 mb-4 flex-wrap">
                    <span className="inline-block px-2 py-1 bg-forge-accent/10 text-forge-accent font-bold text-xs uppercase rounded">
                      {exercise.category}
                    </span>
                    <span className={`inline-block px-2 py-1 font-bold text-xs uppercase rounded ${
                      exercise.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                      exercise.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {exercise.difficulty}
                    </span>
                  </div>

                  <div className="mt-auto">
                    <button className="w-full px-4 py-2 bg-forge-accent text-white font-bold uppercase tracking-wider text-sm rounded hover:bg-forge-accentHover transition-colors flex items-center justify-center gap-2">
                      <Play className="h-4 w-4" />
                      View Technique
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Library Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text uppercase mb-4">
              What's Included
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
              <Zap className="h-12 w-12 text-forge-accent mx-auto mb-4" />
              <h3 className="font-bold text-lg text-forge-text mb-2 uppercase">Video Demonstrations</h3>
              <p className="text-forge-muted">Multiple angle video demonstrations of each exercise for proper form reference</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
              <Filter className="h-12 w-12 text-forge-accent mx-auto mb-4" />
              <h3 className="font-bold text-lg text-forge-text mb-2 uppercase">Coaching Cues</h3>
              <p className="text-forge-muted">Expert coaching tips to help you execute exercises perfectly and safely</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
              <Search className="h-12 w-12 text-forge-accent mx-auto mb-4" />
              <h3 className="font-bold text-lg text-forge-text mb-2 uppercase">Progressions</h3>
              <p className="text-forge-muted">Exercise progressions and regressions for all fitness levels</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text uppercase">
              Structured Learning Paths
            </h2>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Beginner Fundamentals</h3>
              <p className="text-forge-muted leading-relaxed">
                Start with foundational movements and basic exercise techniques. Build a solid foundation before progressing to advanced variations.
              </p>
            </div>

            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Intermediate Development</h3>
              <p className="text-forge-muted leading-relaxed">
                Progress to compound movements and sport-specific exercises. Refine your technique and build strength and power.
              </p>
            </div>

            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Advanced Mastery</h3>
              <p className="text-forge-muted leading-relaxed">
                Master advanced variations, complex movements, and elite-level techniques for peak performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-forge-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 uppercase">
            Master Your Technique
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Access the full Exercise Library with detailed videos and coaching guidance
          </p>
          <Link 
            to="/" 
            className="inline-block px-8 py-3 bg-forge-accent text-white font-bold uppercase tracking-wider rounded hover:bg-forge-accentHover transition-colors"
          >
            Access Library
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ExerciseLibrary;
