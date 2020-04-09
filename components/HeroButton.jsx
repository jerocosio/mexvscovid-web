import Link from 'next/link';


const HeroButton = ({ id, name, icon, number }) => (
    <Link href={`proyectos?cat=${name}`}>
        <a className="transition duration-500 ease-in-out transform w-full lg:w-1/3 hover:bg-covid-300 hover:shadow-md justify-center shadow  p-2 pt-0 lg:p-4 rounded m-2 lg:m-6 bg-covid-200 hover:scale-105">
            <p className="text-5xl  text-center">{icon}</p>
            <p className="text-2xl text-covid-900  font-bold text-center">{name}</p>
            <p className="text-covid-900 text-center">{`(${number})`}</p>
        </a>
    </Link>
);

export default HeroButton;