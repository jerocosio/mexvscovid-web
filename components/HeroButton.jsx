import Link from 'next/link';


const HeroButton = ({ id, name, icon, number }) => (
    <Link href={`proyectos?cat=${name}`}>
        <a className="flex w-1/2 lg:w-1/5">
            <div className="flex w-full transition duration-500 ease-in-out transform justify-center items-center hover:bg-covid-300 p-2 lg:p-3 hover:shadow-md justify-center shadow  rounded m-2 bg-covid-200 hover:scale-105">
                <p className="text-xl md:text-2xl text-covid-900 font-semibold md:font-bold text-center font-serif">{name}</p>
            </div>
        </a>
    </Link>
);

export default HeroButton;