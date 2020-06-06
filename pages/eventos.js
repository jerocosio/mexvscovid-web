import Head from 'next/head'
import Layout from '../components/Layout';
import EventsList from '../components/EventsList';
import StepsToAdd from '../components/StepsToAdd';
import Footer from '../components/Footer'

import DataContext from '../components/DataContext';
import { useContext } from 'react';

function Events() {
    const { data } = useContext(DataContext);
    let events = [];

    if (data && data.events) {
        events = data.events;
    }
    return (
        <Layout>
            <Head>
                <title>MEX VS COVID-19 - Eventos en línea para ayudarte en temas relacionados al COVID-19</title>
                <meta
                    key="description"
                    name="description"
                    content="MEX vs COVID-19 es una plataforma para apoyar a diferentes negocios mexicanos que han sido afectados por la pandemia del COVID-19. En nuestra sección de eventos encuanetra asesoría legal, de negocis y más para ayudaarte durante la pandemia."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-covid-100">
                <div className="container mx-auto ">
                    <div>
                        <h2 className="text-2xl lg:text-3xl text-gray-900 leading-normal p-2 lg:p-10 text-center font-serif">Eventos en línea</h2>
                        <p className="text-md font-serif px-4 pb-4 text-gray-800 text-center">Participa en nuestos eventos en línea para obtener ayuda legal, de negocios y de muchos otros temas para sacar adelante tu negocio.</p>
                    </div>
                    <EventsList events={events} />
                </div>
                <StepsToAdd />
            </main>
            <footer>
                <Footer />
            </footer>
        </Layout>
    )
}

export default Events
