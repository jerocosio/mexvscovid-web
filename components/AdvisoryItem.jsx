function AdvisoryItem({ advisory }) {
    const { nombre, tipo, en_que_consiste, email, telefono } = advisory;
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
                <div className="bg-white p-2 w-full flex">
                    {email ? (
                        <a href={`mailto:${email}`}>
                            <button aria-label="Enviar E-mail" className="flex transition duration-300 ease-in-out  mx-1 bg-covid-500  text-white font-bold py-2 px-3 border-b-4 border-covid-600 hover:bg-covid-600 rounded hover:border-covid-600">
                                E-mail <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 ml-2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </button> </a>) : null}
                    {telefono ? (
                        <a href={`tel:${telefono}`}>
                            <button aria-label="Enviar E-mail" className="flex transition duration-300 ease-in-out  mx-1 bg-covid-500  text-white font-bold py-2 px-3 border-b-4 border-covid-600 hover:bg-covid-600 rounded hover:border-covid-600">
                                Tel <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 ml-2"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            </button> </a>) : null}

                </div>
            </div>
        </div>
    )
};

export default AdvisoryItem;
