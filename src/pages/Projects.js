import  ProjectInput  from "../components/ResumeCrafter/ProjectInput";

const Projects = () => {
  return (
    <>
      <div className="card education-card mt-4">
        <h2 className="card-header bg-dark text-white">Projects</h2>
        <div className="card-body">
          <ProjectInput />
        </div>
      </div>
    </>
  );
};

export default Projects;
