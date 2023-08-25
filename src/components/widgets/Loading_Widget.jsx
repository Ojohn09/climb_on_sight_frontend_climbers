
const LoadingWidget = () => {
    
    return (
        <section className="h-auto w-auto grid place-content-center">
            <div className="animate-spinSlow">
                <div className="h-[280px] w-[280px] relative border border-[#B58563] rounded-full">
                    <div className="h-6 w-6 absolute top-[20px] right-[38px] bg-[#B58563] rounded-full" />
                </div>
            </div>
        </section>
    );
}

export default LoadingWidget;