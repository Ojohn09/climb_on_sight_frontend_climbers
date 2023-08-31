import AppLayoutHOC from "../components/layouts/AppLayout_HOC/AppLayout_HOC";

// Impoert Components
import CounterComp from "../components/pages/dashboard/Counter_Comp";
import ConfirmedEventComp from "../components/pages/dashboard/ConfirmedEvent_Comp";
import NewMessagesComp from "../components/pages/dashboard/NewMessages_Comp";
import TopEventsAroundYouComp from "../components/pages/dashboard/TopEventsAroundYou_Comp";
import NewNotificationsComp from "../components/pages/dashboard/NewNotifications_Comp";
import ClimbingMerchandiseComp from "../components/pages/dashboard/ClimbingMerchandise_Comp";

const DashboardView = () => {

  return (
    <AppLayoutHOC>
      <main className="h-full w-full flex items-start gap-5">
        <aside className="h-full w-full lg:w-[70%]">
          <CounterComp />

          <div className="h-auto w-full pt-4 grid grid-cols-6 gap-5">
            <aside className="col-span-6 lg:col-span-4">
              <ConfirmedEventComp />
            </aside>
            <aside className="col-span-6 lg:col-span-2">
              <div className="mt-2 mb-5 lg:hidden">
                <TopEventsAroundYouComp />
              </div>
              <div className="hidden lg:block">
                <NewNotificationsComp />
              </div>
            </aside>
          </div>

          <div className="h-auto w-full pt-4 grid-cols-6 gap-5 hidden lg:grid">
            <aside className="col-span-4">
              <NewMessagesComp />
            </aside>
            <aside className="col-span-2">
              <ClimbingMerchandiseComp />
            </aside>
          </div>
        </aside>

        <aside className="h-full w-[30%] hidden lg:block">
          <TopEventsAroundYouComp />
        </aside>
      </main>
    </AppLayoutHOC>
  )
}

export default DashboardView;