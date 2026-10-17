import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Internship from "./pages/Internships.jsx";
import ResumeBuilder from "./pages/Resumebuilder.jsx";
import Community from "./pages/Community.jsx";
import UplyftBot from "./pages/UplyftBot.jsx";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  async function handleLogout(){
    try{
      await signOut(auth);
      window.location.href = "/";
    }catch(error){
      console.error("Logout failed:",error);
    }
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/home"
          element={
            <div>
              <nav
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "25px",
                  padding: "18px",
                  background: "#292044",
                }}
              >
                <Link to="/home" style={{ color: "white" }}>
                  Home
                </Link>

                <Link to="/internship" style={{ color: "white" }}>
                  Internships
                </Link>

                <Link to="/resumebuilder" style={{ color: "white" }}>
                  Resume Builder
                </Link>

                <Link to="/community" style={{ color: "white" }}>
                  Community
                </Link>
                <Link to="/aiassistant" style={{color: "white" }}>
                AI Assistant 
                </Link>
                <button
                onClick={handleLogout}
                style={{
                  background: "#ff4d6d",
                  color: "white",
                  border: "none",
                  padding: "8px 14px",
                  borderRadius: "6px",
                }}
                >
                  Logout
                  </button>
              </nav>

              <Home />
            </div>
          }
        />

        <Route path="/internship" element={<Internship />} />

        <Route path="/resumebuilder" element={<Resumebuilder />} />

        <Route path="/community" element={<Community />} />

        <Route path="/aiassistant" element={<UplyftBot/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;