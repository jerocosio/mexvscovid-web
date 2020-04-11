import Link from 'next/link';
import Pill from '../components/Pill';
import ContactInfo from '../components/ContactInfo';
import MoreInfo from '../components/MoreInfo';
import LogoCircle from './LogoCircle';

function EventsListItem({ event }) {
    const { titulo, imagen, presentado_por } = event;
    return (
        <div className="p-4 lg:w-1/3">
            <div className="flex w-full bg-white rounded shadow-md hover:shadow-lg overflow-hidden">
                <div>
                    <img className="h-40 object-cover" src={imagen.replace("open?", "uc?")} ></img>
                </div>
                <div className="p-4 flex justify-between flex-col">
                    <h3 className="text-md font-serif font-semibold text-gray-800">{titulo}</h3>
                    <p><span className="font-semibold text-gray-700">Fecha: </span> </p>
                    <p><span className="font-semibold text-gray-700">Por: </span> {presentado_por}</p>
                </div>
            </div>
        </div>
    )
};

export default EventsListItem;