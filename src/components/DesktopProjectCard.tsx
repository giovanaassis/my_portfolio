import type { ProjectType } from "@/@types/project";
import { fadeFromLeft, fadeFromRight } from "@/lib/animations";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

function DesktopProjectCard({ project, index }: { project: ProjectType, index: number }) {
  const { id, title, image, description, techs, link } = project;
  const isEven = index % 2 !== 0; 

  return (
    <motion.div
    {...(isEven ? fadeFromRight : fadeFromLeft)}
    className="desktopProjectCard">
      {/* PROJECT DETAILS */}
      <div className={`w-[70%] flex flex-col gap-5 ${isEven ? "items-end" : "text-start"}`}>
        <span className="font-bak text-2xl mb-7">0{id}</span>
        <div className="flex flex-wrap">
          {techs.map((tech) => (
            <span className="projectTechs" key={tech}>{tech}</span>
          ))}
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="italic uppercase flex gap-2 hover:text-primary-purple group w-fit"
        >
          Ir para o site{" "}
          <ArrowUpRight
            size={20}
            className="transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
          />
        </a>
      </div>

      {/* PROJECT IMAGE */}
      <div className="w-[30%] h-full shadow-md shadow-black rounded-2xl">
        <img
          src={image}
          alt={`project ${title} image`}
          className={`w-full h-full ${(id === 1) && "object-left"} object-cover rounded-2xl`}
        />
      </div>
    </motion.div>
  );
}

export default DesktopProjectCard;
