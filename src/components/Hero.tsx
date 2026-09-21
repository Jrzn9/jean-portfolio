import React from "react";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

interface HeroProps {
  avatarUrl?: string;
}

export const Hero: React.FC<HeroProps> = ({ avatarUrl = "/avatar.jpg" }) => {
  return (
    <section className="grid md:grid-cols-12 gap-12 items-center pt-8">
      <div className="md:col-span-7 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30 text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Aberto a oportunidades e estágio
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
          <span className="text-slate-900 dark:text-white">Jean Cristiano</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
            Palmeira
          </span>
        </h1>

        <p className="text-lg font-semibold text-purple-700 dark:text-purple-400">
          Desenvolvedor Full-Stack em Formação
        </p>

        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
          Estudante de Ciência da Computação (4º semestre), esforçado e
          responsável, em busca de uma oportunidade na área de Desenvolvimento
          Web ou Software Full-Stack.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-95 transition-all shadow-lg shadow-purple-500/25"
          >
            Ver Projetos <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contato"
            className="px-6 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm"
          >
            Entrar em Contato
          </a>
        </div>

        <div className="flex items-center gap-6 pt-4 text-slate-500 dark:text-slate-400">
          <a
            href="https://github.com/Jrzn9"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/jeancristiano"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:rzn097@gmail.com"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="md:col-span-5 flex justify-center">
        <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-4 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-b from-purple-50 to-slate-100 dark:from-purple-500/10 dark:to-slate-800 aspect-square flex items-center justify-center">
            <img
              src={avatarUrl}
              alt="Jean Cristiano Palmeira"
              className="w-full h-full object-cover"
              width={800}
              height={800}
              fetchPriority="high"
              decoding="async"
              onError={(e) => {
                // Fallback caso ainda não tenha salvo o arquivo local
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80";
              }}
            />
          </div>
          <div className="pt-4 pb-2 px-2 flex items-center justify-between">
            <div>
              <p className="font-heading font-bold text-slate-900 dark:text-white">
                Jean Cristiano
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Full-Stack Developer</p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              React • Python • TS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
