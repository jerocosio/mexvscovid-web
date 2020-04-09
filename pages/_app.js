import { useContext } from 'react';
import React from 'react'
import App from 'next/app'
import '../css/tailwind.css'
import DataContext from '../components/DataContext';

const Tabletop = require('tabletop');

class MyApp extends App {
    static async getInitialProps() {
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
        let ssData = await getData();
        return {
            projects: ssData.proyectos.elements,
            categories: ssData.categorias.elements
        };
    }
    render() {
        const { Component, pageProps, projects, categories } = this.props
        return (<DataContext.Provider value={{ projects: projects, categories: categories }}>
            <Component {...pageProps} />
        </DataContext.Provider>)
    }
}



export default MyApp