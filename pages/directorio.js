import Head from 'next/head'
import Layout from '../components/Layout';
import TopSort from '../components/TopSort'
import DirectoryList from '../components/DirectoryList'
import StepsToAdd from '../components/StepsToAdd';
import Footer from '../components/Footer'


const Tabletop = require('tabletop');

const Directorio = props => (
    <Layout>
        <Head>
            <title>MEX VS COVID-19 - Directorio</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="bg-gray-100 mb-10">
            <div className="container mx-auto ">
                <div>
                    <h2 className="text-4xl text-gray-900 leading-normal p-12 text-center">Directorio de proyectos</h2>
                </div>
                <TopSort />
                <DirectoryList />
            </div>
        </main>

        <footer>
            <Footer />
        </footer>

    </Layout>
)

Directorio.getInitialProps = async function () {
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
        projects: ssData.proyectos.elements,
        categories: ssData.categorias.elements
    };
};

export default Directorio
