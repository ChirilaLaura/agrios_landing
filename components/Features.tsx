import React from 'react';
import { FEATURES } from '../constants';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-agri-600 font-semibold tracking-wide uppercase text-sm mb-2">Core Capabilities</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything You Need for Smart Farming</h3>
          <p className="text-slate-600 text-lg">
            A complete ecosystem for managing autonomous agricultural operations, from mapping to execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-agri-200 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-agri-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-agri-600 transition-colors">
                <feature.icon className="w-7 h-7 text-agri-600 group-hover:text-white transition-colors" />
              </div>
              
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              <ul className="space-y-2">
                {feature.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-center text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-agri-400 mr-2"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};