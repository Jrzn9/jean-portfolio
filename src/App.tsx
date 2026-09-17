import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Footer } from "./components/Footer";
import { Mail, MapPin, Phone } from "lucide-react";

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 relative">
      {/* Background Subtle Dot Grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <Navbar />

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-8 pb-24 space-y-28">
        <Hero avatarUrl="/avatar.png" />

        {/* Seção Sobre */}
        <section id="sobre" className="space-y-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold text-slate-900 font-heading">
              Sobre Mim
            </h2>
            <p className="text-slate-600 mt-2">
              Um pouco da minha trajetória e do que estou buscando.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm leading-relaxed text-slate-700 space-y-4">
            <p>
              Estudante de Ciência da Computação (4º semestre) na UniCarioca,
              com foco em desenvolvimento Front-End (React, TypeScript, Tailwind
              CSS) e primeiros passos no Back-End com Python e FastAPI. Já
              desenvolvi projetos próprios, como este portfólio e uma API de
              fichas de treino com autenticação JWT e PostgreSQL. Sou esforçado,
              responsável e estou em busca de uma oportunidade para iniciar
              minha carreira como desenvolvedor Full-Stack.
            </p>
          </div>
        </section>

        <Education />
        <Skills />
        <Projects />

        {/* CTA Contato */}
        <section
          id="contato"
          className="bg-gradient-to-br from-purple-700 to-indigo-800 rounded-3xl p-10 md:p-16 text-white space-y-8 shadow-xl shadow-purple-600/20"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading">
              Vamos construir algo incrível juntos?
            </h2>
            <p className="text-purple-100 max-w-xl mx-auto text-base sm:text-lg">
              Estou disponível para estágio, oportunidades júnior e projetos de
              aprendizado. Vamos conversar!
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <a
              href="mailto:rzn097@gmail.com"
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors rounded-xl p-4"
            >
              <Mail className="w-5 h-5 shrink-0" />
              <span className="text-sm font-medium break-all">
                rzn097@gmail.com
              </span>
            </a>
            <a
              href="tel:+5521959350838"
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors rounded-xl p-4"
            >
              <Phone className="w-5 h-5 shrink-0" />
              <span className="text-sm font-medium">(21) 95935-0838</span>
            </a>
            <div className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
              <MapPin className="w-5 h-5 shrink-0" />
              <span className="text-sm font-medium">Duque de Caxias, RJ</span>
            </div>
          </div>

          <div className="pt-2 flex justify-center">
            <a
              href="mailto:rzn097@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-white text-purple-700 hover:bg-purple-50 transition-colors shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Enviar Mensagem
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
