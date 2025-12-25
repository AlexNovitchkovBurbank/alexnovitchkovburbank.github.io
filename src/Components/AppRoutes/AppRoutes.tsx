import { Route, Routes } from "react-router-dom";
import CSharpPage from "../../Pages/CSharpPage/CSharpPage";
import MainPage from "../../Pages/MainPage/MainPage";
import TsJsPage from "../../Pages/TsJsPage/TsJsPage";
import ConceptsPage from "../../Pages/ConceptsPage/ConceptsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/ts_js" element={<TsJsPage />} />
      <Route path="/csharp" element={<CSharpPage />} />
      <Route path="/concepts" element={<ConceptsPage />} />
    </Routes>
  );
};

export default AppRoutes;
