interface SkillCategory {
  category: string;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  { category: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'] },
  { category: 'Outils', skills: ['Git', 'Docker', 'VS Code', 'Figma'] },
  { category: 'DevOps', skills: ['Vercel', 'AWS', 'CI/CD', 'Linux'] },
  { category: 'Méthodologies', skills: ['Agile', 'Scrum', 'TDD', 'Code Review'] },
  { category: 'Soft Skills', skills: ['Communication', 'Travail d\'équipe', 'Autonomie', 'Créativité'] },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-12 text-center">
          Compétences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((item) => (
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
  );
}

