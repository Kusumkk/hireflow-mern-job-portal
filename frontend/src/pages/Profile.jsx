import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import toast from "react-hot-toast";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [profile, setProfile] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    location: "",
    github: "",
    linkedin: "",
    portfolio: "",
    skills: "",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const updateProfile = (e) => {
    e.preventDefault();

    // Backend update will be added later
    toast.success("Profile Updated Successfully");
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">

        <Card>

          <div className="text-center">

            <div className="w-28 h-28 rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl font-bold mx-auto">

              {profile.name.charAt(0).toUpperCase()}

            </div>

            <h1 className="text-3xl font-bold mt-5">

              {profile.name}

            </h1>

            <p className="text-gray-500">

              Full Stack Developer

            </p>

          </div>

          <form
            onSubmit={updateProfile}
            className="grid md:grid-cols-2 gap-5 mt-10"
          >

            <Input
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder="Name"
            />

            <Input
              name="email"
              value={profile.email}
              onChange={handleChange}
              placeholder="Email"
            />

            <Input
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />

            <Input
              name="location"
              value={profile.location}
              onChange={handleChange}
              placeholder="Location"
            />

            <Input
              name="github"
              value={profile.github}
              onChange={handleChange}
              placeholder="GitHub URL"
            />

            <Input
              name="linkedin"
              value={profile.linkedin}
              onChange={handleChange}
              placeholder="LinkedIn URL"
            />

            <Input
              name="portfolio"
              value={profile.portfolio}
              onChange={handleChange}
              placeholder="Portfolio URL"
            />

            <Input
              name="skills"
              value={profile.skills}
              onChange={handleChange}
              placeholder="React, Node, MongoDB"
            />

            <div className="md:col-span-2">

              <Button
                type="submit"
                className="w-full"
              >
                Update Profile
              </Button>

            </div>

          </form>

        </Card>

      </div>
    </DashboardLayout>
  );
}

export default Profile;