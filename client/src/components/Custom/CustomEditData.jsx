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

function render(isEdit, id_user, id, type, value, placeholder) {
    if (!isEdit) return <Text>{value}</Text>;
    return (
        <CustomEditForm
            id_user={id_user}
            id={id}
            type={type}
            placeholder={placeholder}
        />
    );
}

function CustomEditData({ id_user, id, type, value, placeholder, logo }) {
    const [isEdit, setIsEdit] = useState(false);

    return (
        <>
            <GridItem {...logoStyle} justifySelf={"right"}>
                {logo}
            </GridItem>
            <GridItem>
                {render(isEdit, id_user, id, type, value, placeholder)}
            </GridItem>
            <GridItem justifySelf={"left"} onClick={() => setIsEdit(!isEdit)}>
                <FiEdit {...logoStyle} {...edit} />
            </GridItem>
        </>
    );
}

export default CustomEditData;
