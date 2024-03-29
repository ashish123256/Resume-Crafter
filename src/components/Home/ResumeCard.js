import { useNavigate } from "react-router-dom";
import { useResumeContext } from "../../context/resumeContext";
import { useResumeSpecificContext } from "../../context";
import { useEffect, useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdPreview } from "react-icons/md";
import "./resumeCard.css"

const ResumeCard = () => {
    const {resumeData, isLoading, fetchData} = useResumeContext();
    const [isDeleted, setIsDeleted] = useState(false);
    const {fetchDataById} = useResumeSpecificContext();;

    const navigate = useNavigate();

    const handleUpdate = async (resumeId) => {
        await fetchDataById(resumeId);
        navigate("/resume",{
            state:resumeId,
        })
    } 
    
    const handlePreview = async (resumeId) => {
        await fetchDataById(resumeId);
        navigate("/preview", {
          state: resumeId,
        });
      };

     
    

      const handleDelete = async (resumeId) => {
        if (window.confirm("Are you sure about deleting this item?")) {
          try {
            setIsDeleted(true);
            await fetch(`http://localhost:3030/resume/${resumeId}`, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((res) => res.json())
              .then((data) => console.log(data));
          } catch (error) {
            console.log(error);
          } finally {
            setIsDeleted(false);
          }
        }
      };
    
      useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [isDeleted]);

  return (
   <>
    {isLoading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          {resumeData.map((resume) => {
            return (
              <div className="card mt-3" key={resume.id}>
                <h5 className="card-header bg-dark text-white">
                  {resume.profile.title}
                </h5>
                <div className="card-body">
                  <p className="card-text">{resume.profile.summary}</p>
                  <div className="d-flex justify-content-end gap-3">
                    <button
                      className="btn btn-primary"
                      onClick={() => handlePreview(resume.id)}
                    >
                      <MdPreview className="bg-transparent" />
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleUpdate(resume?.id)}
                    >
                      <AiFillEdit className="bg-transparent" />
                    </button>
                    <button
                      className="btn btn-danger mr-2"
                      onClick={() => handleDelete(resume.id)}
                    >
                      <AiFillDelete className="bg-transparent" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
   </>
  )
}

export default ResumeCard
