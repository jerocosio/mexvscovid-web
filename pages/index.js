import Head from 'next/head'
import Layout from '../components/Layout';
import IndexHero from '../components/IndexHero';
import LatestProjects from '../components/LatestProjects';
import StepsToAdd from '../components/StepsToAdd';
import Footer from '../components/Footer'

const Home = () => (
  <Layout>

    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <IndexHero />
      <LatestProjects />
      <div className="bg-green-400">
        <div className="container py-16 mt-8 mx-auto">
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

export default Home
