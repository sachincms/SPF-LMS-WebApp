import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, 
  // Navigate 
} 
from 'react-router-dom';
import SideBar from './components/SideBar';
import Login from './pages/Login';
import Landing from './pages/Landing';
import CaseStories from './pages/CaseStories';
import Chatbot from './pages/Chatbot';
import ProgressDashboard from './pages/ProgressDashboard';
import Resources from './pages/Resources';
// import Contact from './pages/Contact';
// import AdminPanel from './pages/AdminPanel';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  //TODO: Set default to false
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        position: 'relative',
        background:
          'radial-gradient(circle, #b6e0fe 1.5px, transparent 1.5px), ' +
          'linear-gradient(120deg, #f8fafc 60%, #e0f7fa 100%)',
        backgroundSize: '28px 28px, 100% 100%',
        backgroundPosition: '0 0, 0 0',
      }}
    >
      <Router>
        {authenticated && <SideBar />}
        {!authenticated ? (
          <Login onLoginSuccess={() => setAuthenticated(true)} />
        ) : (
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/case-stories" element={<CaseStories />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/progress-dashboard" element={<ProgressDashboard />} />
            <Route path="/resources" element={<Resources />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="*" element={<Navigate to="/" />} /> */}
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
