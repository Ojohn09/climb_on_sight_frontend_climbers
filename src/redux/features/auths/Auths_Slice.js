import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: "",
    password: "",
    showPassword: false,

    dayOfBirth: "",
    monthOfBirth: "",
    yearOfBirth: "",
    selectedGender: {label: "Gender...", value: ""},
    genderOption: [{ label: "Male", value: "1" }, { label: "Female", value: "Female" }],
    phoneNumber: "",
    selectedProficiency: { label: "", value: "" },
    proficiencies: [
        { label: "Bouldering", value: "Bouldering" },
        { label: "Ice Climbing", value: "Ice Climbing" },
        { label: "Rock Climbing", value: "Rock Climbing" },
        { label: "Trad", value: "Trad" },
    ],
    skill: "",
    mySkills: [],
    comment: "",
    newSkill: "",
};

export const authsSlice = createSlice({
    name: 'authsSlice',
    initialState,

    reducers: {
        handleInputChange: (state, action) => {
            const { name, value } = action.payload;
            state[name] = value;
        },
        toggleShowPassword: (state) => {
            state.showPassword = !state.showPassword;
        },
        
        handleDayOfBirthChange: (state, action) => {
            state.dayOfBirth = action.payload;
        },
        handleMonthOfBirthChange: (state, action) => {
            state.monthOfBirth = action.payload;
        },
        handleYearOfBirthChange: (state, action) => {
            state.yearOfBirth = action.payload;
        },
        handleSelectedGenderChange: (state, action) => {
            state.selectedGender = action.payload;
        },
        handleUpdateSelectedProficiency: (state, action) => {
            state.selectedProficiency = action.payload;
        },
        handleUpdateSkills: (state, action) => {
            state.mySkills.push(state.skill);
            state.skill = "";
        },
    }
});


const { actions, reducer } = authsSlice;
export const {
    handleInputChange,
    toggleShowPassword,
    handleDayOfBirthChange,
    handleMonthOfBirthChange,
    handleYearOfBirthChange,
    handleSelectedGenderChange,
    handleUpdateSelectedProficiency,
    handleUpdateSkills
} = actions;

export default reducer;
