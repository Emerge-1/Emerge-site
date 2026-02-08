// Import React to provide access to the React namespace for type definitions.
import React from 'react';

export interface SensorCapability {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}

export interface Metric {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}