import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import logo from '../../assets/logos/Logo-lisa.png'

export default function Welcome({
    auth,
}: PageProps) {

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
                    <main className='w-full flex items-center'>
                        <section className='flex flex-col items-center w-[60%] gap-y-5 ml-10'>
                            <h2 className='text-3xl text-theme-blue-2 font-bold'>Projeto Tempo Integral</h2>
                            <p className='text-md text-theme-blue-light font-normal text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut totam alias labore quam! Enim veritatis eos ex beatae alias totam dolor, iste esse omnis optio natus accusamus sunt nesciunt corporis, aut dolorem qui aspernatur ea vel. Fugit, harum illo rem reiciendis deleniti laudantium natus culpa amet debitis, vel quibusdam sint? Impedit laborum nam sunt mollitia.</p>
                            <p className='text-md text-theme-blue-light font-normal text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut totam alias labore quam! Enim veritatis eos ex beatae alias totam dolor, iste esse omnis optio natus accusamus sunt nesciunt corporis, aut dolorem qui aspernatur ea vel. Fugit, harum illo rem reiciendis deleniti laudantium natus culpa amet debitis, vel quibusdam sint? Impedit laborum nam sunt mollitia.</p>
                            <p className='text-md text-theme-blue-light font-normal text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut totam alias labore quam! Enim veritatis eos ex beatae alias totam dolor, iste esse omnis optio natus accusamus sunt nesciunt corporis, aut dolorem qui aspernatur ea vel. Fugit, harum illo rem reiciendis deleniti laudantium natus culpa amet debitis, vel quibusdam sint? Impedit laborum nam sunt mollitia.</p>
                            <p className='text-md text-theme-blue-light font-normal text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut totam alias labore quam! Enim veritatis eos ex beatae alias totam dolor, iste esse omnis optio natus accusamus sunt nesciunt corporis, aut dolorem qui aspernatur ea vel. Fugit, harum illo rem reiciendis deleniti laudantium natus culpa amet debitis, vel quibusdam sint? Impedit laborum nam sunt mollitia.</p>
                        </section>
                        <aside className='w-72 h-full mx-auto flex items-center justify-center '>
                            <img src={logo} alt="Logo" />
                        </aside>
                    </main>
                    <footer className="w-full h-2 mt-10 py-4 text-sm text-center font-black flex items-center justify-center text-theme-blue-2 dark:text-theme-blue-2">
                        <a href="https://linkedin.com/in/joaovtor" target='_blank'>
                            <p>João Vitor de For dos Santos &copy; 2024</p>
                        </a>
                    </footer>
                </div>
            </div>
        </>
    );
}
