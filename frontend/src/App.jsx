import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import CandidateDashboard from "./pages/CandidateDashboard";
import Jobs from "./pages/Jobs";
import CreateJob from "./pages/CreateJob";
import MyApplications from "./pages/MyApplications";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import UploadResume from "./pages/UploadResume";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/candidate-dashboard"
          element={
            <ProtectedRoute>
              <CandidateDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/jobs"
          element={
            <ProtectedRoute>
              <Jobs />
            </ProtectedRoute>
          }
        />

        <Route
          path="/create-job"
          element={
            <ProtectedRoute>
              <CreateJob />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-applications"
          element={
            <ProtectedRoute>
              <MyApplications />
            </ProtectedRoute>
          }
        />

        <Route
          path="/recruiter-dashboard"
          element={
            <ProtectedRoute>
              <RecruiterDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/upload-resume"
          element={
           <ProtectedRoute>
              <UploadResume />
            </ProtectedRoute>
          }
        />

        <Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;