import React from 'react'

const TopEventsAroundYouComp = () => {

    const eventsItems = [
        { id: "01", title: "Clim Off", subTitle: "Ice climbing", date: "June 29th", location: "23,maryland Avenue", image: "/assets/images/climber_image.png" },
        { id: "02", title: "Climb&dive", subTitle: "Mountain climbing", date: "June 29th", location: "Southpark", image: "/assets/images/climber_image.png" },
        { id: "03", title: "Extremis", subTitle: "Rock climbing", date: "June 29th", location: "Domstrip", image: "/assets/images/climber_image.png" },
        { id: "04", title: "Project climb", subTitle: "IcIce climbinge", date: "June 29th", location: "Alaska park", image: "/assets/images/climber_image.png" },
        { id: "05", title: "Infinity", subTitle: "Mountain climbing ", date: "June 29th", location: "Treasure island", image: "/assets/images/climber_image.png" }
    ];


    return (
        <section className="h-full w-full px-5 py-7 bg-white rounded-xl">
            <div className="flex items-center justify-between">
                <div>
                    <h6 className="font-medium text-xs">Today</h6>
                    <h6 className="text-slate-400 text-xs">12 August 2023</h6>
                </div>

                <p className="h-8 w-8 flex items-center justify-center bg-black text-white text-2xl rounded-full">+</p>
            </div>

            <h3 className="mt-10 font-semibold">Top Events Around You </h3>

            <div className="mt-12 flex items-center justify-between">
                <div className="flex items-center relative">
                    <img src="/assets/images/female_profile_picture.png" alt="Users Profile Images" className="h-8 w-8 border-2 border-white rounded-full" />
                    <img src="/assets/images/female_profile_picture.png" alt="Users Profile Images" className="h-8 w-8 absolute left-[25px] border-2 border-white rounded-full" />
                    <img src="/assets/images/female_profile_picture.png" alt="Users Profile Images" className="h-8 w-8 absolute left-[45px] border-2 border-white rounded-full" />
                    <img src="/assets/images/female_profile_picture.png" alt="Users Profile Images" className="h-8 w-8 absolute left-[65px] border-2 border-white rounded-full" />
                    <img src="/assets/images/female_profile_picture.png" alt="Users Profile Images" className="h-8 w-8 absolute left-[85px] border-2 border-white rounded-full" />
                </div>

                <div className="pl-3 flex items-center gap-6 border-l-2">
                    <div>
                        <h6 className="font-medium text-xs">All booked guides</h6>
                        <h6 className="text-slate-400 text-xs">42</h6>
                    </div>
                    <img src="/assets/images/icons/arrow_forward.png" alt="Arrow Forward" className="h-auto w-5" />
                </div>
            </div>


            <div className="h-auto w-full mt-8">
                { eventsItems.map((eachEventItem) => (
                    <div key={ eachEventItem.id } className="-auto w-full flex items-center justify-between">
                        <div className="flex items-center gap-2 py-2">
                            <img src={ eachEventItem.image } alt={ eachEventItem.image } className="h-10 w-10 rounded-full" />
                            <div>
                                <h6 className="font-medium text-[0.7rem]">{ eachEventItem.title }</h6>
                                <h6 className="text-slate-400 text-[0.7rem]">{ eachEventItem.subTitle }</h6>
                            </div>
                        </div>

                        <div className="text-end">
                            <h6 className="font-medium text-[0.7rem]">{ eachEventItem.date }</h6>
                            <h6 className="text-slate-400 text-[0.7rem]">{ eachEventItem.location }</h6>
                        </div>
                    </div>
                )) }
            </div>


            <button type="submit"
                    className="w-full min-w-fit max-w-[500px] mt-6 bg-black font-medium text-lg text-white rounded-2xl inline-block py-2 shadow-lg shadow-gray-300 transition duration-150 ease-in-out">
                {
                    "Show All" // (isLoading) ? ("Please wait...") : ("Continue")
                }
            </button>
        </section>
    );
}

export default TopEventsAroundYouComp;