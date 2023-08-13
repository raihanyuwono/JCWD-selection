import {
    FormControl,
    FormErrorMessage,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useFormik } from "formik";
import * as Yup from "yup";

function setSchema(id, type) {
    const schema = {};
    switch (type) {
        case "email":
            schema[id] = Yup.string()
                .email("Invalid Format")
                .required("required");
            break;
        case "tel":
            schema[id] = Yup.string()
                .matches(/^08(\d{8,11})$/, "Invalid format")
                .required("required");
            break;
        case "password":
            schema[id] = Yup.string()
                .min(8, "must be at least 8 characters")
                .matches(/[A-Z]+/, "at least 1 uppercase")
                .matches(/\d+/, "at least 1 number")
                .matches(/\W+/, "at least 1 special character")
                .required("required");
            break;
        default:
            if (id === "username")
                schema[id] = Yup.string()
                    .min(6, "must be at least 6 characters")
                    .required("required");
            else schema[id] = Yup.string().required("required");
    }
    return schema;
}

function rightElement(id, type, showPass, setShowPass) {
    if (type !== "password") return;

    const style = {
        cursor: "pointer",
    };

    function handleOnClick() {
        setShowPass(!showPass);
        if (!showPass) document.getElementById(id).type = "text";
        else document.getElementById(id).type = "password";
    }

    if (type === "password")
        return (
            <InputRightElement bgColor="secondaryLight">
                {showPass ? (
                    <FiEye {...style} onClick={handleOnClick} />
                ) : (
                    <FiEyeOff {...style} onClick={handleOnClick} />
                )}
            </InputRightElement>
        );
}

function handleOnChange(event, formik) {
    const { target } = event;
    formik.setFieldValue(target["id"], target["value"]);
}

function CustomInput({ id, type, placeholder, icon }) {
    const [showPass, setShowPass] = useState(false);

    const initialValues = {};
    initialValues[id] = "";

    const formik = useFormik({
        initialValues,
        validationSchema: Yup.object().shape(setSchema(id, type)),
    });

    const container = {
        border: "1px solid",
        borderRadius: "3rem",
        overflow: "hidden",
    };

    const input = {
        id,
        type,
        placeholder,
        border: "none",
        pl: "3rem",
    };

    if (type === "date") {
        input["type"] = "text";
        input["onFocus"] = () => (document.getElementById(id).type = "date");
        input["onBlur"] = () => (document.getElementById(id).type = "text");
    }

    return (
        <FormControl isInvalid={formik.errors[id]}>
            <VStack>
                <InputGroup
                    {...container}
                    borderColor={
                        formik.errors[id] ? "warning" : "secondaryLight"
                    }
                >
                    <InputLeftElement bgColor="secondaryLight">
                        {icon}
                    </InputLeftElement>
                    <Input
                        {...input}
                        onChange={(e) => handleOnChange(e, formik)}
                    />
                    {rightElement(id, type, showPass, setShowPass)}
                </InputGroup>
                <FormErrorMessage mt={"-4px"} color={"warning"}>
                    {formik.errors[id]}
                </FormErrorMessage>
            </VStack>
        </FormControl>
    );
}

export default CustomInput;
