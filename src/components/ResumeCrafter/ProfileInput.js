import {useState} from 'react'
import TextInput from "../TextInput/TextInput";
import {useResumeSpecificContext} from "../../context/resumeSpecificontext";
import { Snackbar, Alert } from '@mui/material';
import "./profileInput.css"
 
const ProfileInput = () => {
  const {
    aResume,
    setAResume,
    isSaved,
    alertState,
    setIsSaved,
  } = useResumeSpecificContext();

  const [profileInfo, setProfileInfo] = useState({
    profileName: aResume?.profile?.profileName,
    title: aResume?.profile?.title,
    email: aResume?.profile?.email,
    phone: aResume?.profile?.phone,
    summary: aResume?.profile?.summary,
    address: aResume?.profile?.address,
  });

  const { vertical, horizontal } = alertState;
  const { email, profileName, phone, summary, title, address } = profileInfo;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileInfo({
      ...profileInfo,
      [name]: value,
    });
  };
  const handleSave = (e) => {
    e.preventDefault();
    setAResume({ ...aResume, profile: profileInfo });
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
          label="Name"
          type="text"
          id="profileName"
          name="profileName"
          value={profileName}
          onChange={handleChange}
          required={true}
        />
        <TextInput
          label="Address"
          type="text"
          id="address"
          name="address"
          value={address}
          onChange={handleChange}
          required={true}
        />
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
          label="Email"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          required={true}
        />
        <TextInput
          label="Phone"
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={handleChange}
          required={true}
          pattern="^[6-9]\d{9}$"
        />
        <div className="form-group">
          <label htmlFor="summary">Summary</label>
          <textarea
            className="form-control"
            id="summary"
            rows="4"
            name="summary"
            value={summary}
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

export default ProfileInput;
