import React from 'react';
import { Github, FolderGit2 } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "Portfólio Pessoal",
    description: "Desenvolvido do zero, com interface moderna e totalmente responsiva para múltiplos dispositivos. Estruturado com componentização reutilizável, aplicando boas práticas de desenvolvimento Front-End.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/Jrzn9/jean-portfolio"
  },
  {
    title: "Adapty — API de Treinos",
    description: "API completa por trás do app Adapty, desenvolvida em dupla com Kennedy Motta. Monta, analisa e otimiza fichas de treino automaticamente a partir de objetivo, nível e mais de 20 particularidades de saúde, com histórico, estatísticas, sobrecarga progressiva, recursos sociais em tempo real e segurança de ponta a ponta (JWT, bcrypt, auditoria de ações administrativas).",
    tags: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "WebSocket", "JWT"],
    githubUrl: "https://github.com/Jrzn9/fichas-de-treino"
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projetos" className="space-y-6">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-heading">Projetos</h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2">Projetos pessoais desenvolvidos para colocar em prática o que venho estudando.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:shadow-md dark:hover:border-purple-500/50 transition-shadow">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-500/10 border border-purple-100 dark:border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <FolderGit2 className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-slate-900 dark:text-white text-xl">{proj.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{proj.description}</p>
            </div>

            <div className="pt-6 space-y-4">
              <div className="flex flex-wrap gap-1.5">
                {proj.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-xs font-semibold px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-100 dark:border-purple-500/20">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-2 border-t border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                {proj.githubUrl && (
                  <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium hover:text-purple-600 dark:hover:text-purple-400">
                    <Github className="w-4 h-4" /> Repositório
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
