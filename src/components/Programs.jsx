import { ArrowRightCircle } from 'lucide-react';

const programs = [
  {
    title: 'Beginner Foundation',
    level: '3 days/week • 6 weeks',
    description: 'Build solid basics across push, pull, legs, and core. Perfect starting point to master form.',
    highlights: ['Foundational strength', 'Simple progressions', 'Mobility focus'],
  },
  {
    title: 'Skill Builder – Pull',
    level: '4 days/week • 8 weeks',
    description: 'Progress to your first strict pull-up and beyond with targeted accessory work.',
    highlights: ['Strict mechanics', 'Tempo sets', 'Scap control'],
  },
  {
    title: 'Core & Compression',
    level: '3 days/week • 6 weeks',
    description: 'Focused ab, hip flexor, and hollow body work for L-sits and toes-to-bar.',
    highlights: ['Compression drills', 'Static holds', 'Breathing & bracing'],
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-gradient-to-t from-white to-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Personalized programs</h2>
          <p className="mt-2 text-gray-600">Choose a plan that fits your level and schedule. Adjust sessions as you grow.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="text-xs font-medium uppercase tracking-wide text-indigo-600">{p.level}</div>
              <h3 className="mt-2 text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.description}</p>
              <ul className="mt-4 space-y-1 text-sm text-gray-700">
                {p.highlights.map(h => (
                  <li key={h} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-300"/> {h}</li>
                ))}
              </ul>
              <a href="#progress" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700">
                Start plan <ArrowRightCircle size={18} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
