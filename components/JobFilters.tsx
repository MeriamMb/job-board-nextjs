import { Job } from "../types/job";
import { useState, useEffect } from "react";

type JobFiltersProps = {
  jobs: Job[];
  onFilter: (filtered: Job[]) => void;
};

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

  const types = Array.from(new Set(jobs.map((job) => job.type)));
  const locations = Array.from(new Set(jobs.map((job) => job.location)));

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm mb-6 flex flex-col md:flex-row gap-4">
      <input
        type="text"
        placeholder="Search by title or company"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-neutral-200 rounded-lg p-3 flex-1
                   bg-white text-neutral-900 
                   placeholder-neutral-500 
                   focus:outline-none focus:ring-2 focus:ring-teal-500"
      />

      <select
        value={typeFilter}
        onChange={(e) => setTypeFilter(e.target.value)}
        className="border border-neutral-200 rounded-lg p-3
                   bg-white text-neutral-900
                   focus:outline-none focus:ring-2 focus:ring-teal-500"
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
        className="border border-neutral-200 rounded-lg p-3
                   bg-white text-neutral-900
                   focus:outline-none focus:ring-2 focus:ring-teal-500"
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
