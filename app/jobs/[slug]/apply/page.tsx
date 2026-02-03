// app/jobs/[slug]/apply/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

interface ApplyPageProps {
  slug: string; // on reçoit directement le slug depuis le parent
}

export default function ApplyPage({ slug }: ApplyPageProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application sent:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  if (submitted) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg text-center">
          <h2 className="text-2xl font-bold mb-4 text-neutral-900">
            Application Sent!
          </h2>
          <p className="text-neutral-800 mb-6">
            Thank you! We will review your application soon.
          </p>
          <Link
            href={`/jobs`}
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg transition"
          >
            Apply Again
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-6 text-neutral-900">
          Apply for this job
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="border border-gray-300 rounded-md p-3 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="border border-gray-300 rounded-md p-3 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message / Cover Letter"
            rows={5}
            required
            className="border border-gray-300 rounded-md p-3 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </main>
  );
}
