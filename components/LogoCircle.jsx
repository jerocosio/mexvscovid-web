import Link from 'next/link';
import { getInitialsOrOption } from '../helper-functions/strings';

function LogoCircle({ project }) {
    const projectUrl = "/proyecto/" + project.id;
    if (project.logo.includes('file')) {
        const id = project.logo.split("/")[5]
        const newUrl = `https://drive.google.com/uc?id=${id}`
        project.logo = newUrl
    }
    return (
        <Link href={projectUrl}>
            <a className="shadow rounded-full w-20 h-20 bg-covid-400 flex items-center justify-center">
                {project.logo ? (
                    <img className="rounded-full" src={project.logo.replace("open?", "uc?")} alt={"Logo de " + project.nombre} />
                ) : (<p className="text-covid-900 text-3xl font-serif">{getInitialsOrOption(project.nombre)}</p>)}
            </a>
        </Link>
    )
};

export default LogoCircle;