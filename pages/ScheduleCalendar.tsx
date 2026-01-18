import React from 'react';
import { ArrowLeft, Calendar, Clock, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ScheduleCalendar: React.FC = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Class Schedule',
      description: 'Browse and book group training classes led by our expert coaches'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Find training times that fit your schedule with multiple options daily'
    },
    {
      icon: Users,
      title: 'Group Training',
      description: 'Train with others in a supportive community environment'
    },
    {
      icon: Zap,
      title: 'Personal Sessions',
      description: 'Book 1-on-1 coaching sessions tailored to your specific needs'
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
            alt="Schedule & Calendar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-6xl md:text-8xl font-bold text-white leading-tight tracking-tighter mb-6 drop-shadow-2xl uppercase">
            Schedule & Calendar
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium tracking-wide">
            Find the perfect training time for your schedule
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
            <span className="text-forge-accent font-bold tracking-widest uppercase text-sm mb-2 block">Classes & Bookings</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text mb-6 uppercase">
              Find Your Perfect Training Time
            </h2>
            <p className="text-lg text-forge-muted leading-relaxed">
              At Forge, we offer flexible scheduling to accommodate your lifestyle. Whether you prefer early morning sessions, lunch-time training, or evening workouts, we have classes and coaching available throughout the day to fit your schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-forge-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

      {/* Class Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text uppercase mb-4">
              Classes Available
            </h2>
            <p className="text-lg text-forge-muted max-w-3xl mx-auto">
              Choose from various class types to support your training goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Strength Training', time: '45 min', level: 'All Levels' },
              { name: 'Performance Training', time: '60 min', level: 'Intermediate+' },
              { name: 'Conditioning', time: '45 min', level: 'All Levels' },
              { name: 'Mobility & Recovery', time: '30 min', level: 'All Levels' },
              { name: 'Youth Development', time: '45 min', level: 'Ages 8-19' },
              { name: 'Sport-Specific', time: '60 min', level: 'Intermediate+' }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg text-forge-text mb-2 uppercase">{item.name}</h3>
                <div className="flex justify-between text-sm text-forge-muted">
                  <span>{item.time}</span>
                  <span>{item.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Schedule Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text uppercase">
              Sample Weekly Schedule
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-forge-dark">
                  <th className="px-4 py-3 text-left text-white font-bold uppercase text-sm">Time</th>
                  <th className="px-4 py-3 text-left text-white font-bold uppercase text-sm">Mon</th>
                  <th className="px-4 py-3 text-left text-white font-bold uppercase text-sm">Tue</th>
                  <th className="px-4 py-3 text-left text-white font-bold uppercase text-sm">Wed</th>
                  <th className="px-4 py-3 text-left text-white font-bold uppercase text-sm">Thu</th>
                  <th className="px-4 py-3 text-left text-white font-bold uppercase text-sm">Fri</th>
                  <th className="px-4 py-3 text-left text-white font-bold uppercase text-sm">Sat</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 font-bold text-forge-text">6:00 AM</td>
                  <td className="px-4 py-3 text-sm text-forge-muted">Strength</td>
                  <td className="px-4 py-3 text-sm text-forge-muted">Performance</td>
                  <td className="px-4 py-3 text-sm text-forge-muted">Strength</td>
                  <td className="px-4 py-3 text-sm text-forge-muted">Conditioning</td>
                  <td className="px-4 py-3 text-sm text-forge-muted">Strength</td>
                  <td className="px-4 py-3 text-sm text-forge-muted">Youth</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 font-bold text-forge-text">12:00 PM</td>
                  <td className="px-4 py-3 text-sm text-forge-muted">Conditioning</td>
                  <td className="px-4 py-3 text-sm text-forge-muted">Strength</td>
                  <td className="px-4 py-3 text-sm text-forge-muted">Performance</td>
                  <td className="px-4 py-3 text-sm text-forge-muted">Strength</td>
                  <td className="px-4 py-3 text-sm text-forge-muted">Conditioning</td>
                  <td className="px-4 py-3 text-sm text-forge-muted">Sport-Specific</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 font-bold text-forge-text">5:30 PM</td>
                  <td className="px-4 py-3 text-sm text-forge-muted">Performance</td>
                  <td className="px-4 py-3 text-sm text-forge-muted">Conditioning</td>
                  <td className="px-4 py-3 text-sm text-forge-muted">Strength</td>
                  <td className="px-4 py-3 text-sm text-forge-muted">Performance</td>
                  <td className="px-4 py-3 text-sm text-forge-muted">Strength</td>
                  <td className="px-4 py-3 text-sm text-forge-muted"></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-forge-text">7:00 PM</td>
                  <td className="px-4 py-3 text-sm text-forge-muted">Mobility</td>
                  <td className="px-4 py-3 text-sm text-forge-muted">Performance</td>
                  <td className="px-4 py-3 text-sm text-forge-muted">Conditioning</td>
                  <td className="px-4 py-3 text-sm text-forge-muted">Strength</td>
                  <td className="px-4 py-3 text-sm text-forge-muted">Performance</td>
                  <td className="px-4 py-3 text-sm text-forge-muted"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Booking Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forge-text uppercase">
              Why Book With Forge?
            </h2>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Expert Coaching</h3>
              <p className="text-forge-muted leading-relaxed">
                Every class is led by certified coaches with experience in your fitness level and goals.
              </p>
            </div>

            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Flexible Memberships</h3>
              <p className="text-forge-muted leading-relaxed">
                Choose from various membership options that fit your lifestyle and budget, with no long-term commitments.
              </p>
            </div>

            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Easy Online Booking</h3>
              <p className="text-forge-muted leading-relaxed">
                Reserve your spot quickly through our online platform with mobile app access and reminders.
              </p>
            </div>

            <div className="border-l-4 border-forge-accent pl-8 py-4">
              <h3 className="font-bold text-2xl text-forge-text mb-3 uppercase">Community Support</h3>
              <p className="text-forge-muted leading-relaxed">
                Train alongside like-minded individuals in a supportive and motivating environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-forge-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 uppercase">
            Find Your Training Time
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Browse the full schedule and book your first class today
          </p>
          <Link 
            to="/" 
            className="inline-block px-8 py-3 bg-forge-accent text-white font-bold uppercase tracking-wider rounded hover:bg-forge-accentHover transition-colors"
          >
            View Full Schedule
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ScheduleCalendar;
