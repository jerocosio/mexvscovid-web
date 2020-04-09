import { useContext } from 'react';
import Head from 'next/head'
import Layout from '../components/Layout';
import IndexHero from '../components/IndexHero';
import RandomProjects from '../components/RandomProjects';
import StepsToAdd from '../components/StepsToAdd';
import Footer from '../components/Footer'

import DataContext from '../components/DataContext';

const Tabletop = require('tabletop');

function Home(props) {
  let { projects, categories } = useContext(DataContext);
  return (
    <Layout>
      <Head>
        <title>MEX VS COVID-19 - Apoya a empresas o proyectos mexicanos afectados por el COVID-19</title>
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
