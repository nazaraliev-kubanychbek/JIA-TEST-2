import "./projectsPage.scss";
import ProjectsPageHero from "./ProjectsPageHero";
import ProjectsPageProjects from "./ProjectsPageProjects";
import ProjectsPageInfo from "./ProjectsPageInfo";

export const ProjectsPage = () => {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#051650" }}
      className="projectsPage"
    >
      <div className="container">
        <ProjectsPageHero />
        <ProjectsPageProjects />
        <button className="projectsPage-btn">Подать заявку</button>
        <ProjectsPageInfo />
      </div>
    </div>
  );
};
