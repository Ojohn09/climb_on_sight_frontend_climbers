import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { 
    handleDayOfBirthChange,
    handleMonthOfBirthChange,
    handleSelectedGenderChange,
    handleYearOfBirthChange
 } from "../../../../redux/features/auths/Auths_Slice";

/* ==== Import Components ==== */
import StepperComp from "../Stepper_Comp/Stepper_Comp";


const SignupPageStepOneComp = () => {

    const { dayOfBirth, monthOfBirth , yearOfBirth, selectedGender, genderOption } = useSelector((state) => state.authsState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleContinue = (event) => {
        event.preventDefault();

        navigate("/signup_step_two");
    };

    return (
        <main className="h-screen w-full lg:p-4 bg-[#FBF7F4] flex items-center gap-4">
            <div className="h-full w-[36%] bg-[url('/assets/images/climber_image.png')] bg-no-repeat bg-cover bg-center rounded-2xl hidden lg:block" />

            <div className="h-full w-full lg:w-[64%] bg-white flex items-center justify-center rounded-2xl">
                
                {/* ==== Form ==== */}
                <form onSubmit={ (event) => handleContinue(event) } className="h-auto w-full lg:w-[500px] px-5 flex flex-col items-center justify-center">
                    <h4 className="font-medium">CLIMB ONSIGHT</h4>

                    {/* ==== Stepper ==== */}
                    <StepperComp />

                    <h1 className="mt-12 text-xl lg:text-2xl">Personal Information</h1>

                    <div className="mt-8 flex items-center justify-center">
                        <h1 className="h-28 w-28 pt-1 border font-light text-[4rem] text-center text-slate-400 rounded-full">+</h1>
                    </div>

                    <p className="mt-3 text-base lg:text-lg">Add Profile Image</p>


                    {/* ==== Date Of Birth ==== */}
                    <div className="h-auto w-full lg:w-[450px] mt-8 flex items-center justify-between">
                            <DatePicker
                                selected={ dayOfBirth }
                                dateFormat="dd"
                                placeholderText="Day ..." 
                                onChange={ (date) => dispatch(handleDayOfBirthChange(date)) }
                                className="h-auto w-[100px] lg:w-[130px] border border-gray-10 rounded-xl font-normal text-base text-gray-500 text-center px-3 py-4
                                     focus:border-gray-200 focus:outline-none"
                            />

                            <DatePicker
                                selected={ monthOfBirth }
                                dateFormat="MM"
                                placeholderText="Month ..."
                                onChange={ (date) => dispatch(handleMonthOfBirthChange(date)) }
                                showMonthYearPicker
                                className="h-auto w-[100px] lg:w-[130px] border border-gray-10 rounded-xl font-normal text-base text-gray-500 text-center px-3 py-4
                                     focus:border-gray-200 focus:outline-none"
                            />

                            <DatePicker
                                selected={ yearOfBirth }
                                dateFormat="yyyy"
                                placeholderText="Year ..."
                                onChange={ (date) => dispatch(handleYearOfBirthChange(date)) }
                                showYearPicker
                                className="h-auto w-[100px] lg:w-[130px] border border-gray-10 rounded-xl font-normal text-base text-gray-500 text-center px-3 py-4
                                    focus:border-gray-200 focus:outline-none"
                            />
                    </div>

                    {/* ==== Gender ==== */}
                    <Select name="defendant"
                            options={ genderOption }
                            value={ selectedGender }
                            onChange={ (selected) => dispatch(handleSelectedGenderChange(selected)) }
                            className="h-auto w-full min-w-fit max-w-[450px] mt-6 border border-gray-10 rounded-lg font-normal text-base text-gray-500 px-3 py-2
                                focus:bg-white focus:border-gray-400 focus:outline-none"
                            styles={{
                                control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    background: "transparent",
                                    border: "none",
                                    outline: "none",
                                    boxShadow: "none",
                                }),
                            }}
                    />


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

export default SignupPageStepOneComp;