import AppLayoutHOC from "../components/layouts/AppLayout_HOC/AppLayout_HOC";

// Impoert Components
import CounterComp from "../components/pages/dashboard/Counter_Comp";
import ConfirmedEvent_Comp from "../components/pages/dashboard/ConfirmedEvent_Comp";
import NewMessagesComp from "../components/pages/dashboard/NewMessages_Comp";
import TopEventsAroundYouComp from "../components/pages/dashboard/TopEventsAroundYou_Comp";

const DashboardView = () => {

  return (
    <AppLayoutHOC>
      <main className="h-full w-full flex items-start gap-6">
        <aside className="h-full w-[70%]">
          <CounterComp />

          <ConfirmedEvent_Comp />
          <NewMessagesComp />
        </aside>

        <aside className="h-full w-[30%]">
          <TopEventsAroundYouComp />
        </aside>
      </main>
    </AppLayoutHOC>
  )
}

export default DashboardView;