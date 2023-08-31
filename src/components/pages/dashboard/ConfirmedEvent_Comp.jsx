import React from 'react'

const ConfirmedEventComp = () => {

    const eventCardItems = [
        { id: "01", title: "Climb off", amount: "$243", date: "June 19", time: "02:00 PM", location: "23 victoria avenue", image: "/assets/images/climber_image.png", },
        { id: "02", title: "Climb off", amount: "$243", date: "June 19", time: "02:00 PM", location: "23 victoria avenue", image: "/assets/images/mountain_climbers.png", },
        { id: "03", title: "Climb off", amount: "$243", date: "June 19", time: "02:00 PM", location: "23 victoria avenue", image: "/assets/images/climber_image.png", },
        { id: "04", title: "Climb off", amount: "$243", date: "June 19", time: "02:00 PM", location: "23 victoria avenue", image: "/assets/images/mountain_climbers.png", },
        { id: "05", title: "Climb off", amount: "$243", date: "June 19", time: "02:00 PM", location: "23 victoria avenue", image: "/assets/images/climber_image.png", },
        { id: "06", title: "Climb off", amount: "$243", date: "June 19", time: "02:00 PM", location: "23 victoria avenue", image: "/assets/images/mountain_climbers.png", },
    ];

    return (
        <section>
            <h3 className="font-medium text-lg lg:text-xl">Confirmed Events</h3>

            <div className="mt-1 grid grid-cols-2 lg:grid-cols-3 gap-4">
                { eventCardItems.map((eachEventItem) => (
                    <div key={ eachEventItem.id } className="px-4 py-3 bg-white rounded-xl">
                        <div className={`h-[80px] lg:h-[90px] xl:h-[140px] w-full relative bg-[url('${ eachEventItem.image }')] bg-no-repeat bg-center bg-cover rounded-xl`} />

                        <div className="mt-2 flex items-center justify-between font-semibold text-sm lg:text-base">
                            <h3>{ eachEventItem.title }</h3>
                            <h3>{ eachEventItem.amount }</h3>
                        </div>

                        <div className='mt-1 flex items-center justify-between text-[0.6rem] lg:text-xs'>
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

export default ConfirmedEventComp;