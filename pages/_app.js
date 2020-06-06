import React from 'react'
import App from 'next/app'
import Router from "next/router";
import withGA from "next-ga";

import DataContext from '../components/DataContext';
import Papa from 'papaparse';

import '../css/tailwind.css'

class MyApp extends App {
    state = {
        data: {},
    };
    componentDidMount = () => {
        const sheetsUrls = [
            'https://docs.google.com/spreadsheets/d/1eXwDV5PGImTNXOPcfkXKlPADJezEuSotNk8EkrkO2c4/pub?output=csv', //Proyectos
            'https://docs.google.com/spreadsheets/d/1eXwDV5PGImTNXOPcfkXKlPADJezEuSotNk8EkrkO2c4/pub?output=csv&gid=1075638913', //Categorías
            'https://docs.google.com/spreadsheets/d/1eXwDV5PGImTNXOPcfkXKlPADJezEuSotNk8EkrkO2c4/pub?output=csv&gid=1040079816', //Eventos
            'https://docs.google.com/spreadsheets/d/1eXwDV5PGImTNXOPcfkXKlPADJezEuSotNk8EkrkO2c4/pub?output=csv&gid=1701026177', //Asesorías
        ]
        var that = this;
        Promise.all(
            sheetsUrls
                .map(
                    url =>
                        new Promise(
                            (resolve, reject) =>
                                Papa.parse(
                                    url,
                                    {
                                        download: true,
                                        header: true,
                                        complete: resolve,//resolve the promise when complete
                                        error: reject//reject the promise if there is an error
                                    }
                                )
                        )
                )
        )
            .then(
                function (results) {
                    let sortedProjects = [...results[0].data.sort((a, b) => a.id - b.id)]
                    that.setState({
                        data: {
                            projects: sortedProjects,
                            categories: results[1].data,
                            events: results[2].data,
                            assistance: results[3].data,
                        }
                    })
                }
            )
            .catch(//log the error
                err => console.warn("Something went wrong:", err)
            )
    };
    render() {
        const { Component, pageProps } = this.props
        return (
            <>
                <DataContext.Provider value={{ data: this.state.data }}>
                    <Component {...pageProps} />
                </DataContext.Provider>

            </>
        )
    }
}

export default withGA("UA-163246232-1", Router)(MyApp);


