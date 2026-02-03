import { jobs } from "../../../data/jobs";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type JobPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* SEO dynamique */
export async function generateMetadata({
  params,
}: JobPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = jobs.find((job) => job.slug === slug);

  if (!job) {
    return {
      title: "Job not found",
    };
  }

  return {
    title: `${job.title} at ${job.company}`,
    description: job.description,
  };
}

/* Page */
export default async function JobPage({ params }: JobPageProps) {
  const { slug } = await params;
  const job = jobs.find((job) => job.slug === slug);

  if (!job) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>

        <p className="text-gray-700 mb-4">
          {job.company} • {job.location} • {job.type}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {job.stack.map((tech) => (
            <span
              key={tech}
              className="bg-blue-200 text-blue-900 px-2 py-1 rounded text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-gray-800 leading-relaxed">{job.description}</p>

        <button
          className="mt-8 w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg font-medium
                     hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          Apply Now
        </button>
      </div>
    </main>
  );
}
