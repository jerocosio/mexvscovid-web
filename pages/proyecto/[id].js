import Head from 'next/head'
import Layout from '../../components/Layout';
import TopSort from '../../components/TopSort'
import DirectoryList from '../../components/DirectoryList'
import StepsToAdd from '../../components/StepsToAdd';
import Footer from '../../components/Footer'

import { useRouter } from 'next/router'


const Tabletop = require('tabletop');

const Proyecto = props => {
    const router = useRouter()
    const { id } = router.query
    const projects = props.projects;
    const project = projects.find(project => project.id === id);
    console.log(project)
    return (
        <Layout>
            <Head>
                <title>MEX VS COVID-19 - Conoce más del proyecto</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-gray-100 mb-10">
                <div className="container mx-auto ">
                    <div>
                        <h2 className="text-4xl text-gray-900 leading-normal p-12">{project.nombre}</h2>
                    </div>

                </div>
            </main>

            <footer>
                <Footer />
            </footer>

        </Layout>
    )
}

export async function getServerSideProps() {
    const spreadSheetUrl = "https://docs.google.com/spreadsheets/d/17YlUOZWLBbPeTm4CKfTf6gpGe9-yW_RbRh5TEUlG_dM/edit#gid=0";
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
