import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shift: "",
    isClockStart: false,
};

export const ClockReducer = createSlice({
    name: "ClockReducer",
    initialState,
    reducers: {
        setIsClockStart: (state, action) => {
            state.isClockStart = action.payload.isStart;
            state.shift = action.payload.shift;
        },
    },
});

const { setIsClockStart } = ClockReducer.actions;

export { setIsClockStart };
export default ClockReducer.reducer;
