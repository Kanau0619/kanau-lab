import { Route, Routes } from "react-router-dom";
import PortfolioHome from "./pages/PortfolioHome";
import CaseStudyPage from "./pages/CaseStudyPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioHome />} />
      <Route path="/character/:slug" element={<CaseStudyPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
