import React from 'react';
import { Check, Star } from 'lucide-react';
import { PricingTier } from '../types';

export const Pricing: React.FC = () => {
  const tiers: PricingTier[] = [
    {
      name: "Starter",
      price: "$199",
      period: "one-time",
      description: "Perfect for the daily commuter.",
      features: [
        "HydroCore S1 Device",
        "Standard Filter (3-month life)",
        "Basic App Access",
        "1 Year Warranty"
      ],
      cta: "Buy Starter"
    },
    {
      name: "Explorer",
      price: "$299",
      period: "one-time",
      description: "For the adventurous soul.",
      recommended: true,
      features: [
        "HydroCore X1 (Rugged)",
        "2x Advanced Filters",
        "Premium App Analytics",
        "Travel Case Included",
        "3 Year Warranty"
      ],
      cta: "Buy Explorer"
    },
    {
      name: "Visionary",
      price: "$499",
      period: "one-time",
      description: "Ultimate home & travel solution.",
      features: [
        "HydroCore Pro Station",
        "Lifetime Filter Subscription",
        "Family App Account",
        "Self-Cleaning Dock",
        "Lifetime Warranty"
      ],
      cta: "Join Visionary"
    }
  ];

  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Invest in <span className="text-blue-500">Purity</span></h2>
          <p className="text-slate-400">Choose the package that fits your lifestyle.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {tiers.map((tier, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                tier.recommended 
                  ? 'bg-gradient-to-b from-blue-900/30 to-[#020617]/80 border border-blue-500/30 shadow-2xl shadow-black/50 scale-105 z-10' 
                  : 'bg-[#0f172a]/30 border border-white/5 hover:border-white/10 hover:bg-[#0f172a]/50'
              } backdrop-blur-md flex flex-col h-full`}
            >
              {tier.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full text-xs font-bold uppercase tracking-wide text-white shadow-lg flex items-center gap-1">
                  <Star className="h-3 w-3 fill-current" />
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-slate-400 text-sm h-10">{tier.description}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-5xl font-bold text-white tracking-tight">{tier.price}</span>
                <span className="text-slate-500 font-medium">/ {tier.period}</span>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {tier.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <div className={`mt-1 p-0.5 rounded-full ${tier.recommended ? 'bg-blue-600 text-white' : 'bg-white/10 text-gray-500'}`}>
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-sm text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  tier.recommended
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/40'
                    : 'bg-white/5 hover:bg-white/10 text-white'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};