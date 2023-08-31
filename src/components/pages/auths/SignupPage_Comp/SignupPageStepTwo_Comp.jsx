import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { handleInputChange } from "../../../../redux/features/auths/Auths_Slice";

/* ==== Import Components ==== */
import StepperComp from "../Stepper_Comp/Stepper_Comp";



const SignupPageStepTwoComp = () => {

    const { phoneNumber, email } = useSelector((state) => state.authsState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleContinue = (event) => {
        event.preventDefault();

        navigate("/signup_step_three");
    };

  return (
    <main className="h-screen w-full lg:p-4 bg-[#FBF7F4] flex items-center gap-4">
        <div className="h-full w-[36%] bg-[url('/assets/images/climber_image.png')] bg-no-repeat bg-cover bg-center rounded-2xl hidden lg:block" />

        <div className="h-full w-full lg:w-[64%] bg-white flex items-center justify-center rounded-2xl">
            
            {/* ==== Form ==== */}
            <form onSubmit={ (event) => handleContinue(event) } className="h-auto w-full lg:min-w-[500px] px-5 flex flex-col items-center justify-center">
                <h4 className="font-medium">CLIMB ONSIGHT</h4>

                {/* ==== Stepper ==== */}
                <StepperComp />

                <h1 className="mt-20 text-xl lg:text-2xl">Contact</h1>


                <div className="h-auto w-full min-w-fit max-w-[500px] mt-10 form-group">
                    <input type="text" name="phoneNumber" value={ phoneNumber }
                            onChange={ (event) => dispatch(handleInputChange({ name: event.target.name, value: event.target.value })) }
                            className="h-auto w-full block bg-gray-50 bg-clip-padding px-4 py-4 border border-gray-200 rounded-xl font-normal text-base
                                focus:bg-white focus:border-gray-400 focus:outline-none"
                            placeholder="Phone Number"
                    />
                </div>

                <div className="h-auto w-full min-w-fit max-w-[500px] mt-12 form-group">
                    <input type="text" name="email" value={ email }
                            onChange={ (event) => dispatch(handleInputChange({ name: event.target.name, value: event.target.value })) }
                            className="h-auto w-full block bg-gray-50 bg-clip-padding px-4 py-4 border border-gray-200 rounded-xl font-normal text-base
                                focus:bg-white focus:border-gray-400 focus:outline-none"
                            placeholder="Email"
                    />
                </div>


                <button type="submit" onClick={ (event) => handleContinue(event) }
                        className="h-auto w-full min-w-fit max-w-[450px] py-4 bg-black mt-7 lg:mt-16 font-medium text-lg text-white rounded-2xl inline-block shadow-lg shadow-gray-300 transition duration-150 ease-in-out">
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