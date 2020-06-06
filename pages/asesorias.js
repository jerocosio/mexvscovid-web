import Head from 'next/head'
import Layout from '../components/Layout';
import AdvisorsList from '../components/AdvisorsList';
import StepsToAdd from '../components/StepsToAdd';
import Footer from '../components/Footer'

import DataContext from '../components/DataContext';
import { useContext } from 'react';

function Events() {
    const { data } = useContext(DataContext);
    let asesorias = [];

    if (data && data.assistance) {
        asesorias = data.assistance;
    }
    return (
        <Layout>
            <Head>
                <title>MEX VS COVID-19 - Asesorías para ayudarte en temas relacionados al COVID-19</title>
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
                        <h2 className="text-2xl lg:text-3xl text-gray-900 leading-normal p-2 lg:p-10 text-center font-serif">Asesoría de expertos</h2>
                        <p className="text-md font-serif px-4 pb-4 text-gray-800 text-center">Contamos con un grupo de expertos dispuestos a ayudarte en diferentes temas relevantes del COVID-19.</p>
                    </div>
                    <AdvisorsList advisories={asesorias} />
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
