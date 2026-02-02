import { Job } from "../types/job";

type JobFiltersProps = {
  jobs: Job[];
  onFilter: (filtered: Job[]) => void;
};

import { useState, useEffect } from "react";

export default function JobFilters({ jobs, onFilter }: JobFiltersProps) {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  useEffect(() => {
    let filtered = jobs;

    if (search) {
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(search.toLowerCase()) ||
          job.company.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (typeFilter) {
      filtered = filtered.filter((job) => job.type === typeFilter);
    }

    if (locationFilter) {
      filtered = filtered.filter(
        (job) => job.location.toLowerCase() === locationFilter.toLowerCase()
      );
    }

    onFilter(filtered);
  }, [search, typeFilter, locationFilter, jobs, onFilter]);

  // Extraire toutes les options uniques
  const types = Array.from(new Set(jobs.map((job) => job.type)));
  const locations = Array.from(new Set(jobs.map((job) => job.location)));

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-col md:flex-row gap-4">
      <input
        type="text"
        placeholder="Search by title or company"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-400 rounded-md p-2 flex-1 
             bg-white text-gray-900 
             placeholder-gray-500 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select
        value={typeFilter}
        onChange={(e) => setTypeFilter(e.target.value)}
        className="border border-gray-400 rounded-md p-2 
             bg-white text-gray-900 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Types</option>
        {types.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
      <select
        value={locationFilter}
        onChange={(e) => setLocationFilter(e.target.value)}
        className="border border-gray-400 rounded-md p-2 
             bg-white text-gray-900 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Locations</option>
        {locations.map((l) => (
          <option key={l} value={l}>
            {l}
          </option>
        ))}
      </select>
    </div>
  );
}
