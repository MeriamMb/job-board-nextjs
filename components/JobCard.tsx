import { Job } from "../types/job";

type JobCardProps = {
  job: Job;
};

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <h2 className="text-xl font-bold">{job.title}</h2>
      <p className="text-gray-600">
        {job.company} • {job.location}
      </p>
      <p className="text-sm text-gray-500 mt-2">{job.type}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {job.stack.map((tech) => (
          <span
            key={tech}
            className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
