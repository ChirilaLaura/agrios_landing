import React from 'react';
import { TEAM_MEMBERS } from '../constants';

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-agri-600 font-semibold tracking-wide uppercase text-sm mb-2">The Team</h2>
            <h3 className="text-3xl font-bold text-slate-900">Meet Team AgriOS</h3>
            <p className="text-slate-600 mt-2">Rice University • COMP 461: Senior Design in A Robotized World • Fall 2025</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
           {TEAM_MEMBERS.map((member, idx) => (
               <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                   <div className="w-20 h-20 bg-agri-100 rounded-full flex items-center justify-center text-agri-700 text-2xl font-bold mb-4 border-4 border-white shadow-sm">
                       {member.initial}
                   </div>
                   <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
                   <p className="text-agri-600 text-sm font-semibold mb-4">{member.role}</p>
                   <p className="text-slate-500 text-sm leading-relaxed">
                       {member.description}
                   </p>
               </div>
           ))}
        </div>
      </div>
    </section>
  );
};