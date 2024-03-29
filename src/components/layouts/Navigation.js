import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useResumeSpecificContext } from "../../context";
import ResumeIcon from "../../assets/resume-icon.jpg"



const Navigation = () => {
    const navigate = useNavigate();
    const { fetchDataById } = useResumeSpecificContext();
    const [isMenuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
  
    const generateId = async () => {
      const payload = {
        id: uuidv4(),
        experience: [],
        profile: {
          profileName: "",
          title: "Resume Template",
          summary: "Resume Template for Engineers",
        },
        education: [],
        project: [],
        skills: [],
      };
  
      await fetch(`http://localhost:3030/resume`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).then((res) => res.json());
  
      await fetchDataById(payload.id);
  
      navigate("/resume", {
        state: payload.id,
      });
    };
  
    return (
      <nav className="navbar navbar-expand-lg navbar-dark  py-3">
        <div className="container ml-auto">
          <Link className="navbar-brand" to="/">
            <img
              src={ResumeIcon}
              alt="Resume Builder Icon"
              width="32"
              height="32"
              title="Go to Home"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <button className="nav-link" onClick={generateId}>
                  Create Resume
                </button>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navigation
