import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: true,
};

export const guidesSlice = createSlice({
    name: 'guidesSlice',
    initialState,

    reducers: {
        handleInputChange: (state, action) => {
            const { name, value } = action.payload;
            state[name] = value;
        },
        handleUpdateIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        // handleDayOfEventChange: (state, action) => {
        //     state.dayOfEvent = action.payload;
        // },
        // handleMonthOfEventChange: (state, action) => {
        //     state.monthOfEvent = action.payload;
        // },
        // handleYearOfEventChange: (state, action) => {
        //     state.yearOfEvent = action.payload;
        // },
    }
});


const { actions, reducer } = guidesSlice;
export const {
    handleInputChange,
    handleUpdateIsLoading,
    // handleDayOfEventChange,
    // handleMonthOfEventChange,
    // handleYearOfEventChange,
} = actions;

export default reducer;
