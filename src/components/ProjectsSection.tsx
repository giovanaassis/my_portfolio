import MobileProjectCard from "@/components/MobileProjectCard";
import { projects } from "@/data/projects";
import HighlightText from "./HighlightText";

function ProjectsSection() {
  return (
    <section id="projetos" className="scroll-mt-30 text-center w-full">
      <h2 className="subtitle">
        O que <HighlightText>entrego.</HighlightText>
      </h2>
      <p>Meus principais projetos</p>

      <div className="w-full flex flex-col items-center justify-center mt-20">
        {projects.map(project => <MobileProjectCard project={project} />)}
      </div>
    </section>
  );
}

export default ProjectsSection;
