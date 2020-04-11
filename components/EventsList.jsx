import EventsListItem from '../components/EventsListItem'

function EventsList({ events }) {
    let futureEvents = [];
    let pastEvents = [];

    events.forEach(event => {
        console.log(event);
    })

    return (
        <div className="container flex flex-col lg:block p-3 lg:p-0">
            <div>
                <h2 className="text-2xl font-medium text-gray-800 self-start font-serif mb-2">Próximos eventos</h2>
                <div className="flex flex-wrap">
                    {

                        events.map(event => (
                            < EventsListItem event={event} key={event.id} />
                        ))
                    }
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-medium text-gray-800 self-start font-serif mb-2">Eventos pasados</h2>
                <div className="flex flex-wrap">
                    {
                        events.map(event => (
                            < EventsListItem event={event} key={event.id} />
                        ))
                    }
                </div>
            </div>

        </div>
    )
};

export default EventsList;