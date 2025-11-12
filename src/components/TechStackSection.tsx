import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

function TechStackSection() {
  const frontendStack: string[] = [
    "html",
    "css",
    "javascript",
    "typescript",
    "react",
    "tailwindcss",
  ];
  const backendStack: string[] = [
    "node.js",
    "express",
    "postgresql",
    "apis rest",
  ];
  const othersStack: string[] = ["git", "github", "jest", "npm", "figma"];

  const { t } = useTranslation("techs");
  const navItems = t("navItems", {
    returnObjects: true,
    ns: "home",
  }) as string[];

  return (
    <section id={navItems[3]} className="scroll-mt-30">
      <h1 className="highlightTitle mx-auto">{t("title")}</h1>

      <div className="flex flex-col items-center justify-center md:items-start gap-10 mt-20 md:flex-row">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.5 }}
        >
          <h3 className="md:text-4xl">frontend</h3>
          <div className="techStacks">
            {frontendStack.map((stack) => (
              <span key={stack}>{stack}</span>
            ))}
          </div>
        </motion.div>
        {/* STYLED LINE */}
        <div className="w-50 bg-primary-purple h-2 md:w-2 md:h-100"></div>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ amount: 0.5 }}
        >
          <h3 className="md:text-4xl">backend</h3>
          <div className="techStacks">
            {backendStack.map((stack) => (
              <span key={stack}>{stack}</span>
            ))}
          </div>
        </motion.div>
        {/* STYLED LINE */}
        <div className="w-50 bg-primary-purple h-2 md:w-2 md:h-100"></div>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ amount: 0.5 }}
        >
          <h3 className="md:text-4xl">{t("other")}</h3>
          <div className="techStacks">
            {othersStack.map((stack) => (
              <span key={stack}>{stack}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TechStackSection;
