
const Filters = ({ categoryFilter, setCategoryFilter }) => {
    const handleChange = (event, category, index) => {
        let newCategoryFilter = [...categoryFilter];
        category.selected = !category.selected
        newCategoryFilter[index] = category
        setCategoryFilter(newCategoryFilter);
    }
    return (
        <div className="block">
            <p className="font-bold text-gray-900">Filtros</p>
            <h3 className="text-gray-700 mt-4">Categorías</h3>
            <div className="mt-2">
                {
                    categoryFilter.map((category, index) => (
                        <div className="mt-1" key={category.id}>
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="form-checkbox h-6 w-6" onChange={(e) => handleChange(e, category, index)} checked={category.selected} />
                                <span className="ml-3 text-lg">{category.name}</span>
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
    )
};

export default Filters;





