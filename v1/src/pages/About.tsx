import { useRef } from "react";
import PageHero from "../components/hero/PageHero";
import SkillsSection from "../components/skills/SkillsSection";
import AboutPageHero from "../components/about/AboutPageHero";
import TwoColSection from "../ui/sections/TwoColSection";
import { aboutPage } from "../lib/store/data";
import AboutTimelines from "../ui/timelines/AboutTimelines";
import AboutSkills from "../components/skills/AboutSkills";
import CV from "../components/about/CV";

function About() {
  const skillesRef = useRef(null);

  return (
    <div>
      <PageHero
        title="About Me"
        subtitleOne="Developer in the Day,"
        subtitleTwo="Designer at Night"
      />
      <AboutPageHero />
      <TwoColSection title="How it started" body={aboutPage.journeyStart} />
      <AboutTimelines />
      <TwoColSection title="How it is going" body={aboutPage.journeyNow} />
      <AboutSkills />
      <CV />
      <SkillsSection skillsSectionRef={skillesRef} />
    </div>
  );
}

export default About;
