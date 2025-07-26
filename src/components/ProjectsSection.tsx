import ProjectCard from "./ProjectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function ProjectsSection() {
  return (
    <section>
      <h1 className="highlightTitle mx-auto">Projetos para chamar de meu.</h1>

      <Carousel
        className="mt-10 w-full max-w-xs md:max-w-lg lg:max-w-4xl mx-auto"
        opts={{ loop: true }}
      >
        <CarouselContent>
          <CarouselItem>
            <ProjectCard />
          </CarouselItem>
          <CarouselItem>
            <ProjectCard />
          </CarouselItem>
          <CarouselItem>
            <ProjectCard />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

export default ProjectsSection;
