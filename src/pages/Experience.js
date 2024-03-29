import  ExperienceInput  from "../components/ResumeCrafter/ExperienceInput";
import "bootstrap/dist/css/bootstrap.min.css";

const Experience = () => {
  return (
    <div className="card experience-card mt-4">
      <h2 className="card-header bg-dark text-white">Experience</h2>
      <div className="card-body">
        <ExperienceInput />
      </div>
    </div>
  );
};

export default Experience;
