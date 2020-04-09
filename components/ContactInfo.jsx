function ContactInfo({ project }) {
    return (
        <div className="mb-2">
            {project.direccion ? <p className="text-gray-800 py-1 box clamp-1 orient-vertical overflow-hidden"><span className="font-medium text-gray-800">📍 Dirección: </span>{project.direccion}</p> : null}
            {project.telefono ? <p><a href={`tel:${project.telefono}`} className="text-gray-800 hover:underline py-1"><span className="font-medium text-gray-800">☎️ (Tel): </span>{project.telefono}</a></p> : null}
            {project.whatsapp ? <p><a href={`https://wa.me/${project.whatsapp.replace(" ", "").replace("+", "")}`} className="text-gray-800 hover:underline py-2"><span className="font-medium text-gray-800">☎️ (WhatsApp): </span>{project.whatsapp}</a></p> : null}
        </div>
    )
};

export default ContactInfo;