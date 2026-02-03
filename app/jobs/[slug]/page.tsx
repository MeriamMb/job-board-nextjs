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
    return { title: "Job not found" };
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
    <main className="min-h-screen bg-neutral-50 p-4 md:p-12">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        {/* Title */}
        <h1 className="text-4xl font-bold text-neutral-900 mb-3">
          {job.title}
        </h1>

        {/* Company / location / type */}
        <p className="text-neutral-700 mb-6">
          {job.company} • {job.location} • {job.type}
        </p>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {job.stack.map((tech) => (
            <span
              key={tech}
              className="bg-teal-50 text-teal-600 px-3 py-1 rounded-md text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-neutral-800 leading-relaxed mb-8">
          {job.description}
        </p>

        {/* CTA */}
        <button className="w-full md:w-auto bg-teal-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 transition">
          Apply Now
        </button>
      </div>
    </main>
  );
}
