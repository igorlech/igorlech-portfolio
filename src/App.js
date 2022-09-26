import { Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Nav from "./components/Nav";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:slug" element={<ProjectPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to = "/" />} />
      </Routes>
    </main>
  );
}

export default App;
