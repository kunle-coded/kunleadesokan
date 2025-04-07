import AboutSection from "../components/about/AboutSection";
import ContactSection from "../components/contact/ContactSection";
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
      <ContactSection />
      <div
        style={{
          width: "100%",
          height: "700px",
          backgroundColor: "gainsboro",
        }}
      ></div>
    </>
  );
}

export default Home;
