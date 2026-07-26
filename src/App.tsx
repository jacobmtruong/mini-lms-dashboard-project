import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/auth/PrivateRoute";
import PublicLayout from "./components/layout/PublicLayout";
import DashboardPage from "./pages/dashboard/DashboardPage";
import CourseDetailPage from "./pages/public/CourseDetailPage";
import CoursesPage from "./pages/public/CoursesPage";
import FavoritesPage from "./pages/public/FavoritesPage";
import HomePage from "./pages/public/HomePage";
import LoginPage from "./pages/public/LoginPage";

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:courseId" element={<CourseDetailPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
