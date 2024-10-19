import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import backgroundImg from '/paper-bg.avif';

import Work from "./pages/Work";
import Essays from "./pages/Essays";
import Home from "./pages/Home";
import EssayDetailed from "./components/EssayDetailed";
import Interviews from "./pages/Interviews";
import Mail from "./components/ui/Mail";

const Template = () => {
  // Inline style for fixed background
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',  // Cover the entire background
    backgroundPosition: 'center',  // Center the background image
    backgroundAttachment: 'fixed',  // Keep the background fixed
    backgroundRepeat: 'no-repeat',  // Prevent repeating of the image
  };

  return (
    <div style={backgroundStyle} className="min-h-screen">
      <Router>
        <div className="min-h-screen font-[pt-sherif]">
          <Navbar />
          <div className="overflow-auto"> {/* Ensure scrolling is enabled */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/essays" element={<Essays />} />
              <Route path="/essay/:essay_id" element={<EssayDetailed />} />
              <Route path="/interviews" element={<Interviews />} />
            </Routes>
            <Mail />
          </div>
        </div>
      </Router>
    </div>
  );
};

export default Template;
