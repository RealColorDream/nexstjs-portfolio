import Link from "next/link";

export default function notFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black px-4">
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">404 - Page Non Trouvée</h1>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8 text-center max-w-md">
                Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            </p>
            <Link
                href="/"
                className="px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
            >
                Retour à l'accueil
            </Link>
        </div>
    );
}