

function ShadowBox({ children, width }) {
    return (
        <div className={`py-2 px-4 lg:p-4 ${width}`}>
            <div className={`rounded-md bg-white shadow p-4 flex `}>
                {children}
            </div>
        </div>
    )
};

export default ShadowBox;



