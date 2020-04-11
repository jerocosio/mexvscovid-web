function SocialButtons({ project }) {
    let ig_url = null;
    if (project.ig_link) {
        ig_url = 'https://www.instagram.com/' + project.ig_link.replace("@", "")
    }
    return (
        <div className="flex">
            {project.fb_link ? (
                <a href={project.fb_link}>
                    <button aria-label="Link de Facebook" className="transition duration-300 ease-in-out  mx-1 bg-covid-500 text-white font-bold py-2 px-3 border-b-4 border-covid-600 hover:bg-blue-500 rounded hover:border-blue-700">
                        <svg className="fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z" /></svg>
                    </button> </a>) : null}

            {ig_url ? (
                <a href={ig_url}>
                    <button aria-label="Link de Instagram" className="transition duration-300 ease-in-out  mx-1 bg-covid-500  text-white font-bold py-2 px-3 border-b-4 border-covid-600 hover:bg-pink-600 rounded hover:border-pink-700">
                        <svg className="fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M14.52,2.469H5.482c-1.664,0-3.013,1.349-3.013,3.013v9.038c0,1.662,1.349,3.012,3.013,3.012h9.038c1.662,0,3.012-1.35,3.012-3.012V5.482C17.531,3.818,16.182,2.469,14.52,2.469 M13.012,4.729h2.26v2.259h-2.26V4.729z M10,6.988c1.664,0,3.012,1.349,3.012,3.012c0,1.664-1.348,3.013-3.012,3.013c-1.664,0-3.012-1.349-3.012-3.013C6.988,8.336,8.336,6.988,10,6.988 M16.025,14.52c0,0.831-0.676,1.506-1.506,1.506H5.482c-0.831,0-1.507-0.675-1.507-1.506V9.247h1.583C5.516,9.494,5.482,9.743,5.482,10c0,2.497,2.023,4.52,4.518,4.52c2.494,0,4.52-2.022,4.52-4.52c0-0.257-0.035-0.506-0.076-0.753h1.582V14.52z" /></svg>
                    </button> </a>) : null}
            {project.pagina_web ? (
                <a href={project.pagina_web} >
                    <button alt="Página web" aria-label="Página web" className="transition duration-300 ease-in-out  mx-1 bg-covid-500  text-white font-bold py-2 px-3 border-b-4 border-covid-600 hover:bg-covid-600 rounded hover:border-covid-600">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                    </button> </a>) : null}
            {project.email ? (
                <a href={`mailto:${project.email}`}>
                    <button aria-label="Enviar E-mail" className="transition duration-300 ease-in-out  mx-1 bg-covid-500  text-white font-bold py-2 px-3 border-b-4 border-covid-600 hover:bg-covid-600 rounded hover:border-covid-600">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </button> </a>) : null}
        </div>
    )
};

export default SocialButtons;
