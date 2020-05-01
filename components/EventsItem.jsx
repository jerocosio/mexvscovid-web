import * as moment from 'moment';
moment.locale('es');

function EventsItem({ event, past }) {
    const { titulo, imagen, presentado_por, time, link } = event;
    let buttonText = 'Unirme'
    if (past) {
        buttonText = 'Ver'
    }
    return (
        <div className="p-4 lg:w-1/3">
            <div className="flex w-full bg-white rounded shadow-md hover:shadow-lg overflow-hidden">
                <div className="relative  ">
                    <div className="transition duration-300 ease-in-out transform w-full h-full bg-covid-300 absolute opacity-0 hover:opacity-50">

                    </div>
                    <img className="h-56 object-cover" src={imagen.replace("open?", "uc?")} ></img>
                </div>
                <div className="p-3 flex justify-between flex-col">
                    <h3 className="text-md font-serif font-semibold text-gray-800">{titulo}</h3>
                    <p className="text-gray-700 font-semibold">{moment(time).fromNow()}</p>
                    <p className="text-gray-900"><span className="text-sm font-semibold text-gray-700">Fecha:</span> {moment(time).format("dddd, D [de] MMMM [a las] LT")}</p>
                    <p className="text-gray-900"><span className="text-sm font-semibold text-gray-700">Por:</span> {presentado_por}</p>
                    {
                        link ? <a href={link} className="p-1 w-full border border-covid-500 rounded text-covid-500 text-center hover:bg-covid-500 hover:text-white">
                            {buttonText}
                        </a> : null
                    }

                </div>
            </div>
        </div>
    )
};

export default EventsItem;