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


const SignupPageStepOneComp = () => {

    const { dayOfBirth, monthOfBirth , yearOfBirth, selectedGender, genderOption } = useSelector((state) => state.authsState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleContinue = (event) => {
        event.preventDefault();

        navigate("/signup_step_two");
    };

    return (
        <main className="h-screen w-full p-4 bg-[#FBF7F4] flex items-center gap-4">
            <div className="h-full w-[36%] bg-[url('src/assets/images/climber_image.png')] bg-no-repeat bg-cover bg-center rounded-2xl" />

            <div className="h-full w-[64%] bg-white flex items-center justify-center rounded-2xl">
                
                {/* ==== Form ==== */}
                <form onSubmit={ (event) => handleContinue(event) } className="h-auto min-w-[400px] flex flex-col items-center justify-center">
                    <h4 className="font-medium">CLIMB ONSIGHT</h4>

                    {/* ==== Stepper ==== */}
                    <div className="mt-16 flex items-start">
                        <div>
                            <div className="h-16 w-16 grid place-content-center bg-black rounded-full">
                                <img src="src/assets/images/icons/user_white.png" alt="User Icon" />
                            </div>
                            <p className="mt-2 text-xs text-center">Personal <br /> Infomation</p>
                        </div>

                        <hr className="h-[3px] w-14 mt-8 mt-8 bg-slate-100 border-slate-100" />

                        <div>
                            <div className="h-16 w-16 grid place-content-center border border-slate-200 rounded-full">
                                <img src="src/assets/images/icons/contact.png" alt="Contact Icon" />
                            </div>
                            <p className="mt-2 text-xs text-center text-slate-300">Contact</p>
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

                    <h1 className="mt-12 text-2xl">Personal Information</h1>

                    <div className="mt-8 flex items-center justify-center">
                        <h1 className="h-28 w-28 pt-1 border font-light text-[4rem] text-center text-slate-400 rounded-full">+</h1>
                    </div>

                    <p className="mt-3 text-lg">Add Profile Image</p>


                    {/* ==== Date Of Birth ==== */}
                    <div className="h-auto w-[450px] mt-8 flex items-center justify-between">
                            <DatePicker
                                selected={ dayOfBirth }
                                dateFormat="dd"
                                placeholderText="Day ..." 
                                onChange={ (date) => dispatch(handleDayOfBirthChange(date)) }
                                className="h-auto w-[130px] border border-gray-10 rounded-lg font-normal text-base text-gray-500 text-center px-3 py-4
                                     focus:border-gray-200 focus:outline-none"
                            />

                            <DatePicker
                                selected={ monthOfBirth }
                                dateFormat="MM"
                                placeholderText="Month ..."
                                onChange={ (date) => dispatch(handleMonthOfBirthChange(date)) }
                                showMonthYearPicker
                                className="h-auto w-[130px] border border-gray-10 rounded-lg font-normal text-base text-gray-500 text-center px-3 py-4
                                     focus:border-gray-200 focus:outline-none"
                            />

                            <DatePicker
                                selected={ yearOfBirth }
                                dateFormat="yyyy"
                                placeholderText="Year ..."
                                onChange={ (date) => dispatch(handleYearOfBirthChange(date)) }
                                showYearPicker
                                className="h-auto w-[130px] border border-gray-10 rounded-lg font-normal text-base text-gray-500 text-center px-3 py-4
                                    focus:border-gray-200 focus:outline-none"
                            />
                    </div>

                    {/* ==== Gender ==== */}
                    <Select name="defendant"
                            options={ genderOption }
                            value={ selectedGender }
                            onChange={ (selected) => dispatch(handleSelectedGenderChange(selected)) }
                            className="fh-auto w-full min-w-fit max-w-[450px] mt-6 border border-gray-10 rounded-lg font-normal text-base text-gray-500 text-center px-3 py-2
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
                            className="h-auto w-full min-w-fit max-w-[450px] bg-black mt-16 font-medium text-lg text-white rounded-2xl inline-block py-2 md:py-3 shadow-lg shadow-gray-300 transition duration-150 ease-in-out">
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