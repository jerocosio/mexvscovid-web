import { useState } from 'react';
import Link from 'next/link';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="bg-covid-500">
            <nav className="flex items-center container mx-auto justify-between flex-wrap  p-4">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <Link href="/">
                        <a>
                            <img src="/images/logo.svg" className="h-6 lg:h-12"></img>
                        </a>
                    </Link>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white" onClick={() => setMenuOpen(!menuOpen)}>
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className={"transition duration-500 ease-in-out transform w-full block flex-grow lg:flex lg:items-center lg:w-auto" + (menuOpen ? " " : " hidden")}>
                    <div className="text-sm lg:flex-grow">
                        <Link href="/">
                            <a className="block text-lg mt-4 lg:inline-block lg:mt-0 text-covid-100 hover:text-covid-900 mr-4 font-serif">
                                Inicio
      </a>
                        </Link>
                        <Link href="/proyectos">
                            <a className="block text-lg mt-4 lg:inline-block lg:mt-0 text-covid-100 hover:text-covid-900 mr-4 font-serif">
                                Proyectos
      </a>
                        </Link >
                        <Link href="/quienes-somos">
                            <a className="block text-lg mt-4 lg:inline-block lg:mt-0 text-covid-100 hover:text-covid-900 font-serif">
                                ¿Quiénes somos?
      </a>
                        </Link>
                    </div>
                    <div>
                        <a href="#" className="inline-block text-lg px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-covid-500 hover:bg-white mt-4 lg:mt-0 font-serif">+ Agregar mi proyecto</a>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Header;