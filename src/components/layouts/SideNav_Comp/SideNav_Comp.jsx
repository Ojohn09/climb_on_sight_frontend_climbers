

const SideNavComp = () => {
  return (
    <section className="h-full w-[60px] flex flex-col items-center justify-between pt-10 pb-6 bg-[#F4E8DF] rounded-[30px]">
        <img src="/src/assets/images/icons/co.png" alt="Logo Icon" className="h-auto w-8" />

        <div className="flex flex-col justify-center gap-10">
            <img src="/src/assets/images/icons/home.png" alt="Home Icon" className="h-auto w-5" />
            <img src="/src/assets/images/icons/megaphone.png" alt="Megaphone Icon" className="h-auto w-5" />
            <img src="/src/assets/images/icons/calendar.png" alt="Exit Icon" className="h-auto w-5" />
            <img src="/src/assets/images/icons/users.png" alt="Exit Icon" className="h-auto w-5" />
            <img src="/src/assets/images/icons/comment.png" alt="Exit Icon" className="h-auto w-5" />
        </div>

        <div className="h-9 w-9 p-2 bg-black rounded-full">
            <img src="/src/assets/images/icons/exit.png" alt="Exit Icon" className="h-auto w-5" />
        </div>
    </section>
  )
}

export default SideNavComp;