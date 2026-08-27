import { useEffect, useState } from "react";
import axios from "axios";

import DashboardLayout from "../layouts/DashboardLayout";
import Card from "../components/ui/Card";
import Loading from "../components/ui/Loading";
import EmptyState from "../components/ui/EmptyState";

function MyApplications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/applications"
      );

      const myApplications = response.data.filter(
        (app) => app.candidateEmail === user.email
      );

      setApplications(myApplications);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Interview":
        return "bg-blue-100 text-blue-700";

      case "Selected":
        return "bg-green-100 text-green-700";

      case "Rejected":
        return "bg-red-100 text-red-700";

      case "Screening":
        return "bg-purple-100 text-purple-700";

      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <Loading />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>

      <h1 className="text-4xl font-bold mb-8">
        My Applications
      </h1>

      {applications.length === 0 ? (
        <EmptyState title="No Applications Yet" />
      ) : (
        <div className="grid lg:grid-cols-2 gap-6">

          {applications.map((app) => (
            <Card key={app._id}>

              <h2 className="text-2xl font-bold">
                {app.jobId?.title}
              </h2>

              <p className="text-gray-500 mt-2">
                {app.jobId?.company}
              </p>

              <p className="mt-4">
                📍 {app.jobId?.location}
              </p>

              <p className="mt-2">
                💰 ₹ {app.jobId?.salary}
              </p>

              <div className="mt-5">

                <span
                  className={`px-4 py-2 rounded-full font-semibold ${getStatusColor(
                    app.status
                  )}`}
                >
                  {app.status}
                </span>

              </div>

              {app.resume && (
                <a
                  href={`http://localhost:5000/uploads/${app.resume}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-6 text-blue-600 font-semibold hover:underline"
                >
                  📄 View Resume
                </a>
              )}

            </Card>
          ))}

        </div>
      )}

    </DashboardLayout>
  );
}

export default MyApplications;