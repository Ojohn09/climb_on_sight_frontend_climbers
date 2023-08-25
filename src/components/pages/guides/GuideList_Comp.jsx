import { Link } from "react-router-dom";

const GuideListComp = () => {

    const eventGuideItems = [
        { id: "01", guideName: "Alexander Davis", image: "/assets/images/climber_image.png", },
        { id: "02", guideName: "Alexander Davis", image: "/assets/images/mountain_climbers.png", },
        { id: "03", guideName: "Alexander Davis", image: "/assets/images/climber_image.png", },
        { id: "04", guideName: "Alexander Davis", image: "/assets/images/mountain_climbers.png", },
        { id: "05", guideName: "Alexander Davis", image: "/assets/images/mountain_climbers.png", },
        { id: "06", guideName: "Alexander Davis", image: "/assets/images/climber_image.png", },
        { id: "07", guideName: "Alexander Davis", image: "/assets/images/mountain_climbers.png", },
        { id: "08", guideName: "Alexander Davis", image: "/assets/images/climber_image.png", },
        { id: "09", guideName: "Alexander Davis", image: "/assets/images/mountain_climbers.png", },
    ];

    return (
        <section className="mt-8">

            <div className="mt-3 grid grid-cols-3 xl:grid-cols-4 gap-4">
                { eventGuideItems.map((eachGuideItem) => (
                    <div key={ eachGuideItem.id } className={`h-[190px] w-full mt-2 relative bg-[url('${ eachGuideItem.image }')] bg-no-repeat bg-center bg-cover rounded-xl`}>
                        <div className="h-auto w-full px-3 py-2 flex items-center gap-3 absolute bottom-0 backdrop-blur-[5px] bg-white/30 rounded-xl text-white">
                            <div>
                                <p className="font-medium text-[0.8rem]">{ eachGuideItem.guideName }</p>
                                <p className="text-[0.7rem]">View guide profile</p>
                            </div>

                            <Link to="/guides">
                                <img src="/assets/images/icons/navigator.png" alt="Navigator Icon" className="h-auto w-6 p-1.5 bg-black rounded-full" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default GuideListComp;