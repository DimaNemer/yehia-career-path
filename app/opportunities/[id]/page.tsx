import Link from "next/link";
import { opportunities } from "../page";

type OpportunityDetails = {
  params: Promise<{
    id: string;
  }>;
};

export default async function OpportunityDetailsPage({
  params,
}: OpportunityDetails) {
  const { id } = await params;

  const selectedOpportunity = opportunities.find(
    (opportunity) => opportunity.id === id
  );

  if (!selectedOpportunity) {
    return (
      <main className="min-h-screen bg-slate-100 flex items-center justify-center px-6">

        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-xl">

          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-2xl">
            !
          </div>

          <h1 className="text-2xl font-bold text-slate-900">
            Opportunity not found
          </h1>

          <p className="mt-3 text-slate-500">
            We couldn&apos;t find an opportunity with this ID.
          </p>

          <Link
            href="/opportunities"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Back to opportunities
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="mx-auto max-w-4xl px-6 py-16">

        <Link
          href="/opportunities"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600"
        >
          <span>←</span>
          Back to opportunities
        </Link>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">

          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Opportunity Details
            </p>

            <h1 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              {selectedOpportunity.title}
            </h1>
          </div>

          <div className="grid gap-5 border-y border-slate-200 py-6 md:grid-cols-2">

            <div>
              <p className="text-sm font-medium text-slate-400">
                Company
              </p>

              <p className="mt-1 text-lg font-semibold text-slate-800">
                {selectedOpportunity.company}
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-400">
                Location
              </p>

              <p className="mt-1 text-lg font-semibold text-slate-800">
                {selectedOpportunity.location}
              </p>
            </div>

          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold text-slate-900">
              About this opportunity
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              {selectedOpportunity.description}
            </p>
          </div>

        </div>

      </section>
    </main>
  );
}