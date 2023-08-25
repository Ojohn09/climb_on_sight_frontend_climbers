

const EventListComp = () => {

    const eventCardItems = [
        { id: "01", title: "Climb off", amount: "$243", date: "June 19", time: "02:00 PM", location: "23 victoria avenue", image: "/assets/images/climber_image.png", },
        { id: "02", title: "Climb off", amount: "$243", date: "June 19", time: "02:00 PM", location: "23 victoria avenue", image: "/assets/images/mountain_climbers.png", },
        { id: "03", title: "Climb off", amount: "$243", date: "June 19", time: "02:00 PM", location: "23 victoria avenue", image: "/assets/images/climber_image.png", },
        { id: "04", title: "Climb off", amount: "$243", date: "June 19", time: "02:00 PM", location: "23 victoria avenue", image: "/assets/images/mountain_climbers.png", },
        { id: "05", title: "Climb off", amount: "$243", date: "June 19", time: "02:00 PM", location: "23 victoria avenue", image: "/assets/images/climber_image.png", },
        { id: "06", title: "Climb off", amount: "$243", date: "June 19", time: "02:00 PM", location: "23 victoria avenue", image: "/assets/images/mountain_climbers.png", },
        { id: "07", title: "Climb off", amount: "$243", date: "June 19", time: "02:00 PM", location: "23 victoria avenue", image: "/assets/images/climber_image.png", },
        { id: "08", title: "Climb off", amount: "$243", date: "June 19", time: "02:00 PM", location: "23 victoria avenue", image: "/assets/images/mountain_climbers.png", },
        { id: "09", title: "Climb off", amount: "$243", date: "June 19", time: "02:00 PM", location: "23 victoria avenue", image: "/assets/images/climber_image.png", },
    ];

    return (
        <section className="mt-4 pb-16">

            <div className="grid grid-cols-3 gap-4">
                { eventCardItems.map((eachEventItem) => (
                    <div key={ eachEventItem.id } className="p-4 bg-white rounded-xl">
                        <div className={`h-[90px] lg:h-[120px] xl:h-[190px] w-full mt-2 relative bg-[url('${ eachEventItem.image }')] bg-no-repeat bg-center bg-cover rounded-xl`} />

                        <div className="mt-3 flex items-center justify-between font-semibold">
                            <h3>{ eachEventItem.title }</h3>
                            <h3>{ eachEventItem.amount }</h3>
                        </div>

                        <div className='mt-2 flex items-center justify-between text-xs'>
                            <div>
                                <p className='text-gray-400'>Date</p>
                                <p>{ eachEventItem.date }</p>
                            </div>
                            <div>
                                <p className='text-gray-400'>Time</p>
                                <p>{ eachEventItem.time }</p>
                            </div>
                            <div>
                                <p className='text-gray-400'>Location</p>
                                <p>{ eachEventItem.location }</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default EventListComp;