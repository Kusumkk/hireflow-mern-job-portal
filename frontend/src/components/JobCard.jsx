function JobCard({ job, onApply }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">

      {/* Header */}
      <div className="flex justify-between items-start">

        <div>

          <h2 className="text-2xl font-bold text-gray-800">
            {job.title}
          </h2>

          <p className="text-gray-500 mt-1">
            {job.company}
          </p>

        </div>

        <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">

          ₹ {(job.salary / 100000).toFixed(1)} LPA

        </div>

      </div>

      {/* Location */}

      <div className="mt-5 flex items-center gap-2 text-gray-600">

        📍 {job.location}

      </div>

      {/* Description */}

      <p className="mt-5 text-gray-600 leading-7">

        {job.description}

      </p>

      {/* Skills */}

      <div className="flex flex-wrap gap-2 mt-6">

        {job.skills.map((skill, index) => (

          <span
            key={index}
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>

        ))}

      </div>

      {/* Footer */}

      <div className="mt-8 flex justify-end">

        <button
          onClick={() => onApply(job._id)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
        >
          Apply Now
        </button>

      </div>

    </div>
  );
}

export default JobCard;