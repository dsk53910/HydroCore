import React from 'react';
import { Zap, ShieldCheck, RefreshCw, Smartphone } from 'lucide-react';
import { FeatureItem } from '../types';

export const Features: React.FC = () => {
  const features: FeatureItem[] = [
    {
      title: "Micro-Oxidation",
      description: "Proprietary technology injects millions of micro-bubbles to neutralize contaminants instantly.",
      icon: <RefreshCw className="h-6 w-6 text-cyan-400" />
    },
    {
      title: "Smart Monitoring",
      description: "Connects to the HydroApp to track your hydration levels and filter health in real-time.",
      icon: <Smartphone className="h-6 w-6 text-purple-400" />
    },
    {
      title: "Rapid Purification",
      description: "Purifies a standard 1L bottle in under 60 seconds using high-frequency waves.",
      icon: <Zap className="h-6 w-6 text-yellow-400" />
    },
    {
      title: "Medical Grade",
      description: "Built with surgical stainless steel and certified BPA-free polymers.",
      icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617] to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Deep Science, <span className="text-blue-500">Simple Use</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We've condensed an entire water treatment plant into a sleek, portable device designed for the modern explorer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="group p-8 rounded-2xl bg-[#0f172a]/40 border border-white/5 hover:bg-[#1e293b]/50 transition-all duration-300 hover:-translate-y-2 backdrop-blur-md shadow-lg shadow-black/20">
              <div className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ring-1 ring-white/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};