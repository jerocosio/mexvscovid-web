import Head from 'next/head'
import Layout from '../../components/Layout';
import StepsToAdd from '../../components/StepsToAdd';
import Footer from '../../components/Footer'
import ContactInfo from '../../components/ContactInfo';
import ShadowBox from '../../components/ShadowBox'
import SocialButtons from '../../components/SocialButtons'
import RandomProjects from '../../components/RandomProjects'
import ShareButtons from '../../components/ShareButtons'
import LogoCircle from '../../components/LogoCircle';

import { useRouter } from 'next/router'

import DataContext from '../../components/DataContext';
import { useContext } from 'react';

const Proyecto = () => {
    const { data } = useContext(DataContext);
    let projects = [];

    if (data && data.projects) {
        projects = data.projects;
    }
    const router = useRouter()
    const { id } = router.query
    const project = projects.find(project => project.id === id);
    if (project && project.imagen.includes('file')) {
        const id = project.imagen.split("/")[5]
        const newUrl = `https://drive.google.com/uc?id=${id}`
        project.imagen = newUrl
    }
    return (
        <Layout>
            <Head>
                <title>MEX VS COVID-19 - Apoya a {project ? project.nombre : null} durante la epidemia del COVID-19</title>
                <meta
                    key="description"
                    name="description"
                    content={`Conoce toda la información de ${project ? project.nombre : null} y apóyalos a través de Mex VS COVID-19. Una plataforma que ofrece ayuda para negocios afectados por la pandemia del COVID-19.`}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-white">
                <div className="">
                    <div className="container mx-auto ">
                        {
                            project ?
                                <div className="flex p-6 lg:p-12 justify-between flex-col lg:flex-row">
                                    <div>
                                        <h2 className="text-4xl text-gray-900 leading-normal font-serif">{project ? project.nombre : null}</h2>
                                        <ContactInfo project={project} noClamp />
                                    </div>
                                    <div className="lg:p-8">
                                        <LogoCircle project={project} />
                                    </div>
                                </div>
                                :
                                <p>Cargando...</p>
                        }
                    </div>
                </div>
                <div className="bg-covid-100">
                    <div className="container mx-auto ">
                        {
                            project ? <div className="flex flex-1 flex-wrap">
                                <ShadowBox width={'lg:w-2/3 w-full'}>
                                    {project.imagen ?
                                        <img className="object-cover rounded h-64 lg:h-auto" src={project.imagen.replace("open?", "uc?")} alt={"Imagen de " + project.nombre} /> :
                                        <img className="object-cover rounded h-64 lg:h-auto" src={`/images/sub-categories/${project.subcategoria.toLowerCase()}.jpg`} alt={"Imagen de " + project.nombre} />}
                                </ShadowBox>
                                <div className="w-full lg:w-1/3">
                                    <ShadowBox >
                                        <div className="flex flex-col ">
                                            <h4 className="text-xl font-medium text-gray-800 self-start font-serif mb-2">Datos de contacto</h4>
                                            <ContactInfo project={project} noClamp />
                                            <SocialButtons project={project} />
                                        </div>
                                    </ShadowBox>
                                    <ShadowBox >
                                        <div className="w-full">
                                            <ShareButtons project={project} />
                                        </div>
                                    </ShadowBox>
                                </div>
                                <ShadowBox width={'lg:w-2/3 w-full'}>
                                    <div className="flex flex-col ">
                                        <p className="font-bold text-lg text-gray-900">Descripción del proyecto:</p>
                                        <p className="text-gray-700 text-lg text-sm">{project.descripcion}</p>
                                    </div>
                                </ShadowBox>
                                {project.servicio_a_domicilio === 'Sí' ?
                                    <ShadowBox width={'lg:w-1/3 w-full'}>
                                        <div className="flex flex-col">
                                            <p className="font-bold text-gray-900 text-lg">Servicio a domiclio: {project.servicio_a_domicilio === 'Sí' ? ' ✅' : ' ⛔'}</p>
                                            <p className="font-bold text-gray-900 text-lg">Zonas de envío: <span className="text-gray-700 font-normal">{project.zonas_servicio_a_domicilio}</span></p>
                                        </div>
                                    </ShadowBox> : null}
                                {project.impacto_social ? <ShadowBox width={'w-full'}>
                                    <div className="flex flex-col ">
                                        <p className="font-bold text-lg text-gray-900">Impacto social:</p>
                                        <p className="text-gray-700 text-lg text-sm">{project.impacto_social}</p>
                                    </div>
                                </ShadowBox> : null}
                            </div>
                                :
                                <p>Cargando...</p>
                        }
                        <RandomProjects projects={projects} />
                    </div>
                </div>
                <StepsToAdd />
            </main>

            <footer>
                <Footer />
            </footer>
        </Layout >
    )
}

export default Proyecto
