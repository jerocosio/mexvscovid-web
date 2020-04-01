import Link from 'next/link';


const Footer = ({ name }) => (
    <div className="bg-green-700">
        <div className="container flex mx-auto py-10 justify-between">
            <div className="flex ">
                <p className="text-white">Sitio web creado en la <span className="font-bold">CDMX</span> para la iniciativa <Link href="https://www.instagram.com/mexvscovid19/"><a className="underline font-bold">MX VS COVID-19</a></Link></p>
            </div>
            <div className="flex ">
                <p className="text-white">Desarrollado por <Link href="https://twitter.com/jerocosio"><a className="underline font-bold">@JeroCosio</a></Link>, encuentra el código en <Link href="https://github.com/cosio55/mexvscovid-web"><a className="underline font-bold">Github</a></Link>.</p>
            </div>
        </div>
    </div>
);

export default Footer;