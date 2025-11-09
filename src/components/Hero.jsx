import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        {/* Spline 3D scene background */}
        <Spline style={{ width: '100%', height: '100%' }} scene="https://prod.spline.design/8W5c3QbC3xwZ8KQ4/scene.splinecode" />
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/95" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[72vh] flex-col items-center justify-center text-center py-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Master bodyweight training with clarity and consistency
            </h1>
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-gray-600">
              Learn calisthenics skills step-by-step, follow tailored programs, and track your progress across push, pull, core, and mobility.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
              <a href="#programs" className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-white hover:bg-gray-800">
                Start your program <ArrowRight size={18} />
              </a>
              <a href="#skills" className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-gray-800 hover:bg-gray-50">
                Explore skills
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left w-full">
              {[
                { label: 'Push-ups', stat: '12 progressions' },
                { label: 'Pull-ups', stat: '9 progressions' },
                { label: 'Core', stat: '10 sessions' },
                { label: 'Mobility', stat: 'Weekly plan' },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-gray-200 bg-white/80 p-4">
                  <div className="text-sm text-gray-600">{item.label}</div>
                  <div className="text-lg font-semibold text-gray-900">{item.stat}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
