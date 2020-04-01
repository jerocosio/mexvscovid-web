import Link from 'next/link';


const ListItem = ({ project }) => {
    const projectUrl = "/proyecto/" + project.id;
    return (
        <div className="flex rounded-md bg-white shadow mb-6 overflow-hidden hover:shadow-md">
            <div className="flex w-4/12 relative">
                <Link href={projectUrl}>
                    <a className="flex">
                        <img className="object-cover " src="images/dry-clean.png" />
                    </a>
                </Link>
                <div className="absolute">
                    <span className="absolute rounded-full m-2 bg-indigo-500 text-white uppercase px-2 py-1 text-xs font-bold mr-3">{project.subcategoria}</span>
                </div>
            </div>
            <div className="flex flex-col justify-between w-full">
                <div className="p-4">
                    <Link href={projectUrl}>
                        <a><h4 className="text-2xl text-gray-700 font-bold mb-2 hover:underline">{project.nombre}</h4></a>
                    </Link>
                    <p className="text-gray-800"><span className="font-medium text-gray-800">📍 </span> {project.direccion}</p>
                    <p className="text-gray-800"><span className="font-medium text-gray-800">☎️ </span> {project.telefono}</p>
                    <p className="text-gray-800"><span className="font-medium text-gray-800">Envíos: </span> ✅</p>
                    <p className="text-gray-800"><span className="font-medium text-gray-800">Zonas de envío: </span> {project.zonas_servicio_a_domicilio}</p>
                    <p className="text-gray-800">{project.descripcion}</p>
                </div>
                <div className="flex p-4 border-t border-gray-300 flex-row justify-between ">
                    <div className="flex">
                        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                            Más detalles
                </button>
                    </div>
                    <div className="flex ">
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
        </div>
    )
};

export default ListItem;