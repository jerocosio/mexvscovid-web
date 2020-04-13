import EventsItem from '../components/EventsItem'

function EventsList({ events }) {
    let futureEvents = [];
    let pastEvents = [];

    events.forEach(event => {
        const time = event.fecha + " " + event.hora
        event['time'] = new Date(time)
        let timePlusTwo = new Date(time)
        timePlusTwo.setHours(timePlusTwo.getHours() + 2)
        if (timePlusTwo > new Date()) {
            futureEvents.push(event)
        } else {
            pastEvents.push(event)
        }
    })

    return (
        <div className="container flex flex-col lg:block p-3 lg:p-0">
            <div>
                <h2 className="text-2xl font-medium text-gray-800 self-start font-serif mb-2">Próximos eventos</h2>
                <div className="flex flex-wrap">
                    {
                        futureEvents.length > 0 ? (

                            futureEvents.map(event => (
                                < EventsItem event={event} key={event.id} />
                            ))
                        ) : <div className="w-full flex m-3 p-4 bg-covid-200 rounded"><p className="text-center text-gray-800">Por ahora no hay eventos futuros progamados.</p></div>
                    }

                </div>
            </div>
            <div>
                <h2 className="text-2xl font-medium text-gray-800 self-start font-serif mb-2">Eventos pasados</h2>
                <div className="flex flex-wrap">
                    {
                        pastEvents.map(event => (
                            < EventsItem event={event} key={event.id} past />
                        ))
                    }
                </div>
            </div>

        </div>
    )
};

export default EventsList;