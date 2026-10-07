import { applications } from "@/data/application";

export default function ApplicationsPage() {
  return (
    <main>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900  text-center">
          My Applications
        </h2>

        <p className="mt-2 text-slate-500 text-center">
          Review the roles you have applied for and their current status.
        </p>
      </div>

      <div className="space-y-4">
        {applications.map((application) => (
          <article
            key={application.id}
            className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between"
          >
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                {application.title}
              </h3>

              <p className="mt-1 text-slate-500">
                {application.company}
              </p>
            </div>

            <span
              className={`w-fit rounded-full px-4 py-2 text-sm font-semibold ${
                application.status === "Applied"
                  ? "bg-blue-50 text-blue-600"
                  : "bg-amber-50 text-amber-700"
              }`}
            >
              {application.status}
            </span>
          </article>
        ))}
      </div>
    </main>
  );
}