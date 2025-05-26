import PageHero from "../components/hero/PageHero";
import PageProjectList from "../components/projects/PageProjectList";

function Work() {
  return (
    <div>
      <PageHero
        title="Work"
        subtitleOne="Websites. Apps. Design."
        subtitleTwo="Find all my projects here."
      />
      <PageProjectList />
    </div>
  );
}

export default Work;
