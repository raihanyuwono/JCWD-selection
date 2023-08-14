import { configureStore } from "@reduxjs/toolkit";
import ClockReducer from "./ClockReducer";
import ReportReducer from "./ReportReducer";

const Storage = configureStore({
    reducer: {
        clock: ClockReducer,
        report: ReportReducer,
    },
});

export default Storage;
