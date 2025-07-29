import ProfileImage from "@/assets/profile-image.jpg";

function AboutMeSection() {
  return (
    <section id="sobre mim">
      <h1 className="highlightTitle mx-auto">Quem sou eu?</h1>

      <div className="flex flex-col md:flex-row gap-10 items-center justify-center mt-20 text-center leading-9">

        <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-primary-purple shrink-0">
          <img
            src={ProfileImage}
            alt="my-profile-image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-[300px] md:w-[500px] md:text-left">
          <p>
            Me chamo Giovana, sou graduanda em{" "}
            <span className="highlightText">
              Análise e Desenvolvimento de Sistemas
            </span>{" "}
            e apaixonada por transformar idéias em interfaces funcionais.
          </p>

          <p>
            Desenvolvo projetos com{" "}
            <span className="highlightText">
              Typescript, React, TailwindCSS e Next.js.
            </span>{" "}
            Também gosto de me aventurar em backend, onde exploro tecnologias
            como{" "}
            <span className="highlightText">
              Node.js, Express e PostgreSQL.
            </span>
          </p>

          <p>
            Atualmente busco minha primeira vaga na área de tecnologia, como
            <span className="highlightText"> Desenvolvedora JR / Estágio.</span>
          </p>

          <a href="/cv-giovana-assis.pdf" download="cv-giovana-assis.pdf">
            <button className="primaryButton">baixar currículo</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMeSection;
