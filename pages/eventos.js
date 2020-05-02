import Head from 'next/head'
import Layout from '../components/Layout';
import EventsList from '../components/EventsList';
import StepsToAdd from '../components/StepsToAdd';
import Footer from '../components/Footer'

const Tabletop = require('tabletop');

function Events(props) {
    let { events } = props;
    return (
        <Layout>
            <Head>
                <title>MEX VS COVID-19 Eventos para ajudar os que precisam de alimentos ou produtos de higiene cadastre sua entidade ou Igreja na luta contra a COVID-19</title>
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
                        <h2 className="text-2xl lg:text-3xl text-gray-900 leading-normal p-2 lg:p-10 text-center font-serif">Eventos  de doações</h2>
                        <p className="text-md font-serif px-4 pb-4 text-gray-800 text-center">Participe de nossos eventos on-line ou presenciais para obter informações jurídicas, comerciais e muitas outras maneiras de ajudar como doações de igrejas e entidades.</p>
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

export async function getServerSideProps() {
    const spreadSheetUrl = "https://docs.google.com/spreadsheets/d/1eXwDV5PGImTNXOPcfkXKlPADJezEuSotNk8EkrkO2c4/edit#gid=1749062419";
    function getData() {
        return new Promise(resolve => {
            Tabletop.init({
                key: spreadSheetUrl,
                callback: data => resolve(data),
                simpleSheet: false
            });
        });
    }
    const ssData = await getData();
    return {
        props: {
            events: ssData.eventos.elements
        }
    };
}

export default Events
