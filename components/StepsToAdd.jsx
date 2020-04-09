import Link from 'next/link';


const StepsToAdd = ({ projects }) => (
    <div className="bg-white">
        <div className="container py-4 mx-auto">
            <h3 className="text-2xl text-gray-800 p-3 lg:py-6 font-semibold">Argegar tu proyecto es muy fácil </h3>
            <div className="container flex justify-around flex-wrap">
                <div className="flex lg:flex-1 flex-col justify-center items-center p-3">
                    <h4 className="text-xl font-medium text-gray-800 self-start ">Paso 1</h4>
                    <div><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" className="w-16 h-16"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                    <p className="p-6 text-center text-gray-800">Junta la información básica de tu proyecto como nombre, Instagram, teléfono, descripción, logo, etc...</p>
                </div>
                <div className="flex lg:flex-1 flex-col justify-center items-center p-3">
                    <h4 className="text-xl font-medium text-gray-800 self-start ">Paso 2</h4>
                    <div><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" className="w-16 h-16"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div>
                    <p className="p-6 text-center text-gray-800">Mándanos un e-mail a <a>xxxx@xxxxxx.com</a> con toda tu información y cuéntanos el impacto que ha tenido tu proyecto a causa  del COVID-19.</p>
                </div>
                <div className="flex lg:flex-1 flex-col justify-center items-center p-3">
                    <h4 className="text-xl font-medium text-gray-800 self-start">Paso 3</h4>
                    <div><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" className="w-16 h-16"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg></div>
                    <p className="p-6 text-center text-gray-800">¡Listo! Nuestro equipo revisará tu información para subirla en todas nuestras plataformas.</p>
                </div>
            </div>
        </div>
    </div>
);

export default StepsToAdd;

