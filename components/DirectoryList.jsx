import Link from 'next/link';
import ListItem from '../components/ListItem'
import Filters from '../components/Filters'
import Pagination from '../components/Pagination'

const TopSort = ({ projects, categories, numberOfPages, pagination, setPagination, categoryFilter, setCategoryFilter, deliveryFilter, setDeliveryFilter }) => {
    return (
        <div className="container ">
            <div className="float-left  rounded-md bg-white shadow p-4 w-1/4">
                <Filters categories={categories} categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} setPagination={setPagination} deliveryFilter={deliveryFilter} setDeliveryFilter={setDeliveryFilter} />
            </div>
            <div className="flex flex-1 flex-col pl-4">
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

export default TopSort;