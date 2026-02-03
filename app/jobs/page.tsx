"use client";

import { useState } from "react";
import JobCard from "../../components/JobCard";
import JobFilters from "../../components/JobFilters";
import { jobs } from "../../data/jobs";
import { Job } from "../../types/job";

export default function JobsPage() {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Job Listings</h1>

        <JobFilters jobs={jobs} onFilter={setFilteredJobs} />

        {filteredJobs.length === 0 ? (
          <p className="text-gray-600 text-center mt-12">
            No job offers match your search criteria.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
