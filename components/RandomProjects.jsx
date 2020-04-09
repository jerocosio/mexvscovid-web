import Link from 'next/link';
import ProjectItem from "./ProjectItem"

const LatestProjects = ({ projects }) => {
    let latestProjects = projects.sort(() => 0.5 - Math.random()).slice(-3);
    return (
        <div className="bg-covid-100">
            <div className="container py-4 mx-auto">
                <h3 className="text-2xl text-gray-800 p-6 font-semibold">Proyectos al azar</h3>
                <div className="container flex flex-row flex-wrap lg:flex-no-wrap">
                    {
                        latestProjects.map(project => (
                            <ProjectItem key={project.id} project={project} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default LatestProjects;