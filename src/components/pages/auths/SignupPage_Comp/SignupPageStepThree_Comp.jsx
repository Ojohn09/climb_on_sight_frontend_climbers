import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { handleInputChange, handleUpdateSelectedProficiency, handleUpdateSkills } from "../../../../redux/features/auths/Auths_Slice";

/* ==== Import Components ==== */
import StepperComp from "../Stepper_Comp/Stepper_Comp";



const SignupPageStepThreeComp = () => {

    const { selectedProficiency, proficiencies, skill, mySkills } = useSelector((state) => state.authsState);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleContinue = (event) => {
        event.preventDefault();

        navigate("/signup_step_four");
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

                <h1 className="mt-12 text-xl lg:text-2xl">Climbing Experiences</h1>


                <div className="h-auto w-full min-w-fit max-w-[450px] mt-7 lg:mt-10 form-group">
                    <label htmlFor="proficiency" className="text-sm lg:text-base">Select your proficiency with the following activities:</label>
                    <ul className="h-auto w-full mt-2 lg:mt-3 bg-gray-50 bg-clip-padding border border-gray-200 rounded-2xl font-normal text-base pt-2">
                        { proficiencies.map((eachProficiency) => (
                            <li key={ eachProficiency.label } onClick={ () => dispatch(handleUpdateSelectedProficiency(eachProficiency)) } className="fh-auto w-full block bg-gray-50 bg-clip-padding font-normal text-base px-4 pt-1 lg:pt-2 cursor-pointer">
                                <span className="pt-1 flex items-center justify-between text-sm lg:text-base">
                                    {eachProficiency.value}
                                    { (eachProficiency === selectedProficiency) ? (
                                        <div className="h-5 w-5 bg-green-400 border-2 rounded-full" />
                                    ) : null }
                                    
                                </span>
                                <hr className="mt-2 lg:mt-3" />
                            </li>
                        )) }
                    </ul>
                </div>

                <div className="h-auto w-full min-w-fit max-w-[450px] mt-8 form-group">
                    <label htmlFor="proficiency" className="text-sm lg:text-base">Skills I Know:</label>
                    <div className="mt-3">
                        { mySkills.map((eachSkill, index) => (
                            <span key={ index } className="mr-2 px-4 py-2 border rounded-full text-sm">{ eachSkill }</span>
                        )) }
                    </div>
                </div>


                <div className="h-auto w-full mt-5 flex items-center bg-gray-50 bg-clip-padding border border-gray-200 rounded-2xl font-normal text-base pr-4">
                    <input type="text" name="skill" value={ skill }
                            onChange={ (event) => dispatch(handleInputChange({ name: event.target.name, value: event.target.value })) }
                            className="h-auto w-full mr-3 bg-gray-50 bg-clip-padding border-l border-gray-200 rounded-2xl font-normal text-base px-4 py-3 lg:py-4
                                focus:bg-white focus:border-gray-400 focus:outline-none"
                            placeholder="Enter your skill"
                    />
                    <img src="/assets/images/icons/arrow_right.png" alt="Arrow Right Icon"
                        onClick={ () => dispatch(handleUpdateSkills()) } 
                        className="px-5 py-3 rounded-full bg-slate-100" />
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

export default SignupPageStepThreeComp;
