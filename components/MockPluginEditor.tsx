import React from 'react';
import { Sparkles, Play, FileCode, Search, Box, X, Settings, ChevronRight } from 'lucide-react';

export const MockPluginEditor: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            
             <div className="order-2 lg:order-1 relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                {/* Editor Window */}
                <div className="bg-[#0f1117] rounded-xl overflow-hidden shadow-2xl relative border border-slate-800 font-mono text-sm transform transition-transform duration-500 group-hover:scale-[1.01]">
                    
                    {/* Title Bar */}
                    <div className="bg-[#1e222e] px-4 py-3 flex items-center justify-between border-b border-slate-800 select-none">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                        </div>
                        <div className="text-xs text-slate-400 font-sans tracking-wide">AgriOS Studio - WateringModule.cpp</div>
                        <div className="w-16"></div> {/* Spacer for centering */}
                    </div>

                    <div className="flex h-[400px]">
                        {/* Sidebar Activity Bar */}
                        <div className="w-14 bg-[#1e222e] border-r border-slate-800 flex flex-col items-center py-4 gap-6 z-10">
                            <div className="p-2 bg-slate-800 rounded-lg text-white"><FileCode className="w-5 h-5" /></div>
                            <Search className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
                            <Box className="w-5 h-5 text-purple-400 hover:text-purple-300 cursor-pointer transition-colors" /> {/* Plugin Icon */}
                            <div className="flex-1"></div>
                            <Settings className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
                        </div>

                        {/* File Explorer (Simplified) */}
                        <div className="hidden sm:block w-56 bg-[#161922] border-r border-slate-800 flex flex-col">
                            <div className="p-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Explorer</div>
                            <div className="flex-1 overflow-y-auto">
                                <div className="px-2 py-1 flex items-center gap-1 text-slate-300 hover:bg-[#1e222e] cursor-pointer">
                                    <ChevronRight className="w-3 h-3" /> 
                                    <span className="text-xs font-bold">agrios-core</span>
                                </div>
                                <div className="pl-4">
                                    <div className="px-2 py-1 flex items-center gap-2 text-slate-400 hover:bg-[#1e222e] cursor-pointer">
                                        <ChevronRight className="w-3 h-3" /> src
                                    </div>
                                    <div className="px-2 py-1 flex items-center gap-2 text-slate-400 hover:bg-[#1e222e] cursor-pointer">
                                        <ChevronRight className="w-3 h-3" /> include
                                    </div>
                                    <div className="px-2 py-1 flex items-center gap-2 text-slate-400 hover:bg-[#1e222e] cursor-pointer">
                                        <ChevronRight className="w-3 h-3 text-slate-500" /> 
                                        modules
                                    </div>
                                    <div className="pl-6">
                                        <div className="px-2 py-1 flex items-center gap-2 text-purple-300 bg-purple-500/10 rounded cursor-pointer border-l-2 border-purple-500">
                                            <FileCode className="w-3 h-3" />
                                            <span className="text-xs">WateringModule.cpp</span>
                                        </div>
                                        <div className="px-2 py-1 flex items-center gap-2 text-slate-500 hover:text-slate-300 cursor-pointer">
                                            <FileCode className="w-3 h-3" />
                                            <span className="text-xs">Harvest.cpp</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Editor Content */}
                        <div className="flex-1 bg-[#0f1117] relative flex flex-col min-w-0">
                            {/* Tabs */}
                            <div className="flex bg-[#161922] overflow-x-auto scrollbar-hide">
                                <div className="px-4 py-2 bg-[#0f1117] border-t-2 border-purple-500 text-slate-200 flex items-center gap-2 text-xs min-w-fit">
                                    <FileCode className="w-3 h-3 text-purple-400" />
                                    WateringModule.cpp
                                    <X className="w-3 h-3 ml-2 text-slate-500 hover:text-white cursor-pointer" />
                                </div>
                                <div className="px-4 py-2 bg-[#1e222e] border-t-2 border-transparent text-slate-500 flex items-center gap-2 text-xs min-w-fit hover:bg-[#1f2330] cursor-pointer">
                                    <FileCode className="w-3 h-3" />
                                    module.h
                                </div>
                            </div>

                            {/* Code Area */}
                            <div className="p-4 overflow-auto flex text-xs sm:text-sm leading-relaxed h-full">
                                {/* Line Numbers */}
                                <div className="text-slate-700 pr-4 text-right select-none font-mono text-[11px] sm:text-xs pt-0.5">
                                    {Array.from({length: 18}).map((_, i) => (
                                        <div key={i}>{i + 1}</div>
                                    ))}
                                </div>
                                {/* Code */}
                                <div className="flex-1 text-slate-300 font-mono">
                                    <div><span className="text-purple-400">#include</span> <span className="text-green-400">&lt;agrios/module.h&gt;</span></div>
                                    <div className="h-4"></div>
                                    <div><span className="text-blue-400">class</span> <span className="text-yellow-300">WateringModule</span> : <span className="text-blue-400">public</span> Module {'{'}</div>
                                    <div><span className="text-blue-400">public:</span></div>
                                    <div className="pl-4"><span className="text-blue-400">void</span> <span className="text-yellow-300">run</span>(Robot* bot) <span className="text-blue-400">override</span> {'{'}</div>
                                    <div className="pl-8 text-slate-500">// AI Generated Logic for precision watering</div>
                                    <div className="pl-8"><span className="text-purple-400">if</span> (bot-&gt;<span className="text-blue-300">atLocation</span>(targetZone)) {'{'}</div>
                                    <div className="pl-12">bot-&gt;<span className="text-blue-300">activateTool</span>(<span className="text-green-400">"sprayer"</span>);</div>
                                    <div className="pl-12">Logger::<span className="text-blue-300">log</span>(<span className="text-green-400">"Watering initiated..."</span>);</div>
                                    <div className="h-4"></div>
                                    <div className="pl-12 text-slate-500">/* Check soil moisture before proceeding */</div>
                                    <div className="pl-12"><span className="text-blue-400">double</span> moisture = bot-&gt;<span className="text-blue-300">getSensorData</span>();</div>
                                    <div className="pl-12"><span className="text-purple-400">if</span> (moisture &lt; <span className="text-orange-300">0.3</span>) {'{'}</div>
                                    <div className="pl-16">bot-&gt;<span className="text-blue-300">setFlowRate</span>(<span className="text-orange-300">HIGH</span>);</div>
                                    <div className="pl-12">{'}'}</div>
                                    <div className="pl-8">{'}'}</div>
                                    <div className="pl-4">{'}'}</div>
                                    <div>{'}'};</div>
                                </div>
                            </div>

                            {/* AI Prompt Overlay */}
                            <div className="absolute bottom-6 left-6 right-6 sm:left-12 sm:right-12 bg-[#1a1d26] border border-purple-500/30 rounded-lg shadow-2xl overflow-hidden backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-700">
                                <div className="flex items-center gap-3 p-3 border-b border-white/5 bg-gradient-to-r from-purple-500/10 to-transparent">
                                    <div className="bg-purple-600 rounded p-1 shadow-lg shadow-purple-900/50">
                                        <Sparkles className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-xs font-bold text-purple-100 tracking-wide">AgriOS Copilot</span>
                                    <div className="flex-1"></div>
                                    <div className="flex gap-1">
                                        <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                                        <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex gap-3 mb-3">
                                        <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0 text-[10px] text-white font-bold">U</div>
                                        <p className="text-slate-300 text-xs py-1">
                                            Update the logic to check for soil moisture levels before spraying.
                                        </p>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                                             <Sparkles className="w-3 h-3 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="bg-black/40 rounded-lg p-3 border border-purple-500/20 mb-3 relative">
                                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500 rounded-l-lg"></div>
                                                <p className="text-slate-400 text-xs font-mono">
                                                    <span className="text-purple-400">if</span> (moisture &lt; <span className="text-orange-300">0.3</span>) {'{'}<br/>
                                                    &nbsp;&nbsp;bot-&gt;<span className="text-blue-300">setFlowRate</span>(<span className="text-orange-300">HIGH</span>);<br/>
                                                    {'}'}
                                                </p>
                                            </div>
                                            <div className="flex gap-2">
                                                <button className="text-[10px] bg-purple-600 hover:bg-purple-500 text-white px-3 py-1.5 rounded font-medium transition-colors shadow-lg shadow-purple-900/20">Accept Changes</button>
                                                <button className="text-[10px] bg-[#2b3040] hover:bg-[#363b4d] text-slate-300 px-3 py-1.5 rounded font-medium transition-colors border border-slate-700">Refine</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
             </div>

             <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-sm font-medium mb-4">
                    <Sparkles className="w-4 h-4" />
                    AI Integration
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">Code at the Speed of Thought</h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    Don't spend hours writing boilerplate C++. AgriOS integrates with advanced LLMs to generate module code from natural language descriptions.
                </p>
                
                <div className="space-y-6">
                    <div className="flex gap-4">
                         <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                            <Play className="w-5 h-5 text-green-600 ml-1" />
                         </div>
                         <div>
                             <h4 className="text-slate-900 font-bold mb-1">Hot-Reloading</h4>
                             <p className="text-slate-600 text-sm">Compile and inject new modules instantly without stopping the active simulation.</p>
                         </div>
                    </div>
                    
                    <div className="flex gap-4">
                         <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <Box className="w-5 h-5 text-blue-600" />
                         </div>
                         <div>
                             <h4 className="text-slate-900 font-bold mb-1">Type-Safe Generation</h4>
                             <p className="text-slate-600 text-sm">AI models are fine-tuned on the AgriOS SDK to ensure strict C++ API compliance.</p>
                         </div>
                    </div>
                </div>
             </div>

        </div>
      </div>
    </section>
  );
};