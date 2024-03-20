import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./components/layouts/DashboardLayout/DashboardLayout";
import PageLayout from "./components/layouts/PageLayout/PageLayout";
import BoardPage from "./pages/BoardPage/BoardPage";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route element={<PageLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route element={<PageLayout />}>
          <Route path="/board" element={<BoardPage />} />
        </Route>
        <Route element={<PageLayout />}>
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
