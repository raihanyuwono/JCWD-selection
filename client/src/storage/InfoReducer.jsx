import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    infoTrigger: "",
};

export const InfoReducer = createSlice({
    name: "InfoReducer",
    initialState,
    reducers: {
        setInfoTrigger: (state, action) => {
            state.infoTrigger = uuidv4();
        },
    },
});

const { setInfoTrigger } = InfoReducer.actions;

export { setInfoTrigger };
export default InfoReducer.reducer;
