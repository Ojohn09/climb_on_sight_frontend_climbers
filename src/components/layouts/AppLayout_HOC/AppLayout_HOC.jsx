import { useDispatch } from "react-redux";

// Import Components.
import SideNavComp from "../SideNav_Comp/SideNav_Comp";
import AppHeaderHOC from "../AppHeader_HOC/AppHeader_HOC";

const AppLayoutHOC = (props) => {
    const dispatch = useDispatch();


  return (
    <main className="h-screen w-full flex items-start gap-12 px-[20px] py-[20px]">

        {/* ==== Aside ==== */}
        <aside className="h-full hidden lg:block">
            <SideNavComp />
        </aside>


        <div className="h-full w-full">
            {/* ==== Aside ==== */}
            <header className="h-auto w-full">
                <AppHeaderHOC />
            </header>


            {/* ==== Main Body ==== */}
            <div className="h-[calc(100%-70px)] lg:h-[calc(100%-30px)] w-full pt-4 overflow-y-scroll transition-all ease-in-out duration-300
                [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-thumb]:rounded-md [&::-webkit-scrollbar-thumb]:bg-gray-500">
                { props.children }
            </div>
        </div>

    </main>
  )
}

export default AppLayoutHOC;