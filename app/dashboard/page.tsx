import { applications } from "@/data/application";

export default function DashboardPage() {
  return (
    <main>
      {/* Motivational message */}
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-slate-900">
          “Every application is progress.”
        </h2>

        <p className="mt-3 leading-7 text-slate-500">
          Stay consistent, review your applications, and keep moving toward
          the right opportunity.
        </p>
      </div>

      {/* Applications summary */}
      <section className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
          Applications
        </p>

        <p className="mt-4 text-5xl font-bold text-blue-600">
          {applications.length}
        </p>

        <p className="mt-3 text-slate-500">
          applications currently being tracked
        </p>
      </section>
    </main>
  );
}