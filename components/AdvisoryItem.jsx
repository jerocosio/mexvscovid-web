function AdvisoryItem({ advisory }) {
    const { nombre, tipo, en_que_consiste, email } = advisory;
    return (
        <div className="p-4 lg:w-1/3 ">
            <div className="rounded overflow-hidden shadow-md">
                <div className=" bg-covid-200 p-4">
                    <p className="text-gray-800 text-lg font-serif">{nombre}</p>
                    <p className="text-gray-700 text-m">Sobre: {tipo}</p>
                </div>
                <div className="bg-white p-4">
                    <p className="text-gray-800 text-sm">{en_que_consiste}</p>
                </div>
                <div className="bg-white p-2 w-full">
                    <a href={`mailto:${email}`}>
                        <button aria-label="Enviar E-mail" className="flex transition duration-300 ease-in-out  mx-1 bg-covid-500  text-white font-bold py-2 px-3 border-b-4 border-covid-600 hover:bg-covid-600 rounded hover:border-covid-600">
                            Enviar e-mail <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 ml-2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        </button> </a>
                </div>
            </div>
        </div>
    )
};

export default AdvisoryItem;