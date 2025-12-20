import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  gradient: string;
  image?: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'Marathon Web 2024 🐟',
    description: 'Marathon Web is a school project where you have to create a website during a 36-hour interval. The goal is to create a website with a given subject and a team of 8 people.',
    technologies: ['PHP'],
    gradient: 'from-blue-500 to-purple-600',
    image: '/marathon1.png',
    link: 'https://github.com/RealColorDream/marathon-web',
  },
  {
    title: 'Bomber Man 🕹️',
    description: 'Marathon Web is a school project where you have to create a website during a 36-hour interval. The goal is to create a website with a given subject and a team of 8 people.',
    technologies: ['Java', 'JavaFx'],
    gradient: 'from-green-500 to-teal-600',
    image: '/bomberman_main.png',
    link: 'https://github.com/RealColorDream/bomberman',
  },
  {
    title: 'Lens Judge 📊',
    description: 'LensJudge is a tool designed to automatically evaluate submitted solutions during competitive programming contests. It compares the output of a source file against predefined input data and their expected outcomes.',
    technologies: ['Java'],
    gradient: 'from-orange-500 to-red-600',
    image: '/lensjudge-diagram.png',
    link: 'https://github.com/RealColorDream/lens-judge',
  },
  {
    title: 'Gamedle 🎮',
    description: 'A simple guessing game about video game covers and more. ',
    technologies: ['React Native', 'Expo', 'Firebase'],
    gradient: 'from-pink-500 to-purple-600',
    link: 'https://github.com/RealColorDream/GoGamedle',
  },
];

const techColors: Record<string, string> = {
  'Next.js': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
  'TypeScript': 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
  'PHP': 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
  'Stripe': 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
  'React': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
  'Node.js': 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
  'Java': 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
  'JavaFx': 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
  'MongoDB': 'bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200',
  'Chart.js': 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
  'API REST': 'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200',
  'React Native': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
  'Expo': 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
  'Firebase': 'bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200',
};

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-12 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
            >
              {project.image ? (
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className={`h-48 bg-gradient-to-br ${project.gradient}`}></div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-sm ${techColors[tech] || 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200'} rounded-full`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Voir le projet →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

