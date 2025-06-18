import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";

function App() {
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
