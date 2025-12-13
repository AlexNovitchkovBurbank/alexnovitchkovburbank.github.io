import { Route, Routes } from "react-router-dom";
import CodeStructureExamplesPage from "../../Pages/CodeStructureExamplePage/CodeStructureExamplesPage";
import MainPage from "../../Pages/MainPage/MainPage";
import FolderStructurePage from "../../Pages/FolderStructureExamplesPage/FolderStructureExamplesPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/folderStructureExamples" element={<FolderStructurePage />} />
      <Route path="/codeStructureExamples" element={<CodeStructureExamplesPage />} />
    </Routes>
  );
};

export default AppRoutes;
