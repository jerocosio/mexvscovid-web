import Link from 'next/link';

function TopSort({ numberOfListings }) {
    return (
        <div className="container p-3 lg:p-0">
            <div className="rounded-md bg-white shadow lg:my-4 p-4 flex justify-between">
                <div className="flex flex-col">
                    <p className="font-bold text-gray-900">Conoce todos los proyectos</p>
                    <p className="text-gray-700 text-sm">{numberOfListings} Proyectos filtrados.</p>
                </div>
                <div className="flex">

                </div>
            </div>
        </div>
    )
};

export default TopSort;