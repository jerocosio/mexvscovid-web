import Link from 'next/link';
import ListItem from '../components/ListItem'

const TopSort = ({ name }) => (
    <div className="container flex">
        <div className="flex  rounded-md bg-white shadow p-4 w-1/4">
            Filtros...
        </div>
        <div className="flex flex-1 flex-col pl-4">
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
        </div>
    </div>
);

export default TopSort;