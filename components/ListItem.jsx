import Link from 'next/link';


const ListItem = ({ name }) => (
    <div className="flex rounded-md bg-white shadow mb-4 pr-4 overflow-hidden hover:shadow-md">
        <div className="w-4/12">
            <img className="object-cover " src="images/dry-clean.png" />
        </div>
        <div className="p-4 ">
            <div>
                Información en general mi amigo...
            </div>
            <div>
                Botones de abajo?
            </div>
        </div>
    </div>
);

export default ListItem;