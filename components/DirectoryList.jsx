import Link from 'next/link';
import ListItem from '../components/ListItem'
import Filters from '../components/Filters'

const TopSort = ({ projects, categories }) => (
    <div className="container ">
        <div className="float-left  rounded-md bg-white shadow p-4 w-1/4">
            <Filters categories={categories} />
        </div>
        <div className="flex flex-1 flex-col pl-4">
            {
                projects.map(project => (
                    < ListItem project={project} key={project.id} />
                ))
            }
        </div>
    </div>
);

export default TopSort;