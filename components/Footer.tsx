
import React from 'react';
import { APP_NAME } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CTA Section */}
        <div className="bg-agri-600 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-16 shadow-2xl shadow-agri-900/10">
            <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-white mb-2">Ready to Explore AgriOS?</h3>
                <p className="text-agri-100 text-lg">Check out our code, documentation, and get involved.</p>
            </div>
            <a 
              href="https://github.com/orgs/COMP461-Fall-2025-AgriOS/repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-agri-700 font-bold rounded-xl hover:bg-agri-50 transition-colors shadow-lg"
            >
              View on GitHub
            </a>
        </div>

        <div className="grid md:grid-cols-4 gap-12 border-b border-slate-100 pb-12">
            <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                   <img 
                     src="agrios_logo.png"
                     alt="AgriOS Logo" 
                     className="h-10 w-auto object-contain" 
                   />
                   <span className="text-xl font-bold text-slate-900">{APP_NAME}</span>
                </div>
                <p className="text-slate-500 mb-6 max-w-sm">
                    Agricultural Robotics Operating System. A senior design project revolutionizing autonomous farming through modular software architecture.
                </p>
            </div>
            
            <div>
                 <h4 className="font-bold text-slate-900 mb-4">Project</h4>
                 <ul className="space-y-2 text-sm text-slate-600">
                     <li><a href="#features" className="hover:text-agri-600">Features</a></li>
                     <li><a href="#workflow" className="hover:text-agri-600">How It Works</a></li>
                     <li><a href="#tech" className="hover:text-agri-600">Technology</a></li>
                     <li><a href="#impact" className="hover:text-agri-600">Impact</a></li>
                 </ul>
            </div>

            <div>
                 <h4 className="font-bold text-slate-900 mb-4">Academic</h4>
                 <ul className="space-y-2 text-sm text-slate-600">
                     <li>Rice University</li>
                     <li>Department of Computer Science</li>
                     <li>COMP 461: Senior Design in A Robotized World</li>
                     <li>Fall 2025</li>
                 </ul>
            </div>
        </div>

        <div className="pt-8 text-center flex flex-col items-center justify-center gap-4">
            <p className="text-slate-400 text-sm">
                &copy; 2025 Team AgriOS • Rice University • Senior Design Project
            </p>
        </div>
      </div>
    </footer>
  );
};
