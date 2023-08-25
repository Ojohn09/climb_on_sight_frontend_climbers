import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

// Import AppLayoutHOC
import AppLayoutHOC from "../components/layouts/AppLayout_HOC/AppLayout_HOC";

// Import Acttion Reducers
import { handleUpdateShowMapModal } from "../redux/features/events/Events_Slice";

// Impoert Components
import EventDetailsComp from "../components/pages/events/EventDetails_Comp";
import EventListComp from "../components/pages/events/EventList_Comp";
import EventFilterComp from "../components/pages/events/EventFilter_Comp";
import CancelEventModal from "../components/pages/events/CancelEvent_Modal";
import MapModal from "../components/pages/events/Map_Modal";
import GuideProfileModal from "../components/pages/events/GuideProfile_Modal";



const EventsView = () => {
    const dispatch = useDispatch();

    const { pathname } = useLocation();

    return (
        <AppLayoutHOC>
             <main className="h-full w-full">
                <h3 className="font-medium text-xl">Events</h3>
                { (pathname === "/events") ? (
                    <>
                        <div className="h-full w-full flex items-start gap-8">
                            <aside className="h-full w-[70%]">

                                <div className="h-[40px] w-[200px] mt-6 p-0.5 flex items-center bg-white rounded-full">
                                    <p className="h-full w-[120px] flex items-center justify-center text-sm bg-black text-white rounded-full">Registered</p>
                                    <p className="h-full w-[80px] flex items-center justify-center text-sm">Past</p>
                                </div>

                                <hr className="my-6" />

                                <EventListComp />
                            </aside>

                            <aside className="h-full w-[30%]">
                                <EventDetailsComp />
                            </aside>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="h-full w-full flex items-start gap-8 pt-4">

                            <aside className="h-full w-[70%]">
                                <div className="flex items-center gap-8">
                                    <p className="text-xl">Events based on your selection</p>
                                    <button type="button" onClick={ () => dispatch(handleUpdateShowMapModal(true)) } className="pl-4 pr-2 py-1.5 flex items-center gap-8 bg-gray-200 rounded-full">
                                        View on maps
                                        <img src="/assets/images/map.png" alt="Map Image" className="h-8 w-8" />
                                    </button>
                                </div>
                                <EventListComp />
                            </aside>

                            <aside className="h-full w-[30%]">
                                <EventFilterComp />
                            </aside>
                        </div>
                    </>
                ) }
                
            </main>

            <CancelEventModal />
            <MapModal />
            <GuideProfileModal />
        </AppLayoutHOC>
    );
}

export default EventsView;