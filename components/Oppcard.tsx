import React from "react";
import Link from "next/link";
import type { Opportunity } from "../types/Opp";

type OppCardProps = {
  opportunity: Opportunity;
};

const Oppcard = ({ opportunity }: OppCardProps) => {
  const destination = `/opportunities/${opportunity.id}`;

  return (
    <article className="flex min-h-[230px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">

      <h2 className="text-xl font-bold text-slate-900">
        {opportunity.title}
      </h2>

      <p className="mt-3 font-xl text-slate-700">
        {opportunity.company}
      </p>

      <p className="mt-1 text-md text-slate-500">
        {opportunity.location}
      </p>

      <Link
        href={destination}
        className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3 hover:text-blue-800"
      >
        View opportunity
        <span>→</span>
      </Link>

    </article>
  );
};

export default Oppcard;