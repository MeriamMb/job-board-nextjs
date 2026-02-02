import { Job } from "../types/job";

type JobCardProps = {
  job: Job;
};

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white">
      <h2 className="text-xl font-bold text-gray-900">{job.title}</h2>
      <p className="text-gray-700">
        {job.company} • {job.location}
      </p>
      <p className="text-sm text-gray-500 mt-2">{job.type}</p>

      <div className="flex flex-wrap gap-2 mt-2">
        {job.stack.map((tech) => (
          <span
            key={tech}
            className="bg-blue-200 text-blue-900 px-2 py-1 rounded text-xs"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
