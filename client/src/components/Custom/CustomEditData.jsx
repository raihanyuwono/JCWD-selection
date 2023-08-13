import { GridItem, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import CustomEditForm from "./CustomEditForm";

const edit = {
    cursor: "pointer",
};

const logoStyle = {
    fontSize: "24px",
};

function render(isEdit, value) {
    if (!isEdit) return <Text>{value}</Text>;
    return <CustomEditForm />
}

function CustomEditData({ value, logo }) {
    const [isEdit, setIsEdit] = useState(false);

    return (
        <>
            <GridItem {...logoStyle} justifySelf={"right"}>{logo}</GridItem>
            <GridItem>{render(isEdit, value)}</GridItem>
            <GridItem justifySelf={"left"} onClick={() => setIsEdit(!isEdit)}>
                <FiEdit {...logoStyle} {...edit} />
            </GridItem>
        </>
    );
}

export default CustomEditData;
