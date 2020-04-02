import Link from 'next/link';


const Footer = ({ name }) => (
    <div className="bg-green-700">
        <div className="container flex mx-auto py-10 justify-between">
            <div className="flex ">
                <p className="text-white">Sitio web creado en la <span className="font-bold">CDMX</span> para la iniciativa <a href="https://www.instagram.com/mexvscovid19/" className="underline font-bold">MX VS COVID-19</a></p>
            </div>
            <div className="flex ">
                <p className="text-white">Desarrollado por <a href="https://twitter.com/jerocosio" className="underline font-bold">@JeroCosio</a>, encuentra el código en <a href="https://github.com/cosio55/mexvscovid-web" className="underline font-bold">Github</a>.</p>
            </div>
        </div>
    </div>
);

export default Footer;