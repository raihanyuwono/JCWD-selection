import { configureStore } from "@reduxjs/toolkit";
import ClockReducer from "./ClockReducer";
import ReportReducer from "./ReportReducer";
import InfoReducer from "./InfoReducer";

const Storage = configureStore({
    reducer: {
        clock: ClockReducer,
        report: ReportReducer,
        info: InfoReducer,
    },
});

export default Storage;
