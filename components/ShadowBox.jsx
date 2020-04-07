

function ShadowBox({ children, width }) {
    return (
        <div className={`p-4 ${width}`}>
            <div className={`rounded-md bg-white shadow p-4 flex `}>
                {children}
            </div>
        </div>
    )
};

export default ShadowBox;



