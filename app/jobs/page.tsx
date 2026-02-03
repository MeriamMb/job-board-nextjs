"use client";

import { useState } from "react";
import JobCard from "../../components/JobCard";
import JobFilters from "../../components/JobFilters";
import { jobs } from "../../data/jobs";
import { Job } from "../../types/job";
import Link from "next/link";

export default function JobsPage() {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);

  return (
    <main className="min-h-screen bg-neutral-50">
      <div className="max-w-7xl mx-auto p-6 md:p-12">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-8 text-neutral-900">
          Job Listings
        </h1>

        {/* Filters */}
        <JobFilters jobs={jobs} onFilter={setFilteredJobs} />

        {/* Job grid or empty state */}
        {filteredJobs.length === 0 ? (
          <p className="text-center text-neutral-600 mt-16 text-lg">
            No job offers match your search criteria.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}

        {/* Back link */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="text-teal-500 hover:text-teal-600 transition font-medium"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
