import PageHero from "../components/hero/PageHero";
import PageProjectList from "../components/projects/PageProjectList";

function Work() {
  return (
    <>
      <PageHero
        title="Work"
        subtitleOne="Websites. Apps. Design."
        subtitleTwo="Find all my projects here."
      />

      <PageProjectList />
    </>
  );
}

export default Work;
