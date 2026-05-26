import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ValueProps from './components/ValueProps';
import LeagueTable from './components/LeagueTable';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';


const App = () => {

  return (
    <div className="min-h-screen bg-[#faf8f3]">
      

      <Navbar />

      <Hero />

      <Stats />

      <ValueProps />

      <LeagueTable />

      <CallToAction />

      <Footer />

      
    </div>
  );
};

export default App;
