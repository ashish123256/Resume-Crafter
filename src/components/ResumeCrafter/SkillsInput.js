import React,{useState} from 'react';
import TextInput from "../TextInput/TextInput";
import {useResumeSpecificContext} from "../../context";
import _ from "lodash";
import { useNavigate } from 'react-router-dom';
import { Snackbar,Alert } from '@mui/material';
import "./project.css";


const SkillsInput = () => {
  const {
    resumeById,
    setResumeById,
    aResume,
    setAResume,
    isSaved,
    alertState,
    setIsSaved,
  } = useResumeSpecificContext();

  const navigate = useNavigate();

  const [skills, setSkills] = useState(aResume?.skills);
  const { vertical, horizontal } = alertState;

  const handleChange = (e) => {
    setSkills(e.target.value);
  };
  const handleSave = (e) => {
    e.preventDefault();
    const skillsData = skills.toString().split(",").map((skill) => skill.trim());
    setAResume({
      ...aResume,
      skills: skillsData,
    });
    setIsSaved(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!_.isEqual(resumeById, aResume)) {
      await fetch(`http://localhost:3030/resume/${resumeById.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(aResume),
      })
        .then((res) => res.json())
        .then((data) => setResumeById(data));
      navigate("/");
    }
  };

  console.log(aResume);

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
          label="Skills (separated by comma)"
          name="skills"
          id="skills"
          value={skills}
          onChange={handleChange}
          required={true}
        />
        <div className="d-flex justify-content-start gap-3">
          <button type="submit" className="btn btn-primary mt-3">
            Save
          </button>
          <button
            type="submit"
            className="btn btn-primary mt-3"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default SkillsInput;
