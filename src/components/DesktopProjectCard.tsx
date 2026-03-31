import type { ProjectType } from "@/@types/project";
import { ArrowUpRight } from "lucide-react";

function DesktopProjectCard({ project, index }: { project: ProjectType, index: number }) {
  const { id, title, image, description, techs, link } = project;

  return (
    <div className="desktopProjectCard">
      {/* PROJECT DETAILS */}
      <div className={`w-[70%] flex flex-col gap-5 ${index % 2 !== 0 ? "items-end" : "text-start"}`}>
        <span className="font-bak text-2xl mb-7">0{id}</span>
        <div>
          {techs.map((tech) => (
            <span className="projectTechs">{tech}</span>
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
          className={`w-full h-full ${(id === 1 || id === 5) && "object-left"} object-cover rounded-2xl`}
        />
      </div>
    </div>
  );
}

export default DesktopProjectCard;
