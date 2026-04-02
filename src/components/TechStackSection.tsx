import { motion } from "motion/react";
import { useState } from "react";
import HighlightText from "./HighlightText";
import { stacks } from "@/data/stacks";
import type { StackCategory } from "@/@types/stackCategory";
import { fadeDown } from "@/lib/animations";

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

      <motion.div
        {...fadeDown}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.8, once: true }}
        className="w-full flex my-10 flex-wrap gap-5 items-center justify-center lg:gap-10"
      >
        {stacks[selectedCategory].map(({ icon, name }) => (
          <div
            className="flex flex-col items-center justify-center gap-3 uppercase bg-background w-20 font-medium text-sm lg:text-lg lg:w-30"
            key={name}
          >
            <img src={icon} alt={name} className="w-10 lg:w-15" />
            <span>{name}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default TechStackSection;
