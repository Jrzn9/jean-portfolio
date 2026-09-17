import React from 'react';
import { Code2, Server, Database, Wrench, Lightbulb } from 'lucide-react';

interface SkillGroup {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    icon: <Code2 className="w-5 h-5 text-purple-600" />,
    title: "Front-End",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Vite"]
  },
  {
    icon: <Server className="w-5 h-5 text-indigo-600" />,
    title: "Back-End",
    skills: ["Python", "FastAPI", "APIs REST", "JWT"]
  },
  {
    icon: <Database className="w-5 h-5 text-blue-600" />,
    title: "Banco de Dados",
    skills: ["PostgreSQL", "SQL"]
  },
  {
    icon: <Wrench className="w-5 h-5 text-slate-700" />,
    title: "Ferramentas",
    skills: ["Git", "GitHub"]
  },
  {
    icon: <Lightbulb className="w-5 h-5 text-amber-600" />,
    title: "Conceitos",
    skills: ["Lógica de Programação", "Componentização", "Responsividade", "Consumo de APIs REST", "Boas Práticas"]
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="space-y-6">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-extrabold text-slate-900 font-heading">Habilidades</h2>
        <p className="text-slate-600 mt-2">Tecnologias e conceitos que venho estudando e aplicando na prática.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:border-purple-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
              {group.icon}
            </div>
            <div>
              <h3 className="font-heading font-bold text-slate-900 text-lg">{group.title}</h3>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {group.skills.map((s, sIdx) => (
                  <span key={sIdx} className="text-xs font-medium px-2 py-1 rounded-md bg-slate-100 text-slate-700">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
