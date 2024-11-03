import Hero from '../components/hero/Hero';
import Intro from '../components/intro/Intro';
import SectionTitle from '../ui/headings/SectionTitle';

function Homepage() {
  return (
    <div>
      <Hero />
      <Intro />
      <SectionTitle title="Work" isPoint />
    </div>
  );
}

export default Homepage;
