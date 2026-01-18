import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import ClientReviews from './pages/ClientReviews';
import TrainingMethods from './pages/TrainingMethods';
import Articles from './pages/Articles';
import AdultFitness from './pages/AdultFitness';
import EliteAthletes from './pages/EliteAthletes';
import InjuredAthletes from './pages/InjuredAthletes';
import YouthAthletes from './pages/YouthAthletes';
import PerformanceTraining from './pages/PerformanceTraining';
import SportsConditioning from './pages/SportsConditioning';
import SportsRecovery from './pages/SportsRecovery';
import SportsMedicine from './pages/SportsMedicine';
import WellnessTracking from './pages/WellnessTracking';
import ScheduleCalendar from './pages/ScheduleCalendar';
import ExerciseLibrary from './pages/ExerciseLibrary';
import FindLocation from './pages/FindLocation';

function App() {
  return (
    <Router basename="/FORGE">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/client-reviews" element={<ClientReviews />} />
        <Route path="/training-methods" element={<TrainingMethods />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/adult-fitness" element={<AdultFitness />} />
        <Route path="/elite-athletes" element={<EliteAthletes />} />
        <Route path="/injured-athletes" element={<InjuredAthletes />} />
        <Route path="/youth-athletes" element={<YouthAthletes />} />
        <Route path="/performance-training" element={<PerformanceTraining />} />
        <Route path="/sports-conditioning" element={<SportsConditioning />} />
        <Route path="/sports-recovery" element={<SportsRecovery />} />
        <Route path="/sports-medicine" element={<SportsMedicine />} />
        <Route path="/wellness-tracking" element={<WellnessTracking />} />
        <Route path="/schedule-calendar" element={<ScheduleCalendar />} />
        <Route path="/exercise-library" element={<ExerciseLibrary />} />
        <Route path="/find-location" element={<FindLocation />} />
      </Routes>
    </Router>
  );
}

export default App;