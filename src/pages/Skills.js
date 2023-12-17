import SkillsInput  from "../components/ResumeCrafter/SkillsInput";
import "bootstrap/dist/css/bootstrap.min.css";

const Skills = () => {
  return (
    <div className="card skills-card mt-4">
      <h2 className="card-header bg-dark text-white">Skills</h2>
      <div className="card-body">
        <SkillsInput />
      </div>
    </div>
  );
};

export default Skills;
