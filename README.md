<h1 align="center">Jean Portfolio</h1>
<p align="center">
  Portfólio pessoal de <strong>Jean Cristiano Palmeira</strong> — Desenvolvedor Full-Stack em Formação
</p>

<p align="center">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
</p>

---

## Sobre o Projeto

Site pessoal desenvolvido do zero para apresentar trajetória, formação, habilidades e projetos como
desenvolvedor Full-Stack. Totalmente responsivo, com suporte a tema claro e escuro, construído com
componentização reutilizável e navegação por âncoras entre as seções.

## Funcionalidades

- Hero com apresentação, redes sociais e chamada para ação
- Seção Sobre Mim com resumo profissional
- Formação, Cursos e Idiomas
- Habilidades organizadas por categoria (Front-End, Back-End, Banco de Dados, Segurança, Ferramentas, Conceitos)
- Projetos com links para os repositórios reais no GitHub
- Seção de Contato com e-mail, telefone e localização clicáveis
- Menu fixo (sticky) com scroll suave entre seções
- Tema claro/escuro com alternância manual (respeitando a preferência do sistema no primeiro acesso e sem "flash" ao carregar)
- Layout responsivo para mobile, tablet e desktop

## Tecnologias

| Categoria  | Stack                              |
| ---------- | ---------------------------------- |
| Front-End  | React 18, TypeScript, Tailwind CSS |
| Build Tool | Vite                               |
| Ícones     | Lucide React                       |

## Como rodar localmente

```bash
git clone https://github.com/Jrzn9/jean-portfolio.git
cd jean-portfolio
npm install
npm run dev
```

Acesse `http://localhost:5173` no navegador.

### Build de produção

```bash
npm run build
npm run preview
```

## Estrutura do Projeto

```
src/
  components/
    Navbar.tsx      # Menu de navegação fixo
    Hero.tsx        # Seção inicial de apresentação
    Skills.tsx      # Habilidades técnicas
    Projects.tsx    # Projetos e repositórios
    Education.tsx   # Formação, cursos e idiomas
    Footer.tsx      # Rodapé
  App.tsx           # Composição das seções e seção de contato
  main.tsx          # Entry point
  index.css         # Estilos globais e fontes
public/
  avatar.jpg        # Foto de perfil exibida na seção Hero (comprimida, ~800x800)
```

## Adicionando a foto de perfil

Salve uma imagem como `avatar.jpg` dentro da pasta `public/`, idealmente já redimensionada para até
800x800px e comprimida (JPEG/WebP) para manter o carregamento rápido. Ela substitui automaticamente o
placeholder usado como fallback.

## Contato

- E-mail: rzn097@gmail.com
- LinkedIn: linkedin.com/in/jeancristiano
- GitHub: github.com/Jrzn9

---

<p align="center">
Desenvolvido por Jean Cristiano Palmeira
</p>
