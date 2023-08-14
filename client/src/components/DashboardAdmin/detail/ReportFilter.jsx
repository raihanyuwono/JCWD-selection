import { Flex, Input } from "@chakra-ui/react";
import ReportFilterSelection from "./ReportFilterSelection";
import {
    setFilterMode,
    setFilterMonth,
    setFilterYear,
} from "../../../storage/ReportReducer";
import { useDispatch, useSelector } from "react-redux";
import ReportFilterOrder from "./ReportFilterOrder";

const containerOptions = {
    w: "full",
    direction: "row",
    alignItems: "center",
    gap: "8px",
};

function setRange(start, end) {
    const temp = [];
    for (let i = start; i <= end; i++) {
        temp.push(i);
    }
    return temp;
}

const currentDate = new Date();
const selectionMode = ["month", "year"];
const selectionYear = setRange(2020, currentDate.getFullYear());

function ReportFilter() {
    const mode = useSelector((state) => state.report.filterMode);
    const value = useSelector((state) => state.report.filterDate);
    const dispatch = useDispatch();

    function handleChange(event) {
        dispatch(setFilterMonth(event.target.value));
    }

    function getFilter(mode, value) {
        switch (mode) {
            case "month":
                return (
                    <Input
                        type="month"
                        value={value}
                        onChange={(event) => handleChange(event)}
                    />
                );
            case "year":
                return (
                    <ReportFilterSelection
                        items={selectionYear}
                        value={value}
                        handleChange={setFilterYear}
                    />
                );
            default:
                return;
        }
    }

    return (
        <Flex {...containerOptions}>
            <ReportFilterSelection
                items={selectionMode}
                value={mode}
                handleChange={setFilterMode}
            />
            {getFilter(mode, value)}
            <ReportFilterOrder />
        </Flex>
    );
}

export default ReportFilter;
