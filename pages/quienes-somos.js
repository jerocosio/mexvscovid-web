import Head from 'next/head'
import Layout from '../components/Layout';
import RandomProjects from '../components/RandomProjects';
import StepsToAdd from '../components/StepsToAdd';
import Footer from '../components/Footer'

import DataContext from '../components/DataContext';
import { useContext } from 'react';

function QuienesSomos() {
    const { data } = useContext(DataContext);
    let projects = [];

    if (data && data.projects) {
        projects = data.projects;
    }
    return (
        <Layout>
            <Head>
                <title>MEX VS COVID-19 - Qué es y quiénes somos en este proyecto para apoyar a las empresas afectadas por el COVID-19</title>
                <meta
                    key="description"
                    name="description"
                    content="MEX vs COVID-19 es una plataforma para apoyar a diferentes negocios mexicanos que han sido afectados por la pandemia del COVID-19."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="bg-covid-100 ">
                    <div className="container py-4 mx-auto">
                        <p className="px-8 text-md text-gray-800 text-center py-4">Mexicanos contra Covid-19, es una plataforma a través de la cual brindamos ayuda a negocios mexicanos, trabajadores independientes y todo tipo de personas con actividad empresarial que están siendo afectadas por COVID-19. </p>
                        <p className="px-8 text-md text-gray-800 text-center py-4">Buscamos, no solamente ayudar a dar promoción a estos negocios, pero canalizarlos con la ayuda necesaria para que puedan sostenerse durante el tiempo que dure el distanciamiento social así como en la etapa de la reactivación de su economía. Entendiendo que hay muchos mexicanos a los que les es imposible seguir la cuarentena, queremos apoyar a aquellos que se verán más afectados, y así minimizar los contagios de aquellos que no pueden permitirse quedarse en casa.</p>
                        <p className="px-8 text-md text-gray-800 text-center py-4">La empatía es como un músculo que se debe trabajar y, partiendo de esto, queremos invitar a los mexicanos a ejercitarlo, haciendo que su consumo genere un impacto en aquellos negocios que se están viendo afectadas por la situación actual.</p>
                        <p className="px-8 text-md text-gray-800 text-center py-4">Finalmente, invitamos a todos los grupos y personas que quieran sumarse y empatizar con nuestra causa a escribirnos y a ser parte de este movimiento.</p>

                    </div>
                </div>
                <StepsToAdd />
                <RandomProjects projects={projects} />
            </main>
            <footer>
                <Footer />
            </footer>
        </Layout>
    )
}

export default QuienesSomos
