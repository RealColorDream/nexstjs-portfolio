'use client';

import Image from 'next/image';

export default function HomePage() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
            <div className="max-w-4xl w-full">
                <div className="text-center space-y-8">
                    <div className="flex items-center justify-between">
                        <video muted={true} loop={true} preload={"metadata"} autoPlay={true} controls={false}>
                            <source src={"/animation.webm"} type={"video/webm"} />
                        </video>

                    </div>
                    <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        (I really like Valve games)
                    </p>
                    <div className="flex gap-4 justify-center">
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="px-8 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
                        >
                            See my projects
                        </button>
                        <button
                            onClick={() => scrollToSection('work')}
                            className="px-8 py-3 border-2 border-zinc-900 dark:border-white text-zinc-900 dark:text-white rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                        >
                            Work Experiences
                        </button>
                    </div>
                </div>
            </div>
        </section>

    );
}