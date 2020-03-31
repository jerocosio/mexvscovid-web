import Link from 'next/link';
import ProjectResume from "./ProjectResume"


const LatestProjects = ({ projects }) => (
    <div className="bg-gray-100">
        <div className="container py-4 mx-auto">
            <h3 className="text-2xl text-gray-800 py-6">Últimos proyectos</h3>
            <div className="container flex">
                <ProjectResume />
                <ProjectResume />
                <ProjectResume />
            </div>
        </div>
    </div>
);

export default LatestProjects;