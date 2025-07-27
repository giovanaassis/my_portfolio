import type { ProjectType } from "@/@types/project";

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Absolute Game",
    description:
      "Jogo interativo que ajuda a treinar o ouvido musical. O usuário ouve uma nota e tenta adivinhar qual é — ideal ara estudantes e músicos que desejam aprimorar sua percepção auditiva.",
    image: "src/assets/absolute_print.png",
    techs: ["html", "css", "javascript", "react"],
    repo: "https://github.com/giovanaassis/absolute_project.git",
    link: "https://absolute-project.vercel.app/",
  },
  {
    id: 2,
    title: "Product Store App",
    description:
      "Aplicação completa que simula uma loja de eletrônicos. Permite cadastrar, editar, excluir e visualizar produtos.",
    image: "src/assets/product_store_print.png",
    techs: ["typescript", "tailwind", "react", "postgresql", "nodejs"],
    repo: "https://github.com/giovanaassis/product-store-pern.git",
    link: "https://product-store-pern-78lb.onrender.com/",
  },
  {
    id: 3,
    title: "Evogym",
    description:
      "Landing page responsiva para uma academia fictícia, com design moderno e foco em conversão.",
    image: "src/assets/evogym_print.png",
    techs: ["javascript", "typescript", "tailwind", "react"],
    repo: "https://github.com/giovanaassis/evogym.git",
    link: "https://evogym-psi.vercel.app/",
  },
  {
    id: 4,
    title: "Agricultura Solidária App",
    description:
      "Projeto acadêmico com foco socioambiental. Protótipo onde é possível doar ou receber alimentos frescos como frutas e verduras. Usuários se cadastram para participar da rede solidária.",
    image: "src/assets/agricultura_solidaria_print.png",
    techs: ["html", "css", "javascript"],
    repo: "https://github.com/giovanaassis/agricultura-solidaria.git",
    link: "https://giovanaassis.github.io/agricultura-solidaria/src/index.html",
  },
  {
    id: 5,
    title: "YC Directory App",
    description:
      "Plataforma inspirada no Y Combinator, onde usuários podem compartilhar e descobrir startups e se conectar com outros empreendedores.",
    image: "src/assets/yc_print.png",
    techs: ["typescript", "tailwind", "react", "nextjs"],
    repo: "https://github.com/giovanaassis/yc_directory_app.git",
    link: "https://yc-directory-app-nu.vercel.app/",
  },
];
