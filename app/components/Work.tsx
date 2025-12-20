interface WorkExperience {
  title: string;
  company: string;
  period: string;
  description: string;
}

const experiences: WorkExperience[] = [
  {
    title: 'Internship in Web Development',
    company: 'IEMN  (CNRS)',
    period: '10 months',
    description: 'Development of a web application for managing scientific projects using Python, Flask, and PostgreSQL.',
  },
  {
    title: 'BUT Informatique',
    company: 'IUT de Lens',
    period: '2023 - 2026',
    description: 'Pursuing a Bachelor of Technology in Computer Science.',
  },
];

export default function Work() {
  return (
    <section id="work" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-12 text-center">
            Work Experiences
        </h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">
                    {experience.title}
                  </h3>
                  <p className="text-lg text-zinc-600 dark:text-zinc-400">{experience.company}</p>
                </div>
                <span className="text-sm text-zinc-500 dark:text-zinc-500">{experience.period}</span>
              </div>
              <p className="text-zinc-700 dark:text-zinc-300">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

