import type { ProjectType } from "@/@types/project";

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Absolute Game",
    descriptionKey: "project1.description",
    image: "src/assets/absolute_print.png",
    techs: ["html", "css", "javascript", "react"],
    repo: "https://github.com/giovanaassis/absolute_project.git",
    link: "https://absolute-project.vercel.app/",
  },
  {
    id: 2,
    title: "Product Store App",
    descriptionKey: "project2.description",
    image: "src/assets/product_store_print.png",
    techs: ["typescript", "tailwind", "react", "postgresql", "nodejs"],
    repo: "https://github.com/giovanaassis/product-store-pern.git",
    link: "https://product-store-pern-78lb.onrender.com/",
  },
  {
    id: 3,
    title: "Evogym",
    descriptionKey: "project3.description",
    image: "src/assets/evogym_print.png",
    techs: ["javascript", "typescript", "tailwind", "react"],
    repo: "https://github.com/giovanaassis/evogym.git",
    link: "https://evogym-psi.vercel.app/",
  },
  {
    id: 4,
    title: "Agricultura Solidária App",
    descriptionKey: "project4.description",
    image: "src/assets/agricultura_solidaria_print.png",
    techs: ["html", "css", "javascript"],
    repo: "https://github.com/giovanaassis/agricultura-solidaria.git",
    link: "https://giovanaassis.github.io/agricultura-solidaria/src/index.html",
  },
  {
    id: 5,
    title: "YC Directory App",
    descriptionKey: "project5.description",
    image: "src/assets/yc_print.png",
    techs: ["typescript", "tailwind", "react", "nextjs"],
    repo: "https://github.com/giovanaassis/yc_directory_app.git",
    link: "https://yc-directory-app-nu.vercel.app/",
  },
];
