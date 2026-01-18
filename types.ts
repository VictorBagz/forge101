import React from 'react';

export interface Program {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

export interface Trainer {
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  recommended?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}