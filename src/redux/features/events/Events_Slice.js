import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dayOfEvent: "",
    monthOfEvent: "",
    yearOfEvent: "",
    eventLocation: "",

    showCancelModal: false,
    isEventCanceled: false,
    showMapModal: false,
    showGuideProfileModal: false,
};

export const eventsSlice = createSlice({
    name: 'eventsSlice',
    initialState,

    reducers: {
        handleInputChange: (state, action) => {
            const { name, value } = action.payload;
            state[name] = value;
        },
        handleDayOfEventChange: (state, action) => {
            state.dayOfEvent = action.payload;
        },
        handleMonthOfEventChange: (state, action) => {
            state.monthOfEvent = action.payload;
        },
        handleYearOfEventChange: (state, action) => {
            state.yearOfEvent = action.payload;
        },

        handleUpdateShowCancelModal: (state, action) => {
            state.showCancelModal = action.payload;
        },
        handleUpdateIsEventCanceled: (state, action) => {
            state.isEventCanceled = action.payload;
        },
        handleUpdateShowMapModal: (state, action) => {
            state.showMapModal = action.payload;
        },
        handleUpdateShowGuideProfileModal: (state, action) => {
            state.showGuideProfileModal = action.payload;
        },
    }
});


const { actions, reducer } = eventsSlice;
export const {
    handleInputChange,
    handleDayOfEventChange,
    handleMonthOfEventChange,
    handleYearOfEventChange,
    handleUpdateShowCancelModal,
    handleUpdateIsEventCanceled,
    handleUpdateShowMapModal,
    handleUpdateShowGuideProfileModal,
} = actions;

export default reducer;
