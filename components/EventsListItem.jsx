import * as moment from 'moment';
moment.locale('es');

function EventsListItem({ event }) {
    const { titulo, imagen, presentado_por, time } = event;
    return (
        <div className="p-4 lg:w-1/3">
            <div className="flex w-full bg-white rounded shadow-md hover:shadow-lg overflow-hidden">
                <div>
                    <img className="h-48 object-cover" src={imagen.replace("open?", "uc?")} ></img>
                </div>
                <div className="p-3 flex justify-between flex-col">
                    <h3 className="text-md font-serif font-semibold text-gray-800">{titulo}</h3>
                    <p className="text-gray-700 font-semibold">{moment(time).fromNow()}</p>
                    <p className="text-gray-900"><span className="text-sm font-semibold text-gray-700">Fecha:</span> {moment(time).format("dddd, D [de] MMMM [a las] LT")}</p>
                    <p className="text-gray-900"><span className="text-sm font-semibold text-gray-700">Por:</span> {presentado_por}</p>
                </div>
            </div>
        </div>
    )
};

export default EventsListItem;