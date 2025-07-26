import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import {
  //   BiLogoTypescript,
  BiLogoJavascript,
  //   BiLogoTailwindCss,
} from "react-icons/bi";
import ProjectImage from "@/assets/absolute_print.png";

function ProjectCard() {
  return (
    <div className="flex flex-col gap-10 text-dark-purple items-center justify-center p-4 bg-white rounded-xl">
      <div>
        <img
          src={ProjectImage}
          alt="project-image"
          className="rounded-2xl shadow-xl"
        />
      </div>

      <div className="flex flex-col gap-7">
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
          <button className="secondaryButton w-[50%]">código do projeto</button>
          <button className="secondaryButton w-[50%]">link do projeto</button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
