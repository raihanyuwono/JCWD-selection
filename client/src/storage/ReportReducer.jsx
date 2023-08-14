import { createSlice } from "@reduxjs/toolkit";

function setFilterDate(year, month) {
    function setMonth() {
        return `-${month < 10 ? "0" + month : month}`;
    }
    return `${year}${month ? setMonth() : ""}`;
}

const initialState = {
    filterMode: "year",
    filterDate: setFilterDate(new Date().getFullYear()),
    filterOrder: "DESC",
};

export const ReportReducer = createSlice({
    name: "ReportReducer",
    initialState,
    reducers: {
        setFilterMode: (state, action) => {
            state.filterMode = action.payload;
            const curDate = new Date();
            if (action.payload === "month")
                state.filterDate = setFilterDate(
                    curDate.getFullYear(),
                    curDate.getMonth() + 1
                );
            else state.filterDate = setFilterDate(curDate.getFullYear());
        },
        setFilterMonth: (state, action) => {
            const date = new Date(action.payload);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            state.filterDate = setFilterDate(year, month);
        },
        setFilterYear: (state, action) => {
            const date = new Date(action.payload);
            const year = date.getFullYear();
            state.filterDate = setFilterDate(year);
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
