import Link from 'next/link';
import FollowUs from '../components/FollowUs';

const Footer = ({ name }) => (
    <div>
        <FollowUs />
        <div className="bg-covid-600">
            <div className="container flex mx-auto py-2 justify-between">
                <div className="flex p-2">
                    <p className="text-sm text-white">Projeto criado por <a href="https://www.instagram.com/mexvscovid19/" className="underline font-bold hover:text-covid-900">MX VS COVID-19</a>. Conheça nossa <Link href="/politica-privacidad"><a className="underline font-bold hover:text-covid-900">Política de Privacidade.</a></Link></p>

                </div>
                <div className="flex p-2">
                    <p className="text-sm text-white">Desenvolvido por <a href="https://twitter.com/jerocosio" className="underline font-bold hover:text-covid-900">@JeroCosio</a>, Código <a href="https://github.com/cosio55/mexvscovid-web" className="underline font-bold hover:text-covid-900">Github</a>.</p>
                </div>
            </div>
        </div>
    </div>
);

export default Footer;