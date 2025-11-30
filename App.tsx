import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Workflow } from './components/Workflow';
import { Architecture } from './components/Architecture';
import { MockPluginEditor } from './components/MockPluginEditor';
import { Impact } from './components/Impact';
import { Team } from './components/Team';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <MockPluginEditor />
        <Workflow />
        <Architecture />
        <Impact />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

export default App;