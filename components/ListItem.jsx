import Link from 'next/link';
import Pill from '../components/Pill';
import ContactInfo from '../components/ContactInfo';

const ListItem = ({ project }) => {
    const projectUrl = "/proyecto/" + project.id;
    let ig_url = null;
    if (project.ig_link) {
        ig_url = 'https://www.instagram.com/' + project.ig_link.replace("@", "")
    }
    return (
        <div className="flex rounded-md bg-white shadow-md mb-6 overflow-hidden hover:shadow-lg">
            <div className="flex w-4/12 relative">
                <Link href={projectUrl}>
                    <a className="flex">
                        <img className="object-cover " src="images/dry-clean.png" />
                    </a>
                </Link>
                <div className="absolute">
                    <Pill category={project.categoria} subcategory={project.subcategoria} />
                </div>
            </div>
            <div className="flex flex-col justify-between w-full">
                <div className="p-4">
                    <Link href={projectUrl}>
                        <a><h4 className="text-2xl text-gray-700 font-bold mb-2 hover:underline">{project.nombre}</h4></a>
                    </Link>
                    <ContactInfo project={project} />

                    <p className="text-gray-800 py-1"><span className="font-medium text-gray-800">Servicio a domicilio: </span> {project.servicio_a_domicilio === 'Sí' ? ' ✅' : ' ⛔'}</p>
                    <p className="text-gray-800 py-1"><span className="font-medium text-gray-800">Zonas de envío: </span> {project.zonas_servicio_a_domicilio}</p>
                    <p className="text-gray-800 py-1"><span className="font-medium text-gray-800">Descripción: </span>{project.descripcion}</p>
                </div>
                <div className="flex p-4 border-t border-gray-300 flex-row justify-between ">
                    <div className="flex">
                        <Link href={projectUrl}>
                            <a className="transition duration-300 ease-in-out  border border-green-500 hover:bg-green-500 hover:text-white text-green-500 font-bold py-2 px-4 rounded">
                                Ver Más
                            </a>
                        </Link>
                    </div>
                    <div className="flex ">
                        {project.fb_link ? (
                            <a href={project.fb_link}>
                                <button className="transition duration-300 ease-in-out  mx-1 bg-green-500 text-white font-bold py-2 px-3 border-b-4 border-green-700 hover:bg-blue-500 rounded hover:border-blue-700">
                                    <svg className="fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z" /></svg>
                                </button> </a>) : null}

                        {ig_url ? (
                            <a href={ig_url}>
                                <button className="transition duration-300 ease-in-out  mx-1 bg-green-500  text-white font-bold py-2 px-3 border-b-4 border-green-700 hover:bg-purple-500 rounded hover:border-purple-700">
                                    <svg className="fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M14.52,2.469H5.482c-1.664,0-3.013,1.349-3.013,3.013v9.038c0,1.662,1.349,3.012,3.013,3.012h9.038c1.662,0,3.012-1.35,3.012-3.012V5.482C17.531,3.818,16.182,2.469,14.52,2.469 M13.012,4.729h2.26v2.259h-2.26V4.729z M10,6.988c1.664,0,3.012,1.349,3.012,3.012c0,1.664-1.348,3.013-3.012,3.013c-1.664,0-3.012-1.349-3.012-3.013C6.988,8.336,8.336,6.988,10,6.988 M16.025,14.52c0,0.831-0.676,1.506-1.506,1.506H5.482c-0.831,0-1.507-0.675-1.507-1.506V9.247h1.583C5.516,9.494,5.482,9.743,5.482,10c0,2.497,2.023,4.52,4.518,4.52c2.494,0,4.52-2.022,4.52-4.52c0-0.257-0.035-0.506-0.076-0.753h1.582V14.52z" /></svg>
                                </button> </a>) : null}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ListItem;