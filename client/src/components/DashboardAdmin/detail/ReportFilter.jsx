import { Flex, Input } from "@chakra-ui/react";
import ReportFilterSelection from "./ReportFilterSelection";
import { setFilterMode, setFilterMonth, setFilterYear } from "../../../storage/ReportReducer";
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
    const dispatch = useDispatch();

    function handleChange(event) {
        dispatch(setFilterMonth(event.target.value));
    }

    function getFilter(mode) {
        switch (mode) {
            case "month":
                return (
                    <Input
                        type="month"
                        onChange={(event) => handleChange(event)}
                    />
                );
            case "year":
                return (
                    <ReportFilterSelection
                        items={selectionYear}
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
                handleChange={setFilterMode}
            />
            {getFilter(mode)}
            <ReportFilterOrder />
        </Flex>
    );
}

export default ReportFilter;
