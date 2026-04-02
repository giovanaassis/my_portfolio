// import { motion } from "motion/react";
// import { useTranslation } from "react-i18next";

import { useState } from "react";
import HighlightText from "./HighlightText";
import { stacks } from "@/data/stacks";
import type { StackCategory } from "@/@types/stackCategory";

// function TechStackSection() {
//   const frontendStack: string[] = [
//     "html",
//     "css",
//     "javascript",
//     "typescript",
//     "react",
//     "tailwindcss",
//   ];
//   const backendStack: string[] = [
//     "node.js",
//     "express",
//     "postgresql",
//     "apis rest",
//   ];
//   const othersStack: string[] = ["git", "github", "jest", "npm", "figma"];

//   const { t } = useTranslation("techs");
//   const navItems = t("navItems", {
//     returnObjects: true,
//     ns: "home",
//   }) as string[];

//   return (
//     <section id={navItems[3]} className="scroll-mt-30">
//       <h1 className="highlightTitle mx-auto">{t("title")}</h1>

//       <div className="flex flex-col items-center justify-center md:items-start gap-10 mt-20 md:flex-row">
//         <motion.div
//           initial={{ y: -50, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ amount: 0.5 }}
//         >
//           <h3 className="md:text-4xl">frontend</h3>
//           <div className="techStacks">
//             {frontendStack.map((stack) => (
//               <span key={stack}>{stack}</span>
//             ))}
//           </div>
//         </motion.div>
//         {/* STYLED LINE */}
//         <div className="w-50 bg-primary-purple h-2 md:w-2 md:h-100"></div>

//         <motion.div
//           initial={{ y: -50, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.5 }}
//           viewport={{ amount: 0.5 }}
//         >
//           <h3 className="md:text-4xl">backend</h3>
//           <div className="techStacks">
//             {backendStack.map((stack) => (
//               <span key={stack}>{stack}</span>
//             ))}
//           </div>
//         </motion.div>
//         {/* STYLED LINE */}
//         <div className="w-50 bg-primary-purple h-2 md:w-2 md:h-100"></div>

//         <motion.div
//           initial={{ y: -50, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5, delay: 1 }}
//           viewport={{ amount: 0.5 }}
//         >
//           <h3 className="md:text-4xl">{t("other")}</h3>
//           <div className="techStacks">
//             {othersStack.map((stack) => (
//               <span key={stack}>{stack}</span>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default TechStackSection;

function TechStackSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<StackCategory>("front-end");
  const stackCategories: StackCategory[] = [
    "front-end",
    "back-end",
    "banco de dados",
    "ferramentas de desenvolvimento",
  ];

  return (
    <section id="tecnologias" className="scroll-mt-30 text-center w-full">
      <h2 className="subtitle">
        O que <HighlightText>sei.</HighlightText>
      </h2>
      <p>Todas minhas skills técnicas</p>

      <ul className="flex flex-wrap items-center justify-center gap-2 w-full text-xs md:text-sm">
        {stackCategories.map((category) => (
          <li
            className={`activeStackCategory ${selectedCategory === category && "after:w-full text-secondary-purple dark:text-lilac"}`}
            onClick={() => setSelectedCategory(category)}
            key={category}
          >
            {category}
          </li>
        ))}
      </ul>

      <div className="w-full flex my-10 flex-wrap gap-5 items-center justify-center lg:gap-10">
        {stacks[selectedCategory].map(({ icon, name }) => (
          <div
            className="flex flex-col items-center justify-center gap-3 uppercase bg-background w-20 font-medium text-sm lg:text-lg lg:w-30"
            key={name}
          >
            <img src={icon} alt={name} className="w-10 lg:w-15" />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStackSection;
