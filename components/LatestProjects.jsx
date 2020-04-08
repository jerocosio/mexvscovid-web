import Link from 'next/link';
import ProjectItem from "./ProjectItem"


const LatestProjects = ({ projects }) => {
    let latestProjects = projects.slice(-3)
    return (
        <div className="bg-covid-100">
            <div className="container py-4 mx-auto">
                <h3 className="text-2xl text-gray-800 py-6">Proyectos al azar</h3>
                <div className="container flex">
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