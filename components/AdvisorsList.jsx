import AdvisoryItem from '../components/AdvisoryItem'

function AdvisorsList({ advisories }) {
    return (
        <div className="container flex flex-col lg:block p-3 lg:p-0">
            <div>
                <h2 className="text-2xl font-medium text-gray-800 self-start font-serif mb-2">Expertos disponibles</h2>
                <div className="flex flex-wrap">
                    {
                        advisories.length > 0 ? (

                            advisories.map((advisory, index) => (
                                < AdvisoryItem advisory={advisory} key={index} />
                            ))
                        ) : <div className="w-full flex m-3 p-4 bg-covid-200 rounded"><p className="text-center text-gray-800">Por ahora no hay asesoriasa disponibles.</p></div>
                    }

                </div>
            </div>
        </div>
    )
};

export default AdvisorsList;