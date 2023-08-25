import { useSelector, useDispatch } from 'react-redux';

// Import Acttion Reducers
import { handleUpdateShowGuideProfileModal, handleUpdateShowMapModal } from '../../../redux/features/events/Events_Slice';


const MapModal = () => {
    const { showMapModal } = useSelector((state) => state.eventsState);
    const dispatch = useDispatch();

    return (showMapModal) ? (
        <main className="h-screen w-full flex items-center justify-center  backdrop-blur-[1px] absolute inset-0 z-[1000] transition-all ease-in-out duration-300" 
            style={{ background: "rgba(0, 0, 0, 0.6)" }}>

            <div className="h-[500px] w-full max-w-[800px] relative animate-bounceShort">
                <div className="h-[500px] w-full max-w-[800px] bg-white rounded-xl text-center relative">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25231.67583516445!2d-122.46578234869406!3d37.76754829830276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sng!4v1692960444486!5m2!1sen!2sng"
                        className="h-full w-full rounded-xl" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                    <img src="/assets/images/female_profile_picture.png" alt="Guides Picture" 
                        onClick={ () => dispatch(handleUpdateShowGuideProfileModal(true)) } 
                        className="h-8 w-8 rounded-full absolute top-[50%] right-[50%] z-[500]" />

                    <img src="/assets/images/female_profile_picture.png" alt="Guides Picture" 
                        onClick={ () => dispatch(handleUpdateShowGuideProfileModal(true)) } 
                        className="h-8 w-8 rounded-full absolute top-[41%] right-[55%] z-[500]" />
                </div>
                <button type="button" onClick={ () => dispatch(handleUpdateShowMapModal(false)) }
                    className="h-10 w-10 p-3 flex items-center justify-center absolute top-0 right-[-60px] bg-white rounded-full">
                        X
                </button>
            </div>
            
        </main>
        
    ) : null;
}

export default MapModal;