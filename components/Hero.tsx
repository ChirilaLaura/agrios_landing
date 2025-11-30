import React from 'react';
import { ArrowRight, PlayCircle, Cpu, Bot, Sparkles } from 'lucide-react';
import { SimulationCanvas } from './SimulationCanvas';
import { TAGLINE, SUB_TAGLINE } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-agri-50 via-white to-white opacity-70"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-agri-50 border border-agri-200 text-agri-700 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-agri-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-agri-500"></span>
              </span>
              Rice University • COMP 461: Senior Design in A Robotized World
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {TAGLINE}
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {SUB_TAGLINE}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-agri-600 hover:bg-agri-700 text-white rounded-xl font-semibold transition-all hover:scale-105 shadow-xl shadow-agri-600/20"
              >
                Explore Features
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl font-semibold transition-all hover:shadow-lg"
              >
                <PlayCircle className="w-5 h-5 text-agri-600" />
                Watch Demo
              </button>
            </div>

            {/* Stats / Badges */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
               <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                     <Cpu className="w-5 h-5 text-agri-600" />
                     <span className="font-bold text-slate-900 text-xl">3</span>
                  </div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Assignment Algorithms</div>
               </div>
               <div className="text-center lg:text-left border-l border-slate-100 pl-4">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                     <Bot className="w-5 h-5 text-blue-500" />
                     <span className="font-bold text-slate-900 text-xl">∞</span>
                  </div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Scalable Robots</div>
               </div>
               <div className="text-center lg:text-left border-l border-slate-100 pl-4">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                     <Sparkles className="w-5 h-5 text-purple-500" />
                     <span className="font-bold text-slate-900 text-xl">AI</span>
                  </div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Plugin Generation</div>
               </div>
            </div>
          </div>

          {/* Hero Visual / Simulation */}
          <div className="relative">
             <div className="absolute -inset-1 bg-gradient-to-r from-agri-400 to-teal-400 rounded-2xl blur opacity-30 animate-pulse"></div>
             <SimulationCanvas />
          </div>

        </div>
      </div>
    </section>
  );
};