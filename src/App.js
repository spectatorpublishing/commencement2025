import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import OverlayPage from "./pages/OverlayPage";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/home" && <Navbar />}
      <Routes>
        <Route path="/university" element={<OverlayPage />} />
        <Route path="/arts" element={<OverlayPage />} />
        <Route path="/audio" element={<OverlayPage />} />
        <Route path="/sports" element={<OverlayPage />} />
        <Route path="/opinion" element={<OverlayPage />} />
        <Route path="/spectrum"  element={<OverlayPage />} />
      </Routes>
    </>
  );
}

export default App;