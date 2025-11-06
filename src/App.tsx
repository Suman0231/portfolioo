import { Heart, Code, Cpu } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-slate-400 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-slate-400 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 border border-slate-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-slate-400 rounded-full"></div>
      </div>

      <div className="text-center z-10 px-4 max-w-2xl">
        <div className="flex items-center justify-center gap-4 mb-8">
          <Code className="w-12 h-12 text-blue-600" />
          <Heart className="w-8 h-8 text-red-500" />
          <Cpu className="w-12 h-12 text-slate-700" />
        </div>

        <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-4 tracking-tight">
          Suman Adhikari
        </h1>

        <p className="text-xl text-slate-600 mb-8">
          Full Stack Developer & Tech Enthusiast
        </p>

        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mx-auto rounded-full"></div>
      </div>

      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
      <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-red-400 rounded-full opacity-60"></div>
      <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-slate-400 rounded-full opacity-60"></div>
    </div>
  );
}

export default App;