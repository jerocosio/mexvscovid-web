import React, { useState } from 'react';

import Head from 'next/head'
import Layout from '../components/Layout';
import TopSort from '../components/TopSort'
import DirectoryList from '../components/DirectoryList'
import StepsToAdd from '../components/StepsToAdd';
import Footer from '../components/Footer'


const Tabletop = require('tabletop');

function Directorio(props) {
    let { projects, categories } = props;
    const listingsPerPage = 12;
    const numberOfListings = projects.length;
    const [pagination, setPagination] = useState(0);
    let numberOfPages = Math.ceil(numberOfListings / listingsPerPage);

    let firstProject = ((pagination + 1) * listingsPerPage) - listingsPerPage;
    let lastProject = (pagination + 1) * listingsPerPage - 1;

    projects = projects.slice(firstProject, lastProject)

    let categoriesInitialState = []
    categories.map(cat => {
        let category = {
            selected: true,
            id: cat.id,
            name: cat.nombre
        }
        categoriesInitialState.push(category)
    })

    const [categoryFilter, setCategoryFilter] = useState(categoriesInitialState);
    console.log(categoryFilter)
    return (
        <Layout>
            <Head>
                <title>MEX VS COVID-19 - Directorio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-gray-100">
                <div className="container mx-auto ">
                    <div>
                        <h2 className="text-4xl text-gray-900 leading-normal p-12 text-center">Directorio de proyectos</h2>
                    </div>
                    <TopSort numberOfListings={numberOfListings} />
                    <DirectoryList projects={projects} categories={props.categories} pagination={pagination} setPagination={setPagination} numberOfPages={numberOfPages} categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} />
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


export default Directorio
