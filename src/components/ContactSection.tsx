import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import HighlightText from "./HighlightText";

function ContactSection() {
  return (
    <section id="contato" className="scroll-mt-30 text-center">
      <h2 className="subtitle">Onde me <HighlightText>encontrar?</HighlightText></h2>
      <p>Minhas redes de contato</p>

      <div className="flex flex-col items-center justify-center gap-15 mt-20 lg:flex-row">
        {/* MY SOCIALS */}
        <motion.div
          className="flex flex-col items-center gap-10"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.5, once: true }}
        >
          <button className="gradientButton text-xl w-70">
            <a
              href="https://www.linkedin.com/in/giovanadeassis"
              className="flex items-center justify-between gap-5"
            >
              <FaLinkedin />
              <span>meu linkedin</span>
              <ArrowUpRight />
            </a>
          </button>

          <button className="gradientButton text-xl w-70">
            <a
              href="https://github.com/giovanaassis"
              className="flex items-center justify-between gap-5"
            >
              <FaGithub />
              <span>meu github</span>
              <ArrowUpRight />
            </a>
          </button>
        </motion.div>

        {/* STYLED LINE */}
        <div className="w-[1px] h-120 bg-primary-purple hidden lg:block"></div>

        {/* CONTACT FORM */}
        <motion.form
          action="https://formsubmit.co/ec9031f0ff9ceea364825579d87b7a0e"
          method="post"
          className="flex flex-col gap-5 w-full lg:w-[350px] items-center"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.5 }}
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome"
            className="inputs"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            className="inputs"
            required
          />

          <textarea
            name="message"
            id="message"
            placeholder="Sua mensagem aqui..."
            rows={10}
            className="inputs"
            required
          ></textarea>

          <button
            type="submit"
            className="primaryButton w-full lg:w-[50%] lg:self-start"
          >
            Enviar
          </button>
          <input
            type="hidden"
            name="_next"
            value="https://my-portfolio-tau-ten-79.vercel.app/"
          ></input>
        </motion.form>
      </div>
    </section>
  );
}

export default ContactSection;
