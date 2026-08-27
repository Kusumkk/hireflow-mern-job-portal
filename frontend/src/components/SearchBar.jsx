function SearchBar({
  search,
  setSearch,
  locationFilter,
  setLocationFilter,
}) {
  return (
    <div className="bg-white shadow rounded-xl p-6 mb-8">

      <div className="grid md:grid-cols-2 gap-4">

        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={locationFilter}
          onChange={(e) =>
            setLocationFilter(e.target.value)
          }
          className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Locations</option>
          <option value="Hyderabad">
            Hyderabad
          </option>
          <option value="Bangalore">
            Bangalore
          </option>
          <option value="Chennai">
            Chennai
          </option>
        </select>

      </div>

    </div>
  );
}

export default SearchBar;