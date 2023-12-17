import EducationInput  from "../components/ResumeCrafter/EducationInput";
import "bootstrap/dist/css/bootstrap.min.css";

const Education = () => {
  return (
    <div className="card education-card mt-4">
      <h2 className="card-header bg-dark text-white">Education</h2>
      <div className="card-body">
        <EducationInput />
      </div>
    </div>
  );
};

export default Education;
