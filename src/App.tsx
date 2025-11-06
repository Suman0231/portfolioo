import React from 'react';
import { Heart, Code, Cpu } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-white/20 rounded-full"></div>
      </div>
      
      {/* Main content */}
      <div className="text-center z-10 px-4">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Code className="w-12 h-12 text-purple-400 animate-pulse" />
          <Heart className="w-8 h-8 text-red-400 animate-bounce" />
          <Cpu className="w-12 h-12 text-blue-400 animate-pulse" />
        </div>
        
        <h1 className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4 tracking-tight">
          Tech Lovers
        </h1>
        
        <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full animate-pulse"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
      <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-ping animation-delay-300"></div>
      <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-blue-400 rounded-full animate-ping animation-delay-700"></div>
    </div>
  );
}

export default App;