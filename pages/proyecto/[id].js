import Head from 'next/head'
import Layout from '../../components/Layout';
import TopSort from '../../components/TopSort'
import DirectoryList from '../../components/DirectoryList'
import StepsToAdd from '../../components/StepsToAdd';
import Footer from '../../components/Footer'
import ContactInfo from '../../components/ContactInfo';
import ShadowBox from '../../components/ShadowBox'
import SocialButtons from '../../components/SocialButtons'
import RandomProjects from '../../components/RandomProjects'

import { useRouter } from 'next/router'


const Tabletop = require('tabletop');

const Proyecto = props => {
    const router = useRouter()
    const { id } = router.query
    const projects = props.projects;
    const project = projects.find(project => project.id === id);
    return (
        <Layout>
            <Head>
                <title>MEX VS COVID-19 - Conoce más del proyecto</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-white">
                <div className="">
                    <div className="container mx-auto ">
                        <div className="p-6 lg:p-12">
                            <h2 className="text-4xl text-gray-900 leading-normal ">{project.nombre}</h2>
                            <ContactInfo project={project} />
                        </div>

                    </div>
                </div>
                <div className="bg-covid-100">
                    <div className="container mx-auto ">
                        <div className="flex flex-1 flex-wrap">
                            <ShadowBox width={'lg:w-2/3'}>
                                <img className="object-cover rounded" src="/images/dry-clean.png" />
                            </ShadowBox>
                            <ShadowBox width={'lg:w-1/3'}>
                                <div className="flex flex-col ">
                                    <ContactInfo project={project} />
                                    <SocialButtons project={project} />
                                </div>
                            </ShadowBox>
                            <ShadowBox width={'lg:w-2/3'}>
                                <div className="flex flex-col ">
                                    <p className="font-bold text-lg text-gray-900">Descripción del proyecto:</p>
                                    <p className="text-gray-700 text-lg text-sm">{project.descripcion}</p>
                                </div>
                            </ShadowBox>
                            <ShadowBox width={'lg:w-1/3'}>
                                <div className="flex flex-col">
                                    <p className="font-bold text-gray-900 text-lg">Servicio a domiclio: {project.servicio_a_domicilio === 'Sí' ? ' ✅' : ' ⛔'}</p>
                                    <p className="font-bold text-gray-900 text-lg">Zonas de envío: <span className="text-gray-700 font-normal">{project.zonas_servicio_a_domicilio}</span></p>
                                </div>
                            </ShadowBox>
                            {project.impacto_social ? <ShadowBox width={'w-full'}>
                                <div className="flex flex-col ">
                                    <p className="font-bold text-lg text-gray-900">Impacto social:</p>
                                    <p className="text-gray-700 text-lg text-sm">{project.impacto_social}</p>
                                </div>
                            </ShadowBox> : null}
                        </div>
                        <RandomProjects projects={projects} />
                    </div>
                </div>
            </main>

            <footer>
                <Footer />
            </footer>

        </Layout >
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
            projects: ssData.proyectos.elements,
            categories: ssData.categorias.elements
        }
    };
}

export default Proyecto
