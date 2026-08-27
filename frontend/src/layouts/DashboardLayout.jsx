import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  Upload,
  LogOut,
} from "lucide-react";
import { User } from "lucide-react";

function DashboardLayout({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <aside className="w-72 bg-white shadow-lg">

        <div className="p-6 border-b">

          <h1 className="text-3xl font-bold text-blue-600">
            HireFlow
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome, {user?.name}
          </p>

        </div>

        <nav className="p-6 space-y-4">

  <Link
    to="/candidate-dashboard"
    className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600"
  >
    <LayoutDashboard size={20} />
    Dashboard
  </Link>

  <Link
    to="/jobs"
    className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600"
  >
    <Briefcase size={20} />
    Jobs
  </Link>

  <Link
    to="/my-applications"
    className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600"
  >
    <FileText size={20} />
    Applications
  </Link>

  <Link
    to="/upload-resume"
    className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600"
  >
    <Upload size={20} />
    Upload Resume
  </Link>

  <Link
    to="/profile"
    className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600"
  >
    <User size={20} />
    Profile
  </Link>

  <button
    onClick={logout}
    className="w-full flex items-center gap-3 p-3 rounded-lg text-red-500 hover:bg-red-50"
  >
    <LogOut size={20} />
    Logout
  </button>

</nav>

      </aside>

      {/* Main Content */}

      <main className="flex-1 p-10">
        {children}
      </main>

    </div>
  );
}

export default DashboardLayout;