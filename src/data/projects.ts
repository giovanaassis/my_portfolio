import type { ProjectType } from "@/@types/project";

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "CarePulse",
    description:
      "Sistema de gerenciamento de saúde desenvolvido com Next.js que permite o cadastro de pacientes, agendamento de consultas médicas e o gerenciamento completo dessas informações por meio de um painel administrativo.",
    image: "/carepulse-print.png",
    techs: ["TypeScript", "TailwindCSS", "React", "PostgreSQL", "Node.js"],
    repo: "https://github.com/giovanaassis/product-store-pern.git",
    link: "https://carepulse-orpin.vercel.app",
  },
  {
    id: 2,
    title: "Absolute Game",
    description:
      "Um projeto simples e divertido para ajudar a treinar e desenvolver seu ouvido absoluto! Ele reproduz uma nota musical aleatória, e o usuário deve adivinhar qual é. Ideal para músicos e entusiastas que desejam aprimorar sua percepção musical.",
    image: "/absolute-print.png",
    techs: ["HTML", "CSS", "JavaScript", "React"],
    repo: "https://github.com/giovanaassis/absolute_project.git",
    link: "https://absolute-project.vercel.app/",
  },
  {
    id: 3,
    title: "Agricultura Solidária App",
    description:
      "Projeto acadêmico com foco socioambiental. Protótipo onde é possível doar ou receber alimentos frescos como frutas e verduras. Usuários se cadastram para participar da rede solidária.",
    image: "/agricultura-solidaria-print.png",
    techs: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/giovanaassis/agricultura-solidaria.git",
    link: "https://giovanaassis.github.io/agricultura-solidaria/src/index.html",
  },
  {
    id: 4,
    title: "YC Directory App",
    description:
      "Plataforma inspirada no Y Combinator, onde usuários podem compartilhar e descobrir startups e se conectar com outros empreendedores.",
    image: "/yc-print.png",
    techs: ["TypeScript", "TailwindCSS", "React", "Next.js"],
    repo: "https://github.com/giovanaassis/yc_directory_app.git",
    link: "https://yc-directory-app-nu.vercel.app/",
  },
  {
    id: 5,
    title: "Evogym",
    description: "Landing page responsiva para uma academia fictícia, com design moderno e foco em conversão.",
    image: "/evogym-print.png",
    techs: ["JavaScript", "TypeScript", "TailwindCSS", "React"],
    repo: "https://github.com/giovanaassis/evogym.git",
    link: "https://evogym-psi.vercel.app/",
  },
];
