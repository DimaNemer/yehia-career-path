"use client";
import Navbar from "../../components/Navbar";
import type {Milestone} from '../../types/Milestone'
import {useState} from 'react'
import Link from 'next/link'

const initialMilestones: Milestone[] = [
  {
    id: 1,
    stage: "prepare",
    title: "Prepare",
    description: "Get ready for the job market.",
    tasks: [
      { id: 1, title: "Improve CV", completed: false },
      { id: 2, title: "Organize portfolio", completed: false },
      { id: 3, title: "Choose a target role", completed: false },
    ],
  },
  {
    id: 2,
    stage: "practice",
    title: "Practice",
    description: "Strengthen your skills and confidence.",
    tasks: [
      { id: 4, title: "Practice React and Next.js", completed: false },
      { id: 5, title: "Build a focused mini project", completed: false },
      { id: 6, title: "Practice interview questions", completed: false },
    ],
  },
  {
    id: 3,
    stage: "apply",
    title: "Apply",
    description: "Turn preparation into action.",
    tasks: [
      { id: 7, title: "Find suitable opportunities", completed: false },
      { id: 8, title: "Submit applications", completed: false },
      { id: 9, title: "Follow up on applications", completed: false },
    ],
  },
];


const PlanPage = () => {
  const [milestones, setMilestones] = useState<Milestone[]>(initialMilestones);
  function toggleTask(taskId: number) {
  setMilestones((previous) =>
    previous.map((milestone) => ({
      ...milestone,
      tasks: milestone.tasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      ),
    }))
  );
}
 return (
  <main className="min-h-screen bg-slate-50">
    <Navbar />
    <section className="mx-auto max-w-7xl px-6 py-16">
    <Link
  href="/"
  className="mb-10 inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-blue-600"
>
  <span className="text-lg">←</span>
  Back to Home
</Link>
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
          Your 2-Month Roadmap
        </p>

        <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
          I don&apos;t need to do everything today.
          <span className="block text-blue-600">
            I need to know my next step.
          </span>
        </h1>

        <p className="mt-5 text-base text-slate-500">
          Follow these three stages to move from preparation to action.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

        {milestones.map((milestone, index) => (
          <section
            key={milestone.id}
            className="relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                {milestone.stage}
              </span>
            </div>

            <h2 className="mb-2 text-2xl font-bold text-slate-900">
              {milestone.title}
            </h2>

            <p className="mb-7 text-sm leading-6 text-slate-500">
              {milestone.description}
            </p>

            <ul className="space-y-3">
              {milestone.tasks.map((task) => (
                <li key={task.id}>
                  <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 transition hover:border-blue-200 hover:bg-blue-50">

                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                      className="h-4 w-4 cursor-pointer accent-blue-600"
                    />

                    <span
                      className={`text-sm ${
                        task.completed
                          ? "text-slate-400 line-through"
                          : "text-slate-700"
                      }`}
                    >
                      {task.title}
                    </span>

                  </label>
                </li>
              ))}
            </ul>
          </section>
        ))}

      </div>
    </section>
  </main>
);
}

export default PlanPage
