import { useCallback, useRef, useState } from "react";
import ContactSection from "../components/contact/ContactSection";
import Hero from "../components/hero/Hero";
import ProjectList from "../components/projects/ProjectList";
import SkillsSection from "../components/skills/SkillsSection";
import useIntersection from "../lib/hooks/useIntersection";
import { Indicator } from "../lib/types/types";
import Header from "../components/header/Header";
import AboutMeSection from "../components/about/AboutMeSection";

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicators, setIndicators] = useState<Indicator>({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
  });

  const indicatorCallback = useCallback((obj: Indicator) => {
    setIndicators((prev) => {
      if (JSON.stringify(prev) !== JSON.stringify(obj)) {
        return obj;
      }
      return prev;
    });
  }, []);

  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  useIntersection(sectionRefs, setActiveIndex, indicatorCallback);

  return (
    <div>
      <Header />
      <Hero
        activeIndex={activeIndex}
        heroRef={sectionRefs[0]}
        indicators={indicators}
      />
      <AboutMeSection aboutSectionRef={sectionRefs[1]} />
      <SkillsSection skillsSectionRef={sectionRefs[2]} />
      <ProjectList projectsSectionRef={sectionRefs[3]} />
      <ContactSection contactSectionRef={sectionRefs[4]} />
    </div>
  );
}

export default Home;
