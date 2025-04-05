import AboutSection from "../components/about/AboutSection";
import Hero from "../components/hero/Hero";
import ProjectList from "../components/projects/ProjectList";
import SkillsSection from "../components/skills/SkillsSection";
// import ProjectList from "../ProjectList";

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectList />
      <div
        style={{
          width: "100%",
          height: "700px",
          backgroundColor: "",
        }}
      ></div>
    </>
  );
}

export default Home;
