import Head from 'next/head'
import Layout from '../components/Layout';
import IndexHero from '../components/IndexHero';
import RandomProjects from '../components/RandomProjects';
import StepsToAdd from '../components/StepsToAdd';
import Footer from '../components/Footer';

import DataContext from '../components/DataContext';
import { useContext } from 'react';

function Home() {
  const { data } = useContext(DataContext);
  let projects = [];
  let categories = [];

  if (data && data.proyectos) {
    projects = data.proyectos.elements;
    categories = data.categorias.elements;
  }

  return (
    <Layout>
      <Head>
        <title>MEX VS COVID-19 - Apoya a empresas o proyectos mexicanos afectados por el COVID-19</title>
        <meta
          key="description"
          name="description"
          content="MEX vs COVID-19 es una plataforma para apoyar a diferentes negocios mexicanos que han sido afectados por la pandemia del COVID-19."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <IndexHero categories={categories} />
        <RandomProjects projects={projects} />
        <StepsToAdd />
      </main>
      <footer>
        <Footer />
      </footer>
    </Layout>
  )
}

export default Home
