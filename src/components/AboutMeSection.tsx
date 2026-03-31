import ProfileImage from "@/assets/images/profile-image.jpg";
import { motion } from "motion/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { FaMusic } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import BrazilFlag from "@/assets/icons/brasil.png";
import UKFlag from "@/assets/icons/united-kingdom.png";
import {
  diagonalDown,
  diagonalTop,
  fadeFromLeft,
  fadeFromRight,
  fadeUp,
} from "@/lib/animations";
import HighlightText from "./HighlightText";

const myInterests = [
  {
    icon: IoGameController,
    name: "games",
  },
  {
    icon: FaMusic,
    name: "música",
  },
  {
    icon: GiCoffeeCup,
    name: "café",
  },
];

function AboutMeSection() {
  return (
    <section id="sobre" className="scroll-mt-30 text-center w-full">
      <h2 className="subtitle">
        Quem sou <HighlightText>eu?</HighlightText>
      </h2>
      <p>Um pouco da minha história</p>

      <div className="flex flex-col lg:flex-row gap-10 items-center justify-center mt-20 text-center">
        <div className="flex flex-col items-center">
          {/* PROFILE IMAGE */}
          <motion.div
            {...fadeFromLeft}
            className="w-60 h-70 relative md:w-80 md:h-[400px] md:self-start "
          >
            {/* PURPLE BACKGROUND */}
            <motion.div
              {...diagonalDown}
              className="bg-secondary-purple w-full h-full absolute z-0 rounded-lg"
            />

            <motion.img
              {...diagonalTop}
              src={ProfileImage}
              alt="my-profile-image"
              className="w-full h-full object-cover relative z-10 rounded-lg shadow-dark-purple shadow-sm"
            />
          </motion.div>

          {/* INFO EXTRA */}
          <div>
            <h4>Interesses</h4>
            <div className="flex gap-5">
              {myInterests.map((interest) => (
                <div className="smallCard" key={interest.name}>
                  <interest.icon size={30} />
                  <span>{interest.name}</span>
                </div>
              ))}
            </div>

            <h4>Idiomas</h4>
            <div className="flex gap-5">
              <div className="smallCard">
                <img src={BrazilFlag} alt="brazil flag" className="w-5" />
                <span>português</span>
              </div>
              <div className="smallCard">
                <img src={UKFlag} alt="united kingdom flag" className="w-5" />
                <span>inglês</span>
              </div>
            </div>
          </div>
        </div>

        {/* ABOUT ME TEXT */}
        <motion.div
          {...fadeFromRight}
          className="w-full sm:w-[400px] lg:text-left flex flex-col items-center text-sm md:w-[500px] lg:items-start leading-7"
        >
          {/* STYLED LINE */}
          <span className="h-1 w-30 bg-primary-purple my-10"></span>

          <h3 className="font-bak text-secondary-purple dark:text-primary-purple">
            Giovana de Assis
          </h3>
          <div className="flex items-center gap-3 text-light-purple mb-10 text-lg">
            <FaMapMarkerAlt />
            <span>Brasil, Rio de Janeiro</span>
          </div>

          <motion.p {...fadeUp}>
            Me chamo Giovana, estou me formando em{" "}
            <HighlightText>
              Análise e Desenvolvimento de Sistemas,
            </HighlightText>{" "}
            e sou apaixonada por tecnologia!
          </motion.p>

          <motion.p {...fadeUp}>
            Iniciei minha tragetória na área de varejo e vendas, onde desenvolvi
            habilidades importantes como{" "}
            <HighlightText>
              comunicação, trabalho em equipe e pensamento analítico
            </HighlightText>{" "}
            , atuando em ambientes dinâmicos e{" "}
            <HighlightText>orientados por metas.</HighlightText> Hoje, aplico
            essas competências no desenvolvimento de software, buscando criar
            soluções digitais eficientes para problemas reais.
          </motion.p>

          <motion.p {...fadeUp}>
            Atualmente, foco em Desenvolvimento Web, estudando e construindo
            projetos com{" "}
            <HighlightText>React, Node.js e banco de dados SQL.</HighlightText>{" "}
            Também tenho experiência na criação e consumo de apis, interfaces
            responsivas e validação de formulários.
          </motion.p>

          <motion.p {...fadeUp}>
            Busco minha primeira vaga na área de tecnologia — como{" "}
            <HighlightText>estagiária ou júnior</HighlightText>, para continuar
            minha trajetória profissional e evoluir junto com uma equipe.
          </motion.p>

          <a
            href="/cv-giovana-assis.pdf"
            download="cv-giovana-assis.pdf"
            className="gradientButton"
          >
            baixar currículo
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMeSection;
