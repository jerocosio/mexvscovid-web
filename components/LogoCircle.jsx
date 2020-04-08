import Link from 'next/link';
import { getInitialsOrOption } from '../helper-functions/strings';

function LogoCircle({ project }) {
    const projectUrl = "/proyecto/" + project.id;
    return (
        <Link href={projectUrl}>
            <a className="shadow rounded-full w-20 h-20 bg-covid-400 flex items-center justify-center">
                {project.logo ? (
                    <img src={project.logo.replace("open?", "uc?")} />
                ) : (<p className="text-covid-900 text-3xl">{getInitialsOrOption(project.nombre)}</p>)}
            </a>
        </Link>
    )
};

export default LogoCircle;