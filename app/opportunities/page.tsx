import React from "react";
import Oppcard from "../../components/Oppcard";
import Navbar from "../../components/Navbar";
export const opportunities = [
  {
    id: "1",
    title: "Junior Front-End Developer",
    company: "Cedar Digital",
    location: "Beirut",
    description:
      "Build responsive interfaces and collaborate with a small development team.",
  },
  {
    id: "2",
    title: "Graduate Software Engineer",
    company: "Code Harbor",
    location: "Remote",
    description:
      "Support web projects, review code with teammates, and learn through practical tasks.",
  },
  {
    id: "3",
    title: "Web Development Intern",
    company: "Pixel Workshop",
    location: "Tripoli",
    description:
      "Help maintain website pages and practice HTML, CSS, JavaScript, and React.",
  },
];

const OpportunitiesPage = () => {
  return (
    
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Explore Opportunities
          </p>

          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Compare opportunities before deciding where to apply
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Review each role, compare the company and location, and open the
            opportunity that fits your career path.
          </p>
        </div>
=
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((opp) => (
            <Oppcard key={opp.id} opportunity={opp} />
          ))}
        </div>

      </section>
    </main>
  );
};

export default OpportunitiesPage;