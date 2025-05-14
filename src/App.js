import { Routes, Route} from "react-router-dom";
import OverlayPage from "./pages/OverlayPage";
import Credits from "./pages/Credits";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Credits />} />
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