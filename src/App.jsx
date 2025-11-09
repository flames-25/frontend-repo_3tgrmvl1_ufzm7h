import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsGrid from './components/SkillsGrid';
import ProgressTracker from './components/ProgressTracker';
import Programs from './components/Programs';

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Calisthenics Flow. Train smart. Stay consistent.</p>
          <div className="flex items-center gap-4">
            <a href="#skills" className="hover:text-gray-900">Skills</a>
            <a href="#progress" className="hover:text-gray-900">Progress</a>
            <a href="#programs" className="hover:text-gray-900">Programs</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <SkillsGrid />
        <ProgressTracker />
        <Programs />
      </main>
      <Footer />
    </div>
  );
}
