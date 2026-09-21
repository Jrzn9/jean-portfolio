import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-8 transition-colors">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-800 dark:text-slate-100">Jean Cristiano Palmeira</span>
          <span>•</span>
          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30">
            Full-Stack Developer
          </span>
        </div>
        <p>© {new Date().getFullYear()} Jean Cristiano. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
