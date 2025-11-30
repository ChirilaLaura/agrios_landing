
import React, { useEffect, useRef, useState } from 'react';

// Types for our mini-simulation
interface Point { x: number; y: number; }
interface Robot {
  id: number;
  pos: Point;
  target: Point | null;
  color: string;
  speed: number;
}
interface Task {
  id: number;
  area: { x: number; y: number; w: number; h: number };
  completed: number; // 0 to 100
}

export const SimulationCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // Simulation State Refs (to avoid re-renders on every frame)
  const robotsRef = useRef<Robot[]>([]);
  const tasksRef = useRef<Task[]>([]);
  const frameRef = useRef<number>(0);

  // Initialize Simulation
  useEffect(() => {
    const initSim = () => {
      // Create random tasks
      const newTasks: Task[] = Array.from({ length: 4 }).map((_, i) => ({
        id: i,
        area: {
          x: 150 + Math.random() * 350, // Push tasks a bit further right
          y: 50 + Math.random() * 250,
          w: 60,
          h: 60
        },
        completed: 0
      }));
      tasksRef.current = newTasks;

      // Create robots
      const colors = ['#16a34a', '#2563eb', '#ea580c', '#9333ea'];
      const newRobots: Robot[] = Array.from({ length: 4 }).map((_, i) => ({
        id: i,
        pos: { x: 50, y: 200 }, // Start all robots at the same "Depot" spot
        target: null,
        color: colors[i % colors.length],
        speed: 3 + Math.random() * 1.5 // Slightly faster for better effect
      }));
      robotsRef.current = newRobots;
    };

    initSim();
  }, []);

  // Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = () => {
      if (!isPlaying) return;

      // Clear Canvas
      ctx.fillStyle = '#f8fafc'; // Slate-50
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw Grid
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw Depot (Home Base)
      ctx.fillStyle = '#e2e8f0';
      ctx.fillRect(20, 160, 60, 80);
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 2;
      ctx.strokeRect(20, 160, 60, 80);
      ctx.fillStyle = '#64748b';
      ctx.font = '10px Inter';
      ctx.fillText('DEPOT', 32, 205);

      // Draw Tasks
      tasksRef.current.forEach(task => {
        // Task Area
        ctx.fillStyle = task.completed >= 100 ? '#bbf7d0' : '#dcfce7'; // Green-200 vs Green-100
        ctx.strokeStyle = '#16a34a';
        ctx.lineWidth = 2;
        ctx.fillRect(task.area.x, task.area.y, task.area.w, task.area.h);
        ctx.strokeRect(task.area.x, task.area.y, task.area.w, task.area.h);

        // Progress Bar
        if (task.completed < 100 && task.completed > 0) {
          ctx.fillStyle = '#16a34a';
          ctx.fillRect(task.area.x, task.area.y + task.area.h - 5, (task.area.w * task.completed) / 100, 5);
        }
      });

      // Update & Draw Robots
      robotsRef.current.forEach(bot => {
        // Assign target if null
        if (!bot.target) {
          // 1. Try to assign the task corresponding to the robot's ID to spread them out
          let targetTask: Task | null = tasksRef.current[bot.id % tasksRef.current.length];
          
          // 2. If that task is complete, find any other unfinished task
          if (targetTask && targetTask.completed >= 100) {
             const unfinished = tasksRef.current.filter(t => t.completed < 100);
             if (unfinished.length > 0) {
                // Pick a random unfinished task to keep it dynamic
                targetTask = unfinished[Math.floor(Math.random() * unfinished.length)];
             } else {
                // No tasks left
                targetTask = null; 
             }
          }

          if (targetTask && targetTask.completed < 100) {
            // Center of task
            bot.target = { 
              x: targetTask.area.x + targetTask.area.w / 2, 
              y: targetTask.area.y + targetTask.area.h / 2 
            };
          } else {
            // Return home to Depot
             bot.target = { x: 50, y: 200 };
          }
        }

        // Move bot
        if (bot.target) {
          const dx = bot.target.x - bot.pos.x;
          const dy = bot.target.y - bot.pos.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 5) {
            // Arrived
            // If at a task, work on it
            const workingTask = tasksRef.current.find(t => 
              bot.pos.x > t.area.x && bot.pos.x < t.area.x + t.area.w &&
              bot.pos.y > t.area.y && bot.pos.y < t.area.y + t.area.h
            );

            if (workingTask && workingTask.completed < 100) {
              workingTask.completed += 1.5; // Slightly faster work speed
            } else {
              bot.target = null; // Find new target
              // Check if ALL tasks are done
              if (tasksRef.current.every(t => t.completed >= 100)) {
                 // Reset Tasks
                 tasksRef.current.forEach(t => t.completed = 0);
                 // Reset Robots to Depot to replay "spread out" animation
                 robotsRef.current.forEach(r => {
                    r.pos = { x: 50, y: 200 };
                    r.target = null;
                 });
              }
            }
          } else {
            // Move
            bot.pos.x += (dx / dist) * bot.speed;
            bot.pos.y += (dy / dist) * bot.speed;
          }
        }

        // Draw Trail/Glow
        ctx.shadowColor = bot.color;
        ctx.shadowBlur = 10;
        
        // Draw Bot
        ctx.beginPath();
        ctx.arc(bot.pos.x, bot.pos.y, 8, 0, Math.PI * 2);
        ctx.fillStyle = bot.color;
        ctx.fill();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        ctx.shadowBlur = 0; // Reset shadow

        // Label
        ctx.fillStyle = '#1e293b';
        ctx.font = '10px Inter';
        ctx.fillText(`Bot ${bot.id + 1}`, bot.pos.x - 12, bot.pos.y - 12);
      });

      frameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(frameRef.current);
  }, [isPlaying]);

  return (
    <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
      <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex justify-between items-center">
        <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="text-xs font-mono text-slate-500">simulation_view.cpp</div>
        <div className="flex gap-2 text-xs">
            <span className="text-agri-600 font-semibold">Running</span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-500">4 Bots Active</span>
        </div>
      </div>
      <div className="relative w-full h-[300px] md:h-[400px] bg-slate-50">
        <canvas 
          ref={canvasRef} 
          width={800} 
          height={400}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay UI Controls Mockup */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-lg shadow-lg p-2 flex gap-2">
           <button 
             onClick={() => setIsPlaying(!isPlaying)}
             className="p-2 hover:bg-slate-100 rounded-md transition-colors"
           >
             {isPlaying ? (
               <svg className="w-4 h-4 text-slate-700" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/></svg>
             ) : (
               <svg className="w-4 h-4 text-slate-700" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
             )}
           </button>
           <div className="h-full w-[1px] bg-slate-200 mx-1"></div>
           <div className="flex items-center gap-1 text-xs text-slate-600 px-2">
             <span className="font-mono">Speed: 1.0x</span>
           </div>
        </div>
      </div>
    </div>
  );
};
