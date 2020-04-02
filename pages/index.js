import Head from 'next/head'
import Layout from '../components/Layout';
import IndexHero from '../components/IndexHero';
import LatestProjects from '../components/LatestProjects';
import StepsToAdd from '../components/StepsToAdd';
import Footer from '../components/Footer'

const Tabletop = require('tabletop');

const Home = props => (
  <Layout>
    <Head>
      <title>MEX VS COVID-19 - Apoya a empresas o proyectos mexicanos afectados por el COVID-19</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <IndexHero categories={props.categories} />
      <LatestProjects />
      <div className="bg-teal-400">
        <div className="container py-16 mx-auto">
          <h3 className="text-3xl text-white py-6 text-center ">¿Quieres colaborar?</h3>
          <p className="px-16 text-white">Puedes...</p>
          <p className="text-gray-600"></p>
        </div>
      </div>
      <StepsToAdd />

    </main>

    <footer>
      <Footer />
    </footer>

  </Layout>
)

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

export default Home
