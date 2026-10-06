import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

const Page = () => {
  return (
    <>
      <Navbar />

      <main>
        <section className="min-h-[calc(100vh-100px)] flex items-center justify-center px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 mb-4">
              Yehia’s Two-Month Goal
            </p>

            <blockquote className="max-w-3xl mx-auto">
              <p className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                “Before I chase every opportunity, I need to remember my goal.”
              </p>
            </blockquote>

            <p className="max-w-2xl mx-auto mt-8 text-lg leading-8 text-gray-600">
              Yehia is a Computer Science graduate from the Lebanese University,
              First Branch. Graduation was exciting, but the days that followed
              felt less certain.
            </p>

            <div className="max-w-2xl mx-auto mt-8 rounded-2xl bg-gray-50 border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Turn uncertainty into a clear path
              </h2>

              <p className="text-gray-600 leading-7">
                Build skills, focus on the right opportunities, and take
                consistent steps toward landing his first tech job.
              </p>

              <Link
                href="/plan"
                className="inline-block mt-4 rounded-lg bg-gray-700 px-6 py-3 font-semibold text-white transition hover:bg-gray-600"
              >
                Start the Plan
              </Link>
            </div>

          </div>
        </section>
      </main>
    </>
  );
};

export default Page;