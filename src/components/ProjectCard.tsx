import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import {
  //   BiLogoTypescript,
  BiLogoJavascript,
  //   BiLogoTailwindCss,
} from "react-icons/bi";
import ProjectImage from "@/assets/absolute_print.png";

function ProjectCard() {
  return (
    <div className="flex flex-col gap-10 text-dark-purple items-center justify-center p-4 bg-white rounded-xl lg:flex-row">

        <div className="lg:h-[400px] lg:w-[50%] self-start">
          <img
            src={ProjectImage}
            alt="project-image"
            className="rounded-2xl shadow-2xl h-full"
          />
        </div>

      <div className="flex flex-col gap-7 lg:w-[45%]">
        {/* PROJECT TITLE */}
        <h2 className="text-4xl font-semibold">
          Absolute Game
        </h2>

        {/* PROJECT DESCRIPTION */}
        <p className="tracking-widest">
          Um projeto simples e divertido para ajudar a treinar e desenvolver seu
          ouvido absoluto! Ele reproduz uma nota musical aleatória, e o usuário
          deve adivinhar qual é. Ideal para músicos e entusiastas que desejam
          aprimorar sua percepção musical.
        </p>

        {/* PROJECT TECH */}
        <div className="flex gap-5 text-4xl text-secondary-purple">
          <FaHtml5 />
          <FaCss3Alt />
          <BiLogoJavascript />
          <FaReact />
        </div>

        {/* PROJECT LINKS */}
        <div className="flex gap-5">
          <button className="secondaryButton w-[50%] transition-transform duration-200 md:hover:scale-105">código do projeto</button>
          <button className="secondaryButton w-[50%] transition-transform duration-200 md:hover:scale-105">link do projeto</button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
