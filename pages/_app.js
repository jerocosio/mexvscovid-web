import React from 'react'
import App from 'next/app'
import withGA from "next-ga";

import '../css/tailwind.css'

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return <Component {...pageProps} />
    }
}

export default withGA("UA-163246232-1", Router)(MyApp);


