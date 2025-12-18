import Navbar from './components/Navbar';
import Work from './components/Work';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-4xl w-full">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-between">
              <Image
                src="/animation.gif"
                alt="Illustration Développeur"
                width={1920}
                height={720}
              />
            </div>
            <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Passionné par la création d&apos;expériences web modernes et performantes
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="#projects"
                className="px-8 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
              >
                Voir mes projets
              </a>
              <a
                href="#work"
                className="px-8 py-3 border-2 border-zinc-900 dark:border-white text-zinc-900 dark:text-white rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              >
                Mon expérience
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <Work />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Footer */}
      <footer className="bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Intéressé par une collaboration ? Contactez-moi !
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:contact@example.com"
              className="text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium"
            >
              Email
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-8">
            © 2025 Portfolio. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
