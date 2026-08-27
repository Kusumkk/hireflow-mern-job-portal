import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "candidate",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      toast.success("Registration Successful");

      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">

      <Card>

        <div className="w-[430px]">

          <h1 className="text-4xl font-bold text-center text-blue-600">

            HireFlow

          </h1>

          <p className="text-center text-gray-500 mt-2">

            Create your account

          </p>

          <form
            onSubmit={registerUser}
            className="space-y-5 mt-8"
          >

            <Input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />

            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />

            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="
                w-full
                border
                rounded-xl
                px-4
                py-3
                focus:ring-2
                focus:ring-blue-500
              "
            >
              <option value="candidate">
                Candidate
              </option>

              <option value="recruiter">
                Recruiter
              </option>
            </select>

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading
                ? "Creating Account..."
                : "Create Account"}
            </Button>

          </form>

          <p className="text-center mt-8">

            Already have an account?

            <Link
              to="/login"
              className="text-blue-600 ml-2 font-semibold"
            >
              Login
            </Link>

          </p>

        </div>

      </Card>

    </div>
  );
}

export default Register;