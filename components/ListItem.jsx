import Link from 'next/link';
import Pill from '../components/Pill';
import ContactInfo from '../components/ContactInfo';
import MoreInfo from '../components/MoreInfo';
import LogoCircle from './LogoCircle';

function ListItem({ project }) {
    const projectUrl = "/proyecto/" + project.id;
    let ig_url = null;
    if (project.ig_link) {
        ig_url = 'https://www.instagram.com/' + project.ig_link.replace("@", "")
    }
    return (
        <div className="flex rounded-md bg-white shadow-md mb-6 overflow-hidden hover:shadow-lg flex-col lg:flex-row">
            <div className="flex lg:w-4/12 relative h-64 lg:h-auto">
                <Link href={projectUrl}>
                    <a className="flex">
                        <img className="object-cover " src="images/dry-clean.png" />
                    </a>
                </Link>
                <div className="absolute top-0 left-0 m-2">
                    <LogoCircle project={project} />
                </div>
                <div className="absolute left-0 bottom-2-6">
                    <Pill category={project.categoria} subcategory={project.subcategoria} />
                </div>
            </div>
            <div className="flex flex-col justify-between w-full">
                <div className="p-4">
                    <Link href={projectUrl}>
                        <a><h4 className="text-2xl text-gray-700 font-bold mb-2 hover:underline font-serif">{project.nombre}</h4></a>
                    </Link>
                    <ContactInfo project={project} />
                    <p className="text-gray-800 py-1 "><span className="font-medium text-gray-800">Servicio a domicilio: </span> {project.servicio_a_domicilio === 'Sí' ? ' ✅' : ' ⛔'}</p>
                    <p className="text-gray-800 py-1 box clamp-3 lg:clamp-2 orient-vertical overflow-hidden"><span className="font-medium text-gray-800">Zonas de envío: </span> {project.zonas_servicio_a_domicilio}</p>
                    <p className="text-gray-800 py-1 box clamp-4 lg:clamp-2 orient-vertical overflow-hidden"><span className="font-medium text-gray-800">Descripción: </span>{project.descripcion}</p>
                </div>
                <MoreInfo project={project} />
            </div>
        </div>
    )
};

export default ListItem;