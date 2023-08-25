import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";

// Import Actions
import { handleInputChange, handleDayOfEventChange, handleMonthOfEventChange, handleYearOfEventChange, } from "../../../redux/features/events/Events_Slice";


const EventFilterComp = () => {
    const { dayOfEvent, monthOfEvent , yearOfEvent, eventLocation } = useSelector((state) => state.eventsState);
    const dispatch = useDispatch();

    const filteredEvents = [
        { id: "01", title: "Ice Climbing", image: "/assets/images/climber_image.png" },
        { id: "02", title: "Mountain Climbing", image: "/assets/images/climber_image.png" },
        { id: "03", title: "Trad", image: "/assets/images/climber_image.png" },
        { id: "04", title: "Lead", image: "/assets/images/climber_image.png" },
        { id: "05", title: "Mountaineering", image: "/assets/images/climber_image.png" }
    ];


    return (
        <section className="h-full w-full px-5 pt-5 bg-[#F4E8DF] rounded-xl">
            <h4 className="font-semibold text-center">Filter</h4>

            <div className="h-auto w-full mt-5 px-5 pt-6 pb-16 bg-white rounded-xl">
                <h5 className="font-medium text-sm">What type of events are you interested in</h5>

                <p className="mt-2 text-[0.8rem]">Select event type</p>

                <div className="mt-6 flex items-center flex-wrap gap-4">
                    { filteredEvents.map((eachEvent) => (
                        <div key={ eachEvent.id } className="flex items-center gap-4 pl-2.5 pr-1 py-1 bg-gray-100 rounded-full">
                            <small className="text-[0.8rem]">{ eachEvent.title }</small>
                            <img src={ eachEvent.image } alt="Event Image" className="h-7 w-7 rounded-full" />
                        </div>
                    )) }
                </div>

                <button className="mt-5 px-3 py-1 bg-gray-200 rounded-full float-right text-sm underline">Filter By Skill</button>
            </div>


            <div className="h-auto w-full mt-5 px-5 py-6 bg-white rounded-xl">
                <h5 className="font-medium text-sm">What's your preferred time and location</h5>

                {/* ==== Date Of Birth ==== */}
                <div className="h-auto w-full mt-3">
                    <label htmlFor="eventLocation"className="mt-3 text-sm">Add Date</label>
                    <div className="mt-2 flex items-center gap-2">
                        <DatePicker
                            selected={ dayOfEvent }
                            dateFormat="dd"
                            placeholderText="Day ..." 
                            onChange={ (date) => dispatch(handleDayOfEventChange(date)) }
                            className="h-auto w-[80px] border border-gray-10 rounded-lg font-normal text-base text-gray-500 text-center py-2
                                    focus:border-gray-200 focus:outline-none"
                        />

                        <DatePicker
                            selected={ monthOfEvent }
                            dateFormat="MM"
                            placeholderText="Month ..."
                            onChange={ (date) => dispatch(handleMonthOfEventChange(date)) }
                            showMonthYearPicker
                            className="h-auto w-[80px] border border-gray-10 rounded-lg font-normal text-base text-gray-500 text-center py-2
                                    focus:border-gray-200 focus:outline-none"
                        />

                        <DatePicker
                            selected={ yearOfEvent }
                            dateFormat="yyyy"
                            placeholderText="Year ..."
                            onChange={ (date) => dispatch(handleYearOfEventChange(date)) }
                            showYearPicker
                            className="h-auto w-[80px] border border-gray-10 rounded-lg font-normal text-base text-gray-500 text-center py-2
                            focus:border-gray-200 focus:outline-none"
                        />
                    </div>
                            
                    <div className="h-auto w-full min-w-fit max-w-[500px] mt-5 form-group">
                        <label htmlFor="eventLocation"className="mt-2 text-sm">Add Location</label>
                        <input type="text" name="eventLocation" value={ eventLocation }
                                onChange={ (event) => dispatch(handleInputChange({ name: event.target.name, value: event.target.value })) }
                                className="h-auto w-full block mt-2 bg-gray-50 bg-clip-padding border border-gray-200 rounded-xl font-normal text-base px-3 py-2 lg:py-3
                                    focus:bg-white focus:border-gray-400 focus:outline-none"
                                placeholder="Event Location"
                        />
                    </div>
                </div>
            </div>


            <button type="submit" onClick={ (event) => handleLogin(event) }
                    className="h-auto w-full min-w-fit max-w-[500px] mt-10 bg-black font-medium text-lg text-white rounded-2xl inline-block py-2 md:py-3 shadow-lg shadow-gray-300 transition duration-150 ease-in-out">
                Apply
            </button>
        </section>
    );
}

export default EventFilterComp;