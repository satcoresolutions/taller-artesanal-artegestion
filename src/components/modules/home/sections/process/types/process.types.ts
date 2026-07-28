export interface ProcessStep {
  number: string;

  title: string;

  description: string;

  
}

export interface ProcessContent {
  badge: string;

  title: string;

  description: string;

  steps: ProcessStep[];

  summary: string;
}