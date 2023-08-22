import React from 'react'

const ConfirmedEventComp = () => {

    const eventCardItems = [
        { id: "01", title: "Climb off", amount: "$243", date: "June 19", time: "02:00 PM", location: "23 victoria avenue", image: "/assets/images/profile_picture_land_scape.png", },
        { id: "02", title: "Climb off", amount: "$243", date: "June 19", time: "02:00 PM", location: "23 victoria avenue", image: "/assets/images/profile_picture_land_scape.png", },
        { id: "03", title: "Climb off", amount: "$243", date: "June 19", time: "02:00 PM", location: "23 victoria avenue", image: "/assets/images/profile_picture_land_scape.png", },
        { id: "04", title: "Climb off", amount: "$243", date: "June 19", time: "02:00 PM", location: "23 victoria avenue", image: "/assets/images/profile_picture_land_scape.png", },
        { id: "05", title: "Climb off", amount: "$243", date: "June 19", time: "02:00 PM", location: "23 victoria avenue", image: "/assets/images/profile_picture_land_scape.png", },
        { id: "06", title: "Climb off", amount: "$243", date: "June 19", time: "02:00 PM", location: "23 victoria avenue", image: "/assets/images/profile_picture_land_scape.png", },
    ];

    return (
        <section className="mt-8">
            <h3 className="font-medium text-xl">Confirmed Events</h3>

            <div className="mt-3 grid grid-cols-3 gap-4">
                { eventCardItems.map((eachEventItem) => (
                    <div key={ eachEventItem.id } className="p-4 bg-white rounded-xl">
                        <img src={ eachEventItem.image } alt={ eachEventItem.image } />

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

export default ConfirmedEventComp;