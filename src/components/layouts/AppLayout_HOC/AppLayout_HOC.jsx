import { useDispatch } from "react-redux";

// Import Components.
import SideNavComp from "../SideNav_Comp/SideNav_Comp";
import AppHeaderHOC from "../AppHeader_HOC/AppHeader_HOC";

const AppLayoutHOC = (props) => {
    const dispatch = useDispatch();


  return (
    <main className="h-screen w-full flex items-start gap-12 px-5 py-7 bg-[#FBF7F4]">

        {/* ==== Aside ==== */}
        <aside className="h-full">
            <SideNavComp />
        </aside>


        <div className="h-full w-full">
            {/* ==== Aside ==== */}
            <header className="h-auto w-full">
                <AppHeaderHOC />
            </header>


            {/* ==== Main Body ==== */}
            <div className="h-full w-full pt-6">
                { props.children }
            </div>
        </div>

    </main>
  )
}

export default AppLayoutHOC;