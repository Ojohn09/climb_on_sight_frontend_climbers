import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


import ClimberImage from "../../../../assets/images/profile_picture_land_scape.png";

const ReviewPageComp = () => {

    const { newSkill } = useSelector((state) => state.authsState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleContinue = (event) => {
        event.preventDefault();

        navigate("/signup_step_three");
    };

    return (
        <main className="h-screen w-full p-4 bg-[#FBF7F4] flex items-center">
            <section className="h-full w-full flex items-center gap-5 bg-white p-6 rounded-s-2xl">
                <aside className="h-full w-[50%]">
                    <h2 className="font-bold text-3xl">Review your profile</h2>
                    <div className="h-[300px] w-full bg-[url('src/assets/images/profile_picture_land_scape.png')] bg-no-repeat bg-cover bg-center rounded-2xl"
                    >

                    </div>
                </aside>

                <aside className="h-full w-[50%]">
                    
                </aside>
            </section>
        </main>
    )
}

export default ReviewPageComp