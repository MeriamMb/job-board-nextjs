import { Job } from "../types/job";
import Link from "next/link";

type JobCardProps = {
  job: Job;
};

export default function JobCard({ job }: JobCardProps) {
  return (
    <Link href={`/jobs/${job.slug}`}>
      <div className="flex flex-col h-full min-h-[300px] border border-neutral-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-lg transition-transform duration-200 ease-in-out hover:-translate-y-1 cursor-pointer">
        {/* Job title */}
        <h2 className="text-2xl font-semibold text-neutral-900 mb-2">
          {job.title}
        </h2>

        {/* Company */}
        <p className="text-neutral-700 mb-1">{job.company}</p>

        {/* Location & type */}
        <p className="text-neutral-500 text-sm">
          {job.location} • {job.type}
        </p>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-2 mt-4 mt-auto">
          {job.stack.map((tech) => (
            <span
              key={tech}
              className="bg-teal-50 text-teal-600 px-2 py-1 rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
