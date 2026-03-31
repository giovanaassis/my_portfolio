import type { ProjectType } from "@/@types/project";

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "CarePulse",
    description:
      "Sistema de gerenciamento de saúde que permite o cadastro de pacientes, agendamento de consultas médicas e o gerenciamento completo dessas informações por meio de um painel administrativo.",
    image: "/carepulse-print.png",
    techs: ["Next.js","TypeScript", "TailwindCSS", "Shadcn UI"],
    link: "https://carepulse-orpin.vercel.app",
  },
  {
    id: 2,
    title: "Absolute Game",
    description:
      "Um app interativo e divertido que ajuda você a treinar seu ouvido musical na prática. A cada rodada, uma nota é reproduzida aleatoriamente e o desafio é acertar qual é.",
    image: "/absolute-print.png",
    techs: ["React", "HTML", "CSS", "JavaScript"],
    link: "https://absolute-project.vercel.app",
  },
  {
    id: 3,
    title: "Agricultura Solidária",
    description:
      "Projeto acadêmico com foco socioambiental, com o objetivo de criar uma rede colaborativa e sustentável em comunidades pequenas. Usuários podem doar ou receber alimentos frescos, como frutas e verduras.",
    image: "/agricultura-solidaria-print.png",
    techs: ["HTML", "CSS", "JavaScript"],
    link: "https://giovanaassis.github.io/agricultura-solidaria/src/index.html",
  },
  {
    id: 4,
    title: "YC Directory App",
    description:
      "Plataforma inspirada no Y Combinator, onde usuários podem publicar seus projetos, compartilhar e descobrir startups e se conectar com outros empreendedores.",
    image: "/yc-print.png",
    techs: ["Next.js", "TypeScript", "TailwindCSS", "Sanity CMS"],
    link: "https://yc-directory-app-nu.vercel.app",
  },
];
