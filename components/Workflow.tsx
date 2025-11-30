import React from 'react';
import { WORKFLOW_STEPS } from '../constants';
import { ArrowRight } from 'lucide-react';

export const Workflow: React.FC = () => {
  return (
    <section id="workflow" className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
             <h2 className="text-agri-600 font-semibold tracking-wide uppercase text-sm mb-2">Workflow</h2>
             <h3 className="text-3xl font-bold text-slate-900">From Field to Automation in 5 Steps</h3>
             <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                AgriOS streamlines the entire process of setting up and running autonomous agricultural operations.
             </p>
        </div>

        <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[2.5rem] left-0 right-0 h-0.5 bg-slate-100 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                {WORKFLOW_STEPS.map((step, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center group">
                        <div className="w-20 h-20 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center shadow-lg group-hover:border-agri-500 group-hover:scale-110 transition-all duration-300 mb-6 relative">
                            <step.icon className="w-8 h-8 text-agri-600" />
                            <div className="absolute -top-1 -right-1 w-7 h-7 bg-slate-900 text-white rounded-full text-sm flex items-center justify-center font-bold border-2 border-white">
                                0{idx + 1}
                            </div>
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{step.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                        
                        {/* Mobile Arrow */}
                        {idx < WORKFLOW_STEPS.length - 1 && (
                            <ArrowRight className="md:hidden w-6 h-6 text-slate-300 mt-6 rotate-90" />
                        )}
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};