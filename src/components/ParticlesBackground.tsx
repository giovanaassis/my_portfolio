import Particles from "./ui/particles";

function ParticlesBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <Particles particleColors={["#7512d2"]} />
    </div>
  );
}

export default ParticlesBackground;
