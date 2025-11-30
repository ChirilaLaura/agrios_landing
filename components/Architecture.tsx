import React from 'react';
import { TECH_STACK } from '../constants';
import { Server, Layout, ArrowDownUp, Code } from 'lucide-react';

export const Architecture: React.FC = () => {
  return (
    <section id="tech" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Col: Info */}
            <div>
                <h2 className="text-agri-400 font-mono text-sm tracking-wider uppercase mb-3">Architecture</h2>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Built for Performance & Extensibility</h3>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                    A modern, modular architecture designed for scalability and ease of extension.
                </p>

                <div className="space-y-8">
                    {TECH_STACK.map((stack, idx) => (
                        <div key={idx} className="border-l-2 border-agri-600 pl-6">
                            <h4 className="text-xl font-semibold mb-2">{stack.category}</h4>
                            <p className="text-slate-400 text-sm mb-3">{stack.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {stack.items.map((item, i) => (
                                    <span key={i} className="px-2 py-1 bg-slate-800 rounded text-xs text-agri-300 font-mono border border-slate-700">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Col: Diagram Visual */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-2xl relative overflow-hidden">
                <div className="absolute top-4 left-4 text-xs font-mono text-slate-500 uppercase tracking-widest">System Architecture</div>
                
                {/* Decorative Grid */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" 
                     style={{backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
                </div>

                <div className="relative z-10 flex flex-col gap-6 mt-6">
                    
                    {/* Frontend */}
                    <div className="bg-slate-700/50 p-4 rounded-xl border border-slate-600 backdrop-blur-sm shadow-sm hover:border-blue-500/50 transition-colors">
                        <div className="flex items-center gap-2 mb-3 text-blue-400">
                             <Layout className="w-5 h-5" />
                             <span className="font-bold text-sm">Frontend Layer</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                             <div className="bg-slate-800 p-2 rounded text-xs text-center border border-slate-700 text-slate-300 font-mono">Next.js App</div>
                             <div className="bg-slate-800 p-2 rounded text-xs text-center border border-slate-700 text-slate-300 font-mono">Mapbox GL</div>
                        </div>
                    </div>

                    {/* API Connection */}
                    <div className="flex items-center justify-center -my-2">
                        <div className="bg-slate-900 border border-slate-600 px-3 py-1 rounded-full text-[10px] font-mono text-slate-400 flex items-center gap-2 z-20">
                            <ArrowDownUp className="w-3 h-3" />
                            REST API / JSON
                        </div>
                        <div className="absolute h-8 w-px bg-slate-600 -z-10"></div>
                    </div>

                    {/* Backend */}
                    <div className="bg-slate-700/50 p-4 rounded-xl border border-slate-600 backdrop-blur-sm shadow-sm hover:border-agri-500/50 transition-colors">
                        <div className="flex items-center gap-2 mb-3 text-agri-400">
                             <Server className="w-5 h-5" />
                             <span className="font-bold text-sm">Backend Services</span>
                        </div>
                         <div className="bg-slate-800 p-3 rounded border border-slate-700 mb-2 flex justify-between items-center">
                            <span className="text-xs text-slate-300 font-mono">C++ HTTP Server</span>
                            <span className="text-[10px] bg-agri-900 text-agri-300 px-1.5 py-0.5 rounded font-mono">Port 8080</span>
                        </div>
                         <div className="grid grid-cols-2 gap-2">
                             <div className="bg-slate-800 p-2 rounded text-xs text-center border border-slate-700 text-slate-300 font-mono">Pathfinding</div>
                             <div className="bg-slate-800 p-2 rounded text-xs text-center border border-slate-700 text-slate-300 font-mono">Simulation</div>
                        </div>
                    </div>

                    {/* Plugin Connection */}
                     <div className="flex items-center justify-center -my-2">
                        <div className="bg-slate-900 border border-slate-600 px-3 py-1 rounded-full text-[10px] font-mono text-slate-400 z-20">
                            dlopen()
                        </div>
                        <div className="absolute h-8 w-px bg-slate-600 -z-10"></div>
                    </div>

                     {/* Plugins */}
                    <div className="bg-slate-700/50 p-4 rounded-xl border border-slate-600 backdrop-blur-sm border-dashed hover:border-purple-500/50 transition-colors">
                        <div className="flex items-center gap-2 mb-3 text-purple-400">
                             <Code className="w-5 h-5" />
                             <span className="font-bold text-sm">Dynamic Modules</span>
                        </div>
                        <div className="flex gap-2 justify-center">
                             <div className="px-3 py-1.5 bg-purple-900/20 border border-purple-500/30 rounded text-xs text-purple-200 font-mono">water.so</div>
                             <div className="px-3 py-1.5 bg-purple-900/20 border border-purple-500/30 rounded text-xs text-purple-200 font-mono">harvest.so</div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
      </div>
    </section>
  );
};