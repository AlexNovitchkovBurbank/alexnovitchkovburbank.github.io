import { Route, Routes } from "react-router-dom";
import CSharpPage from "../../Pages/CSharpPage/CSharpPage";
import MainPage from "../../Pages/MainPage/MainPage";
import TsJsPage from "../../Pages/TsJsPage/TsJsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/ts_js" element={<TsJsPage />} />
      {/*<Route path="/csharp" element={<CSharpPage />} />*/}
    </Routes>
  );
};

export default AppRoutes;
