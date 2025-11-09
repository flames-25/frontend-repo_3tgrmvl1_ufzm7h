import { useState } from 'react';
import { Menu, X, Rocket, User } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-white">
              <Rocket size={18} />
            </span>
            <span className="font-semibold text-gray-900">Calisthenics Flow</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#skills" className="hover:text-gray-900">Skills</a>
            <a href="#progress" className="hover:text-gray-900">Progress</a>
            <a href="#programs" className="hover:text-gray-900">Programs</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <User size={16} /> Sign in
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
              Join free
            </button>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-3 text-sm text-gray-700 shadow-sm">
              <a onClick={() => setOpen(false)} href="#skills" className="rounded-md px-3 py-2 hover:bg-gray-50">Skills</a>
              <a onClick={() => setOpen(false)} href="#progress" className="rounded-md px-3 py-2 hover:bg-gray-50">Progress</a>
              <a onClick={() => setOpen(false)} href="#programs" className="rounded-md px-3 py-2 hover:bg-gray-50">Programs</a>
              <div className="mt-2 flex gap-2">
                <button className="flex-1 rounded-md border border-gray-300 px-3 py-2">Sign in</button>
                <button className="flex-1 rounded-md bg-gray-900 px-3 py-2 text-white">Join free</button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
