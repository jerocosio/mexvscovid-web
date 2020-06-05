import React, { useState } from 'react';
import { useRouter } from 'next/router'

import Head from 'next/head'
import Layout from '../components/Layout';
import TopSort from '../components/TopSort'
import DirectoryList from '../components/DirectoryList'
import Footer from '../components/Footer'

import DataContext from '../components/DataContext';
import { useContext } from 'react';

function Directorio() {
    const { data } = useContext(DataContext);
    let projects = [];
    let categories = [];

    if (data && data.proyectos) {
        projects = data.proyectos.elements;
        categories = data.categorias.elements;
    }

    const router = useRouter()
    const { cat } = router.query
    const listingsPerPage = 12;

    //Define the initial category and its states
    let categoriesInitialState = []
    categories.map(cat => {
        let category = {
            selected: true,
            id: cat.id,
            name: cat.nombre
        }
        categoriesInitialState.push(category)
    })
    //If there's a category selected, put the initial category state as only that one true and the rest false.
    if (cat) {
        categoriesInitialState = categoriesInitialState.map(initialCat => {
            if (initialCat.name !== cat) {
                return (
                    {
                        selected: !initialCat.selected,
                        id: initialCat.id,
                        name: initialCat.name
                    }
                )
            } else {
                return (
                    initialCat
                )
            }
        })
    }

    //Filter the categories to show based in the category filter.
    const [categoryFilter, setCategoryFilter] = useState(categoriesInitialState);

    let selectedCategoryNames = categoryFilter.filter(category => category.selected === true).map(category => category.name);
    projects = projects.filter(project => {
        return selectedCategoryNames.includes(project.categoria)
    })

    //Filter for the projects if they offer home delivery or not
    const [deliveryFilter, setDeliveryFilter] = useState([
        {
            selected: true,
            name: 'Sí',
            id: 0
        },
        {
            selected: true,
            name: 'No',
            id: 1
        }
    ]);

    let selectedDelivery = deliveryFilter.filter(delivery => delivery.selected === true).map(delivery => delivery.name);
    projects = projects.filter(project => {
        return selectedDelivery.includes(project.servicio_a_domicilio) || project.servicio_a_domicilio === ""
    })

    const numberOfListings = projects.length;
    const [pagination, setPagination] = useState(0);
    let numberOfPages = Math.ceil(numberOfListings / listingsPerPage);

    //Divide the projects to display based on the pagination state
    let firstProject = (((pagination + 1) * listingsPerPage) - listingsPerPage);
    let lastProject = (pagination + 1) * listingsPerPage;

    projects = projects.slice(firstProject, lastProject)

    return (
        <Layout>
            <Head>
                <title>MEX VS COVID-19 - Conoce los proyectos que fueron afectados por el COVID-19 y cómo apoyarlos</title>
                <meta
                    key="description"
                    name="description"
                    content="Tods los proyectos de la plataforma MEX vs COVID-19 que buscan apoyar a diferentes negocios mexicanos que han sido afectados por la pandemia del COVID-19."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-covid-100">
                <div className="container mx-auto ">
                    <div>
                        <h2 className="text-2xl lg:text-3xl text-gray-900 leading-normal p-2 lg:p-10 text-center font-serif">Directorio de proyectos</h2>
                    </div>
                    <TopSort numberOfListings={numberOfListings} />
                    <DirectoryList projects={projects} categories={categories} pagination={pagination} setPagination={setPagination} numberOfPages={numberOfPages} categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} deliveryFilter={deliveryFilter} setDeliveryFilter={setDeliveryFilter} />
                </div>
            </main>

            <footer>
                <Footer />
            </footer>

        </Layout>
    )
}

export default Directorio
