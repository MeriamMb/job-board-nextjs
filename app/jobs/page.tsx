"use client";

import { useState } from "react";
import JobCard from "../../components/JobCard";
import JobFilters from "../../components/JobFilters";
import { jobs } from "../../data/jobs";
import { Job } from "../../types/job";

export default function JobsPage() {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);

  return (
    <main className="min-h-screen p-8 bg-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Job Listings</h1>

      <JobFilters jobs={jobs} onFilter={setFilteredJobs} />

      {filteredJobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </main>
  );
}
