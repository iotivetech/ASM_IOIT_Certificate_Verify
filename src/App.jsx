import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CertificatePage from "./pages/certificatePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/certificate/:id" element={<CertificatePage />} />
        <Route path="*" element={<h1 style={{ textAlign: "center", marginTop: "50px" }}>404 Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
