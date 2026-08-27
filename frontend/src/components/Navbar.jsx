import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("resume");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-blue-600"
        >
          HireFlow
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6 text-gray-700 font-medium">

          <Link
            to="/jobs"
            className="hover:text-blue-600 transition"
          >
            Jobs
          </Link>

          {token && (
            <>
              <Link
                to="/candidate-dashboard"
                className="hover:text-blue-600 transition"
              >
                Dashboard
              </Link>

              <Link
                to="/my-applications"
                className="hover:text-blue-600 transition"
              >
                Applications
              </Link>

              <Link
                to="/upload-resume"
                className="hover:text-blue-600 transition"
              >
                Resume
              </Link>

              <Link
                to="/recruiter-dashboard"
                className="hover:text-blue-600 transition"
              >
                Recruiter
              </Link>

              <Link
                to="/create-job"
                className="hover:text-blue-600 transition"
              >
                Post Job
              </Link>
            </>
          )}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {token ? (
            <>
              <span className="text-gray-600">
                Hi, <strong>{user?.name}</strong>
              </span>

              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-blue-600 font-medium hover:underline"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;