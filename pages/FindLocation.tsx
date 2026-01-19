import React, { useState } from 'react';
import { ArrowLeft, MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import forge2 from '../src/assets/forge2.jpeg';

const FindLocation: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState(0);

  const locations = [
    {
      name: 'Bweyogerere Main',
      address: 'Bweyogerere, Kampala, Uganda',
      phone: '+256 700 123 456',
      email: 'bweyogerere@forgeperformance.ug',
      hours: 'Mon-Fri: 5:30 AM - 9:00 PM\nSat: 7:00 AM - 6:00 PM\nSun: 9:00 AM - 5:00 PM',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8098066701506!2d32.65!3d0.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb0000000000%3A0x1234567890!2sBweyogerere%2C%20Kampala!5e0!3m2!1sen!2sug!4v1234567890',
      features: ['Olympic Platform', 'Performance Training', 'Recovery Zone', 'Coaching Staff', 'Group Classes']
    }
  ];

  const currentLocation = locations[selectedLocation];

  return (
    <div className="bg-white min-h-screen text-forge-text">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img
            src={forge2}
            alt="Find a Location"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-6xl md:text-8xl font-bold text-white leading-tight tracking-tighter mb-6 drop-shadow-2xl uppercase">
            Find a Location
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium tracking-wide">
            Visit our world-class training facilities
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

      {/* Locations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-forge-accent font-bold tracking-widest uppercase text-sm mb-2 block">Visit Us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text uppercase mb-4">
              Our Training Facilities
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Location List */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                {locations.map((location, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedLocation(index)}
                    className={`w-full p-6 rounded-lg border-2 text-left transition-all duration-300 ${
                      selectedLocation === index
                        ? 'border-forge-accent bg-forge-accent/10'
                        : 'border-gray-200 bg-white hover:border-forge-accent'
                    }`}
                  >
                    <h3 className="font-bold text-lg text-forge-text mb-2 uppercase">{location.name}</h3>
                    <p className="text-sm text-forge-muted flex items-start gap-2">
                      <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                      {location.address}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="lg:col-span-2">
              <div className="rounded-lg overflow-hidden shadow-lg h-full min-h-[400px]">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  loading="lazy"
                  allowFullScreen
                  src={currentLocation.mapEmbedUrl}
                  title={`Map of ${currentLocation.name}`}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-forge-accent/10 rounded flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-forge-accent" />
                </div>
                <h3 className="font-bold text-lg text-forge-text uppercase">Address</h3>
              </div>
              <p className="text-forge-muted leading-relaxed">{currentLocation.address}</p>
              <a href="#" className="inline-flex items-center gap-2 text-forge-accent font-bold uppercase tracking-wider text-sm hover:underline mt-4">
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
            </div>

            {/* Contact */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-forge-accent/10 rounded flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6 text-forge-accent" />
                </div>
                <h3 className="font-bold text-lg text-forge-text uppercase">Contact</h3>
              </div>
              <div className="space-y-3 text-forge-muted">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  {currentLocation.phone}
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <a href={`mailto:${currentLocation.email}`} className="text-forge-accent hover:underline">
                    {currentLocation.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-forge-accent/10 rounded flex items-center justify-center mr-4">
                  <Clock className="h-6 w-6 text-forge-accent" />
                </div>
                <h3 className="font-bold text-lg text-forge-text uppercase">Hours</h3>
              </div>
              <div className="text-forge-muted whitespace-pre-line text-sm leading-relaxed">
                {currentLocation.hours}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text uppercase mb-4">
              Facility Features
            </h2>
            <p className="text-lg text-forge-muted max-w-3xl mx-auto">
              At {currentLocation.name}, we provide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {currentLocation.features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center hover:shadow-lg transition-shadow">
                <p className="font-bold text-forge-text uppercase tracking-wider text-sm">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text uppercase">
              Member Amenities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-forge-text uppercase mb-4">Training Areas</h3>
              <ul className="space-y-3">
                {['Strength & Conditioning', 'Olympic Lifting Platform', 'Performance Training Zone', 'Cardio Area', 'Functional Training'].map((item, i) => (
                  <li key={i} className="flex items-center text-forge-muted">
                    <span className="w-2 h-2 bg-forge-accent rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg text-forge-text uppercase mb-4">Recovery & Wellness</h3>
              <ul className="space-y-3">
                {['Cold Plunge & Sauna', 'Stretching Area', 'Massage Services', 'Locker Rooms', 'Showers & Amenities'].map((item, i) => (
                  <li key={i} className="flex items-center text-forge-muted">
                    <span className="w-2 h-2 bg-forge-accent rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-forge-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 uppercase">
            Ready to Visit Forge?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Stop by our facility and experience world-class training firsthand
          </p>
          <Link 
            to="/" 
            className="inline-block px-8 py-3 bg-forge-accent text-white font-bold uppercase tracking-wider rounded hover:bg-forge-accentHover transition-colors"
          >
            Get Directions
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FindLocation;
