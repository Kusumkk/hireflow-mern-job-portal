import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import DashboardLayout from "../layouts/DashboardLayout";
import DashboardCard from "../components/DashboardCard";
import Card from "../components/ui/Card";
import Loading from "../components/ui/Loading";

function RecruiterDashboard() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/applications"
      );

      setApplications(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load applications");
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put(
        `http://localhost:5000/api/applications/${id}`,
        { status }
      );

      toast.success("Status Updated");

      fetchApplications();
    } catch (error) {
      toast.error("Update Failed");
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <Loading />
      </DashboardLayout>
    );
  }

  const interviewCount = applications.filter(
    (a) => a.status === "Interview"
  ).length;

  const selectedCount = applications.filter(
    (a) => a.status === "Selected"
  ).length;

  return (
    <DashboardLayout>

      <h1 className="text-4xl font-bold mb-8">
        Recruiter Dashboard
      </h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-10">

        <DashboardCard
          title="Applications"
          value={applications.length}
          color="text-blue-600"
        />

        <DashboardCard
          title="Interviews"
          value={interviewCount}
          color="text-green-600"
        />

        <DashboardCard
          title="Selected"
          value={selectedCount}
          color="text-purple-600"
        />

        <DashboardCard
          title="Jobs Posted"
          value="1"
          color="text-orange-500"
        />

      </div>

      <div className="space-y-6">

        {applications.map((app) => (
          <Card key={app._id}>

            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">

              <div>

                <h2 className="text-2xl font-bold">
                  {app.candidateName}
                </h2>

                <p className="text-gray-500 mt-2">
                  {app.candidateEmail}
                </p>

                <p className="mt-2">
                  <strong>Job:</strong>{" "}
                  {app.jobId?.title}
                </p>

                <p className="mt-2">
                  <strong>Company:</strong>{" "}
                  {app.jobId?.company}
                </p>

              </div>

              <div className="flex flex-col gap-4">

                {app.resume ? (
                  <a
                    href={`http://localhost:5000/uploads/${app.resume}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg text-center hover:bg-blue-700"
                  >
                    View Resume
                  </a>
                ) : (
                  <p className="text-red-500">
                    No Resume
                  </p>
                )}

                <select
                  value={app.status}
                  onChange={(e) =>
                    updateStatus(
                      app._id,
                      e.target.value
                    )
                  }
                  className="border rounded-lg px-4 py-2"
                >
                  <option>Applied</option>
                  <option>Screening</option>
                  <option>Interview</option>
                  <option>Selected</option>
                  <option>Rejected</option>
                </select>

              </div>

            </div>

          </Card>
        ))}

      </div>

    </DashboardLayout>
  );
}

export default RecruiterDashboard;