import React from "react";
import { GraduationCap, BookOpen, Languages } from "lucide-react";

const courses = [
  {
    name: "Formação Front-End (HTML5, CSS3, JavaScript, TypeScript, React e Axios)",
    provider: "Udemy",
    status: "Concluído",
  },
  {
    name: "JavaScript Essentials 1",
    provider: "Cisco Networking Academy",
    status: "Concluído",
  },
  {
    name: "Python Essentials 1",
    provider: "Cisco Networking Academy",
    status: "Concluído",
  },
];

export const Education: React.FC = () => {
  return (
    <section id="formacao" className="space-y-6">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
          Formação & Cursos
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          Minha trajetória acadêmica e cursos complementares.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Formação acadêmica */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-slate-900 dark:text-white text-lg">
              Bacharelado em Ciência da Computação
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Centro Universitário UniCarioca
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Fev. 2025 – Dez. 2028 (Previsão)
            </p>
          </div>
        </div>

        {/* Cursos complementares */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-500/10 border border-purple-100 dark:border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
            <BookOpen className="w-5 h-5" />
          </div>
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-slate-900 dark:text-white text-lg">
              Cursos
            </h3>
            <ul className="space-y-2">
              {courses.map((c, idx) => (
                <li
                  key={idx}
                  className="text-sm text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2 last:border-0 last:pb-0"
                >
                  <p className="font-medium text-slate-800 dark:text-slate-200">{c.name}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-slate-500">{c.provider}</span>
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${c.status === "Em andamento" ? "bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400" : "bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"}`}
                    >
                      {c.status}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Idiomas */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
          <Languages className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-heading font-bold text-slate-900 dark:text-white text-lg">
            Idiomas
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Inglês — Intermediário</p>
        </div>
      </div>
    </section>
  );
};
