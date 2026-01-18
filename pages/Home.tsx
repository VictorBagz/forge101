import React from 'react';
import { 
  Activity, Users, Clock, MapPin, Instagram, Youtube, Twitter, Phone, Mail,
  Target, BarChart2, Video, MessageSquare, TrendingUp, Zap, 
  ClipboardCheck, Smartphone, Eye, Edit3, LineChart
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AICoach from '../components/AICoach';
import ImageSlider from '../components/ImageSlider';
import { Program, Trainer } from '../types';

// Constants defined here to keep file count low as per instruction
const PROGRAMS: Program[] = [
  {
    title: "Strength & Conditioning",
    description: "Build raw power and athletic resilience through compound movements and functional training.",
    icon: <Activity className="h-8 w-8 text-forge-accent" />,
    features: ["Olympic Lifting", "Powerlifting", "Mobility Work"]
  },
  {
    title: "HIIT & MetCon",
    description: "High-intensity metabolic conditioning designed to shred fat and boost endurance limits.",
    icon: <Clock className="h-8 w-8 text-forge-accent" />,
    features: ["Circuit Training", "Row/Ski/Bike", "Heart Rate Monitoring"]
  },
  {
    title: "Performance Recovery",
    description: "Optimize your downtime with state-of-the-art recovery tools and professional guidance.",
    icon: <Users className="h-8 w-8 text-forge-accent" />, // Using Users as placeholder icon
    features: ["Cold Plunge", "Infrared Sauna", "Compression Therapy"]
  }
];

const TRAINERS: Trainer[] = [
  {
    name: "Dennis Etuket",
    role: "Head Coach",
    bio: "Former Olympian",
    image: "./forge1.jpeg",
    specialties: ["Olympic Lifting", "Strength"]
  },
  {
    name: "Odongo Marvin",
    role: "Endurance Specialist",
    bio: "Ironman athlete helping members push past their mental and physical barriers.",
    image: "./forge2.jpeg",
    specialties: ["Cardio", "HIIT"]
  },
  {
    name: "Byron Okello",
    role: "Mobility & Recovery",
    bio: "Physiotherapy background focusing on injury prevention and longevity.",
    image: "./forge3.jpeg",
    specialties: ["Mobility", "Rehab"]
  }
];

const Home: React.FC = () => {
  return (
    <div className="bg-forge-black min-h-screen text-forge-text font-sans selection:bg-forge-accent selection:text-white">
      <Navbar />
      <Hero />
      
      {/* Introduction / Stats Section */}
      <section className="py-20 bg-forge-dark border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Mission Statement Block */}
          <div className="text-center max-w-5xl mx-auto mb-16 space-y-6">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-forge-text tracking-wider leading-none uppercase">
              Performance. <span className="text-forge-accent">Injury Prevention.</span> Athleticism.
            </h2>
            <p className="text-lg md:text-xl text-forge-muted font-medium tracking-widest uppercase max-w-3xl mx-auto border-l-2 border-forge-accent pl-6 text-left md:text-center md:border-l-0 md:pl-0">
              Whatever your age or athletic experience, get game-changing results with Forge Performance.
            </p>
          </div>
        </div>
      </section>

      {/* PHOTO SLIDER SECTION */}
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-14 py-16 md:py-24">
        <ImageSlider />
      </div>

      {/* NEW: Experience / Welcome Section */}
      <section className="py-24 bg-forge-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-20">
            <span className="text-forge-accent font-bold tracking-widest uppercase text-sm mb-2 block">The Forge Ecosystem</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-forge-text mb-6 uppercase">
              Where Potential Meets Performance
            </h2>
            <p className="text-xl text-forge-muted max-w-3xl leading-relaxed">
              Welcome to your new command center for athletic excellence. This isn't just another training platform—it's your personalized ecosystem for achieving what others call impossible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            {/* Unlocked Features */}
            <div>
              <h3 className="font-display text-2xl text-forge-text tracking-wider mb-8 flex items-center border-b border-gray-200 pb-4">
                <span className="text-forge-accent mr-3">///</span>
                WHAT YOU'VE UNLOCKED
              </h3>
              <ul className="grid grid-cols-1 gap-6">
                {[
                  { icon: <Target className="w-5 h-5" />, text: "Personalized Training Programs" },
                  { icon: <BarChart2 className="w-5 h-5" />, text: "Daily Performance Tracking" },
                  { icon: <Video className="w-5 h-5" />, text: "Expert Exercise Library" },
                  { icon: <MessageSquare className="w-5 h-5" />, text: "Real-Time Coach Communication" },
                  { icon: <TrendingUp className="w-5 h-5" />, text: "Progress Analytics" },
                  { icon: <Activity className="w-5 h-5" />, text: "Integrated Rehabilitation" },
                  { icon: <Zap className="w-5 h-5" />, text: "Recovery Optimization" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-600 group">
                    <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center text-forge-accent mr-4 group-hover:bg-forge-accent group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <span className="font-medium group-hover:text-forge-text transition-colors">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quote Block */}
            <div className="bg-gray-100 p-12 border border-gray-200 relative overflow-hidden flex flex-col justify-center rounded-sm">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Users className="w-64 h-64 text-black" />
              </div>
              <div className="relative z-10">
                <div className="text-forge-accent mb-6">
                  <span className="text-6xl font-display leading-none">"</span>
                </div>
                <blockquote className="font-display text-4xl md:text-5xl text-gray-900 leading-tight mb-8">
                  Champions aren't born—they're forged through consistent, intelligent work. This platform is your anvil.
                </blockquote>
                <div className="flex items-center">
                  <div className="h-px w-12 bg-forge-accent mr-4"></div>
                  <p className="text-forge-muted text-sm font-bold uppercase tracking-widest">The Forge Performance Team</p>
                </div>
              </div>
            </div>
          </div>

          {/* Journey Steps */}
          <div className="bg-forge-dark border border-gray-200 p-8 md:p-12 rounded-sm shadow-sm">
            <h3 className="font-display text-3xl text-forge-text tracking-wider mb-12 text-center uppercase">Your Journey Starts Here</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200 -z-0"></div>

              {[
                { icon: <ClipboardCheck className="w-6 h-6" />, title: "Check-In", desc: "Complete daily wellness check-in" },
                { icon: <Smartphone className="w-6 h-6" />, title: "Access", desc: "View today's training program" },
                { icon: <Eye className="w-6 h-6" />, title: "Review", desc: "Watch exercise demonstrations" },
                { icon: <Edit3 className="w-6 h-6" />, title: "Log", desc: "Record your session performance" },
                { icon: <LineChart className="w-6 h-6" />, title: "Track", desc: "Analyze your progress over time" },
              ].map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-white border-2 border-forge-accent text-forge-text rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div className="text-forge-accent font-display text-xl font-bold mb-2">0{i + 1}</div>
                  <h4 className="text-forge-text font-bold mb-2 uppercase">{step.title}</h4>
                  <p className="text-sm text-forge-muted">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-forge-accent/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text mb-4">ENGINEERED PROGRAMS</h2>
            <div className="w-24 h-1 bg-forge-accent mx-auto"></div>
            <p className="mt-4 text-forge-muted max-w-2xl mx-auto">Scientifically designed training regimens to target specific biological adaptations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROGRAMS.map((program, idx) => (
              <div key={idx} className="bg-white border border-gray-200 p-8 group hover:border-forge-accent/50 transition-all hover:-translate-y-2 duration-300 relative overflow-hidden shadow-sm hover:shadow-xl">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  {program.icon}
                </div>
                <div className="mb-6 p-3 bg-gray-50 inline-block rounded border border-gray-200 group-hover:border-forge-accent/50 group-hover:text-forge-accent transition-colors">
                  {program.icon}
                </div>
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-forge-muted mb-6 leading-relaxed text-sm">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feat, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-forge-accent mr-2 rounded-full"></div>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-24 bg-forge-dark border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text">ELITE COACHING</h2>
              <div className="w-24 h-1 bg-forge-accent mt-4"></div>
            </div>
            <p className="text-forge-muted max-w-md mt-6 md:mt-0 text-right md:text-left">
              Our coaches aren't just cheerleaders. They are certified experts dedicated to your progress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRAINERS.map((trainer, idx) => (
              <div key={idx} className="group relative overflow-hidden h-[500px] border border-gray-200 shadow-sm">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                />
                {/* Dark gradient for text readability over image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-forge-accent text-xs font-bold uppercase tracking-wider mb-2">{trainer.role}</div>
                  <h3 className="font-display text-3xl font-bold text-white mb-2">{trainer.name}</h3>
                  <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {trainer.bio}
                  </p>
                  <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    {trainer.specialties.map((spec, i) => (
                      <span key={i} className="px-2 py-1 bg-white/20 text-xs text-white rounded border border-white/20">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
               <a href="#" className="flex items-center space-x-2 mb-6 group">
                <img 
                  src="./logo.png" 
                  alt="Forge Performance Hub" 
                  className="h-14 w-auto object-contain brightness-0 invert"
                />
              </a>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Forging elite performance through science, sweat, and community. Join the movement.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-forge-accent transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-forge-accent transition-colors"><Youtube size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-forge-accent transition-colors"><Twitter size={20} /></a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white uppercase tracking-wider mb-6 text-sm">Programs</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Strength Training</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cardio & HIIT</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Recovery</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Personal Training</a></li>
              </ul>
            </div>

             <div>
              <h4 className="font-bold text-white uppercase tracking-wider mb-6 text-sm">Company</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white uppercase tracking-wider mb-6 text-sm">Contact</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-forge-accent mr-3 mt-0.5" />
                  <span>Kings Park arena,<br />Bweyogerere, Wakiso</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-forge-accent mr-3" />
                  <span>+256 774521554</span>
                </li>
                 <li className="flex items-center">
                  <Mail className="h-5 w-5 text-forge-accent mr-3" />
                  <span>info@forgehub.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Forge Performance Hub. All rights reserved.
          </div>
        </div>
      </footer>

      <AICoach />
    </div>
  );
};

export default Home;