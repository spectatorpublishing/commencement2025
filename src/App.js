import './App.css';
import { Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';


function App() {
  return (
  <div>
        <Routes>

          <Route path="/" element={<Homepage/>} />
          <Route path="city" element={<p>city</p>} />
          <Route path="/ac" element={<p>ac</p>} />
          <Route path="/sports" element={<p>sports</p>} />
          <Route path="spectrum" element={<p>spectrum</p>} />

        </Routes>
    </div>
    
  );
}

export default App;