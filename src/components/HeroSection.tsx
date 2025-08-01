import { useTranslation } from "react-i18next";
import ScrollStack from "./ScrollStack";
import { motion } from "motion/react";

function HeroSection() {
  const { t } = useTranslation("home");

  return (
    <div id="home">
      <motion.p
        className="text-3xl lg:text-5xl font-bak leading-20 text-center tracking-wider my-15 mt-25 lg:leading-30 mx-5 text-word"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        &lt;{t("greetings.first")} /&gt; <br />
        <span className="highlightTitle md:text-5xl lg:text-6xl">
          Giovana de Assis
        </span>{" "}
        <br />
        &lt;{t("greetings.second")} /&gt; <br />
        <span className="highlightTitle md:text-5xl lg:text-6xl">
          {t("greetings.third")}
        </span>
      </motion.p>

      {/* SCROLL TECH STACK */}
      <ScrollStack />
    </div>
  );
}

export default HeroSection;
