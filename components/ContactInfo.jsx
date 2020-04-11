function ContactInfo({ project, noClamp }) {
    return (
        <div className="mb-2">
            {project.direccion ? <p className={`py-1 text-gray-800 ${!noClamp ? ' box clamp-1 orient-vertical overflow-hidden' : null} `}><a href={`http://maps.google.com/?q=${project.direccion.replace(/ /g, '').replace(/#/g, '')}`} className="text-gray-800 hover:underline "><span className="font-medium text-gray-800">📍 Dirección: </span>{project.direccion}</a></p> : null}
            {project.telefono ? <p className="py-1"><a href={`tel:${project.telefono}`} className="text-gray-800 hover:underline "><span className="font-medium text-gray-800">☎️ (Tel): </span>{project.telefono}</a></p> : null}
            {project.whatsapp ? <p className="py-1"><a href={`https://wa.me/${project.whatsapp.replace(" ", "").replace("+", "")}`} className="text-gray-800 hover:underline"><span className="font-medium text-gray-800">☎️ (WhatsApp): </span>{project.whatsapp}</a></p> : null}
        </div>
    )
};

export default ContactInfo;

