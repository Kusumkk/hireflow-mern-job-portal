import DashboardLayout from "../layouts/DashboardLayout";
import DashboardCard from "../components/DashboardCard";

function CandidateDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <DashboardLayout>
      <div>

        {/* Header */}

        <div className="mb-10">

          <h1 className="text-4xl font-bold">
            Welcome back,
            <span className="text-blue-600">
              {" "}
              {user?.name}
            </span>
          
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your applications and discover new opportunities.
          </p>

        </div>

        {/* Dashboard Cards */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

          <DashboardCard
            title="Jobs Applied"
            value="12"
            color="text-blue-600"
          />

          <DashboardCard
            title="Interviews"
            value="3"
            color="text-green-600"
          />

          <DashboardCard
            title="Resume"
            value="Uploaded"
            color="text-purple-600"
          />

          <DashboardCard
            title="Profile"
            value="100%"
            color="text-orange-500"
          />

        </div>

        {/* Recent Activity */}

        <div className="mt-10 bg-white rounded-2xl shadow p-6">

          <h2 className="text-2xl font-bold mb-6">
            Recent Activity
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between border-b pb-4">

              <div>
                <h3 className="font-semibold">
                  Frontend Developer
                </h3>

                <p className="text-gray-500">
                  Tech Solutions
                </p>
              </div>

              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                Interview
              </span>

            </div>

            <div className="flex justify-between">

              <div>
                <h3 className="font-semibold">
                  Backend Developer
                </h3>

                <p className="text-gray-500">
                  Infosys
                </p>
              </div>

              <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full">
                Applied
              </span>

            </div>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default CandidateDashboard;