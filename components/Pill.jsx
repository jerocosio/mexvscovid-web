const Pill = ({ category, subcategory }) => {
    let background = "bg-green-500"
    if (category === 'Comida') {
        background = "bg-blue-500"
    } else if (category == 'Servicios') {
        background = "bg-indigo-500"
    } else if (category == 'Tiendas') {
        background = "bg-teal-500"
    }
    return (
        <span className={`absolute rounded-full m-2 text-white uppercase px-2 py-1 text-xs font-bold mr-3 ${background}`}>{subcategory}</span>
    )
};

export default Pill;