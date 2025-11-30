import React from 'react';
import { IMPACT_ITEMS, EVALUATION_METRICS } from '../constants';
import { Users, ShieldCheck, Zap, Sun } from 'lucide-react';

export const Impact: React.FC = () => {
  const icons = [Users, ShieldCheck, Zap, Sun];

  return (
    <section id="impact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-agri-50 rounded-full blur-[100px] opacity-70"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center justify-center px-4 py-1.5 bg-agri-50 border border-agri-100 text-agri-700 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                Why It Matters
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Transforming Agriculture</h2>
            <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                AgriOS addresses critical challenges facing modern agriculture.
            </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {IMPACT_ITEMS.map((item, idx) => {
                const Icon = icons[idx] || Zap;
                return (
                    <div key={idx} className="bg-slate-50 border border-slate-200 p-8 rounded-3xl hover:border-agri-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group hover:-translate-y-1">
                        <div className="w-14 h-14 bg-agri-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-agri-600/20">
                            <Icon className="w-7 h-7 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                        <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-200 pt-4 mt-4">
                            {item.description}
                        </p>
                    </div>
                )
            })}
        </div>

        {/* Metrics */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-center text-slate-900 mb-12">Evaluation Metrics</h3>
            <div className="space-y-8">
                {EVALUATION_METRICS.map((metric, idx) => (
                    <div key={idx} className="grid md:grid-cols-12 gap-6 items-center group">
                        {/* Title */}
                        <div className="md:col-span-2">
                            <h4 className="font-bold text-slate-900 text-sm md:text-base">{metric.title}</h4>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="md:col-span-5">
                             <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                                 <div 
                                    className="h-full bg-agri-600 rounded-full transition-all duration-1000 ease-out"
                                    style={{ width: ['95%', '90%', '98%', '92%', '95%'][idx] || '90%' }} 
                                 ></div>
                             </div>
                        </div>

                        {/* Description */}
                        <div className="md:col-span-5 text-right md:text-left">
                            <p className="text-slate-500 text-sm">{metric.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};