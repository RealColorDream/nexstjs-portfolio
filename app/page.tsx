import Navbar from './components/Navbar';
import Image from 'next/image';

export default function Home() {

    return (
        <div className="min-h-screen bg-white dark:bg-black">
            <Navbar/>

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
                            Passionné par la création d'expériences web modernes et performantes
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
            <section id="work" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-4xl w-full">
                    <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-12 text-center">
                        Expérience Professionnelle
                    </h2>
                    <div className="space-y-8">
                        <div
                            className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">
                                        Développeur Web
                                    </h3>
                                    <p className="text-lg text-zinc-600 dark:text-zinc-400">Entreprise XYZ</p>
                                </div>
                                <span className="text-sm text-zinc-500 dark:text-zinc-500">2023 - Présent</span>
                            </div>
                            <p className="text-zinc-700 dark:text-zinc-300">
                                Développement d'applications web modernes avec React, Next.js et Node.js.
                                Collaboration avec des équipes pluridisciplinaires pour livrer des projets de qualité.
                            </p>
                        </div>

                        <div
                            className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">
                                        Développeur Frontend
                                    </h3>
                                    <p className="text-lg text-zinc-600 dark:text-zinc-400">Startup ABC</p>
                                </div>
                                <span className="text-sm text-zinc-500 dark:text-zinc-500">2021 - 2023</span>
                            </div>
                            <p className="text-zinc-700 dark:text-zinc-300">
                                Création d'interfaces utilisateur réactives et accessibles.
                                Optimisation des performances et amélioration de l'expérience utilisateur.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-4xl w-full">
                    <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-12 text-center">
                        Compétences
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {category: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']},
                            {category: 'Backend', skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB']},
                            {category: 'Outils', skills: ['Git', 'Docker', 'VS Code', 'Figma']},
                            {category: 'DevOps', skills: ['Vercel', 'AWS', 'CI/CD', 'Linux']},
                            {category: 'Méthodologies', skills: ['Agile', 'Scrum', 'TDD', 'Code Review']},
                            {
                                category: 'Soft Skills',
                                skills: ['Communication', 'Travail d\'équipe', 'Autonomie', 'Créativité']
                            },
                        ].map((item) => (
                            <div
                                key={item.category}
                                className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800"
                            >
                                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
                                    {item.category}
                                </h3>
                                <ul className="space-y-2">
                                    {item.skills.map((skill) => (
                                        <li
                                            key={skill}
                                            className="text-zinc-700 dark:text-zinc-300 flex items-center"
                                        >
                                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-4xl w-full">
                    <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-12 text-center">
                        Projets Personnels
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div
                            className="bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-blue-600 dark:hover:border-blue-400 transition-colors">
                            <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-2">
                                    Application E-commerce
                                </h3>
                                <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                                    Une plateforme e-commerce complète avec panier, paiement et gestion des commandes.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                  <span
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                    Next.js
                  </span>
                                    <span
                                        className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">
                    TypeScript
                  </span>
                                    <span
                                        className="px-3 py-1 text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                    Stripe
                  </span>
                                </div>
                                <a
                                    href="#"
                                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                                >
                                    Voir le projet →
                                </a>
                            </div>
                        </div>

                        <div
                            className="bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-blue-600 dark:hover:border-blue-400 transition-colors">
                            <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600"></div>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-2">
                                    Blog Personnel
                                </h3>
                                <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                                    Un blog minimaliste avec système de commentaires et recherche avancée.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                  <span
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                    React
                  </span>
                                    <span
                                        className="px-3 py-1 text-sm bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full">
                    Node.js
                  </span>
                                    <span
                                        className="px-3 py-1 text-sm bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 rounded-full">
                    MongoDB
                  </span>
                                </div>
                                <a
                                    href="#"
                                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                                >
                                    Voir le projet →
                                </a>
                            </div>
                        </div>

                        <div
                            className="bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-blue-600 dark:hover:border-blue-400 transition-colors">
                            <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600"></div>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-2">
                                    Dashboard Analytics
                                </h3>
                                <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                                    Tableau de bord interactif avec visualisations de données en temps réel.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                  <span
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                    Next.js
                  </span>
                                    <span
                                        className="px-3 py-1 text-sm bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full">
                    Chart.js
                  </span>
                                    <span
                                        className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full">
                    API REST
                  </span>
                                </div>
                                <a
                                    href="#"
                                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                                >
                                    Voir le projet →
                                </a>
                            </div>
                        </div>

                        <div
                            className="bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-blue-600 dark:hover:border-blue-400 transition-colors">
                            <div className="h-48 bg-gradient-to-br from-pink-500 to-rose-600"></div>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-2">
                                    Application Mobile
                                </h3>
                                <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                                    Application mobile cross-platform pour la gestion de tâches quotidiennes.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                  <span
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                    React Native
                  </span>
                                    <span
                                        className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">
                    Expo
                  </span>
                                    <span
                                        className="px-3 py-1 text-sm bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-full">
                    Firebase
                  </span>
                                </div>
                                <a
                                    href="#"
                                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                                >
                                    Voir le projet →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
