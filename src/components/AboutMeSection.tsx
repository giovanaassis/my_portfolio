import ProfileImage from "@/assets/profile-image.jpg";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

function AboutMeSection() {
  const { t } = useTranslation("home");
  const navItems = t("navItems", { returnObjects: true }) as string[];
  

  return (
    <section id={navItems[1]} className="scroll-mt-30">
      <h1 className="highlightTitle mx-auto">Quem sou eu?</h1>

      <div className="flex flex-col md:flex-row gap-10 items-center justify-center mt-20 text-center leading-9">
        <motion.div
          className="w-60 h-60 rounded-full overflow-hidden border-4 border-primary-purple shrink-0"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.5 }}
        >
          <img
            src={ProfileImage}
            alt="my-profile-image"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="w-[300px] md:w-[500px] md:text-left"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.5 }}
        >
          <p>
            Me chamo Giovana, sou graduanda em{" "}
            <span className="highlightText">
              Análise e Desenvolvimento de Sistemas
            </span>{" "}
            e apaixonada por transformar idéias em interfaces funcionais.
          </p>

          <p>
            Desenvolvo projetos com{" "}
            <span className="highlightText">
              Typescript, React, TailwindCSS e Next.js.
            </span>{" "}
            Também gosto de me aventurar em backend, onde exploro tecnologias
            como{" "}
            <span className="highlightText">
              Node.js, Express e PostgreSQL.
            </span>
          </p>

          <p>
            Atualmente busco minha primeira vaga na área de tecnologia, como
            <span className="highlightText"> Desenvolvedora JR / Estágio.</span>
          </p>

          <a href="/cv-giovana-assis.pdf" download="cv-giovana-assis.pdf">
            <button className="primaryButton">baixar currículo</button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMeSection;
