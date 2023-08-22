import AppLayoutHOC from "../components/layouts/AppLayout_HOC/AppLayout_HOC";
import GuideDetailsComp from "../components/pages/guides/GuideDetails_Comp";
import GuideListComp from "../components/pages/guides/GuideList_Comp";


const GuidesView = () => {
    return (
        <AppLayoutHOC>
            <main className="h-full w-full">
                <div className="h-full w-full flex items-start gap-8">
                    <aside className="h-full w-[70%]">

                        <div className="h-auto w-full flex items-center gap-5">
                            <h4 className="font-medium">Guides based off your location</h4>

                            <form className="flex items-center gap-3">
                                <input type="text" name="searchDashboard" value={ "" } placeholder="Enter City Or Province"
                                    onChange={ (event) => dispatch(handleInputChange({ name: event.target.name, value: event.target.value })) }
                                    className="h-auto w-full bg-white rounded-[20px] font-normal text-sm px-4 py-2
                                    focus:bg-white focus:border-none focus:outline-none" />

                                <div className="h-auto w-full flex items-center gap-3 pl-3 pr-4 bg-white bg-clip-padding border border-gray-100 rounded-[20px]">
                                    <img src="/src/assets/images/icons/search.png" alt="Exit Icon" className="h-auto w-5" />

                                    <input type="text" name="searchDashboard" value={ "" } placeholder="Search By Name"
                                        onChange={ (event) => dispatch(handleInputChange({ name: event.target.name, value: event.target.value })) }
                                        className="h-auto w-full rounded-[20px] font-normal text-sm py-2
                                        focus:bg-white focus:border-none focus:outline-none" />
                                </div>
                            </form>
                        </div>

                        <hr className="my-6" />

                        <GuideListComp />
                    </aside>

                    <aside className="h-full w-[30%]">
                        <GuideDetailsComp />
                    </aside>
                </div>
            </main>
        </AppLayoutHOC>
    );
}

export default GuidesView;