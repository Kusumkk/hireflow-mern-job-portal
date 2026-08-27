import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Mail, Lock, Briefcase } from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      if (response.data.user.role === "recruiter") {
        navigate("/recruiter-dashboard");
      } else {
        navigate("/candidate-dashboard");
      }
    } catch (error) {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">

        <div className="text-center mb-8">

          <Briefcase
            className="mx-auto text-blue-600"
            size={50}
          />

          <h1 className="text-3xl font-bold mt-4">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Sign in to HireFlow
          </p>

        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-6"
        >

          <div className="relative">

            <Mail
              className="absolute left-3 top-3 text-gray-400"
              size={20}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

          </div>

          <div className="relative">

            <Lock
              className="absolute left-3 top-3 text-gray-400"
              size={20}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">

          Don't have an account?

          <Link
            to="/register"
            className="text-blue-600 font-semibold ml-1"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;