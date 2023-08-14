import { BsSortAlphaDownAlt, BsSortAlphaUp } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setFilterOrder } from "../../../storage/ReportReducer";

const options = {
    size: "48px",
    cursor: "pointer",
};

function ReportFilterOrder() {
    const order = useSelector((state) => state.report.filterOrder);
    const dispatch = useDispatch();

    function handleChange(orderChange){
        dispatch(setFilterOrder(orderChange));
    }

    if (order === "ASC") return <BsSortAlphaUp {...options} onClick={() => handleChange("DESC")} />;
    return <BsSortAlphaDownAlt {...options} onClick={() => handleChange("ASC")} />;
}

export default ReportFilterOrder;