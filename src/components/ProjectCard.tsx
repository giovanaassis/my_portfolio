import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoPostgresql,
} from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import type { ProjectType } from "@/@types/project";

const getTechIcons = (tech: string) => {
  switch (tech) {
    case "html":
      return <FaHtml5 />;

    case "css":
      return <FaCss3Alt />;

    case "javascript":
      return <BiLogoJavascript />;

    case "typescript":
      return <BiLogoTypescript />;

    case "tailwind":
      return <BiLogoTailwindCss />;

    case "react":
      return <FaReact />;

    case "nodejs":
      return <FaNodeJs />;

    case "nextjs":
      return <RiNextjsFill />;

    case "postgresql":
      return <BiLogoPostgresql />;

    default:
      return null;
  }
};

function ProjectCard({ project }: { project: ProjectType }) {
  const { title, description, image, techs, repo, link } = project;

  const techComponents = techs.map((tech) => getTechIcons(tech));

  return (
    <div
      className="flex flex-col gap-10 text-word items-center justify-center p-4 bg-white rounded-xl lg:flex-row dark:bg-dark-purple"
    >
      <div className="lg:h-[400px] lg:w-[50%] self-start">
        <img
          src={image}
          alt={`image-project-${title}`}
          className="rounded-2xl shadow-2xl h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-7 lg:w-[45%] self-start">
        {/* PROJECT TITLE */}
        <h2 className="text-4xl font-semibold">{title}</h2>

        {/* PROJECT DESCRIPTION */}
        <p className="tracking-widest">{description}</p>

        {/* PROJECT TECH */}
        <div className="flex gap-5 text-4xl text-secondary-purple dark:text-light-purple">
          {techComponents.map((tech) => tech)}
        </div>

        {/* PROJECT LINKS */}
        <div className="flex gap-5">
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[50%] h-[70px] transition-transform duration-200 md:hover:scale-105"
          >
            <button className="secondaryButton h-full">
              código do projeto
            </button>
          </a>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[50%] h-[70px] transition-transform duration-200 md:hover:scale-105"
          >
            <button className="secondaryButton h-full">link do projeto</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
