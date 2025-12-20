
export default function Footer() {
    return (<footer className="bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 py-12 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                    Here some links if youre interested to contact me:
                </p>
                <div className="flex justify-center gap-6">
                    <a
                        href="mailto:contact@example.com"
                        className="text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                    >
                        Email
                    </a>
                    <a
                        href="https://github.com/RealColorDream"
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
    );
}