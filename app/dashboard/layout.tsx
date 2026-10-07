import Link from "next/link";
import type { ReactNode } from "react";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50">

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 text-center">
  <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
    Career Dashboard
  </p>

  <h1 className="mt-2 text-3xl font-bold text-slate-900">
    Track your progress
  </h1>

  <p className="mx-auto mt-2 max-w-xl text-slate-500">
    Keep your applications organized and stay focused on the next step.
  </p>
</div>

<nav className="mb-8 flex justify-center gap-3">
  <Link
    href="/dashboard"
    className="rounded-lg bg-white px-6 py-3 font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-blue-600 hover:text-white"
  >
    Overview
  </Link>

  <Link
    href="/dashboard/applications"
    className="rounded-lg bg-white px-6 py-3 font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-blue-600 hover:text-white"
  >
    Applications
  </Link>
</nav>

{children}
      </section>
    </div>
  );
}