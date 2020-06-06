import React from 'react'
import App from 'next/app'
import Router from "next/router";
import withGA from "next-ga";

import DataContext from '../components/DataContext';
import Papa from 'papaparse';

import '../css/tailwind.css'

const Tabletop = require('tabletop');

class MyApp extends App {
    state = {
        data: [],
    };
    componentDidMount = () => {
        const start = Date.now();
        var that = this;
        const spreadSheetUrl = "https://docs.google.com/spreadsheets/d/1eXwDV5PGImTNXOPcfkXKlPADJezEuSotNk8EkrkO2c4/edit#gid=1749062419";
        Tabletop.init({
            key: spreadSheetUrl,
            simpleSheet: false
        }
        ).then(function (data) {
            const end = Date.now();
            const elapsed = end - start;
            console.log(elapsed);
            that.setState({
                data
            })
        })
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


