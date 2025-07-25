import Navbar from "@/components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <HeroSection />
      </header>
      <main className="flex flex-col items-center justify-center gap-20 my-20 w-[70%] mx-auto">

        <AboutMeSection />
        <ProjectsSection />
        
      </main>
    </>
  );
}

export default App;
