// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Home from "./pages/Home";
import Quests from "./pages/Quests";
import Profile from "./pages/Profile";
import QuestPage from "./pages/QuestPage";

function App() {
  const completedSteps = [1];

  return (
    <Router>
      <div className="relative min-h-screen flex flex-col">
        <Header />

        <div className="flex flex-1 pt-12">
          <Sidebar completedSteps={completedSteps} />
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quests" element={<Quests />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/quest/:id" element={<QuestPage />} />
            </Routes>
          </MainContent>
        </div>
      </div>
    </Router>
  );
}

export default App;
