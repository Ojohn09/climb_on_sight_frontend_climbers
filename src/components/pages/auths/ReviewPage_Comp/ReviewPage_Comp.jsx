import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const ReviewPageComp = () => {

    const { newSkill } = useSelector((state) => state.authsState);
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        navigate("/dashboard");
    };

    return (
        <main className="h-full w-full p-4 bg-[#FBF7F4] flex items-center justify-center">
            <div className="h-full w-full lg:w-[90%] xl:w-[80%] pb-8 flex flex-col items-center bg-white">
                <section className="h-full w-full flex items-center gap-8 bg-white p-6 rounded-s-2xl">
                    <aside className="h-full w-[50%]">
                        <h2 className="font-bold text-3xl">Review your profile</h2>
                        <div className={`h-[300px] w-full mt-4 bg-[url('assets/images/profile_picture_land_scape.png')] bg-no-repeat bg-cover bg-center rounded-2xl`} />

                        <div className="mt-6 flex items-center justify-between">
                            <h3 className="font-bold text-2xl">Alexander Davies</h3>
                            <p className="px-5 py-1 bg-slate-100 text-sm rounded-full">0 Completed Events</p>
                        </div>

                        <div className="mt-6">
                            <p className="font-sm text-slate-400">Interest</p>
                            <p>Mountain Climbing</p>
                            <p className="mt-2 font-sm text-slate-400">Climber Fun Facts</p>
                            <textarea name="bioTextArea" id="bioTextArea" rows="3"
                                className="w-full lg:w-[400px] mt-2 border border-slate-200 resize-none rounded-sm"
                            />
                        </div>

                        <div className="mt-6 grid grid-cols-6 gap-4">
                            <div className="col-span-3">
                                <p className="font-sm text-slate-400">Email:</p>
                                <p>Mountain Climbing</p>

                                <p className="mt-3 font-sm text-slate-400">Phone Number:</p>
                                <p>+1(43)909 090</p>

                                <p className="mt-3 font-sm text-slate-400">New Skills:</p>
                                <p>Rope Climbing, Map Reading</p>

                                <p className="mt-3 font-sm text-slate-400">Reviews:</p>
                                <p>Review is empty</p>
                            </div>

                            <div className="col-span-2">
                                <p className="font-sm text-slate-400">Proficiency:</p>
                                <p>Multi Pitch</p>

                                <p className="mt-3 font-sm text-slate-400">Activity:</p>
                                <p>Ice Climbing (50%)</p>
                            </div>

                            <div className="col-span-1">
                                <p className="font-sm text-slate-400">Age:</p>
                                <p>34 Years</p>

                                <p className="mt-3 font-sm text-slate-400">Sex:</p>
                                <p>Male</p>
                            </div>
                        </div>
                    </aside>

                    <aside className="h-full w-[50%]">
                        <div className="mt-6 flex items-center justify-between">
                            <h5 className="px-8 py-2 bg-slate-100 font-medium text-[#B58563] rounded-full">Gallery</h5>
                            <small className="px-4 py-1 bg-black text-white rounded-full">Add image to gallery</small>
                        </div>

                        <div className="mt-8 grid grid-cols-3 grid-rows-2 gap-5">
                            <div className="h-[160px] w-full bg-slate-100 rounded-xl" />
                            <div className="h-[160px] w-full bg-slate-100 rounded-xl" />
                            <div className="h-[160px] w-full bg-slate-100 rounded-xl" />
                            <div className="h-[160px] w-full bg-slate-100 rounded-xl" />
                            <div className="h-[160px] w-full bg-slate-100 rounded-xl" />
                            <div className="h-[160px] w-full bg-slate-100 rounded-xl" />
                        </div>

                        <div className="mt-8">
                            <h2 className="font-bold text-2xl text-center">Your Review</h2>

                            <div className="mt-3 p-6 bg-slate-100 rounded-xl">
                                <div className="flex items-center gap-2">
                                    <div className="h-[50px] w-[50px] bg-[url('/assets/images/female_profile_picture.png')] bg-no-repeat bg-center bg-cover rounded-full" />
                                    <span>
                                        <p>Tricia Matei</p>
                                        <small className="font-xs text-slate-400">Climber</small>
                                    </span>
                                </div>

                                <p className="mt-2 pr-2 text-sm text-justify">
                                    Lorem ipsum dolor sit amet consectetur. '
                                    Nunc ullamcorper neque quam laoreet tellus vulputate. 
                                    Purus vulputate tristique convallis magna velit velit dui ultrices consectetur. 
                                    Sit enim etiam aenean lobortis non interdum. 
                                    Ornare dui maecenas vel vel nulla sociis est. 
                                    Sit interdum sed pellentesque sagittis faucibus posuere auctor pellentesque odio. 
                                    Sed sit ornare vulputate sit tortor.
                                </p>
                            </div>

                            <div className="mt-3 p-6 bg-slate-100 rounded-xl">
                                <div className="flex items-center gap-2">
                                    <div className="h-[50px] w-[50px] bg-[url('/assets/images/female_profile_picture.png')] bg-no-repeat bg-center bg-cover rounded-full" />
                                    <span>
                                        <p>Tricia Matei</p>
                                        <small className="font-xs text-slate-400">Climber</small>
                                    </span>
                                </div>

                                <p className="mt-2 pr-2 text-sm text-justify">
                                    Lorem ipsum dolor sit amet consectetur. '
                                    Nunc ullamcorper neque quam laoreet tellus vulputate. 
                                    Purus vulputate tristique convallis magna velit velit dui ultrices consectetur. 
                                    Sit enim etiam aenean lobortis non interdum. 
                                    Ornare dui maecenas vel vel nulla sociis est. 
                                    Sit interdum sed pellentesque sagittis faucibus posuere auctor pellentesque odio. 
                                    Sed sit ornare vulputate sit tortor.
                                </p>
                            </div>
                        </div>
                    </aside>
                </section>
                
                <button type="submit" onClick={ (event) => handleLogin(event) }
                        className="w-full min-w-fit max-w-[500px] bg-black mt-14 font-medium text-lg text-white rounded-2xl inline-block py-2 md:py-3 shadow-lg shadow-gray-300 transition duration-150 ease-in-out">
                    {
                        "Login" // (isLoading) ? ("Please wait...") : ("Continue")
                    }
                </button>
            </div>
        </main>
    )
}

export default ReviewPageComp