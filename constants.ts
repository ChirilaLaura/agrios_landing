
import {
  Map,
  Bot,
  MousePointer2,
  Cpu,
  Plug,
  Play,
  Satellite,
  Code2,
  Globe,
  Zap,
  Clock,
  Scaling,
  Lightbulb,
  Heart,
  CheckCircle,
  Layout,
  Scan
} from "lucide-react";
import { Feature, TeamMember, TechStackItem, WorkflowStep, ImpactItem, MetricItem } from "./types";

export const APP_NAME = "AgriOS";
export const TAGLINE = "Orchestrating the Future of Agriculture";
export const SUB_TAGLINE = "AgriOS is a comprehensive platform for coordinating autonomous robot fleets to perform precision farming tasks. From satellite mapping to intelligent task assignment, we're revolutionizing how farms operate.";

export const FEATURES: Feature[] = [
  {
    title: "Satellite Map Integration",
    description: "Capture high-resolution satellite imagery of any location using Mapbox. Search by address, adjust dimensions, and create precise field maps.",
    icon: Satellite,
    details: [
      "Global location search",
      "Custom capture dimensions",
      "Rotation control",
      "Instant preview"
    ]
  },
  {
    title: "Fleet Management",
    description: "Deploy rovers and drones with ease. Manage your entire fleet from a unified dashboard with real-time status tracking.",
    icon: Bot,
    details: [
      "Mixed fleet support",
      "Batch deployment",
      "Real-time tracking",
      "Unified dashboard"
    ]
  },
  {
    title: "Visual Task Definition",
    description: "Draw task areas directly on your satellite maps. Set priorities and assign custom modules to each region.",
    icon: MousePointer2,
    details: [
      "Draw on satellite maps",
      "Set task priorities",
      "Assign custom modules",
      "Visual preview"
    ]
  },
  {
    title: "Smart Assignment",
    description: "Choose from multiple algorithms for intelligent task distribution tailored to your operation's needs.",
    icon: Cpu,
    details: [
      "Greedy (Speed)",
      "Hungarian (Optimal Efficiency)",
      "Balanced (Fairness/Makespan)"
    ]
  },
  {
    title: "Plugin System",
    description: "Extend functionality with C++ plugins. Write code in-browser, compile instantly, or use AI to generate plugins.",
    icon: Plug,
    details: [
      "Hot-loadable C++ plugins",
      "In-browser compilation",
      "AI code generation",
      "Drag-and-drop upload"
    ]
  },
  {
    title: "Simulation Playback",
    description: "Watch animated visualizations of robots executing tasks. Control playback speed, pause, and analyze robot paths.",
    icon: Play,
    details: [
      "Animated visualization",
      "Playback controls",
      "Path analysis",
      "Real-time feedback"
    ]
  },
  {
    title: "AI Image Segmentation",
    description: "Automatically detect obstacles from satellite imagery using computer vision. OpenCV-powered segmentation identifies buildings, water, and terrain.",
    icon: Scan,
    details: [
      "Automated obstacle detection",
      "OpenCV semantic segmentation",
      "Grid generation from imagery",
      "Optional manual override"
    ]
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    title: "Capture Your Field",
    description: "Use our Mapbox-powered tool to capture satellite imagery.",
    icon: Satellite
  },
  {
    title: "Deploy Robot Fleet",
    description: "Add rovers and drones to your map with custom configs.",
    icon: Bot
  },
  {
    title: "Define Task Areas",
    description: "Draw regions on your map where work needs to be done.",
    icon: MousePointer2
  },
  {
    title: "Select Algorithm",
    description: "Choose the optimal task assignment strategy.",
    icon: Cpu
  },
  {
    title: "Run Simulation",
    description: "Execute and watch robots navigate in real-time.",
    icon: Play
  }
];

export const TECH_STACK: TechStackItem[] = [
  {
    category: "Backend",
    items: [
      "C++17", 
      "High-performance HTTP server", 
      "Dynamic plugin loading (dlopen)", 
      "Thread-safe simulation logging",
      "Dijkstra pathfinding",
      "Hungarian algorithm",
      "RESTful API (50+ endpoints)"
    ],
    description: "High-performance server handling complex pathfinding and fleet coordination."
  },
  {
    category: "Frontend",
    items: [
      "Next.js 15", 
      "React 19 with App Router", 
      "Server Actions", 
      "Mapbox GL integration", 
      "Monaco Editor",
      "Canvas animation engine",
      "shadcn/ui components"
    ],
    description: "A modern, responsive dashboard built for performance and interactivity."
  },
  {
    category: "Plugin System",
    items: [
      "Extensible Architecture",
      "Shared object (.so) plugins",
      "In-browser compilation",
      "Hot-reload without restart",
      "AI code generation (Claude)",
      "Callback registration API"
    ],
    description: "Flexible module system allowing infinite extensibility."
  }
];

export const IMPACT_ITEMS: ImpactItem[] = [
  {
    title: "Labor Shortage Solution",
    description: "With agricultural labor declining worldwide, autonomous robots fill the gap, ensuring crops are tended regardless of workforce availability."
  },
  {
    title: "Precision Operations",
    description: "Targeted watering, spraying, and harvesting reduces waste and environmental impact while maximizing yield."
  },
  {
    title: "24/7 Operation",
    description: "Robots work around the clock without fatigue, ensuring time-sensitive agricultural tasks are completed on schedule."
  },
  {
    title: "Scalable Automation",
    description: "From small farms to large agricultural operations, AgriOS scales to meet any operation's needs."
  }
];

export const EVALUATION_METRICS: MetricItem[] = [
  {
    title: "Novelty",
    description: "First plugin-based agricultural robotics platform with AI code generation"
  },
  {
    title: "Societal Impact",
    description: "Addresses labor shortages and enables sustainable precision farming"
  },
  {
    title: "Implementation Quality",
    description: "Research-grade prototype with production-quality architecture and comprehensive API"
  },
  {
    title: "Scalability",
    description: "Supports unlimited robots, maps, and concurrent task execution"
  },
  {
    title: "User Experience",
    description: "Intuitive visual interface with real-time simulation playback"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Laura",
    role: "Frontend & Integration",
    description: "Simulation visualization, plugin management system with AI generation, task-based multi-robot UI, dashboard components",
    initial: "L"
  },
  {
    name: "James",
    role: "Backend & Algorithms",
    description: "Pathfinding (Dijkstra's), multi-algorithm task distribution (Greedy, Hungarian approximation, Balanced makespan), TaskManager, multi-robot coordination, concurrent logger",
    initial: "J"
  },
  {
    name: "Will",
    role: "Maps & UI",
    description: "Mapbox snapshot tool, HTML Canvas renderer, map representation backend, task creation interface, dashboard integration",
    initial: "W"
  },
  {
    name: "Anderson",
    role: "Infrastructure & Vision",
    description: "ML image segmentation (OpenCV), module sandboxing, build system, Mapbox pipeline integration, concurrent server architecture",
    initial: "A"
  }
];
