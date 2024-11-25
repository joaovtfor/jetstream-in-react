import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import logo from '../../assets/logos/Logo-lisa.png'

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="w-full bg-background text-black/50 dark:bg-background dark:text-white/50">
                <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl selection:text-white selection:bg-theme-blue-lighter">
                    <header className="h-20 flex justify-between items-center">
                        <div className="w-24 p-4">
                            <img
                                id="background"
                                className="w-20"
                                src={logo}
                            />
                        </div>
                        <nav className="w-full flex justify-end items-center absolute z-10">
                            {auth.user ? (
                                <Link
                                    href={route('home')}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-theme-blue-2 dark:hover:text-theme-blue-2/80 dark:focus-visible:ring-white"
                                >
                                    Home
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="rounded-md px-3 py-2 text-theme-blue-2 ring-1 ring-transparent transition font-black hover:text-black/50 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-theme-blue-2 dark:hover:text-theme-blue-2/80 dark:focus-visible:ring-white"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="rounded-md px-3 py-2 text-theme-blue-2 ring-1 ring-transparent transition font-black hover:text-black/50 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-theme-blue-2 dark:hover:text-theme-blue-2/80 dark:focus-visible:ring-white"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </nav>
                    </header>

                    <footer className="w-full h-2 py-4 text-sm text-center flex items-center justify-center text-theme-blue-2 dark:text-theme-blue-2">
                        João Vitor de For dos Santos &copy; 2024
                    </footer>
                </div>
            </div>
        </>
    );
}
