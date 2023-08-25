import React from 'react'
import { Link } from 'react-router-dom';

const GuideDetailsComp = () => {

    return (
        <section className="h-full w-full pl-5 py-3.5 rounded-xl">
            <h4 className="font-medium text-sm">Selected Guide</h4>

            <hr className="my-[28px]" />

            <div className="h-auto w-full mt-6 py-5 bg-white rounded-lg">
                <h4 className="font-semibold text-center">Guide Details</h4>

                <div className="p-4 bg-white rounded-xl">
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

                        <div className="mt-10">
                            <div className="h-[30px] w-[150px] mt-6 mx-auto p-0.5 flex items-center bg-slate-100 rounded-full">
                                <p className="h-full w-[80px] flex items-center justify-center text-xs text-[#B58563]">Galery</p>
                                <p className="h-full w-[100px] flex items-center justify-center text-xs bg-white rounded-full">Ratings</p>
                            </div>

                            <div>
                                <div className="mt-5 flex items-center gap-2">
                                    <img src={"/assets/images/female_profile_picture.png"} alt="Commenter Picture" className="h-10 w-10 rounded-full" />
                                    <div className="flex flex-col">
                                        <p className="text-xs">Tricia Matsi</p>
                                        <small className="text-[0.6rem] text-slate-400">Tricia Matsi</small>
                                    </div>
                                </div>

                                <p className="mt-1 text-justify text-xs text-slate-600">
                                    Lorem ipsum dolor sit amet consectetur. Molestie erat vel suscipit lacinia vulputate. 
                                    Viverra pulvinar sed nibh facilisi nisl.
                                </p>
                                <span className="mt-1.5 flex items-center gap-1">
                                    { [...Array(5)].map((_, index) => (
                                        <img src="/assets/images/icons/star.png" key={ index } alt="Star Rating" className="h-auto w-2.5" />
                                    )) }
                                </span>

                                <div className="mt-8 flex items-center justify-center gap-8">
                                    <p className="h-7 w-7 flex items-center justify-center bg-slate-100 rounded-full">{"<"}</p>
                                    <p className="h-7 w-7 flex items-center justify-center bg-black rounded-full text-white">{">"}</p>
                                </div>

                                <button type="button" className="mt-6 mx-auto px-6 py-2 flex items-center gap-3 bg-black rounded-xl">
                                    <img src="/assets/images/icons/comment_white.png" alt="Message Icon" className="h-auto w-4" />
                                    <small className="text-white">Send a message</small>
                                </button>
                            </div>
                            
                        </div>
                </div>
            </div>
        </section>
    );
}

export default GuideDetailsComp;