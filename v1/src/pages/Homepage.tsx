import Hero from '../components/hero/Hero';
import Intro from '../components/intro/Intro';
import ProjectCardHomepage from '../components/work/ProjectCardHomepage';
import SectionTitle from '../ui/headings/SectionTitle';

function Homepage() {
  return (
    <div>
      <Hero />
      <Intro />
      <SectionTitle title="Work" isPoint />
      <ProjectCardHomepage />
      <div className="tempSpcr"></div>
    </div>
  );
}

export default Homepage;
