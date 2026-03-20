import { motion } from "motion/react";
import Programmer from "@/assets/programmer.svg";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";

function HeroSection() {
  return (
    <div id="home">
      <motion.section
        className="flex flex-col-reverse items-center text-center tracking-wider mt-25 mx-5 text-word"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* HERO CONTENT */}
        <div>
          <h1>
            Olá! Sou <span className="highlightText">Giovana</span>
          </h1>
          <h2>
            Sua Desenvolvedora <br /> Full-Stack
          </h2>
          <p className="mt-5 dark:font-extralight">
            Te ajudo a criar experiências digitais que trazem impacto real
          </p>

          <a href="#contato">
            <button className="primaryButton px-15">me contate</button>
          </a>
          <div className="flex items-center justify-center gap-10 mt-5">
            <a
              href="https://github.com/giovanaassis"
              target="_blank"
              rel="noopener noreferrer"
              className="iconsCircle"
            >
              <TbBrandGithubFilled size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/giovanadeassis"
              target="_blank"
              rel="noopener noreferrer"
              className="iconsCircle"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div>
          <img
            src={Programmer}
            alt="draw of a programmer"
            className="animate-bounce w-30"
          />
        </div>
      </motion.section>
    </div>
  );
}

export default HeroSection;
