import { createContext, useContext, useState } from "react";

const ResumeSpecificContext = createContext();

const initialState = {
  id: "",
  profile: [],
  experience: [],
  contact: {},
  education: [],
  skills: [],
};

export const ResumeSpecificContextProvider = ({ children }) => {
  const [resumeById, setResumeById] = useState(initialState);
  const [aResume, setAResume] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [alertState, setAlertState] = useState({
    open: isSaved,
    vertical: "top",
    horizontal: "center",
  });

  const fetchDataById = async (resumeId) => {
    try {
      setIsLoading(true);
      await fetch(`/resume/${resumeId}`)
        .then((res) => res.json())
        .then((data) => {
          setResumeById(data);
          setAResume(structuredClone(data));
        });
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const context = {
    resumeById,
    setResumeById,
    aResume,
    setAResume,
    fetchDataById,
    isLoading,
    setIsLoading,
    error,
    setError,
    isSaved,
    setIsSaved,
    alertState,
    setAlertState,
  };

  return (
    <ResumeSpecificContext.Provider value={context}>
      {children}
    </ResumeSpecificContext.Provider>
  );
};

export const useResumeSpecificContext = () => useContext(ResumeSpecificContext);
