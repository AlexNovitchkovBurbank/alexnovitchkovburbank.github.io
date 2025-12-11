import { Route, Routes } from "react-router-dom";
import ProjectsPage from "../../Pages/ProjectsPage/ProjectsPage";
import MainPage from "../../Pages/MainPage/MainPage";
import ProjectFormattingPage from "../../Pages/ProjectFormattingPage/ProjectFormattingPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/projectFormatting" element={<ProjectFormattingPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  );
};

export default AppRoutes;
