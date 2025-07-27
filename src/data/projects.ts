import type { ProjectType } from "@/@types/project";

export const projects: ProjectType[] = [
    {
        id: 1,
        title: "Absolute Game",
        description: "Jogo interativo que ajuda a treinar o ouvido musical. O usuário ouve uma nota e tenta adivinhar qual é — ideal ara estudantes e músicos que desejam aprimorar sua percepção auditiva.",
        image: "src/assets/absolute_print.png",
        techs: ["html", "css", "javascript", "react"],
        repo: "https://github.com/giovanaassis/absolute_project.git",
        link: "https://absolute-project.vercel.app/"
    },
    {
        id: 2,
        title: "Product Store App",
        description: "Aplicação completa que simula uma loja de eletrônicos. Permite cadastrar, editar, excluir e visualizar produtos.",
        image: "src/assets/product_store_print.png",
        techs: ["javascript", "typescript", "postgresql", "react", "nodejs"],
        repo: "https://github.com/giovanaassis/product-store-pern.git",
        link: "https://product-store-pern-78lb.onrender.com/"
    }
]