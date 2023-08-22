import AppLayoutHOC from "../components/layouts/AppLayout_HOC/AppLayout_HOC";

// Impoert Components
import EventDetailsComp from "../components/pages/events/EventDetails_Comp";
import EventListComp from "../components/pages/events/EventList_Comp";


const EventsView = () => {


    return (
        <AppLayoutHOC>
             <main className="h-full w-full">
                <h3 className="font-medium text-xl">Events</h3>
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
            </main>
        </AppLayoutHOC>
    );
}

export default EventsView;