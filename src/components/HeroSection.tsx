import ScrollStack from "./ScrollStack";

function HeroSection() {
  return (
    <div>
      <p className="text-3xl lg:text-5xl font-bak leading-20 text-center tracking-wider my-15 lg:leading-30 mx-5">
        &lt;Olá, sou a /&gt; <br />
        <span className="highlightTitle md:text-5xl lg:text-6xl">
          Giovana de Assis
        </span>{" "}
        <br />
        &lt;Sua /&gt; <br />
        <span className="highlightTitle md:text-5xl lg:text-6xl">
          Desenvolvedora Frontend
        </span>
      </p>

      {/* SCROLL TECH STACK */}
      <ScrollStack />
    </div>
  );
}

export default HeroSection;
