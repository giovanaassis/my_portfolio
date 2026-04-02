import html from "@/assets/icons/techStack/html.svg";
import css from "@/assets/icons/techStack/css.svg";
import js from "@/assets/icons/techStack/js.svg";
import ts from "@/assets/icons/techStack/ts.svg";
import react from "@/assets/icons/techStack/react.svg";
import tailwind from "@/assets/icons/techStack/tailwind.svg";
import sass from "@/assets/icons/techStack/sass.svg";
import nextjs from "@/assets/icons/techStack/nextjs.svg";

import nodejs from "@/assets/icons/techStack/nodejs.svg";
import python from "@/assets/icons/techStack/python.svg";

import postgres from "@/assets/icons/techStack/postgres.svg";
import mysql from "@/assets/icons/techStack/mysql.svg";

import git from "@/assets/icons/techStack/git.svg";
import github from "@/assets/icons/techStack/github.svg";
import figma from "@/assets/icons/techStack/figma.svg";
import postman from "@/assets/icons/techStack/postman.svg";

import type { StackCategory } from "@/@types/stackCategory";

// frontend => html, css, javascript, typescript, react, tailwindcss, sass, nextjs
// backend => nodejs, python
// database => postgresql, mySql
// tools => git, github, figma, postman

export const stacks: Record<StackCategory, { icon: string; name: string }[]> = {
  "front-end": [
    { icon: html, name: "HTML" },
    { icon: css, name: "CSS" },
    { icon: js, name: "JavaScript" },
    { icon: ts, name: "TypeScript" },
    { icon: react, name: "React" },
    { icon: tailwind, name: "TailwindCSS" },
    { icon: sass, name: "Sass" },
    { icon: nextjs, name: "Next.Js" },
  ],
  "back-end": [
    { icon: nodejs, name: "Node.js" },
    { icon: python, name: "Python" },
  ],
  "banco de dados": [
    { icon: postgres, name: "PostgreSQL" },
    { icon: mysql, name: "MySQL" },
  ],
  "ferramentas de desenvolvimento": [
    { icon: git, name: "Git" },
    { icon: github, name: "Github" },
    { icon: figma, name: "Figma" },
    { icon: postman, name: "Postman" },
  ],
};
