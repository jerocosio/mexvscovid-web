import Link from 'next/link';

function FollowUs() {
    return (
        <div className="flex flex-row flex-wrap">
            <a href="https://www.instagram.com/mexvscovid19/" className="flex w-full lg:flex-1 bg-purple-600 hover:bg-pink-600 p-6 justify-between transition duration-300 ease-in-out">
                <p className="text-white text-md font-semibold">Síguenos en Instagram</p>
                <svg className="fill-current inline-block w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M14.52,2.469H5.482c-1.664,0-3.013,1.349-3.013,3.013v9.038c0,1.662,1.349,3.012,3.013,3.012h9.038c1.662,0,3.012-1.35,3.012-3.012V5.482C17.531,3.818,16.182,2.469,14.52,2.469 M13.012,4.729h2.26v2.259h-2.26V4.729z M10,6.988c1.664,0,3.012,1.349,3.012,3.012c0,1.664-1.348,3.013-3.012,3.013c-1.664,0-3.012-1.349-3.012-3.013C6.988,8.336,8.336,6.988,10,6.988 M16.025,14.52c0,0.831-0.676,1.506-1.506,1.506H5.482c-0.831,0-1.507-0.675-1.507-1.506V9.247h1.583C5.516,9.494,5.482,9.743,5.482,10c0,2.497,2.023,4.52,4.518,4.52c2.494,0,4.52-2.022,4.52-4.52c0-0.257-0.035-0.506-0.076-0.753h1.582V14.52z" /></svg>
            </a>
            <a href="https://www.facebook.com/Mexvscovid19-113335503634676" className="flex w-full lg:flex-1 bg-blue-700 hover:bg-blue-900 p-6 justify-between transition duration-300 ease-in-out">
                <p className="text-white text-md font-semibold">Danos Like en Facebook</p>
                <svg className="fill-current inline-block w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z" /></svg>
            </a>
            <a href="https://twitter.com/mexvscovid19" className="flex w-full lg:flex-1 bg-blue-300 hover:bg-blue-500 p-6 justify-between transition duration-300 ease-in-out">
                <p className="text-white text-md font-semibold">Síguenos en Twitter</p>
                <svg className="fill-current inline-block w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266" /></svg>
            </a>
        </div>
    )
};

export default FollowUs;