function FollowUs() {
    return (
        <div className="flex flex-row">
            <div className="flex flex-1 p-6">
                <p className="text-white">Síguenos en Instagram</p>
            </div>
            <div className="flex flex-1 bg-blue-700 hover:bg-blue-900 p-6 justify-between ">
                <p className="text-white">Danos Like en Facebook</p>
                <svg className="fill-current inline-block w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z" /></svg>
            </div>
            <div className="flex flex-1 bg-blue-300 hover:bg-blue-500 p-6">
                <p className="text-white ">Síguenos en Twitter</p>
            </div>
        </div>
    )
};

export default FollowUs;