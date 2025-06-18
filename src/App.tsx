import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import { useEffect } from "react";
import Lenis from "lenis";

function App() {
  useEffect(() => {
    // npm install lenis
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    const handleWheel = (e: WheelEvent) => {
      // Only apply if not zooming (ctrlKey)
      if (!e.ctrlKey) {
        e.preventDefault();
        window.scrollBy({
          top: e.deltaY * 0.1, // 0.3 slows down scroll (adjust as needed)
          behavior: "auto",
        });
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route index path="/for-reacts-sake" element={<Homepage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
