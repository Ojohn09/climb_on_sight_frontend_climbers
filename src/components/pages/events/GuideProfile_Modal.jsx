import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Import Acttion Reducers
import { handleUpdateShowGuideProfileModal, handleUpdateShowMapModal } from '../../../redux/features/events/Events_Slice';



const GuideProfileModal = () => {
    const { showGuideProfileModal } = useSelector((state) => state.eventsState);
    const dispatch = useDispatch();

    const [state, setState] = useState({
        showProfileModal: false,
    });

    const handleChangeShowProfileModal = (value) => {
        setState(prevState => ({
            ...prevState,
            showProfileModal: value,
        }));
    };

    return (showGuideProfileModal) ? (
        <main className="h-screen w-full flex items-center justify-center  backdrop-blur-[1px] absolute inset-0 z-[1000] transition-all ease-in-out duration-300" 
            style={{ background: "rgba(0, 0, 0, 0.6)" }}>

            { (!state.showProfileModal) ? (
                <div className="h-auto w-full max-w-[300px] relative">
                    <div className="px-5 py-4 bg-white rounded-xl text-center">
                        <div className={`h-[80px] lg:h-[100px] xl:h-[130px] w-full relative bg-[url("/assets/images/mountain_climbers.png")] bg-no-repeat bg-center bg-cover rounded-xl`} />
                        <div className="h-auto w-full mt-3 flex items-center justify-between">
                            <h4 className="font-medium">Alexander davies</h4>
                            <small>Guide</small>
                        </div>
                        <div className="h-auto w-full mt-3 flex items-center justify-between">
                            <small>223 completed events</small>
                            <span className="mt-0.5 flex items-center gap-1">
                                { [...Array(5)].map((_, index) => (
                                    <img src="/assets/images/icons/star.png" key={ index } alt="Star Rating" className="h-auto w-2.5" />
                                )) }
                            </span>
                        </div>

                        <button onClick={ () => {
                            dispatch(handleUpdateShowMapModal(false));
                            handleChangeShowProfileModal(true);
                        } } className="h-auto w-full mt-5 py-2.5 bg-black font-medium rounded-full text-sm text-white">
                            View Profile
                        </button>
                    </div>
                
                    <button type="button" onClick={ () => dispatch(handleUpdateShowGuideProfileModal(false)) }
                        className="h-10 w-10 p-3 flex items-center justify-center absolute top-0 right-[-60px] bg-white rounded-full">
                            X
                    </button >
                </div>
                ) : (
                    <div className="h-auto w-full max-w-[800px] relative">
                        <div className="h-auto w-full max-w-[800px] px-6 py-5 bg-white rounded-xl">
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold">Your profile</h3>
                                <button onClick={ () => null } className="h-auto w-fit px-4 py-2 bg-black rounded-full text-sm text-white">
                                    Edit Profile
                                </button>
                            </div>

                            <div className="h-auto w-full mt-6 flex items-start gap-8">
                                <aside className="h-auto w-[50%] pb-3">
                                    <div className="h-auto w-full">
                                        <img src="/assets/images/profile_picture_land_scape.png" alt="Event Image" />

                                        <div className="mt-3 flex items-center justify-between">
                                            <h3 className="font-semibold">Alexander Davies</h3>
                                            <p className='px-3 py-1 bg-slate-100 rounded-full text-[0.7rem]'>234 Completed Events</p>
                                        </div>

                                        <div className="mt-3 text-[0.7rem]">
                                            <p className="text-slate-400">Status</p>
                                            <div className="flex items-center gap-1">
                                                <p className="text-green-700">Verified</p>
                                                <img src="/assets/images/icons/check_mark.png" alt="Check Mark" className="h-auto w-3" />
                                            </div>
                                        </div>

                                        <div className="mt-2">
                                            <p className="text-xs text-slate-400">Customer Ratings</p>

                                            <span className="mt-0.5 flex items-center gap-1">
                                                { [...Array(5)].map((_, index) => (
                                                    <img src="/assets/images/icons/star.png" key={ index } alt="Star Rating" className="h-auto w-2.5" />
                                                )) }
                                            </span>
                                            {/* OR
                                            <span className="flex">
                                                { Array.from({ length: 5 }).map((eachStar) => (
                                                    <img src="/assets/images/icons/star.png" alt="Star Rating" className="h-auto w-2" />
                                                )) }
                                            </span>
                                            */}
                                        </div>

                                        <div className="mt-3">
                                            <p className="text-xs text-slate-400">Guide Bio</p>
                                            
                                            <p className="mt-0.5 text-justify text-xs text-slate-600">
                                                Lorem ipsum dolor sit amet consectetur. Molestie erat vel suscipit lacinia vulputate. 
                                                Viverra pulvinar sed nibh facilisi nisl mattis neque aliquam volutpat. 
                                                Malesuada lacinia justo nisi et laoreet ac leo eget auctor. Eget elit nunc sit nam. 
                                                In tellus laoreet nibh vestibulum.
                                            </p>
                                        </div>


                                        <div className="mt-3">
                                            <p className="text-xs text-slate-400">Experiences</p>
                                            
                                            <p className="mt-0.5 text-justify text-xs text-slate-600">6 Years experience in ice climbing</p>
                                            <p className="mt-0.5 text-justify text-xs text-slate-600">2 Years experience in mountain climbing</p>
                                        </div>
                                    </div>
                                </aside>


                                <aside className="h-auto w-[50%] ">
                                    <div className="h-auto w-full">
                                        <div className="h-[30px] w-[150px] p-0.5 flex items-center bg-slate-100 rounded-full">
                                            <p className="h-full w-[80px] flex items-center justify-center text-xs text-[#B58563]">Galery</p>
                                            <p className="h-full w-[100px] flex items-center justify-center text-xs bg-white rounded-full">Ratings</p>
                                        </div>

                                        <div className="mt-5 p-5 bg-gray-100 rounded-xl">
                                            <div className="flex items-center gap-2">
                                                <img src={"/assets/images/female_profile_picture.png"} alt="Commenter Picture" className="h-10 w-10 rounded-full" />
                                                <div className="flex flex-col">
                                                    <p className="text-xs">Tricia Matsi</p>
                                                    <small className="text-[0.6rem] text-slate-400">Tricia Matsi</small>
                                                </div>
                                            </div>

                                            <p className="mt-3 text-justify text-xs text-slate-600">
                                                Lorem ipsum dolor sit amet consectetur. Molestie erat vel suscipit lacinia vulputate. 
                                                Viverra pulvinar sed nibh facilisi nisl mattis neque aliquam volutpat. 
                                                Malesuada lacinia justo nisi et laoreet ac leo eget auctor. 
                                                Eget elit nunc sit nam. In tellus laoreet nibh vestibulum.
                                            </p>
                                            <span className="mt-2 flex items-center gap-1">
                                                { [...Array(5)].map((_, index) => (
                                                    <img src="/assets/images/icons/star.png" key={ index } alt="Star Rating" className="h-auto w-2.5" />
                                                )) }
                                            </span>

                                            <div className="mt-4 flex items-center justify-center gap-8">
                                                <p className="h-7 w-7 flex items-center justify-center bg-slate-200 rounded-full">{"<"}</p>
                                                <p className="h-7 w-7 flex items-center justify-center bg-black rounded-full text-white">{">"}</p>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-5 p-5 bg-gray-100 rounded-xl">
                                            <div className='mt-2 flex items-center justify-between text-[0.7rem]'>
                                                <div>
                                                    <p className='text-gray-400'>Email</p>
                                                    <p>Alexander Davies</p>
                                                </div>
                                                <div>
                                                    <p className='text-gray-400'>Proficiency</p>
                                                    <p>Multi pitch</p>
                                                </div>
                                                <div>
                                                    <p className='text-gray-400'>Age</p>
                                                    <p>34 Years</p>
                                                </div>
                                                <div>
                                                    <p className='text-gray-400'>Phone Number</p>
                                                    <p>+1(43)909 090</p>
                                                </div>
                                            </div>

                                            <button type="button" className="mt-5 mx-auto px-6 py-2 flex items-center gap-3 bg-black rounded-full">
                                                <small className="text-white">Book Guide</small>
                                            </button>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                
                        <button type="button" onClick={ () => dispatch(handleUpdateShowGuideProfileModal(false)) }
                            className="h-10 w-10 p-3 flex items-center justify-center absolute top-0 right-[-60px] bg-white rounded-full">
                                X
                        </button >
                    </div>
                ) }
            
        </main>
        
    ) : null;
}

export default GuideProfileModal;