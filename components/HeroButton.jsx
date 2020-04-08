import Link from 'next/link';


const HeroButton = ({ id, name, icon, number }) => (
    <Link href={`directorio?cat=${name}`}>
        <a className="transition duration-500 ease-in-out transform w-1/3 hover:bg-covid-300 hover:shadow-md justify-center w-auto shadow  py-4 px-4 rounded m-6 bg-covid-200 hover:scale-105">
            <p className="text-5xl  text-center">{icon}</p>
            <p className="text-2xl text-covid-900  font-bold text-center">{name}</p>
            <p className="text-covid-900 text-center">{`(${number})`}</p>
        </a>
    </Link>
);

export default HeroButton;