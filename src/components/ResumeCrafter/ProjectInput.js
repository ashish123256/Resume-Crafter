import {useState} from 'react'
import TextInput from "../TextInput/TextInput";
import {useResumeSpecificContext} from "../../context";
import { Snackbar, Alert } from '@mui/material';
import "./project.css"

const ProjectInput = () => {
  const {
    aResume,
    setAResume,
    isSaved,
    alertState,
    setIsSaved,
  } = useResumeSpecificContext();

  const [projectInfo, setProjectInfo] = useState({
    projectTitle: aResume?.project[0]?.projectTitle,
    description: aResume?.project[0]?.description,
    technologiesUsed: aResume?.project[0]?.technologiesUsed,
    startDate: aResume?.project[0]?.startDate,
    endDate: aResume?.project[0]?.endDate,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectInfo({
      ...projectInfo,
      [name]: value,
    });
  };
  const { projectTitle, description, technologiesUsed, startDate, endDate } =
    projectInfo;

  const { vertical, horizontal } = alertState;

  const handleSave = (e) => {
    e.preventDefault();
    setAResume({ ...aResume, project: [projectInfo] });
    setIsSaved(true);
  };


  return (
    <>
     {isSaved && (
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={isSaved}
          autoHideDuration={6000}
          onClose={() => setIsSaved(false)}
          key={vertical + horizontal}
          style={{ backgroundColor: "green" }}
        >
          <Alert
            onClose={() => setIsSaved(!isSaved)}
            severity="success"
            sx={{ width: "100%" }}
            style={{ backgroundColor: "green" }}
          >
            Changes Saved Successfully! Please Submit the data in skills Section
          </Alert>
        </Snackbar>
      )}

      <form onSubmit={handleSave}>
        <TextInput
          label="Project Title"
          type="text"
          id="projectTitle"
          name="projectTitle"
          value={projectTitle}
          onChange={handleChange}
          required={true}
        />
        <TextInput
          label="Start Date"
          type="date"
          id="startDate"
          name="startDate"
          value={startDate}
          onChange={handleChange}
          required={true}
        />
        <TextInput
          label="End Date"
          type="date"
          id="endDate"
          name="endDate"
          value={endDate}
          onChange={handleChange}
          required={true}
        />
        <div className="form-group">
          <label htmlFor="description">
            Description (Add as a Comma Separated Values)
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="4"
            value={description}
            onChange={handleChange}
            required={true}
          />
        </div>

        <div className="form-group">
          <label htmlFor="technologiesUsed">
            TechnologiesUsed (Add as a Comma Separated Values)
          </label>
          <textarea
            className="form-control"
            id="technologiesUsed"
            name="technologiesUsed"
            rows="4"
            value={technologiesUsed}
            onChange={handleChange}
            required={true}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Save
        </button>
      </form>
    
    </>
  )
}

export default ProjectInput;
