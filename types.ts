// Fix: Import React to support React.ReactNode usage
import React from 'react';

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  recommended?: boolean;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}