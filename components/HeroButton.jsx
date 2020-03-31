import Link from 'next/link';


const HeroButton = ({ name }) => (
    <button class="flex flex-1 hover:bg-gray-200 justify-center w-auto shadow text-gray-600 font-bold py-16 px-4 rounded m-6">
        {name}
    </button>
);

export default HeroButton;