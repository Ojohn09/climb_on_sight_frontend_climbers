import { Link } from "react-router-dom";


const SideNavComp = () => {
  return (
    <section className="h-full w-[60px] flex flex-col items-center justify-between pt-10 pb-6 bg-[#F4E8DF] rounded-[30px]">
        
        <Link to="/dashboard">
          <img src="/assets/images/icons/co.png" alt="Logo Icon" className="h-auto w-8" />
        </Link>

        <div className="flex flex-col justify-center gap-10">
          <Link to="/dashboard">
            <img src="/assets/images/icons/home.png" alt="Home Icon" className="h-auto w-5" />
          </Link>
          <Link to="/events">
            <img src="/assets/images/icons/megaphone.png" alt="Megaphone Icon" className="h-auto w-5" />
          </Link>
          <Link to="/events_based_on_selection">
            <img src="/assets/images/icons/calendar.png" alt="Calender Icon" className="h-auto w-5" />
          </Link>
          <Link to="/guides">
            <img src="/assets/images/icons/users.png" alt="Users Icon" className="h-auto w-5" />
          </Link>
          <Link to="/messages">
            <img src="/assets/images/icons/comment.png" alt="Message Icon" className="h-auto w-5" />
          </Link>
        </div>

        <div className="h-9 w-9 p-2 bg-black rounded-full">
            <img src="/assets/images/icons/exit.png" alt="Exit Icon" className="h-auto w-5" />
        </div>
    </section>
  )
}

export default SideNavComp;