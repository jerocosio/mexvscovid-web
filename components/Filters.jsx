
const Filters = ({ categories }) => (
    <div className="block">
        <p className="font-bold text-gray-900">Filtros</p>
        <h3 className="text-gray-700 mt-4">Estado</h3>
        <div className="mt-2">
            <label className="block">
                <select className="form-select block w-full mt-1">
                    <option>CDMX</option>
                    <option>Monterrey</option>
                    <option>Guadalajara</option>
                </select>
            </label>
        </div>
        <h3 className="text-gray-700 mt-4">Categorías</h3>
        <div className="mt-2">
            {
                categories.map(category => (
                    <div className="mt-1" key={category.id}>
                        <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox h-6 w-6" />
                            <span className="ml-3 text-lg">{category.nombre}</span>
                        </label>
                    </div>
                ))
            }
        </div>
        <h3 className="text-gray-700 mt-4">Servicio a domicilio</h3>
        <div className="mt-2">
            <div className="mt-1">
                <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox h-6 w-6" />
                    <span className="ml-3 text-lg">Sí</span>
                </label>
            </div>
            <div className="mt-1">
                <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox h-6 w-6" />
                    <span className="ml-3 text-lg">No</span>
                </label>
            </div>
        </div>
    </div>
);

export default Filters;





