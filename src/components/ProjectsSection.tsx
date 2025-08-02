import ProjectCard from "./ProjectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projects } from "@/data/projects";
import { useTranslation } from "react-i18next";

function ProjectsSection() {
  const { t } = useTranslation("projects");
  const navItems = t("navItems", {
    returnObjects: true,
    ns: "home",
  }) as string[];

  return (
    <section id={navItems[2]} className="scroll-mt-30">
      <h1 className="highlightTitle mx-auto">{t("title")}</h1>

      <Carousel
        className="mt-20 w-full max-w-xs md:max-w-lg lg:max-w-4xl mx-auto"
        opts={{ loop: true }}
      >
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem key={project.id}>
              <ProjectCard project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="w-10 h-10 border-0 bg-primary-purple text-white hover:bg-secondary-purple" />

        <CarouselNext className="w-10 h-10 border-0 bg-primary-purple text-white hover:bg-secondary-purple" />
      </Carousel>
    </section>
  );
}

export default ProjectsSection;
