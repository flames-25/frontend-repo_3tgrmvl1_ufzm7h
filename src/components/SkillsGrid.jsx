import { Dumbbell, Target, Timer } from 'lucide-react';

const skills = [
  {
    title: 'Push-ups',
    level: 'Beginner → Advanced',
    description: 'From incline to ring push-ups and beyond with strict form cues.',
    points: ['Hands/shoulders alignment', 'Core bracing and hollow body', 'Tempo & range of motion'],
  },
  {
    title: 'Pull-ups',
    level: 'Beginner → Advanced',
    description: 'Foundations to chest-to-bar and archer variations with strict reps.',
    points: ['Scapular control', 'Full hang to chin-over-bar', 'Eccentric focus'],
  },
  {
    title: 'L-sit',
    level: 'Intermediate',
    description: 'Develop powerful hip flexors and compression through progressions.',
    points: ['Tuck to one-leg', 'Parallel bar support', 'Active compression drills'],
  },
  {
    title: 'Planche',
    level: 'Advanced',
    description: 'Structured progressions from frog stand to straddle planche.',
    points: ['Wrist prep & lean mechanics', 'Scap protraction', 'Static holds & banded drills'],
  },
];

export default function SkillsGrid() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Skill library</h2>
            <p className="mt-2 text-gray-600">Visual demos, cues, and step-by-step progressions for each movement.</p>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
            <div className="inline-flex items-center gap-2"><Target size={16}/> Personalized</div>
            <div className="inline-flex items-center gap-2"><Timer size={16}/> Time-efficient</div>
            <div className="inline-flex items-center gap-2"><Dumbbell size={16}/> Minimal gear</div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s) => (
            <article key={s.title} className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className="mb-3 text-xs font-medium tracking-wider text-indigo-600">{s.level}</div>
              <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.description}</p>
              <ul className="mt-4 space-y-1 text-sm text-gray-700">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-300"/> {p}</li>
                ))}
              </ul>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(99,102,241,0.08), transparent 40%)'}}/>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
