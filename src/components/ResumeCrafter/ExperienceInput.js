import {useState} from 'react';
import TextInput from "../TextInput/TextInput";
import { useResumeSpecificContext } from '../../context';
import { Snackbar,Alert } from '@mui/material';
import "./experience.css";

const ExperienceInput = () => {
  const {aResume, setAResume, isSaved, setIsSaved, alertState} = useResumeSpecificContext();

  const [experienceInfo, setExperienceInfo] = useState({
    title:aResume?.experience[0]?.title,
    company:aResume?.experience[0]?.company,
    location:aResume?.experience[0]?.location,
    startDate:aResume?.experience[0]?.startDate,
    endDate:aResume?.experience[0]?.endDate,
    responsibilities:aResume?.experience[0]?.responsibilities,
  });

  const { title, company, location, startDate, endDate, responsibilities }= experienceInfo;

  const { vertical, horizontal } = alertState;


  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperienceInfo({
      ...experienceInfo,
      [name]: value,
    });
  };


  const handleSave = (e) => {
    e.preventDefault();
    setAResume({ ...aResume, experience: [experienceInfo] });
    setIsSaved(true);
  };


  return (
    <div>
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
          label="Job Title"
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleChange}
          required={true}
        />
        <TextInput
          label="Location"
          type="text"
          id="location"
          name="location"
          value={location}
          onChange={handleChange}
          required={true}
        />
        <TextInput
          label="Company"
          type="text"
          id="company"
          name="company"
          value={company}
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
          <label htmlFor="responsibilities">
            Responsibilities (Add as a Comma Separated Values)
          </label>
          <textarea
            className="form-control"
            id="responsibilities"
            name="responsibilities"
            rows="4"
            value={responsibilities}
            onChange={handleChange}
            required={true}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Save
        </button>
      </form>
    </div>
  )
}

export default ExperienceInput;
