import { useState } from 'react';
import ListItem from '../components/ListItem'
import Filters from '../components/Filters'
import Pagination from '../components/Pagination'

function DirectoryList({ projects, categories, numberOfPages, pagination, setPagination, categoryFilter, setCategoryFilter, deliveryFilter, setDeliveryFilter }) {
    const [filterOpen, setFilterOpen] = useState(false);
    return (
        <div className="container flex flex-col lg:block p-3 lg:p-0">
            <div className="float-left  rounded-md bg-white shadow p-4 lg:w-1/4 mb-3">
                <Filters categories={categories} categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} setPagination={setPagination} deliveryFilter={deliveryFilter} setDeliveryFilter={setDeliveryFilter} />
            </div>
            <div className="flex flex-1 flex-col lg:pl-4">
                {
                    projects.map(project => (
                        < ListItem project={project} key={project.id} />
                    ))
                }
                <Pagination numberOfPages={numberOfPages} setPagination={setPagination} pagination={pagination} />
            </div>

        </div>
    )
};

export default DirectoryList;