import React from 'react';
// Fix: Import Droplets icon from lucide-react to resolve "Cannot find name 'Droplets'"
import { ArrowRight, PlayCircle, Droplets } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="product" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
      <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-500/10 text-blue-300 text-sm font-medium animate-fade-in-up backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
          </span>
          Next Gen Filtration Tech
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight text-white drop-shadow-lg">
          Breathe Life <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600">Into Your Water</span>
        </h1>
        
        <p className="text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          Experience the purest form of hydration. HydroCore utilizes micro-bubble oxidation to cleanse, mineralize, and energize your daily water intake instantly.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
          <button className="w-full sm:w-auto px-8 py-4 bg-blue-700 hover:bg-blue-600 text-white rounded-full font-bold shadow-lg shadow-blue-950/50 transition-all hover:scale-105 hover:shadow-blue-600/20 flex items-center justify-center gap-2">
            Get HydroCore
            <ArrowRight className="h-5 w-5" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/10 hover:bg-white/5 text-white rounded-full font-semibold backdrop-blur-sm transition-all flex items-center justify-center gap-2 group">
            <PlayCircle className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
            Watch Demo
          </button>
        </div>

        <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-slate-500 text-sm font-medium">
          <div className="flex items-center gap-2">
            <div className="h-1 w-1 rounded-full bg-blue-500" />
            Titanium Grade
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1 w-1 rounded-full bg-blue-500" />
            10 Year Warranty
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1 w-1 rounded-full bg-blue-500" />
            Eco Friendly
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 relative">
        <div className="absolute inset-0 bg-blue-900/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />
        <div className="relative z-10 animate-float-slow">
           {/* Abstract Product Representation - Floating Sphere/Device */}
           <div className="relative aspect-square w-full max-w-md mx-auto rounded-3xl overflow-hidden border border-white/5 shadow-2xl shadow-black/50 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-md flex items-center justify-center group">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/watertech/800/800')] bg-cover bg-center opacity-60 mix-blend-overlay group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
              
              <div className="relative p-8 text-center z-10">
                 <div className="w-24 h-24 mx-auto bg-[#020617]/50 rounded-full flex items-center justify-center mb-4 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(30,58,138,0.3)]">
                    <Droplets className="h-10 w-10 text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                 </div>
                 <h3 className="text-2xl font-bold text-white">HydroCore S1</h3>
                 <p className="text-blue-300/60 font-light tracking-wider">Active Purification</p>
              </div>
           </div>
        </div>
      </div>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};