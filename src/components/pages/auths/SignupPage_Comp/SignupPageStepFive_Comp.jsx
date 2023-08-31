import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { handleInputChange } from "../../../../redux/features/auths/Auths_Slice";

/* ==== Import Components ==== */
import StepperComp from "../Stepper_Comp/Stepper_Comp";


const SignupPageStepFiveComp = () => {

    const { newSkill } = useSelector((state) => state.authsState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleContinue = (event) => {
        event.preventDefault();

        navigate("/review");
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

                <h1 className="mt-16 text-xl lg:text-2xl">New Skills</h1>

                <div className="h-auto w-full min-w-fit max-w-[450px] mt-10 form-group">
                    <label htmlFor="newSkill" className="text-sm lg:text-base">Add new skills you would like to learn:</label>
                    <textarea name="newSkill" value={ newSkill }
                        onChange={ (event) => dispatch(handleInputChange({ name: event.target.name, value: event.target.value })) }
                        className="h-[120px] lg:h-[150px] w-full mt-3 bg-gray-50 bg-clip-padding border border-gray-200 rounded-2xl font-normal resize-none text-base px-4 py-3 lg:py-4
                            focus:bg-white focus:border-gray-400 focus:outline-none"
                        placeholder="Comment here..."
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

export default SignupPageStepFiveComp;