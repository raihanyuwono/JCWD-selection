import { Select } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

const styleSelection = {
    textTransform: "capitalize",
    fontSize: "16px",
};

const styleOption = {
    style: {
        color: "#000000",
        padding: "auto",
    },
};

function ReportFilterSelection({ items = [], handleChange }) {
    const dispatch = useDispatch();

    function onHandleChange(event) {
        const { value } = event.target;
        dispatch(handleChange(value));
    }

    return (
        <Select {...styleSelection} onChange={(e) => onHandleChange(e)}>
            {items.map((item, index) => (
                <option {...styleOption} value={item} key={index}>
                    {item}
                </option>
            ))}
        </Select>
    );
}

export default ReportFilterSelection;
