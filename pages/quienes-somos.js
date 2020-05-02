import Head from 'next/head'
import Layout from '../components/Layout';
import RandomProjects from '../components/RandomProjects';
import StepsToAdd from '../components/StepsToAdd';
import Footer from '../components/Footer'

const Tabletop = require('tabletop');

function QuienesSomos(props) {
    let { projects, categories } = props;
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
                        <p className="px-8 text-md text-gray-800 text-center py-4">Butantem-19, É uma plataforma através da qual prestamos ajuda a comerciantes do Butantã, trabalhadores independentes e todo tipo de pessoas com atividades comerciais que estão sendo afetadas por COVID-19. </p>
                        <p className="px-8 text-md text-gray-800 text-center py-4">Buscamos, não apenas ajudar a promover esses negócios, mas canalizá-los com a ajuda necessária para que possam ser sustentados durante o tempo em que o distanciamento social durar, bem como no estágio de reativação de sua economia. Entendendo que existem muitos comerciantes que não podem seguir a quarentena, queremos apoiar aqueles que serão mais afetados e, assim, minimizar o contágio daqueles que não podem se dar ao luxo de ficar em casa..</p>
                        <p className="px-8 text-md text-gray-800 text-center py-4">A empatia é como um músculo que deve ser trabalhado e, com base nisso, queremos convidar os comerciantes a exercitá-la, fazendo com que seu consumo tenha impacto sobre os negócios que estão sendo afetados pela situação atual..</p>
                        <p className="px-8 text-md text-gray-800 text-center py-4">Por fim, convidamos todos os grupos e pessoas que desejam se unir e simpatizar com a nossa causa a escrever para nós e fazer parte desse movimento..</p>

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

export default QuienesSomos
