import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// Import Action Reducers.
import { handleUpdateShowCancelModal } from '../../../redux/features/events/Events_Slice';

const EventDetailsComp = () => {
    const dispatch = useDispatch();

    return (
        <section className="h-full w-full pl-5 py-7 rounded-xl">
            <div className="flex items-center justify-between">
                <h4 className="font-medium text-sm">Selected Event</h4>

                <button type="button" className="h-auto w-auto px-3.5 py-1.5 flex items-center justify-center bg-black text-white text-sm rounded-full">
                    See other events
                </button>
            </div>

            <hr className="my-[28px]" />

            <div className="h-auto w-full mt-6 py-5 bg-white rounded-lg">
                <h4 className="font-semibold text-center">Event Details</h4>

                <div className="p-4 bg-white rounded-xl">
                    <img src="/assets/images/profile_picture_land_scape.png" alt="Event Image" />

                    <h3 className="mt-3 font-semibold">Climb Off</h3>

                    <p className="mt-3 font-medium text-gray-400 text-sm">Event Details</p>

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
                                    <img src="/assets/images/icons/navigator.png" alt="Navigator Icon" className="h-auto w-6 p-1.5 bg-black rounded-full" />
                                </Link>
                            </div>
                        </div>
                        
                        <div className="mt-4 flex justify-center">
                            <button onClick={ () => dispatch(handleUpdateShowCancelModal(true)) } className="px-3 py-1 bg-[#FF5151] rounded-full text-sm text-white">
                                Cancel Event
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EventDetailsComp;