import Link from 'next/link';

function TopSort({ numberOfListings }) {
    return (
        <div className="container p-3 lg:p-0">
            <div className="rounded-md bg-white shadow lg:my-4 p-4 flex justify-between">
                <div className="flex flex-col">
                    <p className="font-bold text-gray-900">Conheça nossos projetos</p>
                    <p className="text-gray-700 text-sm">{numberOfListings} Projetos filtrados.</p>
                </div>
                <div className="flex">

                </div>
            </div>
        </div>
    )
};

export default TopSort;