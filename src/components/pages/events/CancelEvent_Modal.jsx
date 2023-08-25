import { useDispatch, useSelector } from 'react-redux';

// Import Action Reducers.
import { handleUpdateIsEventCanceled, handleUpdateShowCancelModal } from '../../../redux/features/events/Events_Slice';

const CancelEventModal = () => {
    const { showCancelModal, isEventCanceled } = useSelector((state) => state.eventsState);
    const dispatch = useDispatch();

    return (showCancelModal) ? (
        <main className="h-screen w-full flex items-center justify-center backdrop-blur-[1px] absolute inset-0 z-[1000] transition-all ease-in-out duration-300" 
            style={{ background: "rgba(0, 0, 0, 0.6)" }}>
            
            <div className="h-auto w-full max-w-[500px] p-8 bg-white rounded-xl text-center animate-bounceShort">

                { (!isEventCanceled) ? (
                    <div>
                        <h4 className="font-semibold text-lg">Cancel Event Booking</h4>

                        <p className="my-2">Are you sure you want to cancel?</p>

                        <p className="w-full max-w-[400px] mx-auto">
                            Unless you agree to a refund with the guide, your cancellation I subject to
                            the cancellation policy in these<br />
                            <span className="text-[#B58563]"> terms and conditions.</span>
                        </p>

                        <button type="submit" onClick={ () => dispatch(handleUpdateIsEventCanceled(true)) }
                                className="w-full max-w-[350px] bg-[#FF5151] mt-8 font-medium text-lg text-white rounded-full inline-block py-2 md:py-3 shadow-sm shadow-[#FF5151] transition duration-150 ease-in-out">
                            Cancel Event
                        </button>
                    </div>
                ) : (
                    <div className="animate-pingShort">
                        <h4 className="font-semibold text-lg">Cancel Event Booking</h4>

                        <p className="my-2">Event has been cancelled</p>

                        <button type="submit" onClick={ () => {
                            dispatch(handleUpdateIsEventCanceled(false));
                            dispatch(handleUpdateShowCancelModal(false));
                        } }
                                className="w-full max-w-[350px] bg-black mt-8 font-medium text-lg text-white rounded-full inline-block py-2 md:py-3 shadow-sm shadow-[#FF5151] transition duration-150 ease-in-out">
                            Back
                        </button>
                    </div>
                ) }
                
            </div>
        </main>
        
    ) : null;
}

export default CancelEventModal;