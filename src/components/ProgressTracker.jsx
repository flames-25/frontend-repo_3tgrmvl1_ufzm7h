import { useEffect, useMemo, useState } from 'react';
import { CheckCircle2, Flame } from 'lucide-react';

export default function ProgressTracker() {
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem('cf-progress');
    return saved ? JSON.parse(saved) : [];
  });

  const [skill, setSkill] = useState('Push-ups');
  const [reps, setReps] = useState(10);

  useEffect(() => {
    localStorage.setItem('cf-progress', JSON.stringify(entries));
  }, [entries]);

  const streak = useMemo(() => {
    // Simple streak: count unique days with entries in the last 7 days
    const dates = new Set(entries.map((e) => new Date(e.date).toDateString()));
    return dates.size;
  }, [entries]);

  function addEntry(e) {
    e.preventDefault();
    const newEntry = { id: crypto.randomUUID(), skill, reps: Number(reps), date: new Date().toISOString() };
    setEntries([newEntry, ...entries].slice(0, 20));
  }

  return (
    <section id="progress" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Track your progress</h2>
            <p className="mt-2 text-gray-600">Log quick sessions and watch your streak grow. Your data stays on this device.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-orange-700">
            <Flame size={16}/> <span className="text-sm">Streak: {streak} days</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <form onSubmit={addEntry} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium text-gray-700">Skill</label>
              <select value={skill} onChange={(e)=>setSkill(e.target.value)} className="w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-gray-900">
                {['Push-ups','Pull-ups','L-sit','Planche'].map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium text-gray-700">Reps / Seconds</label>
              <input type="number" min="1" value={reps} onChange={(e)=>setReps(e.target.value)} className="w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
            </div>
            <button className="w-full rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800">Add entry</button>
          </form>

          <div className="lg:col-span-2 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            {entries.length === 0 ? (
              <p className="text-sm text-gray-600">No entries yet. Log your first set above.</p>
            ) : (
              <ul className="divide-y divide-gray-100">
                {entries.map((e) => (
                  <li key={e.id} className="flex items-center justify-between py-3">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{e.skill}</div>
                      <div className="text-xs text-gray-600">{new Date(e.date).toLocaleString()}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-gray-900">{e.reps}</span>
                      <CheckCircle2 className="text-emerald-500" size={18} />
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
