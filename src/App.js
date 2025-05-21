import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import OverlayPage from "./pages/OverlayPage";
import MobileOverlayPage from "./pages/MobileOverlayPage";
import useIsMobile from "./hooks/useIsMobile";

function App() {

  const isMobile = useIsMobile();
  const Overlay = isMobile ? MobileOverlayPage : OverlayPage;
  
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/university" element={<Overlay />} />
      <Route path="/arts" element={<Overlay />} />
      <Route path="/audio" element={<Overlay />} />
      <Route path="/sports" element={<Overlay />} />
      <Route path="/crosswords" element={<Overlay />} />
      <Route path="/spectrum" element={<Overlay />} />
    </Routes>
  );
}

export default App;
