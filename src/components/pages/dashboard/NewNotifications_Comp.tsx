
const NewNotificationsComp = () => {
  return (
    <section className="h-auto w-full p-5 bg-white rounded-xl">
        <h3 className="font-medium text-xl">New notifications</h3>

        { [...Array(5)].map((_, index) => (
            <div className="h-auto w-full mt-5 py-1 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="h-9 w-9 p-2.5 bg-gray-100 rounded-full">
                        <img src="/assets/images/icons/notification.png" alt="Notification Icon" className="h-auto w-5" />
                    </div>
                    <small>Ivan Jhay accepted your guide request</small>
                </div>

                <small className="h-auto w-fit px-2.5 py-1.5 bg-[#C59675] rounded-full">View</small>
            </div>
        )) }
    </section>
  );
}

export default NewNotificationsComp;