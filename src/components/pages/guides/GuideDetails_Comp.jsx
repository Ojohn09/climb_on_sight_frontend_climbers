import React from 'react'
import { Link } from 'react-router-dom';

const GuideDetailsComp = () => {

    const eventsItems = [
        { id: "01", title: "Clim Off", subTitle: "Ice climbing", date: "June 29th", location: "23,maryland Avenue", image: "/assets/images/climber_image.png" },
        { id: "02", title: "Climb&dive", subTitle: "Mountain climbing", date: "June 29th", location: "Southpark", image: "/assets/images/climber_image.png" },
        { id: "03", title: "Extremis", subTitle: "Rock climbing", date: "June 29th", location: "Domstrip", image: "/assets/images/climber_image.png" },
        { id: "04", title: "Project climb", subTitle: "IcIce climbinge", date: "June 29th", location: "Alaska park", image: "/assets/images/climber_image.png" },
        { id: "05", title: "Infinity", subTitle: "Mountain climbing ", date: "June 29th", location: "Treasure island", image: "/assets/images/climber_image.png" }
    ];


    return (
        <section className="h-full w-full px-5 py-3.5 rounded-xl">
            <h4 className="font-medium text-sm">Selected Guide</h4>

            <hr className="my-[28px]" />

            <div className="h-auto w-full mt-6 py-5 bg-white rounded-lg">
                <h4 className="font-semibold text-center">Guide Details</h4>

                <div className="p-4 bg-white rounded-xl">
                        <img src="/assets/images/profile_picture_land_scape.png" alt="Event Image" />

                        <div className="mt-3 flex items-center justify-between">
                            <h3 className="font-semibold">Alexander Davies</h3>
                            <p className='px-3 py-1 bg-slate-100 rounded-full text-[0.7rem]'>234 Completed Events</p>
                        </div>

                        <div className="mt-3 text-[0.6rem]">
                            <p className='text-gray-400'>Status</p>
                            <p className="text-green-700">Verified</p>
                        </div>

                        <p className="mt-2 text-justify text-xs text-slate-500">
                            Lorem ipsum dolor sit amet consectetur. Molestie erat vel suscipit lacinia vulputate. 
                            Viverra pulvinar sed nibh facilisi nisl mattis neque aliquam volutpat. 
                            Malesuada lacinia justo nisi et laoreet ac leo eget auctor. Eget elit nunc sit nam. 
                            In tellus laoreet nibh vestibulum.
                        </p>

                        <div className='mt-2 flex items-center justify-between text-[0.6rem]'>
                            <div>
                                <p className='text-gray-400'>Event Pricing</p>
                                <p>$243</p>
                            </div>
                            <div>
                                <p className='text-gray-400'>Date</p>
                                <p>June 20th</p>
                            </div>
                            <div>
                                <p className='text-gray-400'>Time</p>
                                <p>02:00 PM</p>
                            </div>
                            <div>
                                <p className='text-gray-400'>Location</p>
                                <p>23 victoria avenue</p>
                            </div>
                        </div>

                        <div className="mt-5">
                            <p className="font-medium text-gray-400 text-sm">Event Guide</p>

                            <div className="h-[190px] w-full mt-2 relative bg-[url('/assets/images/mountain_climbers.png')] bg-no-repeat bg-top bg-cover rounded-lg">
                                <div className="h-auto w-full px-3 py-2 flex items-center gap-3 absolute bottom-0 backdrop-blur-[5px] bg-white/30 rounded-xl text-white">
                                    <div>
                                        <p className="text-[0.7rem]">Alexander Davis</p>
                                        <p className="text-[0.7rem]">View guide profile</p>
                                    </div>

                                    <Link to="/guides">
                                        <p className="h-6 w-6 flex items-center justify-center bg-black rounded-full">{ ">" }</p>
                                    </Link>
                                </div>
                            </div>
                            
                            <div className="mt-4 flex justify-center">
                                <button className="px-3 py-1 bg-[#FF5151] rounded-full text-sm text-white">
                                    Cancel Event
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    );
}

export default GuideDetailsComp;