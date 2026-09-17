import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-800">Jean Cristiano Palmeira</span>
          <span>•</span>
          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200">
            Full-Stack Developer
          </span>
        </div>
        <p>© {new Date().getFullYear()} Jean Cristiano. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
