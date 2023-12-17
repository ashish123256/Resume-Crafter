import  ResumeCard  from "../components/Home/ResumeCard";
import  Footer from "../components/layouts/Footer";
import  Navigation from "../components/layouts/Navigation";
import "./home.css"

const HomePage = () => {
  return (
    <div>
      <Navigation />
      <div className="container ">
        <div className="row ">
          <div className="text-center">
            <h1>Welcome to Resume Builder</h1>
            <p><i>Create your professional resume with ease.</i></p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-5 justify-content-center">
            <p><i>previously saved resume cards, you can choose to edit or delete them</i></p>
            <ResumeCard />
          </div>
        </div>
      </div>  
        <Footer />
    </div>
  );
};

export default HomePage;
