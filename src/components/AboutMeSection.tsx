import ProfileImage from "@/assets/profile-image.jpg";
import { motion } from "motion/react";
import { FaMapMarkerAlt } from "react-icons/fa";

function AboutMeSection() {
  return (
    <section id="sobre mim" className="scroll-mt-30 text-center">
      <h2 className="subtitle">
        Quem sou <span className="highlightText">eu?</span>
      </h2>
      <p>Um pouco da minha história</p>

      <div className="flex flex-col md:flex-row gap-10 items-center justify-center mt-20 text-center leading-9">
        <motion.div
          // className="w-60 h-60 rounded-full overflow-hidden border-4 border-primary-purple shrink-0"
          className="w-60 h-70 relative"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.5, once: true }}
        >
          <div className="bg-secondary-purple w-full h-full absolute  z-0 rounded-lg" />

          {/* JUST FOR MOBILE */}
          <span className="absolute inline-flex opaci-75 -right-1 h-4 w-4 rounded-full bg-green-500 -top-2 z-15 animate-ping lg:hidden"></span>
          <span className="absolute inline-flex opaci-75 -right-1 h-4 w-4 rounded-full bg-green-500 -top-2 z-15 lg:hidden"></span>

          <img
            src={ProfileImage}
            alt="my-profile-image"
            className="w-full h-full object-cover relative z-10 rounded-lg shadow-dark-purple shadow-sm"
          />
        </motion.div>

        {/* ABOUT ME TEXT */}
        <motion.div
          className="w-full sm:w-[400px] md:w-[500px] md:text-left flex flex-col items-center "
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
            <h4>Brasil, Rio de Janeiro</h4>
          </div>

          <motion.p
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: .8 }}
            viewport={{ amount: 0.5, once: true }}
          >
            Me chamo Giovana e estou me formando em{" "}
            <span className="highlightText">
              Análise e Desenvolvimento de Sistemas
            </span>
            . Sou apaixonada por música, idiomas, games — e, claro, por
            tecnologia.
          </motion.p>

          <motion.p
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: .8 }}
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
            transition={{ duration: .8 }}
            viewport={{ amount: 0.5, once: true }}
          >
            Minha experiência na área de varejo e vendas me proporcionou
            habilidades importantes como{" "}
            <span className="highlightText">
              comunicação, trabalho em equipe e pensamento analítico
            </span>{" "}
            em ambientes dinâmicos e{" "}
            <span className="highlightText">orientados por metas.</span> Hoje,
            aplico essas competências no desenvolvimento de software, buscando
            criar soluções digitais eficientes para problemas reais.
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
