import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { handleInputChange } from "../../../../redux/features/auths/Auths_Slice";



const SignupPageStepTwoComp = () => {

    const { phoneNumber, email } = useSelector((state) => state.authsState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleContinue = (event) => {
        event.preventDefault();

        navigate("/signup_step_three");
    };

  return (
    <main className="h-screen w-full p-4 bg-[#FBF7F4] flex items-center gap-4">
        <div className="h-full w-[36%] bg-[url('src/assets/images/climber_image.png')] bg-no-repeat bg-cover bg-center rounded-2xl" />

        <div className="h-full w-[64%] bg-white flex items-center justify-center rounded-2xl">
            
            {/* ==== Form ==== */}
            <form onSubmit={ (event) => handleContinue(event) } className="h-auto min-w-[400px] flex flex-col items-center justify-center">
                <h4 className="font-medium">CLIMB ONSIGHT</h4>

                {/* ==== Stepper ==== */}
                <div className="mt-20 flex items-start">
                    <div>
                        <div className="h-16 w-16 grid place-content-center bg-black rounded-full">
                            <img src="src/assets/images/icons/user_white.png" alt="User Icon" />
                        </div>
                        <p className="mt-2 text-xs text-center">Personal <br /> Infomation</p>
                    </div>

                    <hr className="h-[3px] w-14 mt-8 bg-black border-slate-100" />

                    <div>
                        <div className="h-16 w-16 grid place-content-center bg-black rounded-full">
                            <img src="src/assets/images/icons/contact_white.png" alt="Contact Icon" />
                        </div>
                        <p className="mt-2 text-xs text-center">Contact</p>
                    </div>

                    <hr className="h-[3px] w-14 mt-8 bg-slate-100 border-slate-100" />

                    <div>
                        <div className="h-16 w-16 grid place-content-center border border-slate-200 rounded-full">
                            <img src="src/assets/images/icons/hill.png" alt="Hill Icon" />
                        </div>
                        <p className="mt-2 text-xs text-center text-slate-300">Climbing <br /> Experience</p>
                    </div>

                    <hr className="h-[3px] w-14 mt-8 bg-slate-100 border-slate-100" />

                    <div>
                        <div className="h-16 w-16 grid place-content-center border border-slate-200 rounded-full">
                            <img src="src/assets/images/icons/fun.png" alt="Fun Icon" />
                        </div>
                        <p className="mt-2 text-xs text-center text-slate-300">Fun Facts</p>
                    </div>

                    <hr className="h-[3px] w-14 mt-8 bg-slate-100 border-slate-100" />

                    <div>
                        <div className="h-16 w-16 grid place-content-center border border-slate-200 rounded-full">
                            <img src="src/assets/images/icons/skill.png" alt="Skill Icon" />
                        </div>
                        <p className="mt-2 text-xs text-center text-slate-300">Interestd <br /> New Skills</p>
                    </div>
                </div>

                <h1 className="mt-16 text-2xl">Contact</h1>


                <div className="h-auto w-full min-w-fit max-w-[500px] mt-14 form-group">
                    <input type="text" name="phoneNumber" value={ phoneNumber }
                            onChange={ (event) => dispatch(handleInputChange({ name: event.target.name, value: event.target.value })) }
                            className="h-auto w-full block bg-gray-50 bg-clip-padding border border-gray-200 rounded-2xl font-normal text-base px-4 py-3 lg:py-4
                                focus:bg-white focus:border-gray-400 focus:outline-none"
                            placeholder="Phone Number"
                    />
                </div>

                <div className="h-auto w-full min-w-fit max-w-[500px] mt-12 form-group">
                    <input type="text" name="email" value={ email }
                            onChange={ (event) => dispatch(handleInputChange({ name: event.target.name, value: event.target.value })) }
                            className="h-auto w-full block bg-gray-50 bg-clip-padding border border-gray-200 rounded-2xl font-normal text-base px-4 py-3 lg:py-4
                                focus:bg-white focus:border-gray-400 focus:outline-none"
                            placeholder="Email"
                    />
                </div>


                <button type="submit" onClick={ (event) => handleContinue(event) }
                        className="h-auto w-full min-w-fit max-w-[450px] bg-black mt-20 font-medium text-lg text-white rounded-2xl inline-block py-2 md:py-3 shadow-lg shadow-gray-300 transition duration-150 ease-in-out">
                    {
                        "Continue" // (isLoading) ? ("Please wait...") : ("Continue")
                    }
                </button>
            </form>
        </div>
    </main>
  )
}

export default SignupPageStepTwoComp;