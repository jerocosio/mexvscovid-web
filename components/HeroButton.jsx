import Link from 'next/link';


const HeroButton = ({ id, name, icon, number }) => (
    <Link href={`proyectos?cat=${name}`}>
        <a className="flex w-full lg:w-1/5">
            <div className="flex w-full transition duration-500 ease-in-out transform justify-center items-center hover:bg-covid-300 p-2 pt-0 lg:p-3 hover:shadow-md justify-center shadow  rounded m-2 lg:m-2 bg-covid-200 hover:scale-105">
                <p className="text-2xl text-covid-900  font-bold text-center font-serif">{name}</p>
                {/* <p className="text-covid-900 text-center">{`(${number})`}</p> */}
            </div>
        </a>
    </Link>
);

export default HeroButton;