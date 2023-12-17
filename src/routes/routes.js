import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import ResumePreview from "../pages/Resume-preivew";
import CreateResume from "../pages/CreateResume";
import  PageNotFound  from "../components/layouts/PageNotFound";
import  About from "../components/layouts/About";

const ResumeBuilderRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/preview" element={<ResumePreview />} />
        <Route path="/resume" element={<CreateResume />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default ResumeBuilderRoutes;
