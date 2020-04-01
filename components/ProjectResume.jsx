import Link from 'next/link';


const ProjectResume = ({ name }) => (
    <div className="max-w-sm rounded shadow-lg flex flex-1 m-6 flex-col overflow-hidden bg-white">
        <div className="flex h-48 relative">
            <img className="object-cover " src="images/dry-clean.png" />
            <div className="absolute">
                <span className="absolute rounded-full m-2 bg-indigo-500 text-white uppercase px-2 py-1 text-xs font-bold mr-3">Servicios</span>
            </div>
        </div>

        <div className="flex p-4 flex-col ">
            <h4 className="text-xl text-gray-700 font-bold mb-2">Tintorería Supreme</h4>
            <h4 className="text-gray-600">Hegel 319, Polanco, CDMX</h4>
            <h4 className="text-gray-600">55-66 65-045</h4>
        </div>
        <div className="flex p-4 border-t border-gray-300 flex-row justify-between">
            <div className="flex">
                <button className="transition duration-500 ease-in-out  border border-green-500 hover:bg-green-500 hover:text-white text-green-500 font-bold py-2 px-4 rounded">
                    Ver más
                </button>
            </div>
            <div className="flex">
                <button className="mx-1 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
                </button>
                <button className="mx-1 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    IG
                </button>
                <button className="mx-1 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    WA
                </button>
            </div>
        </div>
    </div>
);

export default ProjectResume;