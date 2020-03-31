import React from 'react';
import HeroButton from "./HeroButton";

const IndexHero = ({ categories }) => {
    const greeting = 'Hello Function Component!';
    console.log('Esto vale shows: ', categories)
    return (
        <div className="py-16 container mx-auto flex flex-row">
            <div className="flex flex-col justify-center w-1/2">
                <div className="flex flex-col ">
                    <h2 className="text-4xl text-gray-900 leading-normal py-6">Apoya negocios afectados por la epidemia del COVID-19 en México.</h2>
                    <h3 className="text-xl text-gray-700 leading-snug py-4">Busca empresas, proyectos o profesionales que de alguna u otra forma han sido afectados a causa del COVID-19.</h3>
                </div>
                {/* <div>
                    <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="email" placeholder="jane@example.com" />
                </div> */}
            </div>
            <div className="p-3 flex w-1/2 flex-col justify-center">
                <div className="flex flex-col">
                    <div className="flex flex-row items-stretch flex-wrap">
                        {
                            categories.map(category => (
                                <HeroButton name={category.nombre} key={category.id} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};



export default IndexHero;