import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { projects } from "../lib/store/data";

import PageHero from "../components/hero/PageHero";
import SingleProject from "../components/projects/SingleProject";

function WorkSingle() {
  const [pageTitle, setPageTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    const projectId = location.search.split("=")[1];

    const proj = projects.find((project) => project.id === Number(projectId));
    setPageTitle(proj?.name || "");
  }, [location.search]);

  return (
    <div>
      <PageHero title={pageTitle} />
      <SingleProject />
    </div>
  );
}

export default WorkSingle;
