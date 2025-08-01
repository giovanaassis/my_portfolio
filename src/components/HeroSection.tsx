import ScrollStack from "./ScrollStack";
import { motion } from "motion/react";

function HeroSection() {
  return (
    <div id="home">
      <motion.p
        className="text-3xl lg:text-5xl font-bak leading-20 text-center tracking-wider my-15 mt-25 lg:leading-30 mx-5 text-word"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >
        &lt;Olá, sou a /&gt; <br />
        <span className="highlightTitle md:text-5xl lg:text-6xl">
          Giovana de Assis
        </span>{" "}
        <br />
        &lt;Sua /&gt; <br />
        <span className="highlightTitle md:text-5xl lg:text-6xl">
          Desenvolvedora Frontend
        </span>
      </motion.p>

      {/* SCROLL TECH STACK */}
      <ScrollStack />
    </div>
  );
}

export default HeroSection;
