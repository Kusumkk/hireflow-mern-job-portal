import { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../components/JobCard";
import SearchBar from "../components/SearchBar";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/jobs"
      );

      setJobs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const applyJob = async (jobId) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const resume = localStorage.getItem("resume");

      if (!resume) {
        alert("Please upload your resume before applying.");
        return;
      }

      await axios.post(
        "http://localhost:5000/api/applications",
        {
          candidateName: user.name,
          candidateEmail: user.email,
          jobId,
          resume,
        }
      );

      alert("Applied Successfully");
    } catch (error) {
      console.log(error);
      alert("Application Failed");
    }
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase());

    const matchesLocation =
      locationFilter === "" ||
      job.location === locationFilter;

    return matchesSearch && matchesLocation;
  });

return (
  <div className="min-h-screen bg-gray-100">

    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        Available Jobs
      </h1>

      <p className="text-gray-500 mb-8">
        Discover your next career opportunity.
      </p>

      <SearchBar
        search={search}
        setSearch={setSearch}
        locationFilter={locationFilter}
        setLocationFilter={setLocationFilter}
      />

      {filteredJobs.length === 0 ? (

        <div className="bg-white rounded-xl shadow p-10 text-center">

          <h2 className="text-2xl font-semibold">
            No Jobs Found
          </h2>

          <p className="text-gray-500 mt-3">
            Try another search keyword.
          </p>

        </div>

      ) : (

        <div className="grid lg:grid-cols-2 gap-8">

          {filteredJobs.map((job) => (

            <JobCard
              key={job._id}
              job={job}
              onApply={applyJob}
            />

          ))}

        </div>

      )}

    </div>

  </div>
);
}

export default Jobs;