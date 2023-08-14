import { createSlice } from "@reduxjs/toolkit";

const currentDate = new Date();

const initialState = {
    filterMode: "month",
    filterMonth: currentDate.getMonth() + 1,
    filterYear: currentDate.getFullYear(),
    filterOrder: "DESC",
};

export const ReportReducer = createSlice({
    name: "ReportReducer",
    initialState,
    reducers: {
        setFilterMode: (state, action) => {
            state.filterMode = action.payload;
        },
        setFilterMonth: (state, action) => {
            const date = new Date(action.payload);
            state.filterMonth = date.getMonth() + 1;
            state.filterYear = date.getFullYear();
        },
        setFilterYear: (state, action) => {
            state.filterYear = action.payload;
        },
        setFilterOrder: (state, action) => {
            state.filterOrder = action.payload;
        },
    },
});

const { setFilterMode, setFilterMonth, setFilterYear, setFilterOrder } =
    ReportReducer.actions;

export { setFilterMode, setFilterMonth, setFilterYear, setFilterOrder };
export default ReportReducer.reducer;
