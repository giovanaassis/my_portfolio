import ProfileImage from "@/assets/profile-image.jpg";
import { motion } from "motion/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { FaMusic } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import BrazilFlag from "@/assets/brasil.png";
import UKFlag from "@/assets/united-kingdom.png";

function AboutMeSection() {
  return (
    <section id="sobre mim" className="scroll-mt-30 text-center w-full">
      <h2 className="subtitle">
        Quem sou <span className="highlightText">eu?</span>
      </h2>
      <p>Um pouco da minha história</p>

      <div className="flex flex-col lg:flex-row gap-10 items-center justify-center mt-20 text-center">
        <div className="flex flex-col items-center">
          {/* PROFILE IMAGE */}
          <motion.div
            className="w-60 h-70 relative md:w-80 md:h-[400px] md:self-start "
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.5, once: true }}
          >
            {/* PURPLE BACKGROUND */}
            <motion.div
              initial={{ x: 0, y: 0 }}
              whileInView={{ x: -15, y: 10 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-secondary-purple w-full h-full absolute z-0 rounded-lg"
            />
            <motion.img
              initial={{ x: 0, y: 0 }}
              whileInView={{ x: 10, y: -10 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
              src={ProfileImage}
              alt="my-profile-image"
              className="w-full h-full object-cover relative z-10 rounded-lg shadow-dark-purple shadow-sm"
            />
          </motion.div>

          {/* INFO EXTRA */}
          <div>
            <h4>Interesses</h4>
            <div className="flex gap-5">
              <div className="smallCard">
                <IoGameController size={30} />
                <span>games</span>
              </div>
              <div className="smallCard">
                <FaMusic size={30} />
                <span>música</span>
              </div>
              <div className="smallCard">
                <GiCoffeeCup size={30} />
                <span>café</span>
              </div>
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
          className="w-full sm:w-[400px] lg:text-left flex flex-col items-center text-sm md:w-[500px] lg:items-start leading-7"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
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

          <motion.p
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.5, once: true }}
          >
            Me chamo Giovana, estou me formando em{" "}
            <span className="highlightText">
              Análise e Desenvolvimento de Sistemas,
            </span>{" "}
            e sou apaixonada por tecnologia!
          </motion.p>

          <motion.p
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.5, once: true }}
          >
            Iniciei minha tragetória na área de varejo e vendas, onde desenvolvi
            habilidades importantes como{" "}
            <span className="highlightText">
              comunicação, trabalho em equipe e pensamento analítico
            </span>{" "}
            , atuando em ambientes dinâmicos e{" "}
            <span className="highlightText">orientados por metas.</span> Hoje,
            aplico essas competências no desenvolvimento de software, buscando
            criar soluções digitais eficientes para problemas reais.
          </motion.p>

          <motion.p
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.5, once: true }}
          >
            Atualmente, foco em Desenvolvimento Web, estudando e construindo
            projetos com{" "}
            <span className="highlightText">
              React, Node.js e banco de dados SQL.
            </span>{" "}
            Também tenho experiência na criação e consumo de apis, interfaces
            responsivas e validação de formulários.
          </motion.p>

          <motion.p
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.5, once: true }}
          >
            Busco minha primeira vaga na área de tecnologia — como{" "}
            <span className="highlightText">estagiária ou júnior</span>, para
            continuar minha trajetória profissional e evoluir junto com uma
            equipe.
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
