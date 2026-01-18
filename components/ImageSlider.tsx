import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    image: "./forge1.jpeg",
    alt: "Coach 1"
  },
  {
    image: "./forge2.jpeg",
    alt: "Coach 2"
  },
  {
    image: "./forge3.jpeg",
    alt: "Coach 3"
  },
  {
    image: "./emong.jpg",
    alt: "Training Session"
  },
  {
    image: "./wokos.jpg",
    alt: "Performance Training"
  }
];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Lazy slide to the left at appropriate intervals (5 seconds)
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[700px] bg-white group overflow-hidden border border-gray-200 rounded-lg shadow-xl">
      {/* Main Slider Container */}
      <div 
        className="w-full h-full flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {SLIDES.map((slide, index) => (
          <div key={index} className="min-w-full h-full relative">
            <img 
              src={slide.image} 
              alt={slide.alt} 
              className="w-full h-full object-cover"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-forge-accent text-gray-900 hover:text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 z-10"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={28} />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-forge-accent text-gray-900 hover:text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 z-10"
        aria-label="Next Slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full shadow-sm ${
              index === currentIndex 
                ? 'w-3 h-3 bg-forge-accent scale-110' 
                : 'w-2 h-2 bg-white/70 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;