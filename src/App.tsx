import { Route, Routes } from "react-router-dom";
import PublicLayout from "./components/layout/PublicLayout";
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
    </Routes>
  );
}

export default App;
