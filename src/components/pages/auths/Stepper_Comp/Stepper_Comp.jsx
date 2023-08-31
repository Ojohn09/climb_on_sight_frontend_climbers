import { useLocation } from 'react-router-dom';

const StepperComp = () => {
    const { pathname } = useLocation();
    console.log("LOCATION::: ", pathname);

    return (
        <section className="h-auto w-full mt-14">

            { (pathname === "/signup_step_one") ? (
                <div className="flex items-start justify-center">
                    <div>
                        <div className="h-12 lg:h-14 w-12 lg:w-14 grid place-content-center bg-black rounded-full">
                            <img src="/assets/images/icons/user_white.png" alt="User Icon" />
                        </div>
                        <p className="mt-2 text-[0.62rem] text-xs text-center">Personal <br /> Infomation</p>
                    </div>

                    <hr className="h-[3px] w-7 lg:w-14 mt-6 lg:mt-8 bg-slate-100 border-slate-100" />

                    <div>
                        <div className="h-12 lg:h-14 w-12 lg:w-14 grid place-content-center border border-slate-200 rounded-full">
                            <img src="/assets/images/icons/contact.png" alt="Contact Icon" />
                        </div>
                        <p className="mt-2 text-[0.62rem] text-xs text-center text-slate-300">Contact</p>
                    </div>

                    <hr className="h-[3px] w-7 lg:w-14 mt-6 lg:mt-8 bg-slate-100 border-slate-100" />

                    <div>
                        <div className="h-12 lg:h-14 w-12 lg:w-14 grid place-content-center border border-slate-200 rounded-full">
                            <img src="/assets/images/icons/hill.png" alt="Hill Icon" />
                        </div>
                        <p className="mt-2 text-[0.62rem] text-xs text-center text-slate-300">Climbing <br /> Experience</p>
                    </div>

                    <hr className="h-[3px] w-7 lg:w-14 mt-6 lg:mt-8 bg-slate-100 border-slate-100" />

                    <div>
                        <div className="h-12 lg:h-14 w-12 lg:w-14 grid place-content-center border border-slate-200 rounded-full">
                            <img src="/assets/images/icons/fun.png" alt="Fun Icon" />
                        </div>
                        <p className="mt-2 text-[0.62rem] text-xs text-center text-slate-300">Fun Facts</p>
                    </div>

                    <hr className="h-[3px] w-7 lg:w-14 mt-6 lg:mt-8 bg-slate-100 border-slate-100" />

                    <div>
                        <div className="h-12 lg:h-14 w-12 lg:w-14 grid place-content-center border border-slate-200 rounded-full">
                            <img src="/assets/images/icons/skill.png" alt="Skill Icon" />
                        </div>
                        <p className="mt-2 text-[0.62rem] text-xs text-center text-slate-300">Interestd <br /> New Skills</p>
                    </div>
                </div>
            ) : (pathname === "/signup_step_two") ? (
                <div className="flex items-start justify-center">
                    <div>
                        <div className="h-12 lg:h-14 w-12 lg:w-14 grid place-content-center bg-black rounded-full">
                            <img src="/assets/images/icons/user_white.png" alt="User Icon" />
                        </div>
                        <p className="mt-2 text-[0.62rem] text-xs text-center">Personal <br /> Infomation</p>
                    </div>

                    <hr className="h-[3px] w-7 lg:w-14 mt-6 lg:mt-8 bg-black border-slate-100" />

                    <div>
                        <div className="h-12 lg:h-14 w-12 lg:w-14 grid place-content-center bg-black rounded-full">
                            <img src="/assets/images/icons/contact_white.png" alt="Contact Icon" />
                        </div>
                        <p className="mt-2 text-[0.62rem] text-xs text-center">Contact</p>
                    </div>

                    <hr className="h-[3px] w-7 lg:w-14 mt-6 lg:mt-8 bg-slate-100 border-slate-100" />

                    <div>
                        <div className="h-12 lg:h-14 w-12 lg:w-14 grid place-content-center border border-slate-200 rounded-full">
                            <img src="/assets/images/icons/hill.png" alt="Hill Icon" />
                        </div>
                        <p className="mt-2 text-[0.62rem] text-xs text-center text-slate-300">Climbing <br /> Experience</p>
                    </div>

                    <hr className="h-[3px] w-7 lg:w-14 mt-6 lg:mt-8 bg-slate-100 border-slate-100" />

                    <div>
                        <div className="h-12 lg:h-14 w-12 lg:w-14 grid place-content-center border border-slate-200 rounded-full">
                            <img src="/assets/images/icons/fun.png" alt="Fun Icon" />
                        </div>
                        <p className="mt-2 text-[0.62rem] text-xs text-center text-slate-300">Fun Facts</p>
                    </div>

                    <hr className="h-[3px] w-7 lg:w-14 mt-6 lg:mt-8 bg-slate-100 border-slate-100" />

                    <div>
                        <div className="h-12 lg:h-14 w-12 lg:w-14 grid place-content-center border border-slate-200 rounded-full">
                            <img src="/assets/images/icons/skill.png" alt="Skill Icon" />
                        </div>
                        <p className="mt-2 text-[0.62rem] text-xs text-center text-slate-300">Interestd <br /> New Skills</p>
                    </div>
                </div>
            ) : (pathname === "/signup_step_three") ? (
                <div className="flex items-start justify-center">
                    <div>
                        <div className="h-12 lg:h-14 w-12 lg:w-14 grid place-content-center bg-black rounded-full">
                            <img src="/assets/images/icons/user_white.png" alt="User Icon" />
                        </div>
                        <p className="mt-2 text-[0.62rem] text-xs text-center">Personal <br /> Infomation</p>
                    </div>

                    <hr className="h-[3px] w-7 lg:w-14 mt-6 lg:mt-8 bg-black border-slate-100" />

                    <div>
                        <div className="h-12 lg:h-14 w-12 lg:w-14 grid place-content-center bg-black rounded-full">
                            <img src="/assets/images/icons/contact_white.png" alt="Contact Icon" />
                        </div>
                        <p className="mt-2 text-[0.62rem] text-xs text-center">Contact</p>
                    </div>

                    <hr className="h-[3px] w-7 lg:w-14 mt-6 lg:mt-8 bg-black border-slate-100" />

                    <div>
                        <div className="h-12 lg:h-14 w-12 lg:w-14 grid place-content-center bg-black rounded-full">
                            <img src="/assets/images/icons/hill_white.png" alt="Hill Icon" />
                        </div>
                        <p className="mt-2 text-[0.62rem] text-xs text-center">Climbing <br /> Experience</p>
                    </div>

                    <hr className="h-[3px] w-7 lg:w-14 mt-6 lg:mt-8 bg-slate-100 border-slate-100" />

                    <div>
                        <div className="h-12 lg:h-14 w-12 lg:w-14 grid place-content-center border border-slate-200 rounded-full">
                            <img src="/assets/images/icons/fun.png" alt="Fun Icon" />
                        </div>
                        <p className="mt-2 text-[0.62rem] text-xs text-center text-slate-300">Fun Facts</p>
                    </div>

                    <hr className="h-[3px] w-7 lg:w-14 mt-6 lg:mt-8 bg-slate-100 border-slate-100" />

                    <div>
                        <div className="h-12 lg:h-14 w-12 lg:w-14 grid place-content-center border border-slate-200 rounded-full">
                            <img src="/assets/images/icons/skill.png" alt="Skill Icon" />
                        </div>
                        <p className="mt-2 text-[0.62rem] text-xs text-center text-slate-300">Interested <br /> New Skills</p>
                    </div>
                </div>
            ) : (pathname === "/signup_step_four") ? (
                <div className="flex items-start justify-center">
                    <div>
                        <div className="h-12 lg:h-14 w-12 lg:w-14 grid place-content-center bg-black rounded-full">
                            <img src="/assets/images/icons/user_white.png" alt="User Icon" />
                        </div>
                        <p className="mt-2 text-[0.62rem] text-xs text-center">Personal <br /> Infomation</p>
                    </div>

                    <hr className="h-[3px] w-7 lg:w-14 mt-6 lg:mt-8 bg-black border-slate-100" />

                    <div>
                        <div className="h-12 lg:h-14 w-12 lg:w-14 grid place-content-center bg-black rounded-full">
                            <img src="/assets/images/icons/contact_white.png" alt="Contact Icon" />
                        </div>
                        <p className="mt-2 text-[0.62rem] text-xs text-center">Contact</p>
                    </div>

                    <hr className="h-[3px] w-7 lg:w-14 mt-6 lg:mt-8 bg-black border-slate-100" />

                    <div>
                        <div className="h-12 lg:h-14 w-12 lg:w-14 grid place-content-center bg-black rounded-full">
                            <img src="/assets/images/icons/hill_white.png" alt="Hill Icon" />
                        </div>
                        <p className="mt-2 text-[0.62rem] text-xs text-center">Climbing <br /> Experience</p>
                    </div>

                    <hr className="h-[3px] w-7 lg:w-14 mt-6 lg:mt-8 bg-black border-slate-100" />

                    <div>
                        <div className="h-12 lg:h-14 w-12 lg:w-14 grid place-content-center bg-black rounded-full">
                            <img src="/assets/images/icons/fun_white.png" alt="Fun Icon" />
                        </div>
                        <p className="mt-2 text-[0.62rem] text-xs text-center">Fun Facts</p>
                    </div>

                    <hr className="h-[3px] w-7 lg:w-14 mt-6 lg:mt-8 bg-slate-100 border-slate-100" />

                    <div>
                        <div className="h-12 lg:h-14 w-12 lg:w-14 grid place-content-center border border-slate-200 rounded-full">
                            <img src="/assets/images/icons/skill.png" alt="Skill Icon" />
                        </div>
                        <p className="mt-2 text-[0.62rem] text-xs text-center text-slate-300">Interestd <br /> New Skills</p>
                    </div>
                </div>
            ) : (
                <div className="flex items-start justify-center">
                    <div>
                        <div className="h-12 lg:h-14 w-12 lg:w-14 grid place-content-center bg-black rounded-full">
                            <img src="/assets/images/icons/user_white.png" alt="User Icon" />
                        </div>
                        <p className="mt-2 text-[0.62rem] text-xs text-center">Personal <br /> Infomation</p>
                    </div>

                    <hr className="h-[3px] w-7 lg:w-14 mt-6 lg:mt-8 bg-black border-slate-100" />

                    <div>
                        <div className="h-12 lg:h-14 w-12 lg:w-14 grid place-content-center bg-black rounded-full">
                            <img src="/assets/images/icons/contact_white.png" alt="Contact Icon" />
                        </div>
                        <p className="mt-2 text-[0.62rem] text-xs text-center">Contact</p>
                    </div>

                    <hr className="h-[3px] w-7 lg:w-14 mt-6 lg:mt-8 bg-black border-slate-100" />

                    <div>
                        <div className="h-12 lg:h-14 w-12 lg:w-14 grid place-content-center bg-black rounded-full">
                            <img src="/assets/images/icons/hill_white.png" alt="Hill Icon" />
                        </div>
                        <p className="mt-2 text-[0.62rem] text-xs text-center">Climbing <br /> Experience</p>
                    </div>

                    <hr className="h-[3px] w-7 lg:w-14 mt-6 lg:mt-8 bg-black border-slate-100" />

                    <div>
                        <div className="h-12 lg:h-14 w-12 lg:w-14 grid place-content-center bg-black rounded-full">
                            <img src="/assets/images/icons/fun_white.png" alt="Fun Icon" />
                        </div>
                        <p className="mt-2 text-[0.62rem] text-xs text-center">Fun Facts</p>
                    </div>

                    <hr className="h-[3px] w-7 lg:w-14 mt-6 lg:mt-8 bg-black border-slate-100" />

                    <div>
                        <div className="h-12 lg:h-14 w-12 lg:w-14 grid place-content-center bg-black rounded-full">
                            <img src="/assets/images/icons/skill_white.png" alt="Skill Icon" />
                        </div>
                        <p className="mt-2 text-[0.62rem] text-xs text-center">Interestd <br /> New Skills</p>
                    </div>
                </div>
            ) }
        </section>
    );
}

export default StepperComp;