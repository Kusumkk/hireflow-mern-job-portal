import { Link } from "react-router-dom";
import { Briefcase, Users, Search, ArrowRight } from "lucide-react";

function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>

            <h1 className="text-6xl font-bold leading-tight">

              Find Your

              <span className="text-blue-600">
                {" "}Dream Job
              </span>

            </h1>

            <p className="text-gray-600 mt-6 text-lg">

              AI-powered recruitment platform connecting talented
              candidates with top companies.

            </p>

            <div className="flex gap-5 mt-10">

              <Link
                to="/jobs"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700"
              >
                Browse Jobs
              </Link>

              <Link
                to="/register"
                className="border border-blue-600 text-blue-600 px-8 py-4 rounded-xl"
              >
                Get Started
              </Link>

            </div>

          </div>

          <div>

            <div className="bg-white rounded-2xl shadow-xl p-10">

              <div className="flex items-center gap-4">

                <Search className="text-blue-600"/>

                <div>

                  <h2 className="font-bold">
                    AI Job Matching
                  </h2>

                  <p className="text-gray-500">
                    Find jobs matching your skills.
                  </p>

                </div>

              </div>

              <div className="mt-8 flex items-center gap-4">

                <Briefcase className="text-green-600"/>

                <div>

                  <h2 className="font-bold">
                    1000+ Jobs
                  </h2>

                  <p className="text-gray-500">
                    Updated every day.
                  </p>

                </div>

              </div>

              <div className="mt-8 flex items-center gap-4">

                <Users className="text-purple-600"/>

                <div>

                  <h2 className="font-bold">
                    Recruiters
                  </h2>

                  <p className="text-gray-500">
                    Hire smarter using AI.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Stats */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-white p-8 rounded-xl shadow">

            <h1 className="text-4xl font-bold text-blue-600">
              10K+
            </h1>

            <p className="text-gray-500 mt-2">
              Candidates
            </p>

          </div>

          <div className="bg-white p-8 rounded-xl shadow">

            <h1 className="text-4xl font-bold text-green-600">
              500+
            </h1>

            <p className="text-gray-500 mt-2">
              Companies
            </p>

          </div>

          <div className="bg-white p-8 rounded-xl shadow">

            <h1 className="text-4xl font-bold text-purple-600">
              2500+
            </h1>

            <p className="text-gray-500 mt-2">
              Jobs Posted
            </p>

          </div>

          <div className="bg-white p-8 rounded-xl shadow">

            <h1 className="text-4xl font-bold text-orange-500">
              95%
            </h1>

            <p className="text-gray-500 mt-2">
              Placement Success
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-blue-600 text-white py-20">

        <div className="max-w-5xl mx-auto text-center">

          <h1 className="text-5xl font-bold">
            Start Your Career Today
          </h1>

          <p className="mt-6 text-blue-100">

            Upload your resume, explore opportunities,
            and let AI help you find the right job.

          </p>

          <Link
            to="/register"
            className="inline-flex items-center gap-2 mt-10 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold"
          >
            Join HireFlow
            <ArrowRight size={20}/>
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;