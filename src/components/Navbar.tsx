import React, { useEffect, useState } from 'react';
import { Terminal, Send, Sun, Moon } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-heading font-extrabold text-xl tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-purple-500/20">
            <Terminal className="w-4 h-4" />
          </span>
          Jean Cristiano
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a href="#sobre" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Sobre</a>
          <a href="#formacao" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Formação</a>
          <a href="#skills" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Habilidades</a>
          <a href="#projetos" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Projetos</a>
          <a href="#contato" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Contato</a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsDark((d) => !d)}
            aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all shadow-md shadow-purple-500/20"
          >
            <Send className="w-3.5 h-3.5" />
            Falar Comigo
          </a>
        </div>
      </div>
    </header>
  );
};
