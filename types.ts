import { LucideIcon } from "lucide-react";

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  initial: string;
}

export interface TechStackItem {
  category: string;
  items: string[];
  description: string;
}

export interface WorkflowStep {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ImpactItem {
  title: string;
  description: string;
}

export interface MetricItem {
  title: string;
  description: string;
}