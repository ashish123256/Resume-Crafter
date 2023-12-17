import Footer from "../layouts/Footer";
import  Navigation from "../layouts/Navigation";

const About = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />
      <div className="flex-grow-1 container mt-5">
        <div className="jumbotron">
          <h1 className="display-4">About Resume Crafter</h1>
          <p className="lead">
            Resume Crafter is a web application designed to help you create
            professional resumes easily. With Resume Crafter, you can create
            personalized resumes by filling out a simple form with your
            information, skills, education, and work experience. The application
            generates a formatted resume that you can download or print.
          </p>
          <hr className="my-4" />
          <p>
            My mission is to simplify the process of creating resumes and
            provide a user-friendly interface that saves you time and effort.
            Whether you're a job seeker, a student, or a professional, Resume
            Crafter is here to assist you in crafting impressive resumes that
            stand out.
          </p>
          <p>
            I continuously strive to improve and enhance Resume Crafter with
            new features and templates to meet the evolving needs of job
            applicants. My goal is to empower individuals in their career
            journeys and help them showcase their skills and qualifications
            effectively.
          </p>
          <p>
            Thank you for choosing Resume Crafter. I hope our application helps
            you succeed in your job search and career endeavors.
          </p>
         
          <hr className="my-4" />
          <ul>
            <h5>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
                style={{ textDecoration: "none" }}
              >
               Ashish Babu Rao
              </a>
            </h5>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
