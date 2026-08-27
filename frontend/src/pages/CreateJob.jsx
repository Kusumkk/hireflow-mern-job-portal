import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import DashboardLayout from "../layouts/DashboardLayout";

function CreateJob() {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    skills: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const createJob = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post(
        "http://localhost:5000/api/jobs",
        {
          ...formData,
          skills: formData.skills
            .split(",")
            .map((skill) => skill.trim()),
        }
      );

      toast.success("Job Posted Successfully");

      setFormData({
        title: "",
        company: "",
        location: "",
        salary: "",
        skills: "",
        description: "",
      });
    } catch (error) {
      toast.error("Failed to Post Job");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <Card>

        <h1 className="text-3xl font-bold mb-2">
          Create Job
        </h1>

        <p className="text-gray-500 mb-8">
          Publish a new opportunity for candidates.
        </p>

        <form
          onSubmit={createJob}
          className="space-y-5"
        >

          <Input
            name="title"
            placeholder="Job Title"
            value={formData.title}
            onChange={handleChange}
          />

          <Input
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
          />

          <Input
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
          />

          <Input
            name="salary"
            type="number"
            placeholder="Salary"
            value={formData.salary}
            onChange={handleChange}
          />

          <Input
            name="skills"
            placeholder="Skills (React, Node.js, MongoDB)"
            value={formData.skills}
            onChange={handleChange}
          />

          <textarea
            name="description"
            rows="5"
            placeholder="Job Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <Button
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading ? "Posting..." : "Post Job"}
          </Button>

        </form>

      </Card>
    </DashboardLayout>
  );
}

export default CreateJob;