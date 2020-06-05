import React from 'react';
import HeroButton from "./HeroButton";

const IndexHero = ({ categories }) => {

    return (
        <div className="lg:py-8 container mx-auto flex flex-col">
            <div className="flex flex-col justify-center ">
                <div className="flex flex-col ">
                    <h2 className="text-xl text-center lg:text-4xl text-gray-900 leading-normal p-1 md:p-2 font-serif">Apoya a negocios afectados por la epidemia del COVID-19 en México.</h2>
                    <h3 className="text-sm text-center lg:text-2xl text-gray-700 leading-snug p-1 md:p-2">Busca empresas, proyectos o profesionales que de alguna u otra forma han sido afectados a causa del COVID-19.</h3>
                </div>
            </div>
            <div className="p-3 flex flex-col justify-center">
                <div className="flex flex-col">
                    <div className="flex flex-row items-stretch flex-wrap justify-end">
                        {
                            categories.map(category => (
                                <HeroButton name={category.nombre} id={category.id} icon={category.icono} number={category.numero} key={category.id} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};



export default IndexHero;