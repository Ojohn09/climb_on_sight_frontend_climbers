

const AppHeaderHOC = () => {
  return (
    <section className="h-auto w-full">
        <nav className="h-auto w-full flex items-center justify-between">
            <img src="/assets/images/icons/menu_icon.png" alt="Exit Icon" className="h-auto w-5" />

            <form className="hidden lg:block">
                <div className="h-auto w-full lg:w-[350px] flex items-center gap-3 pl-3 pr-4 bg-white bg-clip-padding border border-gray-100 rounded-[20px]">
                    <img src="/assets/images/icons/search.png" alt="Exit Icon" className="h-auto w-5" />

                    <input type="text" name="searchDashboard" value={ "" } placeholder="Search Dashboard"
                        onChange={ (event) => dispatch(handleInputChange({ name: event.target.name, value: event.target.value })) }
                        className="h-auto w-full bg-whitebg-clip-padding rounded-[20px] font-normal text-sm py-2
                        focus:bg-white focus:border-none focus:outline-none" />
                </div>
            </form>

            <div className="flex items-center gap-4">
                <div className="h-9 w-9 p-2.5 bg-white rounded-full">
                    <img src="/assets/images/icons/settings.png" alt="Settings Icon" className="h-auto w-5" />
                </div>
                <div className="h-9 w-9 p-2.5 bg-white rounded-full">
                    <img src="/assets/images/icons/notification.png" alt="Notification Icon" className="h-auto w-5" />
                </div>
                <img src="/assets/images/profile_picture.png" alt="Profile Picture" className="h-8 w-8 rounded-full hidden lg:block" />
            </div>
        </nav>
    
        <form className="mt-5 lg:hidden">
            <div className="h-auto w-full lg:w-[350px] flex items-center gap-3 pl-3 pr-4 bg-white bg-clip-padding border border-gray-100 rounded-[20px]">
                <img src="/assets/images/icons/search.png" alt="Exit Icon" className="h-auto w-5" />

                <input type="text" name="searchDashboard" value={ "" } placeholder="Search Dashboard"
                    onChange={ (event) => dispatch(handleInputChange({ name: event.target.name, value: event.target.value })) }
                    className="h-auto w-full bg-whitebg-clip-padding rounded-[20px] font-normal text-sm py-2
                    focus:bg-white focus:border-none focus:outline-none" />
            </div>
        </form>
    </section>
  )
}

export default AppHeaderHOC;