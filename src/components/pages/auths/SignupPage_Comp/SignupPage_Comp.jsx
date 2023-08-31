import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


import { handleInputChange, toggleShowPassword } from "../../../../redux/features/auths/Auths_Slice";

const SignupPageComp = () => {

    const { email, password, showPassword } = useSelector((state) => state.authsState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignUp = (event) => {
        event.preventDefault();

        navigate("/signup_step_one");
    };


    return (
        <main className="h-screen w-full lg:p-4 bg-[#FBF7F4] flex items-center gap-4">
            <div className="h-full w-[36%] bg-[url('/assets/images/climber_image.png')] bg-no-repeat bg-cover bg-center rounded-2xl hidden lg:block" />

            <div className="h-full w-full lg:w-[64%] bg-white flex items-center justify-center rounded-2xl">
                
                {/* ==== Form ==== */}
                <form onSubmit={ (event) => handleSignUp(event) } className="h-auto w-full lg:w-[450px] px-5 text-center">
                    <h4 className="font-medium">CLIMB ONSIGHT</h4>

                    <h1 className="mt-28 mb-4 font-bold text-6xl">Welcome</h1>
                    <p>Sign up to climb on sight</p>

                    <div className="h-auto w-full min-w-fit max-w-[500px] mt-12 form-group">
                        <input type="text" name="email" value={ email }
                                onChange={ (event) => dispatch(handleInputChange({ name: event.target.name, value: event.target.value })) }
                                className="h-auto w-full block bg-gray-50 bg-clip-padding px-4 py-4 border border-gray-200 rounded-xl font-normal text-base
                                    focus:bg-white focus:border-gray-400 focus:outline-none"
                                placeholder="Email"
                        />
                    </div>

                    <div className="h-auto w-full min-w-fit max-w-[500px] mt-8 form-group relative">
                        <input type={ (showPassword) ? "text" : "password" } name="password" value={ password }
                                onChange={ (event) => dispatch(handleInputChange({ name: event.target.name, value: event.target.value })) }
                                className="h-auto w-full block bg-gray-50 bg-clip-padding px-4 py-4 border border-gray-200 rounded-xl font-normal text-base
                                    focus:bg-white focus:border-gray-400 focus:outline-none"
                                placeholder="Password"
                        />
                        <span
                            onClick={ () => dispatch(toggleShowPassword()) }
                            className="absolute top-[20px] right-4 cursor-pointer"
                        >
                            { (showPassword)
                                ? <span className="mr-4">
                                    <div className="h-5 w-5 bg-[url('/assets/images/icons/eye_close.png')] bg-no-repeat bg-cover bg-center" />
                                </span>
                                : <span className="mr-4">
                                    <div className="h-5 w-5 bg-[url('/assets/images/icons/eye.png')] bg-no-repeat bg-cover bg-center" />
                                </span>
                                }
                        </span>
                    </div>

                    <button type="submit" onClick={ (event) => handleSignUp(event) }
                            className="h-auto w-full min-w-fit max-w-[450px] py-4 bg-black mt-7 lg:mt-16 font-medium text-lg text-white rounded-2xl inline-block shadow-lg shadow-gray-300 transition duration-150 ease-in-out">
                        {
                            "Continue" // (isLoading) ? ("Please wait...") : ("Continue")
                        }
                    </button>

                    <p className="mt-5 flex justify-center text-sm lg:text-base">Already Have An Account?
                        <Link to="/login" className="ml-2 text-right text-[#E27A30]">Login</Link>
                    </p>
                </form>
            </div>
        </main>
    )
}

export default SignupPageComp;