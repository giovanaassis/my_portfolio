import Navbar from "@/components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import ProjectsSection from "./components/ProjectsSection";
import TechStackSection from "./components/TechStackSection";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <HeroSection />
      </header>
      <main className="flex flex-col items-center justify-center gap-50 my-20 w-[70%] mx-auto">

        <AboutMeSection />
        <ProjectsSection />
        <TechStackSection />
      </main>
    </>
  );
}

export default App;
