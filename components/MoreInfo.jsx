import Link from 'next/link';
import SocialButtons from '../components/SocialButtons'

function MoreInfo({ project }) {
    const projectUrl = "/proyecto/" + project.id;
    let ig_url = null;
    if (project.ig_link) {
        ig_url = 'https://www.instagram.com/' + project.ig_link.replace("@", "")
    }
    return (
        <div className="flex p-4 border-t border-gray-300 flex-row justify-between ">
            <div className="flex">
                <Link href={projectUrl}>
                    <a className="transition duration-300 ease-in-out  border border-covid-500 hover:bg-covid-500 hover:text-white text-covid-500 font-bold py-2 px-4 rounded">
                        Ver Más
                            </a>
                </Link>
            </div>
            <SocialButtons project={project} />
        </div>
    )
};

export default MoreInfo;